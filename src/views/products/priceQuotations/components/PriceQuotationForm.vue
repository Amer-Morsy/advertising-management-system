<template>
  <div class="">
    <PreLoader v-if="isLoading" />

    <form autocomplete="off">
      <div class="my-card">
        <div class="row">
          <CustomInput
            :className="'col-md-12'"
            :id="`${id}-fullCode`"
            :isDisabled="isDisabled"
            :value="priceQuotation.fullCode"
            v-on:changeValue="priceQuotation.fullCode = $event"
            :title="$t('PriceQuotations.code')"
            :imgName="'code.svg'"
          />
          <CustomSelectBox
            :className="'col-md-6'"
            :id="`${id}-companyMarkToken`"
            :isDisabled="isDisabled"
            :value="priceQuotation.companyMarkToken"
            :options="companyMarkTokenOptions"
            v-on:changeValue="
              priceQuotation.companyMarkToken = $event;
              getReportTemplatesDialog();
            "
            :title="$t('ConstantsListSelect.companyMark')"
            :imgName="'advertisingCompany.svg'"
          />
          <CustomSelectBox
            :className="'col-md-6'"
            :id="`${id}-reportTemplateToken`"
            :errors="errors_reportTemplateToken"
            :isDisabled="isDisabled"
            :value="priceQuotation.reportTemplateToken"
            :options="reportTemplateTokenOptions"
            v-on:changeValue="
              priceQuotation.reportTemplateToken = $event;
              $v.priceQuotation.reportTemplateToken.$touch();
            "
            :title="$t('ConstantsListSelect.ReportTemplates')"
            :imgName="'ReportTemplates.svg'"
          />

          <CustomSelectBox
            :key="priceQuotation.placeTypeToken"
            :className="'col-md-6'"
            :id="`${id}-requestPlaceToken`"
            :errors="errors_requestPlaceToken"
            :isDisabled="isDisabled"
            :value="priceQuotation.requestPlaceToken"
            :options="placeTokensOptions"
            v-on:changeValue="
              priceQuotation.requestPlaceToken = $event;
              $v.priceQuotation.requestPlaceToken.$touch();
            "
            :title="$t('clients.select')"
            :imgName="'clients.svg'"
          />
          <CustomSelectBox
            :className="'col-md-6'"
            :id="`${id}-requestUserClientToken`"
            :isDisabled="isDisabled"
            :value="priceQuotation.requestUserClientToken"
            :options="userEmployeeTokenOptions"
            v-on:changeValue="priceQuotation.requestUserClientToken = $event"
            :title="$t('employees.select')"
            :imgName="'user.svg'"
          />

          <CustomSelectBoxMultiple
            v-if="checkPrivilege(hasPriceQuotationCanAddMoreSales())"
            :className="'col-md-12'"
            :id="`usersSalesTokenList`"
            :isDisabled="isDisabled"
            :value="priceQuotation.usersSalesTokenList"
            :options="userTokenOptions"
            v-on:changeValue="priceQuotation.usersSalesTokenList = $event"
            :title="$t('sales.select')"
            :imgName="'sales.svg'"
            :returnArrayOfObjects="false"
          />
          <DateTimePicker
            v-if="
              checkPrivilege(hasPriceQuotationChangeDateTime()) && !isDisabled
            "
            class="col-md-12"
            :id="`${id}-priceQuotationDateTime`"
            type="dateTime"
            :value="priceQuotation.priceQuotationDateTime"
            v-on:changeValue="
              priceQuotation.priceQuotationDateTime = $event.dateTime
            "
            :title="$t('actionsData.dateTime')"
            :language="language"
          />
          <DataLabelGroup
            v-if="isDisabled"
            :className="'col-md-12'"
            :value="priceQuotation.priceQuotationDateTimeCustomized"
            :title="$t('actionsData.dateTime')"
            :imgName="'dateAndTime.svg'"
          />
        </div>
      </div>

      <div class="my-card">
        <span class="my-card-title">{{
          $t("PriceQuotations.details.name")
        }}</span>
        <div class="row mb-4">
          <table class="my-table">
            <thead>
              <tr>
                <th>#</th>
                <th>{{ $t("delete") }}</th>
                <th>{{ $t("general.open") }}</th>
                <th class="cell-lg">{{ $t("StoreItems.parent") }}</th>
                <th class="cell-lg">{{ $t("StoreItems.name") }}</th>
                <th>{{ $t("StoreItems.quantity") }}</th>
                <th class="cell-lg">
                  {{ $t("PriceQuotations.details.AffiliateOperation") }}
                </th>
                <th colspan="2">{{ $t("duplicate") }}</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="priceQuotation.priceQuotationDetails.length == 0">
                <tr>
                  <th colspan="9">
                    {{ $t("PriceQuotations.details.thereAreNoSlides") }}
                  </th>
                </tr>
              </template>
              <template v-else>
                <tr
                  v-for="(item, index) in priceQuotation.priceQuotationDetails"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <td>
                    <button
                      v-if="priceQuotation.priceQuotationDetails.length > 1"
                      :title="$t('delete')"
                      @click.prevent="removeSlice(index)"
                    >
                      <img src="@/assets/images/trash.svg" />
                    </button>
                    <span v-else>-</span>
                  </td>
                  <td>
                    <button
                      :title="$t('edit')"
                      @click.prevent="
                        mainIndex = index;
                        keyRender++;
                      "
                    >
                      <img src="@/assets/images/open.svg" />
                    </button>
                  </td>

                  <td>
                    <CustomSelectBox
                      :key="keyRender"
                      :className="'col-md-12'"
                      :id="`${id}-[${index}][parentStoreItemToken]`"
                      :value="
                        priceQuotation.priceQuotationDetails[index]
                          ? priceQuotation.priceQuotationDetails[index]
                              .parentStoreItemToken
                          : ''
                      "
                      :options="storeItemTokenOptions"
                      v-on:changeValue="
                        priceQuotation.priceQuotationDetails[
                          index
                        ].parentStoreItemToken = $event.value;
                        priceQuotation.priceQuotationDetails[
                          index
                        ].storeItemToken = '';
                        storeItemTokenChanged($event.value, index, true);
                        mainIndex = index;
                        keyRender++;
                      "
                      :title="$t('StoreItems.selectParent')"
                      :imgName="'StoreItems.svg'"
                      :emitObject="true"
                      :withOutDesign="true"
                    />
                  </td>
                  <td>
                    <CustomSelectBox
                      :key="keyRender"
                      :className="'col-md-12'"
                      :id="`${id}-[${index}][storeItemToken]`"
                      :value="
                        priceQuotation.priceQuotationDetails[index]
                          .storeItemToken
                      "
                      :options="
                        priceQuotation.priceQuotationDetails[index]
                          .storeItemTokenOptions
                      "
                      v-on:changeValue="
                        priceQuotation.priceQuotationDetails[
                          index
                        ].storeItemToken = $event.value || '';
                        priceQuotation.priceQuotationDetails[
                          index
                        ].storeItemName = $event.text || '';
                        storeItemTokenChanged($event.value, index, false);
                        mainIndex = index;
                        keyRender++;
                      "
                      :title="$t('StoreItems.select')"
                      :imgName="'StoreItems.svg'"
                      :emitObject="true"
                      :withOutDesign="true"
                    />
                  </td>
                  <td>
                    <CustomInputInt
                      :id="`${id}-table-[${index}][storeItemQuantity]`"
                      :value="item.storeItemQuantity"
                      v-on:changeValue="item.storeItemQuantity = $event"
                      :withOutDesign="true"
                    />
                  </td>

                  <td>
                    <CustomSelectBox
                      :isDisabled="
                        item.priceQuotationDetailsToken ? true : false
                      "
                      :id="`${id}-table-[${index}][affiliateOperationTypeToken]`"
                      :value="item.affiliateOperationTypeToken"
                      :options="affiliateOperationTypeTokenOptions"
                      v-on:changeValue="
                        item.affiliateOperationTypeToken = $event
                      "
                      :title="
                        $t('PriceQuotations.details.AffiliateOperationSelect')
                      "
                      :imgName="'AffiliateOperationTypes.svg'"
                      :openDown="true"
                    />
                  </td>
                  <td>
                    <button
                      :title="$t('duplicate')"
                      @click.prevent="duplicatedItem(item)"
                    >
                      <img src="@/assets/images/duplicate.svg" />
                    </button>
                  </td>
                  <td>
                    <CustomCheckbox
                      :value="item.propertyCopy"
                      v-on:changeValue="item.propertyCopy = $event"
                      :centerStatus="true"
                      :title="$t('propertyCopy')"
                    />
                  </td>
                  <!-- <td>
                    <TextArea
                      :id="`${id}-table-[${index}][priceQuotationDetalisNotes]`"
                      :value="item.priceQuotationDetalisNotes"
                      v-on:changeValue="
                        item.priceQuotationDetalisNotes = $event
                      "
                      :withOutDesign="true"
                    />
                  </td> -->
                </tr>
              </template>
              <tr>
                <th colspan="9">
                  <button
                    class="btn btn-primary btn-block"
                    @click.prevent="addSlice()"
                  >
                    {{ $t("StoreItems.add") }}
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="row">
          <div class="my-card col-12" :key="keyRender">
            <span class="my-card-title">{{
              $t("PropertyTypes.modelName")
            }}</span>

            <div
              v-if="
                priceQuotation.priceQuotationDetails[mainIndex]
                  .storeItemPropertyTypesData.length == 0
              "
              class="my-card-no-content"
            >
              {{ $t("PropertyTypes.thereAreNoOne") }}
            </div>

            <template v-else>
              <div
                v-for="(PropertyType, indexPropertyType) in priceQuotation
                  .priceQuotationDetails[mainIndex].storeItemPropertyTypesData"
                :key="indexPropertyType"
              >
                <b-button
                  v-b-toggle="`PropertyTypes-${mainIndex}-${indexPropertyType}`"
                  class="btn btn-lg btn-collapse"
                >
                  {{ indexPropertyType + 1 }}-
                  {{ PropertyType.propertyTypeNameAr }}
                  <span v-if="PropertyType.propertyTypeNameEn">-</span>
                  {{ PropertyType.propertyTypeNameEn }}
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                </b-button>
                <b-collapse
                  :id="`PropertyTypes-${mainIndex}-${indexPropertyType}`"
                >
                  <div class="row">
                    <PropertyFiledsQuotations
                      :key="keyRender"
                      class="col-12"
                      :propertyDetailsData="PropertyType.propertyDetailsData"
                      :dropDownListTokenOptions="dropDownListTokenOptions"
                      :idForm="id"
                      :id="`${id}-[${mainIndex}]PropertyType[${indexPropertyType}]Property`"
                      :showInReportStatus="true"
                    />
                  </div>
                </b-collapse>
              </div>
            </template>
          </div>
        </div>
      </div>

      <div class="form-actions">
        <div class="icon-submit" @click.prevent="submitForm">
          <img src="@/assets/images/check-icon.svg" :title="submitName" />
        </div>
        <div
          @click.prevent
          class="icon-cancel"
          v-b-modal="`ConfirmCloseSheet-${bottomSheetName}`"
        >
          <img src="@/assets/images/cancel-icon.svg" :title="$t('cancel')" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {
  hasPriceQuotationCanAddMoreSales,
  hasPriceQuotationChangeDateTime,
} from "./../../../../utils/privilegeHelper";
import PreLoader from "./../../../../components/general/PreLoader.vue";
import CustomInput from "./../../../../components/general/CustomInput.vue";
import CustomInputInt from "./../../../../components/general/CustomInputInt.vue";
import CustomSelectBox from "./../../../../components/general/CustomSelectBox.vue";
import CustomSelectBoxMultiple from "./../../../../components/general/CustomSelectBoxMultiple.vue";
// import TextArea from "./../../../../components/general/TextArea.vue";
import CustomCheckbox from "./../../../../components/general/CustomCheckbox.vue";
import DateTimePicker from "./../../../../components/general/DateTimePicker.vue";
import DataLabelGroup from "./../../../../components/general/DataLabelGroup.vue";
import PropertyFiledsQuotations from "./../../propertyTypes/components/PropertyFiledsQuotations.vue";
import PriceQuotationDetailsItem from "./../../../../models/products/priceQuotations/PriceQuotationDetailsItem";
import PropertyTypeInfoData from "./../../../../models/products/propertyTypes/PropertyTypeInfoData";
import PropertyDetailsData from "./../../../../models/products/propertyTypes/PropertyDetailsData";
import apiStoreItems from "./../../../../api/products/storeItems";
import {
  bottomSheetScrollToTop,
  checkPrivilege,
  getLanguage,
} from "./../../../../utils/functions";
import { STATUS } from "./../../../../utils/constants";
import {
  USER_TYPE,
  REPORT_TEMPLATE_TYPES,
  PLACE_TYPE_TOKENS,
} from "./../../../../utils/constantLists";
import {
  getPlacesDialog,
  getCompanyMarksDialog,
  getReportTemplatesDialog,
  getUsersDialog,
  getStoreItemsDialog,
  getDropDownListsDialog,
} from "./../../../../utils/dialogsOfApi";
import {
  getDialogOfPlaceType,
  getDialogOfAffiliateOperationTypes,
} from "./../../../../utils/dialogsOfConstantsLists";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import generalMixin from "./../../../../utils/generalMixin";
import { isDataExist } from "./../../../../utils/functions";

export default {
  mixins: [generalMixin, validationMixin],
  components: {
    PreLoader,
    CustomInput,
    CustomInputInt,
    CustomSelectBox,
    CustomSelectBoxMultiple,
    // TextArea,
    CustomCheckbox,
    DateTimePicker,
    DataLabelGroup,
    PropertyFiledsQuotations,
  },
  data() {
    return {
      placeTypeTokenOptions: getDialogOfPlaceType(),
      affiliateOperationTypeTokenOptions: getDialogOfAffiliateOperationTypes(),
      placeTokensOptions: [],
      userEmployeeTokenOptions: [],
      companyMarkTokenOptions: [],
      reportTemplateTokenOptions: [],
      userTokenOptions: [],
      storeItemTokenOptions: [],
      dropDownListTokenOptions: [],
      priceQuotationDetailsItem: new PriceQuotationDetailsItem(),
      mainIndex: 0,
      language: getLanguage(),
      keyRender: 0,
    };
  },
  props: {
    priceQuotation: {
      type: Object,
    },
    submitName: {
      type: String,
    },
    id: {
      type: String,
      default: "id",
    },
    isOpened: {
      type: Boolean,
      default: false,
    },
    deleteFileStatus: {
      type: Boolean,
      default: false,
    },
    bottomSheetName: {
      type: String,
      default: "",
    },
  },
  validations: {
    priceQuotation: {
      requestPlaceToken: { required },
      reportTemplateToken: { required },
    },
  },
  computed: {
    isDisabled() {
      return this.id == "update" ? true : false;
    },
    errors_requestPlaceToken() {
      let errors = [];
      if (this.$v.priceQuotation.requestPlaceToken.$error) {
        if (!this.$v.priceQuotation.requestPlaceToken.required)
          errors.push(this.$t("validation.fieldIsRequired"));
      }
      return errors;
    },
    errors_reportTemplateToken() {
      let errors = [];
      if (this.$v.priceQuotation.reportTemplateToken.$error) {
        if (!this.$v.priceQuotation.reportTemplateToken.required)
          errors.push(this.$t("validation.fieldIsRequired"));
      }
      return errors;
    },
  },
  methods: {
    isDataExist,
    hasPriceQuotationCanAddMoreSales,
    hasPriceQuotationChangeDateTime,
    addSlice() {
      this.priceQuotation.priceQuotationDetails.push(
        new PriceQuotationDetailsItem()
      );
    },
    removeSlice(index) {
      this.mainIndex = 0;
      this.keyRender++;
      this.priceQuotation.priceQuotationDetails.splice(index, 1);
    },

    addSliceStoreItemPropertyType(index) {
      this.priceQuotation.priceQuotationDetails[
        index
      ].storeItemPropertyTypesData.push(new PropertyTypeInfoData());
    },
    removeSliceStoreItemPropertyType(index, indexPropertyType) {
      this.priceQuotation.priceQuotationDetails[
        index
      ].storeItemPropertyTypesData.splice(indexPropertyType, 1);
    },
    addSlicePropertyDetailsData(index, indexPropertyType) {
      this.priceQuotation.priceQuotationDetails[
        index
      ].storeItemPropertyTypesData[indexPropertyType].propertyDetailsData.push(
        new PropertyDetailsData()
      );
    },
    removeSlicePropertyDetailsData(index, indexPropertyType, indexProperty) {
      this.priceQuotation.priceQuotationDetails[
        index
      ].storeItemPropertyTypesData[
        indexPropertyType
      ].propertyDetailsData.splice(indexProperty, 1);
    },

    async duplicatedItem(item) {
      await this.priceQuotation.priceQuotationDetails.push(
        new PriceQuotationDetailsItem(item)
      );

      let index = this.priceQuotation.priceQuotationDetails.length - 1;

      if (item.propertyCopy) {
        this.priceQuotation.priceQuotationDetails[
          index
        ].storeItemPropertyTypesData = item.storeItemPropertyTypesData.map(
          (element) => {
            return new PropertyTypeInfoData(element);
          }
        );
      } else {
        this.storeItemTokenChanged(item.storeItemToken, index, false);
      }
      this.mainIndex = index;
      this.keyRender++;
    },

    async getPlacesDialog() {
      this.isLoading = true;
      let params = { placeTypeToken: this.priceQuotation.placeTypeToken };
      if (params.placeTypeToken)
        this.placeTokensOptions = await getPlacesDialog(params);
      else this.placeTokensOptions = [];
      this.isLoading = false;
    },
    async getEmployeesDialog() {
      this.isLoading = true;
      let params = {
        modelName: "employees",
        userTypeToken: USER_TYPE.Employee,
        inPlaceToken: this.priceQuotation.requestPlaceToken,
      };
      this.userEmployeeTokenOptions = await getUsersDialog(params);
      this.isLoading = false;
    },
    async getCompanyMarksDialog() {
      this.isLoading = true;
      this.companyMarkTokenOptions = await getCompanyMarksDialog();
      this.isLoading = false;
    },
    async getReportTemplatesDialog() {
      this.isLoading = true;
      this.reportTemplateTokenOptions = await getReportTemplatesDialog({
        reportTemplateTypeToken: REPORT_TEMPLATE_TYPES.PriceQuotation,
        companyMarkToken: this.priceQuotation.companyMarkToken,
      });
      this.isLoading = false;
    },
    async getUsersDialog() {
      this.isLoading = true;
      let params = {
        modelName: "employees",
        userTypeToken: USER_TYPE.Employee,
      };
      this.userTokenOptions = await getUsersDialog(params);
      this.isLoading = false;
    },
    async getStoreItemsDialog() {
      this.isLoading = true;
      this.storeItemTokenOptions = await getStoreItemsDialog({
        getOnlyParentStoreItems: true,
      });
      this.isLoading = false;
    },
    async setDuplicateData() {
      this.isLoading = true;
      this.priceQuotation.priceQuotationToken = "";
      this.priceQuotation.fullCode = "";
      this.priceQuotation.companyMarkToken =
        this.priceQuotation.reportTemplateInfoData.companyMarkToken;
      this.priceQuotation.placeTypeToken = PLACE_TYPE_TOKENS.Client;

      await this.priceQuotation.priceQuotationUsersSalesData.forEach(
        (element) => {
          let isExsist = this.priceQuotation.usersSalesTokenList.includes(
            element.userSalesToken
          );
          if (!isExsist)
            this.priceQuotation.usersSalesTokenList.push(
              element.userSalesToken
            );
        }
      );

      this.isLoading = false;
    },
    async setStoreItemsDialog() {
      this.isLoading = true;
      await this.priceQuotation.priceQuotationDetails.forEach(
        (element, index) => {
          this.priceQuotation.priceQuotationDetails[
            index
          ].parentStoreItemToken = element.storeItemInfoData.mainRootToken;
          this.handelarGetDetails(
            this.priceQuotation.priceQuotationDetails[index]
              .parentStoreItemToken,
            index
          );
        }
      );

      this.isLoading = false;
    },
    async handelarGetDetails(token, index) {
      this.isLoading = true;
      this.priceQuotation.priceQuotationDetails[index].storeItemTokenOptions =
        [];

      try {
        let filter = { token: token };
        const response = await apiStoreItems.getDetails(filter);
        if (response.data.status == STATUS.SUCCESS && response.data.storeItem) {
          if (
            response.data.storeItem.fullTreeAsRowsInfoData &&
            response.data.storeItem.fullTreeAsRowsInfoData.length > 0
          ) {
            this.priceQuotation.priceQuotationDetails[
              index
            ].storeItemTokenOptions = response.data.storeItem.fullTreeAsRowsInfoData.map(
              (element) => {
                return {
                  text: element.itemNameCurrent,
                  value: element.itemToken,
                };
              }
            );
            this.keyRender++;
            this.mainIndex = index;
          }
        } else if (response.data.status == STATUS.INVALID_TOKEN) {
          this.$store.dispatch("logoutUser", response.data.msg);
        } else if (response.data.status != STATUS.SUCCESS) {
          this.showMsg(response.data.msg);
        }
      } catch (e) {
        this.showMsg(this.$t("errorCatch"));
      }
      this.isLoading = false;
    },
    async storeItemTokenChanged(token, index, parentStatus = false) {
      this.isLoading = true;
      if (parentStatus) {
        this.priceQuotation.priceQuotationDetails[index].storeItemTokenOptions =
          [];
      }
      this.priceQuotation.priceQuotationDetails[
        index
      ].storeItemPropertyTypesData = [];
      if (token) {
        try {
          let filter = { token: token };
          const response = await apiStoreItems.getDetails(filter);
          if (
            response.data.status == STATUS.SUCCESS &&
            response.data.storeItem
          ) {
            if (
              parentStatus &&
              response.data.storeItem.fullTreeAsRowsInfoData &&
              response.data.storeItem.fullTreeAsRowsInfoData.length > 0
            ) {
              this.priceQuotation.priceQuotationDetails[
                index
              ].storeItemTokenOptions = response.data.storeItem.fullTreeAsRowsInfoData.map(
                (element) => {
                  return {
                    text: element.itemNameCurrent,
                    value: element.itemToken,
                  };
                }
              );
              this.mainIndex = index;
              this.keyRender++;
            }
            if (
              !parentStatus &&
              response.data.storeItem.propertyTypesData &&
              response.data.storeItem.propertyTypesData.length > 0
            ) {
              this.priceQuotation.priceQuotationDetails[
                index
              ].storeItemPropertyTypesData = response.data.storeItem.propertyTypesData.map(
                (element) => {
                  return new PropertyTypeInfoData(element);
                }
              );
            }
          } else if (response.data.status == STATUS.INVALID_TOKEN) {
            this.$store.dispatch("logoutUser", response.data.msg);
          } else if (response.data.status != STATUS.SUCCESS) {
            this.showMsg(response.data.msg);
          }
        } catch (e) {
          this.showMsg(this.$t("errorCatch"));
        }
      }
      this.isLoading = false;
    },

    async getDropDownListsDialog() {
      this.isLoading = true;
      this.dropDownListTokenOptions = await getDropDownListsDialog();
      this.isLoading = false;
    },

    async submitForm() {
      bottomSheetScrollToTop();
      this.$v.$touch();
      if (
        this.$v.priceQuotation.requestPlaceToken.required &&
        this.$v.priceQuotation.reportTemplateToken.required
      ) {
        this.$emit("submitForm");
      }
    },
    checkPrivilege,
  },
  watch: {
    "priceQuotation.placeTypeToken": function () {
      this.getPlacesDialog();
    },
    "priceQuotation.requestPlaceToken": function () {
      this.getEmployeesDialog();
    },
    isOpened: async function (v) {
      if (v && (this.id == "update" || this.id == "duplicate"))
        await this.setStoreItemsDialog();
      if (v && this.id == "duplicate") await this.setDuplicateData();
    },
  },
  async created() {
    this.getPlacesDialog();
    this.getEmployeesDialog();
    this.getCompanyMarksDialog();
    this.getReportTemplatesDialog();
    this.getUsersDialog();
    this.getStoreItemsDialog();
    this.getDropDownListsDialog();
    if (this.id == "update" || this.id == "duplicate")
      await this.setStoreItemsDialog();
    if (this.id == "duplicate") await this.setDuplicateData();
  },
};
</script>

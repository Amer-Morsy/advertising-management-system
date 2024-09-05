<template>
  <div>
    <PreLoader v-if="isLoading" />

    <CustomBottomSheet
      refName="SendPriceQuotationToClient"
      size="xl"
      :headerText="$t('PriceQuotations.sendToClient')"
      :headerIcon="priceQuotationSendPrice.icon"
      :clickToClose="false"
      :swipeAble="false"
      @opened="getDetails()"
    >
      <ExceptionWithImg
        v-if="exceptionMsg"
        :msg="exceptionMsg"
        :image="exceptionImg"
      />

      <form autocomplete="off" v-else>
        <div class="my-card">
          <div class="row mb-4">
            <table class="my-table">
              <thead>
                <tr>
                  <th rowspan="2">#</th>
                  <th colspan="3">{{ $t("StoreItems.data") }}</th>
                  <th colspan="3">{{ $t("suppliers.priceData") }}</th>
                  <th colspan="2">{{ $t("general.clientPrices") }}</th>
                  <th rowspan="2">{{ $t("general.totalPrice") }}</th>
                </tr>
                <tr>
                  <th>{{ $t("StoreItems.code") }}</th>
                  <th>{{ $t("StoreItems.name") }}</th>
                  <th>{{ $t("general.quantity") }}</th>
                  <th class="cell-lg">{{ $t("suppliers.select") }}</th>
                  <th>{{ $t("general.totalPrice") }}</th>
                  <th>{{ $t("general.itemPrice") }}</th>
                  <th>{{ $t("general.totalPrice") }}</th>
                  <th>{{ $t("general.itemPrice") }}</th>
                  <!-- <th>{{ $t("PriceQuotations.affiliateOperationAmount") }}</th> -->
                </tr>
              </thead>
              <tbody>
                <template
                  v-if="
                    priceQuotationSendPrice.quotationDetailsPriceRelianceList
                      .length == 0
                  "
                >
                  <tr>
                    <th colspan="11">
                      {{ $t("PriceQuotations.details.thereAreNoSlides") }}
                    </th>
                  </tr>
                </template>
                <template v-else>
                  <tr
                    v-for="(
                      item, index
                    ) in priceQuotationSendPrice.quotationDetailsPriceRelianceList"
                    :key="index"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ isDataExist(item.storeItemFullCode) }}</td>
                    <td>{{ isDataExist(item.storeItemNameCurrent) }}</td>
                    <td>{{ isDataExist(item.storeItemQuantity) }}</td>
                    <td>
                      <CustomSelectBox
                        :id="`send-[${index}][approvedPricePlaceToken]`"
                        :value="item.approvedPricePlaceToken"
                        :options="placeTokensOptions"
                        v-on:changeValue="item.approvedPricePlaceToken = $event"
                        :title="$t('suppliers.select')"
                        :imgName="'suppliers.svg'"
                        :openDown="true"
                      />
                    </td>
                    <td>
                      <CustomInputFloat
                        :id="`send-[${index}][approvedPriceTotalItems]`"
                        :value="item.approvedPriceTotalItems"
                        v-on:changeValue="
                          item.approvedPriceTotalItems = Number($event)
                        "
                        :withOutDesign="true"
                      />
                    </td>
                    <td>
                      <CustomInputFloat
                        :id="`send-[${index}][approvedPriceTotalItemsOne]`"
                        :value="
                          approximate(
                            item.approvedPriceTotalItems /
                              item.storeItemQuantity
                          ) || ''
                        "
                        v-on:changeValue="
                          item.approvedPriceTotalItems =
                            $event * item.storeItemQuantity || ''
                        "
                        :withOutDesign="true"
                      />
                    </td>
                    <td>
                      <CustomInputFloat
                        :id="`send-[${index}][gainAmountTotalItems]`"
                        :value="item.gainAmountTotalItems"
                        v-on:changeValue="
                          item.gainAmountTotalItems = Number($event)
                        "
                        :withOutDesign="true"
                      />
                    </td>

                    <td>
                      <CustomInputFloat
                        :id="`send-[${index}][gainAmountTotalItemsOne]`"
                        :value="
                          approximate(
                            item.gainAmountTotalItems / item.storeItemQuantity
                          ) || ''
                        "
                        v-on:changeValue="
                          item.gainAmountTotalItems =
                            $event * item.storeItemQuantity || ''
                        "
                        :withOutDesign="true"
                      />
                      <!-- <CustomInputFloat
                        v-if="
                          item.affiliateOperationTypeToken !=
                          AFFILIATE_OPERATION_TYPES.NoAffiliate
                        "
                        :id="`send-[${index}][affiliateOperationAmount]`"
                        :value="item.affiliateOperationAmount"
                        v-on:changeValue="
                          item.affiliateOperationAmount = $event
                        "
                        :withOutDesign="true"
                      /> -->
                      <!-- <span v-else>-</span> -->
                    </td>
                    <td>
                      {{
                        approximate(
                          getNumber(item.approvedPriceTotalItems) +
                            getNumber(item.gainAmountTotalItems) +
                            getNumber(item.affiliateOperationAmount),
                          approximateDigits
                        ) || ""
                      }}
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>

          <div class="row">
            <CustomSelectBox
              :className="'col-lg-3 col-md-3'"
              :id="`send-feeTypeToken`"
              :value="priceQuotationSendPrice.feeTypeToken"
              :options="feeTypeTokenOptions"
              v-on:changeValue="
                priceQuotationSendPrice.feeTypeToken = $event.value;
                priceQuotationSendPrice.feeTypeNameCurrent = $event.text;
              "
              :title="$t('general.selectFeeType')"
              :imgName="'FeesTypes.svg'"
              :emitObject="true"
            />
            <CustomInputFloat
              :className="'col-lg-3 col-md-3'"
              :id="`send-feeTypeValue`"
              :value="priceQuotationSendPrice.feeTypeValue"
              v-on:changeValue="priceQuotationSendPrice.feeTypeValue = $event"
              :title="$t('general.feeTypeValue')"
              :imgName="'money.svg'"
            />

            <CustomInputFloat
              :className="'col-lg-3 col-md-3'"
              :id="`send-taxPercent`"
              :value="priceQuotationSendPrice.taxPercent"
              v-on:changeValue="priceQuotationSendPrice.taxPercent = $event"
              :title="$t('general.taxPercent')"
              :imgName="'percentage.svg'"
            />
            <CustomCheckbox
              :className="'col-lg-3 col-md-3'"
              :value="priceQuotationSendPrice.taxStatus"
              v-on:changeValue="priceQuotationSendPrice.taxStatus = $event"
              :title="$t('general.taxStatus')"
              :centerStatus="true"
            />
            <CustomSelectBox
              :className="'col-md-9'"
              :id="`sendRequest-emailTemplateToken`"
              :emitObject="true"
              :value="priceQuotationSendPrice.emailTemplateToken"
              :options="emailTemplateTokenOptions"
              v-on:changeValue="
                priceQuotationSendPrice.emailTemplateToken = $event.value;
                priceQuotationSendPrice.emailHtmlBody = $event.body;
                priceQuotationSendPrice.emailHtmlSignature = $event.signature;
              "
              :title="$t('EmailTemplates.select')"
              :imgName="'email.svg'"
            />

            <CustomCheckbox
              :className="'col-lg-3 col-md-3'"
              :value="priceQuotationSendPrice.sendAfterSave"
              v-on:changeValue="priceQuotationSendPrice.sendAfterSave = $event"
              :title="$t('PriceQuotations.sendAfterSave')"
              :centerStatus="true"
            />
          </div>

          <div class="table-container">
            <table class="my-table table-totals">
              <thead>
                <tr>
                  <th colspan="3">{{ $t("general.total") }}</th>
                  <th colspan="3">{{ $t("general.fees") }}</th>
                  <th colspan="2">{{ $t("general.taxs") }}</th>
                </tr>
                <tr>
                  <th>{{ $t("suppliers.modelName") }}</th>
                  <th>{{ $t("general.myPrices") }}</th>
                  <th>{{ $t("general.total") }}</th>
                  <th>{{ $t("general.type") }}</th>
                  <th>{{ $t("general.value") }}</th>
                  <th>{{ $t("general.totalWithFees") }}</th>
                  <th>{{ $t("general.value") }}</th>
                  <th>{{ $t("general.totalWithTax") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ totalPrice }}</td>
                  <td>{{ totalGain + totalAffiliate }}</td>
                  <td>{{ totalWithOutFees }}</td>
                  <td>
                    {{
                      isDataExist(priceQuotationSendPrice.feeTypeNameCurrent)
                    }}
                  </td>
                  <td>{{ feesValue }}</td>
                  <td>{{ totalWithFees }}</td>
                  <td>{{ taxValue }}</td>
                  <td>{{ totalWithTax }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="form-actions">
          <div class="icon-submit" @click.prevent="SendToClient">
            <img
              src="@/assets/images/check-icon.svg"
              :title="$t('PriceQuotations.sendToClient')"
            />
          </div>
          <div
            @click.prevent
            class="icon-cancel"
            v-b-modal="`ConfirmCloseSheet-SendPriceQuotationToClient`"
          >
            <img src="@/assets/images/cancel-icon.svg" :title="$t('cancel')" />
          </div>
        </div>
      </form>
    </CustomBottomSheet>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PreLoader from "./../../../../components/general/PreLoader.vue";
import ExceptionWithImg from "./../../../../components/general/ExceptionWithImg.vue";
import CustomBottomSheet from "./../../../../components/general/CustomBottomSheet.vue";
import CustomSelectBox from "./../../../../components/general/CustomSelectBox.vue";
import CustomCheckbox from "./../../../../components/general/CustomCheckbox.vue";
import CustomInputFloat from "./../../../../components/general/CustomInputFloat.vue";
import SendPriceQuotationToClientModel from "./../../../../models/products/priceQuotations/SendPriceQuotationToClientModel";
import apiPriceQuotation from "./../../../../api/products/priceQuotations";
import { getDialogOfFeesTypes } from "./../../../../utils/dialogsOfConstantsLists";
import {
  getPlacesDialog,
  getEmailTemplatesDialogCustomized,
} from "./../../../../utils/dialogsOfApi";
import { STATUS, DEFULT_TAX } from "./../../../../utils/constants";
import {
  FEES_TYPES,
  PLACE_TYPE_TOKENS,
  AFFILIATE_OPERATION_TYPES,
} from "./../../../../utils/constantLists";
import {
  isDataExist,
  getNumber,
  approximate,
} from "./../../../../utils/functions";
import generalMixin from "./../../../../utils/generalMixin";
const approximateDigits = 4;

export default {
  mixins: [generalMixin],
  components: {
    PreLoader,
    ExceptionWithImg,
    CustomBottomSheet,
    CustomSelectBox,
    CustomCheckbox,
    CustomInputFloat,
  },
  props: ["token"],
  data() {
    return {
      priceQuotationSendPrice: new SendPriceQuotationToClientModel(),
      feeTypeTokenOptions: getDialogOfFeesTypes(),
      emailTemplateTokenOptions: [],
      placeTokensOptions: [],
      approvedPricePlaceTokenOptions: [],
      approximateDigits,
      AFFILIATE_OPERATION_TYPES,
    };
  },
  computed: {
    ...mapGetters(["userPersonalData"]),
    totalPrice() {
      return approximate(
        this.priceQuotationSendPrice.quotationDetailsPriceRelianceList.reduce(
          (sum, current) =>
            getNumber(sum) + getNumber(current.approvedPriceTotalItems),
          0
        ),
        approximateDigits
      );
    },
    totalGain() {
      return approximate(
        this.priceQuotationSendPrice.quotationDetailsPriceRelianceList.reduce(
          (sum, current) => sum + getNumber(current.gainAmountTotalItems),
          0
        ),
        approximateDigits
      );
    },
    totalAffiliate() {
      return approximate(
        this.priceQuotationSendPrice.quotationDetailsPriceRelianceList.reduce(
          (sum, current) => sum + getNumber(current.affiliateOperationAmount),
          0
        ),
        approximateDigits
      );
    },
    feesValue() {
      let feesValue = getNumber(this.priceQuotationSendPrice.feeTypeValue);
      if (this.priceQuotationSendPrice.feeTypeToken == FEES_TYPES.Increase) {
        feesValue = 1 * feesValue;
      } else if (
        this.priceQuotationSendPrice.feeTypeToken == FEES_TYPES.Deduct
      ) {
        feesValue = -1 * feesValue;
      } else {
        feesValue = 0;
      }
      return feesValue;
    },
    totalWithOutFees() {
      return approximate(
        this.totalPrice + this.totalGain + this.totalAffiliate,
        approximateDigits
      );
    },
    totalWithFees() {
      return approximate(
        this.totalWithOutFees + this.feesValue,
        approximateDigits
      );
    },
    taxValue() {
      if (this.priceQuotationSendPrice.taxStatus) {
        return (
          (this.totalWithFees *
            getNumber(this.priceQuotationSendPrice.taxPercent)) /
          100
        );
      } else {
        return 0;
      }
    },
    totalWithTax() {
      return approximate(this.totalWithFees + this.taxValue, approximateDigits);
    },
  },
  methods: {
    async getDetails() {
      this.isLoading = true;
      try {
        let filter = { token: this.token };
        this.priceQuotationSendPrice.setInitialValue();
        const response = await apiPriceQuotation.getDetails(filter);
        if (response.data.status == STATUS.SUCCESS) {
          this.exceptionMsg = null;
        } else if (response.data.status == STATUS.NO_CONTENT) {
          this.exceptionMsg = response.data.msg;
          this.exceptionImg = "illustrator-noData.svg";
        } else if (response.data.status == STATUS.INVALID_TOKEN) {
          this.$store.dispatch("logoutUser", response.data.msg);
        } else {
          this.exceptionMsg = response.data.msg;
          this.exceptionImg = null;
        }
        let item = {
          priceQuotationToken: response.data.priceQuotation.priceQuotationToken,
          quotationDetailsPriceRelianceList: [],
        };
        if (
          response.data.priceQuotation.priceQuotationDetails != null &&
          response.data.priceQuotation.priceQuotationDetails.length > 0
        ) {
          item.quotationDetailsPriceRelianceList =
            response.data.priceQuotation.priceQuotationDetails.map(
              (element) => {
                return {
                  storeItemFullCode: element.storeItemInfoData
                    ? element.storeItemInfoData.fullCode
                    : "",
                  storeItemNameCurrent: element.storeItemInfoData
                    ? element.storeItemInfoData.storeItemNameCurrent
                    : "",
                  storeItemQuantity: element.storeItemQuantity,
                  affiliateOperationTypeToken:
                    element.affiliateOperationTypeToken,
                  priceQuotationDetailsToken:
                    element.priceQuotationDetailsToken,
                  approvedPricePlaceToken: element.bestPricePlaceToken,
                  approvedPriceTotalItems: element.bestPriceTotalItemsAmount,
                  placeTypeToken: element.bestPricePlaceInfoData
                    ? element.bestPricePlaceInfoData.placeTypeToken
                    : "",
                };
              }
            );
        }
        this.priceQuotationSendPrice.fillData(item);
        this.priceQuotationSendPrice.taxStatus = true;
        this.priceQuotationSendPrice.taxPercent = DEFULT_TAX;
        this.priceQuotationSendPrice.feeTypeToken = FEES_TYPES.Default;
        this.priceQuotationSendPrice.feeTypeNameCurrent = this.$t(
          "general.feeTypeDefault"
        );
      } catch (e) {
        this.exceptionMsg = this.$t("errorCatch");
        this.exceptionImg = null;
      }
      this.isLoading = false;
    },
    async SendToClient() {
      this.isLoading = true;
      try {
        const response = await apiPriceQuotation.sendToClient(
          this.priceQuotationSendPrice
        );
        if (response.data.status == STATUS.SUCCESS) {
          this.showMsg(response.data.msg, true);
          this.closeBottomSheet("SendPriceQuotationToClient");
          this.$emit("refresh");
        } else if (response.data.status == STATUS.INVALID_TOKEN) {
          this.$store.dispatch("logoutUser", response.data.msg);
          this.showMsg(response.data.msg);
        } else {
          this.showMsg(response.data.msg);
        }
      } catch (error) {
        this.showMsg(this.$t("errorCatch"));
      }
      this.isLoading = false;
    },

    async getPlacesDialog() {
      this.isLoading = true;
      this.placeTokensOptions = [];
      let params = { placeTypeToken: PLACE_TYPE_TOKENS.Supplier };
      this.placeTokensOptions = await getPlacesDialog(params);
      this.isLoading = false;
    },
    async getEmailTemplatesDialog() {
      this.isLoading = true;
      let params = {
        userToken: this.userPersonalData.userToken,
      };
      const [options, error] = await getEmailTemplatesDialogCustomized(params);
      this.emailTemplateTokenOptions = options;
      this.exceptionMsg = error;
      this.isLoading = false;
    },
    isDataExist,
    getNumber,
    approximate,
  },
  created() {
    this.getPlacesDialog();
    this.getEmailTemplatesDialog();
  },
};
</script>

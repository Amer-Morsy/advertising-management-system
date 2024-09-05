<template>
  <CustomBottomSheet
    :refName="'SendRequestProductItemReport'"
    size="xl"
    :headerText="$t('PriceQuotations.SendRequestProductItemReport')"
    :headerIcon="sendRequestProductItemReport.icon"
    @opened="getDialogs()"
  >
    <!-- getDetails(); -->
    <PreLoader v-if="isLoading" />

    <form autocomplete="off">
      <div class="my-card">
        <div class="row">
          <CustomSelectBoxMultiple
            :className="'col-md-12'"
            :id="`priceQuotationDetailsTokens`"
            :value="sendRequestProductItemReport.priceQuotationDetailsTokens"
            :options="priceQuotationDetailsStoreItemOptions"
            v-on:changeValue="
              sendRequestProductItemReport.priceQuotationDetailsTokens = $event;
              exportRequestProductItemReport.priceQuotationDetailsTokens =
                $event;
              getSuppliersCanWorkInPriceQuotation();
            "
            :title="$t('StoreItems.select')"
            :imgName="'StoreItems.svg'"
            :returnArrayOfObjects="false"
          />
          <CustomSelectBox
            :className="'col-md-12'"
            :id="`sendRequest-reportTemplateToken`"
            :errors="errors_reportTemplateToken"
            :value="sendRequestProductItemReport.reportTemplateToken"
            :options="reportTemplateTokenOptions"
            v-on:changeValue="
              sendRequestProductItemReport.reportTemplateToken = $event;
              exportRequestProductItemReport.reportTemplateToken = $event;

              $v.sendRequestProductItemReport.reportTemplateToken.$touch();
            "
            :title="$t('ConstantsListSelect.ReportTemplates')"
            :imgName="'ReportTemplates.svg'"
          />
          <CustomSelectBox
            :className="'col-md-12'"
            :id="`sendRequest-emailTemplateToken`"
            :emitObject="true"
            :value="sendRequestProductItemReport.emailTemplateToken"
            :options="emailTemplateTokenOptions"
            v-on:changeValue="
              sendRequestProductItemReport.emailTemplateToken = $event.value;
              exportRequestProductItemReport.emailTemplateToken = $event.value;
              sendRequestProductItemReport.emailHtmlBody = $event.body;
              exportRequestProductItemReport.emailHtmlBody = $event.body;
              sendRequestProductItemReport.emailHtmlSignature =
                $event.signature;
              exportRequestProductItemReport.emailHtmlSignature =
                $event.signature;
            "
            :title="$t('EmailTemplates.select')"
            :imgName="'email.svg'"
          />

          <!-- <DataLabelGroup
            :className="'col-md-6'"
            :value="sendRequestProductItemReport.emailHtmlBody"
            :title="$t('EmailTemplates.body')"
            :imgName="'email.svg'"
          />
          <DataLabelGroup
            :className="'col-md-6'"
            :value="sendRequestProductItemReport.emailHtmlSignature"
            :title="$t('EmailTemplates.signature')"
            :imgName="'email.svg'"
          /> -->
        </div>

        <ExceptionWithImg v-if="exceptionMsg" :msg="exceptionMsg" />
        <template v-else>
          <!-- <CustomInput
            :className="'col-md-12'"
            :id="'sendRequest-filterTable'"
            :value="filterTable"
            :title="$t('search')"
            :imgName="'search.svg'"
            v-on:changeValue="filterTable = $event"
          /> -->
          <div class="table-container">
            <table class="my-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>
                    <input
                      v-if="placeTokensOptions.length > 0"
                      type="checkbox"
                      id="sendRequest-selectAll"
                      @click="selectAll()"
                      v-model="selectedAll"
                      class="checkbox"
                    />
                    {{ $t("general.all") }}
                  </th>
                  <th>{{ $t("suppliers.name") }}</th>
                  <th
                    v-if="
                      checkPrivilege(
                        hasPriceQuotationDetailExportRequestProductItemReport()
                      )
                    "
                  >
                    {{ $t("PriceQuotations.ExportRequestProductItemReport") }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in placeTokensOptions" :key="index">
                  <td>{{ ++index }}</td>
                  <td>
                    <input
                      type="checkbox"
                      v-model="sendRequestProductItemReport.placeTokens"
                      :value="item.value"
                      @click="select(item.value)"
                      class="checkbox"
                    />
                  </td>

                  <td>{{ isDataExist(item.placeNameCurrent) }}</td>
                  <td
                    v-if="
                      checkPrivilege(
                        hasPriceQuotationDetailExportRequestProductItemReport()
                      )
                    "
                  >
                    <button
                      :title="
                        $t('PriceQuotations.ExportRequestProductItemReport')
                      "
                      @click.prevent="exportRequest(item.value)"
                    >
                      <img src="@/assets/images/report.svg" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </div>

      <div class="form-actions">
        <div class="icon-submit" @click.prevent="sendRequest">
          <img
            src="@/assets/images/check-icon.svg"
            :title="$t('PriceQuotations.SendRequestProductItemReport')"
          />
        </div>
        <div
          @click.prevent
          class="icon-cancel"
          v-b-modal="`ConfirmCloseSheet-SendRequestProductItemReport`"
        >
          <img src="@/assets/images/cancel-icon.svg" :title="$t('cancel')" />
        </div>
      </div>
    </form>
  </CustomBottomSheet>
</template>

<script>
import { mapGetters } from "vuex";
import PreLoader from "./../../../../components/general/PreLoader.vue";
import ExceptionWithImg from "./../../../../components/general/ExceptionWithImg.vue";
// import DataLabelGroup from "./../../../../components/general/DataLabelGroup.vue";
import CustomBottomSheet from "./../../../../components/general/CustomBottomSheet.vue";
import CustomSelectBoxMultiple from "./../../../../components/general/CustomSelectBoxMultiple.vue";
import CustomSelectBox from "./../../../../components/general/CustomSelectBox.vue";
// import CustomInput from "./../../../../components/general/CustomInput.vue";
import SendRequestProductItemReport from "./../../../../models/products/priceQuotations/SendRequestProductItemReport";
import ExportRequestProductItemReport from "./../../../../models/products/priceQuotations/ExportRequestProductItemReport";
// import apiStoreItem from "./../../../../api/products/storeItems";
import apiPriceQuotationDetails from "./../../../../api/products/priceQuotationDetails";
import {
  getReportTemplatesDialog,
  getEmailTemplatesDialogCustomized,
  // getPlacesDialogCustomized,
  getSuppliersCanWorkInPriceQuotation,
} from "./../../../../utils/dialogsOfApi";
import {
  isDataExist,
  checkPrivilege,
  viewFileFromServer,
  fullPathFileFromServer,
} from "./../../../../utils/functions";
import { STATUS } from "./../../../../utils/constants";
import {
  REPORT_TEMPLATE_TYPES,
  // PLACE_TYPE_TOKENS,
} from "./../../../../utils/constantLists";
import { hasPriceQuotationDetailExportRequestProductItemReport } from "./../../../../utils/privilegeHelper";
import generalMixin from "./../../../../utils/generalMixin";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import PriceQuotationMixin from "./PriceQuotationMixin";

export default {
  mixins: [generalMixin, validationMixin, PriceQuotationMixin],
  components: {
    PreLoader,
    ExceptionWithImg,
    // DataLabelGroup,
    CustomBottomSheet,
    CustomSelectBoxMultiple,
    CustomSelectBox,
    // CustomInput,
  },
  props: ["priceQuotationDetail", "companyMarkToken"],
  validations: {
    sendRequestProductItemReport: {
      reportTemplateToken: { required },
    },
  },
  data() {
    return {
      filterTable: "",
      selectedAll: false,
      sendRequestProductItemReport: new SendRequestProductItemReport(),
      exportRequestProductItemReport: new ExportRequestProductItemReport(),
      priceQuotationDetailsStoreItemOptions: [],
      reportTemplateTokenOptions: [],
      emailTemplateTokenOptions: [],
      placeTokensOptions: [],
    };
  },
  computed: {
    ...mapGetters(["userPersonalData"]),
    errors_reportTemplateToken() {
      let errors = [];
      if (this.$v.sendRequestProductItemReport.reportTemplateToken.$error) {
        if (!this.$v.sendRequestProductItemReport.reportTemplateToken.required)
          errors.push(this.$t("validation.fieldIsRequired"));
      }
      return errors;
    },
  },
  methods: {
    isDataExist,
    checkPrivilege,
    hasPriceQuotationDetailExportRequestProductItemReport,
    selectAll() {
      this.filterTable = "";
      this.sendRequestProductItemReport.placeTokens = [];
      this.selectedAll = !this.selectedAll;
      if (this.selectedAll) {
        for (let ietm in this.placeTokensOptions) {
          this.sendRequestProductItemReport.placeTokens.push(
            this.placeTokensOptions[ietm].value
          );
        }
      }
    },
    select(value) {
      const indexItem =
        this.sendRequestProductItemReport.placeTokens.indexOf(value);

      if (indexItem > -1) {
        this.sendRequestProductItemReport.placeTokens.splice(indexItem, 1);
      }
      setTimeout(() => {
        if (
          this.placeTokensOptions.length ==
          this.sendRequestProductItemReport.placeTokens.length
        ) {
          this.selectedAll = true;
        } else {
          this.selectedAll = false;
        }
      }, 1000);
    },

    async sendRequest() {
      this.isLoading = true;
      this.$v.$touch();

      if (this.$v.sendRequestProductItemReport.reportTemplateToken.required) {
        try {
          const response = await apiPriceQuotationDetails.sendRequest(
            this.sendRequestProductItemReport
          );
          if (response.data.status == STATUS.SUCCESS) {
            this.$emit("refresh");
            this.showMsg(response.data.msg, true);
            this.closeBottomSheet("SendRequestProductItemReport");
          } else if (response.data.status == STATUS.INVALID_TOKEN) {
            this.$store.dispatch("logoutUser", response.data.msg);
            this.showMsg(response.data.msg);
          } else {
            this.showMsg(response.data.msg);
          }
        } catch (error) {
          this.showMsg(this.$t("errorCatch"));
        }
      }
      this.isLoading = false;
    },
    async exportRequest(token) {
      this.isLoading = true;
      this.exportRequestProductItemReport.placeToken = token;
      this.$v.$touch();
      if (this.$v.sendRequestProductItemReport.reportTemplateToken.required) {
        try {
          const response = await apiPriceQuotationDetails.exportRequest(
            this.exportRequestProductItemReport
          );
          if (response.data.status == STATUS.SUCCESS) {
            this.showMsg(response.data.msg, true);
            viewFileFromServer(response.data.reportPath);
          } else if (response.data.status == STATUS.INVALID_TOKEN) {
            this.$store.dispatch("logoutUser", response.data.msg);
            this.showMsg(response.data.msg);
          } else {
            this.showMsg(response.data.msg);
          }
        } catch (error) {
          this.showMsg(this.$t("errorCatch"));
        }
      }
      this.isLoading = false;
    },

    async getDialogs() {
      this.sendRequestProductItemReport.setInitialValue();
      this.exportRequestProductItemReport.setInitialValue();
      await this.getDetails();
      await this.setStoreItemOptions();
      await this.getReportTemplatesDialog();
      await this.getEmailTemplatesDialog();
      // await this.getPlacesDialogList();
      await this.getSuppliersCanWorkInPriceQuotation();
    },

    async setStoreItemOptions() {
      this.isLoading = true;
      this.priceQuotationDetailsStoreItemOptions =
        this.priceQuotation.priceQuotationDetails.map((item) => {
          return {
            value: item.priceQuotationDetailsToken,
            text: item.storeItemInfoData.storeItemNameCurrent,
            image: fullPathFileFromServer(
              item.storeItemInfoData.storeItemImagePath
            ),
          };
        });
      this.isLoading = false;
    },
    async getReportTemplatesDialog() {
      this.isLoading = true;
      this.reportTemplateTokenOptions = await getReportTemplatesDialog({
        reportTemplateTypeToken: REPORT_TEMPLATE_TYPES.ProductItem,
        companyMarkToken: this.companyMarkToken,
      });
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
    // async getPlacesDialogList() {
    //   this.isLoading = true;
    //   let params = {
    //     modelName: "placeSuppliers",
    //     placeTypeToken: PLACE_TYPE_TOKENS.Supplier,
    //   };
    //   const [options, error] = await getPlacesDialogCustomized(params);
    //   this.placeTokensOptions = options;
    //   this.exceptionMsg = error;
    //   this.isLoading = false;
    // },
    async getSuppliersCanWorkInPriceQuotation() {
      this.isLoading = true;
      let params = {
        priceQuotationDetailsTokens:
          this.sendRequestProductItemReport.priceQuotationDetailsTokens,
        token: this.token,
      };
      const [options, error] = await getSuppliersCanWorkInPriceQuotation(
        params
      );
      this.placeTokensOptions = options;
      this.exceptionMsg = error;
      this.isLoading = false;
    },
    // async getDetails() {
    //   this.sendRequestProductItemReport.priceQuotationDetailsToken =
    //     this.priceQuotationDetail.priceQuotationDetailsToken;
    //   this.exportRequestProductItemReport.priceQuotationDetailsToken =
    //     this.priceQuotationDetail.priceQuotationDetailsToken;

    //   this.isLoading = true;
    //   this.placeTokensOptions = [];
    //   try {
    //     let filter = { token: this.priceQuotationDetail.storeItemToken };
    //     const response = await apiStoreItem.getDetails(filter);
    //     if (response.data.status == STATUS.SUCCESS) {
    //       if (
    //         response.data.storeItem &&
    //         response.data.storeItem.placesInfoData.length > 0
    //       ) {
    //         this.placeTokensOptions =
    //           response.data.storeItem.placesInfoData.map((item) => {
    //             return {
    //               value: item.placeToken,
    //               text: item.placeNameCurrent,
    //               fullCode: item.fullCode,
    //             };
    //           });
    //       }
    //     } else if (response.data.status == STATUS.INVALID_TOKEN) {
    //       this.$store.dispatch("logoutUser", response.data.msg);
    //     } else {
    //       this.exceptionMsg = response.data.msg;
    //       this.exceptionImg = null;
    //     }
    //   } catch (e) {
    //     this.exceptionMsg = this.$t("errorCatch");
    //     this.exceptionImg = null;
    //   }
    //   this.isLoading = false;
    // },
  },
  created() {},
};
</script>

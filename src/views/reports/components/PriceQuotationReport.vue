<template>
  <CustomBottomSheet
    :refName="'PriceQuotationReport'"
    size="xl"
    :headerText="$t('Reports.PriceQuotationsReport')"
    :headerIcon="icon"
    @opened="getDialogs"
  >
    <div class="report-container">
      <div class="row report-filter">
        <CustomSelectBox
          :className="'col-md-12'"
          :id="`PriceQuotations-report-reportTemplateToken`"
          :value="priceQuotations.filterData.reportTemplateToken"
          :options="reportTemplateTokenOptions"
          v-on:changeValue="
            priceQuotations.filterData.reportTemplateToken = $event
          "
          :title="$t('ConstantsListSelect.ReportTemplates')"
          :imgName="'ReportTemplates.svg'"
        />

        <CustomSelectBox
          :className="'col-md-12'"
          :id="`PriceQuotations-report-emailTemplateToken`"
          :emitObject="true"
          :value="priceQuotations.filterData.emailTemplateToken"
          :options="emailTemplateTokenOptions"
          v-on:changeValue="
            priceQuotations.filterData.emailTemplateToken = $event.value;
            priceQuotations.filterData.emailHtmlBody = $event.body;
            priceQuotations.filterData.emailHtmlSignature = $event.signature;
          "
          :title="$t('EmailTemplates.select')"
          :imgName="'email.svg'"
        />

        <CustomSelectBox
          :className="'col-md-12'"
          :id="`PriceQuotations-policiesAndTermToken`"
          :emitObject="true"
          :value="priceQuotations.filterData.policiesAndTermToken"
          :options="policiesAndTermsTokenOptions"
          v-on:changeValue="
            priceQuotations.filterData.policiesAndTermToken = $event.value;
            priceQuotations.filterData.policiesAndTermDescription = $event.body;
          "
          :title="$t('PoliciesAndTerms.select')"
          :imgName="'type.svg'"
        />
        <TextArea
          :className="'col-md-12'"
          :id="`PriceQuotations-policiesAndTermDescription`"
          :value="priceQuotations.filterData.policiesAndTermDescription"
          v-on:changeValue="
            priceQuotations.filterData.policiesAndTermDescription = $event
          "
          :title="$t('PoliciesAndTerms.text')"
        />

        <template v-if="!exportStatus">
          <CustomSelectBox
            :className="'col-md-6'"
            :id="`PriceQuotations-report-priceQuotationHistoryWorkTypeToken`"
            :value="
              priceQuotations.filterData.priceQuotationHistoryWorkTypeToken
            "
            :options="priceQuotationHistoryWorkTypeTokenOptions"
            v-on:changeValue="
              priceQuotations.filterData.priceQuotationHistoryWorkTypeToken =
                $event
            "
            :title="$t('PriceQuotations.status')"
            :imgName="`type.svg`"
          />
          <CustomSelectBox
            :className="'col-md-6'"
            :id="`PriceQuotations-report-requestPlaceToken`"
            :value="priceQuotations.filterData.requestPlaceToken"
            :options="placeTokensOptions"
            v-on:changeValue="
              priceQuotations.filterData.requestPlaceToken = $event
            "
            :title="$t('clients.select')"
            :imgName="'places.svg'"
          />

          <CustomSelectBox
            :className="'col-md-12'"
            :id="`PriceQuotations-report-usersSalesToken`"
            :value="priceQuotations.filterData.usersSalesToken"
            :options="userTokenOptions"
            v-on:changeValue="
              priceQuotations.filterData.usersSalesToken = $event
            "
            :title="$t('sales.select')"
            :imgName="'sales.svg'"
          />
        </template>

        <CustomInput
          :className="'col-md-12'"
          :id="`PriceQuotations-report-sendTo`"
          :value="priceQuotations.filterData.sendTo"
          v-on:changeValue="priceQuotations.filterData.sendTo = $event"
          :title="$t('Reports.sendTo')"
          :imgName="'email.svg'"
        />
      </div>

      <div v-if="reportUrl" class="row report-result">
        <embed
          type="application/pdf"
          :src="reportUrl"
          width="400"
          height="300"
          id="pdf"
        />
      </div>
    </div>

    <div class="form-actions">
      <div
        v-if="exportStatus"
        class="icon-submit"
        @click.prevent="getReportExport"
      >
        <img
          src="@/assets/images/check-icon.svg"
          :title="$t('Reports.print')"
        />
      </div>
      <div v-else class="icon-submit" @click.prevent="getReport">
        <img
          src="@/assets/images/check-icon.svg"
          :title="$t('Reports.print')"
        />
      </div>

      <div
        @click.prevent="closeBottomSheet('PriceQuotationReport')"
        class="icon-cancel"
      >
        <img src="@/assets/images/cancel-icon.svg" :title="$t('cancel')" />
      </div>
    </div>
  </CustomBottomSheet>
</template>

<script>
import CustomBottomSheet from "./../../../components/general/CustomBottomSheet.vue";
import CustomSelectBox from "./../../../components/general/CustomSelectBox.vue";
import CustomInput from "./../../../components/general/CustomInput.vue";
import TextArea from "./../../../components/general/TextArea.vue";
import { STATUS } from "./../../../utils/constants";
import {
  USER_TYPE,
  PLACE_TYPE_TOKENS,
  REPORT_TEMPLATE_TYPES,
} from "./../../../utils/constantLists";
import {
  getFullFilePathFromServer,
  objectToFormData,
} from "./../../../utils/functions";
import {
  getPlacesDialog,
  getReportTemplatesDialog,
  getUsersDialog,
  getPoliciesAndTermsDialog,
  getEmailTemplatesDialogCustomized,
} from "./../../../utils/dialogsOfApi";
import { getDialogOfPriceQuotationsHistoryWorkType } from "./../../../utils/dialogsOfConstantsLists";
import PriceQuotations from "./../../../models/products/priceQuotations/PriceQuotations";
import apiPriceQuotation from "./../../../api/products/priceQuotations";
import generalMixin from "./../../../utils/generalMixin";
import icon from "@/assets/images/report.svg";

export default {
  mixins: [generalMixin],
  data() {
    return {
      reportUrl: "",
      bottomSheetOpened: false,
      priceQuotations: new PriceQuotations(),
      priceQuotationHistoryWorkTypeTokenOptions:
        getDialogOfPriceQuotationsHistoryWorkType(),
      placeTokensOptions: [],
      emailTemplateTokenOptions: [],
      reportTemplateTokenOptions: [],
      userTokenOptions: [],
      icon,
      policiesAndTermsTokenOptions: [],
    };
  },
  components: {
    CustomBottomSheet,
    CustomSelectBox,
    CustomInput,
    TextArea,
  },
  props: {
    token: {
      type: String,
      default: "",
    },
    reportTemplateToken: {
      type: String,
      default: "",
    },
    exportStatus: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    async getDialogs() {
      this.reportUrl = "";
      this.priceQuotations.filterData.token = this.token;
      this.priceQuotations.filterData.reportTemplateToken =
        this.reportTemplateToken;
      this.priceQuotations.filterData.policiesAndTermToken = "";
      this.priceQuotations.filterData.policiesAndTermDescription = "";
      this.priceQuotations.filterData.sendTo = "";
      if (!this.bottomSheetOpened) {
        this.getReportTemplatesDialog();
        this.getEmailTemplatesDialog();
        this.getPoliciesAndTermsDialog();
        if (!this.exportStatus) {
          this.getPlacesDialog();
          this.getUsersDialog();
        }
        this.bottomSheetOpened = true;
      }
    },

    async getEmailTemplatesDialog() {
      this.isLoading = true;
      let params = {
        userToken: this.userPersonalData.userToken,
      };
      const [options, error] = await getEmailTemplatesDialogCustomized(params);
      this.emailTemplateTokenOptions = options;
      this.exceptionMsgEmail = error;
      this.isLoading = false;
    },

    async getPoliciesAndTermsDialog() {
      this.isLoading = true;
      this.policiesAndTermsTokenOptions = await getPoliciesAndTermsDialog();
      this.isLoading = false;
    },
    async getPlacesDialog() {
      this.$emit("isLoading", true);
      let params = { placeTypeToken: PLACE_TYPE_TOKENS.Client };
      this.placeTokensOptions = await getPlacesDialog(params);
      this.$emit("isLoading", false);
    },
    async getReportTemplatesDialog() {
      this.$emit("isLoading", true);
      this.reportTemplateTokenOptions = await getReportTemplatesDialog({
        reportTemplateTypeToken: REPORT_TEMPLATE_TYPES.PriceQuotation,
      });
      this.$emit("isLoading", false);
    },
    async getUsersDialog() {
      this.$emit("isLoading", true);
      let params = {
        modelName: "employees",
        userTypeToken: USER_TYPE.Employee,
      };
      this.userTokenOptions = await getUsersDialog(params);
      this.$emit("isLoading", false);
    },

    async getReport() {
      this.$emit("isLoading", true);
      this.reportUrl = "";
      try {
        const response = await apiPriceQuotation.getReport(
          this.priceQuotations.filterData
        );
        if (response.data.status == STATUS.SUCCESS) {
          if (response.data.reportPath) {
            this.reportUrl = getFullFilePathFromServer(
              response.data.reportPath
            );
          } else {
            this.showMsg(this.$t("Reports.noReports"));
          }
        } else {
          this.showMsg(response.data.msg);
        }
      } catch (error) {
        this.showMsg(this.$t("errorCatch"));
      }
      this.$emit("isLoading", false);
    },
    async getReportExport() {
      this.$emit("isLoading", true);
      this.reportUrl = "";
      let formData = objectToFormData({
        ...this.priceQuotations.filterData,
      });

      try {
        const response = await apiPriceQuotation.getReportExport(formData);
        if (response.data.status == STATUS.SUCCESS) {
          if (response.data.reportPath) {
            this.reportUrl = getFullFilePathFromServer(
              response.data.reportPath
            );
          } else {
            this.showMsg(this.$t("Reports.noReports"));
          }
        } else {
          this.showMsg(response.data.msg);
        }
      } catch (error) {
        this.showMsg(this.$t("errorCatch"));
      }
      this.$emit("isLoading", false);
    },
  },
};
</script>

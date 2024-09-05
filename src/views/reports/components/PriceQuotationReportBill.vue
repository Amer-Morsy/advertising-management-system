<template>
  <CustomBottomSheet
    :refName="'PriceQuotationReportBill'"
    size="xl"
    :headerText="$t('PriceQuotations.reportBill')"
    :headerIcon="icon"
    @opened="getDialogs"
  >
    <div class="row">
      <CustomSelectBox
        :className="'col-md-12'"
        :id="`PriceQuotations-report-reportTemplateToken`"
        :errors="errors_reportTemplateToken"
        :value="priceQuotations.filterData.reportTemplateToken"
        :options="reportTemplateTokenOptions"
        v-on:changeValue="
          priceQuotations.filterData.reportTemplateToken = $event;
          $v.priceQuotations.filterData.reportTemplateToken.$touch();
        "
        :title="$t('ConstantsListSelect.ReportTemplates')"
        :imgName="'ReportTemplates.svg'"
      />
      <CustomSelectBox
        :className="'col-md-12'"
        :id="`sendRequest-emailTemplateToken`"
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

      <CustomInput
        :className="'col-md-12'"
        :id="`PriceQuotations-report-sendTo`"
        :value="priceQuotations.filterData.sendTo"
        v-on:changeValue="priceQuotations.filterData.sendTo = $event"
        :title="$t('Reports.sendTo')"
        :imgName="'email.svg'"
      />

      <CustomCheckbox
        :className="'col-md-12'"
        :value="priceQuotations.filterData.notShowHiddenProperties"
        v-on:changeValue="
          priceQuotations.filterData.notShowHiddenProperties = $event
        "
        :title="$t('PriceQuotations.notShowHiddenProperties')"
      />
    </div>

    <div class="form-actions">
      <div class="icon-submit" @click.prevent="getReportBill">
        <img
          src="@/assets/images/check-icon.svg"
          :title="$t('Reports.print')"
        />
      </div>

      <div
        @click.prevent="closeBottomSheet('PriceQuotationReportBill')"
        class="icon-cancel"
      >
        <img src="@/assets/images/cancel-icon.svg" :title="$t('cancel')" />
      </div>
    </div>
  </CustomBottomSheet>
</template>

<script>
import { mapGetters } from "vuex";
import CustomBottomSheet from "./../../../components/general/CustomBottomSheet.vue";
import CustomSelectBox from "./../../../components/general/CustomSelectBox.vue";
import CustomInput from "./../../../components/general/CustomInput.vue";
import CustomCheckbox from "./../../../components/general/CustomCheckbox.vue";
import { STATUS } from "./../../../utils/constants";
import { REPORT_TEMPLATE_TYPES } from "./../../../utils/constantLists";
import { viewFileFromServer } from "./../../../utils/functions";
import {
  getReportTemplatesDialog,
  getEmailTemplatesDialogCustomized,
} from "./../../../utils/dialogsOfApi";
import PriceQuotations from "./../../../models/products/priceQuotations/PriceQuotations";
import apiPriceQuotation from "./../../../api/products/priceQuotations";
import generalMixin from "./../../../utils/generalMixin";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import icon from "@/assets/images/receipt.svg";

export default {
  mixins: [generalMixin, validationMixin],
  data() {
    return {
      bottomSheetOpened: false,
      priceQuotations: new PriceQuotations(),
      emailTemplateTokenOptions: [],
      reportTemplateTokenOptions: [],
      icon,
    };
  },
  components: {
    CustomBottomSheet,
    CustomSelectBox,
    CustomInput,
    CustomCheckbox,
  },
  props: {
    token: {
      type: String,
      default: "",
    },
  },
  validations: {
    priceQuotations: {
      filterData: {
        reportTemplateToken: { required },
      },
    },
  },
  computed: {
    ...mapGetters(["userPersonalData"]),
    errors_reportTemplateToken() {
      let errors = [];
      if (this.$v.priceQuotations.filterData.reportTemplateToken.$error) {
        if (!this.$v.priceQuotations.filterData.reportTemplateToken.required)
          errors.push(this.$t("validation.fieldIsRequired"));
      }
      return errors;
    },
  },
  methods: {
    async getDialogs() {
      this.priceQuotations.filterData;
      this.priceQuotations.filterData.token = this.token;
      if (!this.bottomSheetOpened) {
        this.getReportTemplatesDialog();
        this.getEmailTemplatesDialog();
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
      this.exceptionMsg = error;
      this.isLoading = false;
    },
    async getReportTemplatesDialog() {
      this.$emit("isLoading", true);
      this.reportTemplateTokenOptions = await getReportTemplatesDialog({
        reportTemplateTypeToken: REPORT_TEMPLATE_TYPES.Bill,
      });
      this.$emit("isLoading", false);
    },

    async getReportBill() {
      this.$emit("isLoading", true);
      this.$v.$touch();
      if (this.$v.priceQuotations.filterData.reportTemplateToken.required) {
        try {
          const response = await apiPriceQuotation.getReportBill(
            this.priceQuotations.filterData
          );
          if (response.data.status == STATUS.SUCCESS) {
            this.showMsg(response.data.msg, true);
            this.closeBottomSheet("PriceQuotationReportBill");
            viewFileFromServer(response.data.reportPath);
          } else {
            this.showMsg(response.data.msg);
          }
        } catch (error) {
          this.showMsg(this.$t("errorCatch"));
        }
      }
      this.$emit("isLoading", false);
    },
  },
};
</script>

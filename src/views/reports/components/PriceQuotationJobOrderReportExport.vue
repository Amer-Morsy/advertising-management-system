<template>
  <CustomBottomSheet
    :refName="'PriceQuotationJobOrderReportExport'"
    size="xl"
    :headerText="$t('PriceQuotationJobOrders.report')"
    :headerIcon="priceQuotationJobOrders.priceQuotationJobOrder.icon"
    @opened="getDialogs"
  >
    <div class="row">
      <CustomSelectBox
        :className="'col-md-12'"
        :id="`PriceQuotations-report-reportTemplateToken`"
        :errors="errors_reportTemplateToken"
        :value="priceQuotationJobOrders.filterData.reportTemplateToken"
        :options="reportTemplateTokenOptions"
        v-on:changeValue="
          priceQuotationJobOrders.filterData.reportTemplateToken = $event;
          $v.priceQuotationJobOrders.filterData.reportTemplateToken.$touch();
        "
        :title="$t('ConstantsListSelect.ReportTemplates')"
        :imgName="'ReportTemplates.svg'"
      />

      <CustomInput
        :className="'col-md-12'"
        :id="`PriceQuotations-report-sendTo`"
        :value="priceQuotationJobOrders.filterData.sendTo"
        v-on:changeValue="priceQuotationJobOrders.filterData.sendTo = $event"
        :title="$t('Reports.sendTo')"
        :imgName="'email.svg'"
      />

      <CustomCheckbox
        :className="'col-md-12'"
        :value="priceQuotationJobOrders.filterData.notShowHiddenProperties"
        v-on:changeValue="
          priceQuotationJobOrders.filterData.notShowHiddenProperties = $event
        "
        :title="$t('PriceQuotations.notShowHiddenProperties')"
      />
    </div>

    <div class="form-actions">
      <div class="icon-submit" @click.prevent="getReportExport">
        <img
          src="@/assets/images/check-icon.svg"
          :title="$t('Reports.print')"
        />
      </div>

      <div
        @click.prevent="closeBottomSheet('PriceQuotationJobOrderReportExport')"
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
import CustomCheckbox from "./../../../components/general/CustomCheckbox.vue";
import { STATUS } from "./../../../utils/constants";
import { REPORT_TEMPLATE_TYPES } from "./../../../utils/constantLists";
import { viewFileFromServer } from "./../../../utils/functions";
import { getReportTemplatesDialog } from "./../../../utils/dialogsOfApi";
import PriceQuotationJobOrders from "./../../../models/products/priceQuotationJobOrders/PriceQuotationJobOrders";
import apiPriceQuotationJobOrder from "./../../../api/products/priceQuotationJobOrders";
import generalMixin from "./../../../utils/generalMixin";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [generalMixin, validationMixin],
  data() {
    return {
      bottomSheetOpened: false,
      priceQuotationJobOrders: new PriceQuotationJobOrders(),
      reportTemplateTokenOptions: [],
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
    priceQuotationJobOrders: {
      filterData: {
        reportTemplateToken: { required },
      },
    },
  },
  computed: {
    errors_reportTemplateToken() {
      let errors = [];
      if (
        this.$v.priceQuotationJobOrders.filterData.reportTemplateToken.$error
      ) {
        if (
          !this.$v.priceQuotationJobOrders.filterData.reportTemplateToken
            .required
        )
          errors.push(this.$t("validation.fieldIsRequired"));
      }
      return errors;
    },
  },
  methods: {
    async getDialogs() {
      this.priceQuotationJobOrders.filterData.token = this.token;
      if (!this.bottomSheetOpened) {
        this.getReportTemplatesDialog();
        this.bottomSheetOpened = true;
      }
    },
    async getReportTemplatesDialog() {
      this.$emit("isLoading", true);
      this.reportTemplateTokenOptions = await getReportTemplatesDialog({
        reportTemplateTypeToken: REPORT_TEMPLATE_TYPES.JobOrder,
      });
      this.$emit("isLoading", false);
    },

    async getReportExport() {
      this.$emit("isLoading", true);
      this.$v.$touch();
      if (
        this.$v.priceQuotationJobOrders.filterData.reportTemplateToken.required
      ) {
        try {
          const response = await apiPriceQuotationJobOrder.getReportExport(
            this.priceQuotationJobOrders.filterData
          );
          if (response.data.status == STATUS.SUCCESS) {
            this.showMsg(response.data.msg, true);
            this.closeBottomSheet("PriceQuotationJobOrderReportExport");
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

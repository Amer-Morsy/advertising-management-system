<template>
  <CustomBottomSheet
    :refName="'CusomersClosedJobReport'"
    size="xl"
    :headerText="$t('Reports.CusomersClosedJobsReport')"
    :headerIcon="priceQuotationJobOrders.priceQuotationJobOrder.icon"
    @opened="reportUrl = ''"
  >
    <div class="report-container">
      <div class="row report-filter">
        <CustomInput
          :className="'col-md-12'"
          :id="`CusomersClosedJobs-report-sendTo`"
          :value="priceQuotationJobOrders.filterData.sendTo"
          v-on:changeValue="priceQuotationJobOrders.filterData.sendTo = $event"
          :title="$t('Reports.sendTo')"
          :imgName="'email.svg'"
        />
        <DateTimePicker
          class="col-md-6"
          id="CusomersClosedJobs-report-creationDateTimeFrom"
          type="dateTime"
          :value="priceQuotationJobOrders.filterData.creationDateTimeFrom"
          v-on:changeValue="
            priceQuotationJobOrders.filterData.creationDateTimeFrom =
              $event.dateTime
          "
          :title="$t('Reports.dateTimeFrom')"
          :language="language"
        />
        <DateTimePicker
          class="col-md-6"
          id="CusomersClosedJobs-report-creationDateTimeTo"
          type="dateTime"
          :value="priceQuotationJobOrders.filterData.creationDateTimeTo"
          v-on:changeValue="
            priceQuotationJobOrders.filterData.creationDateTimeTo =
              $event.dateTime
          "
          :title="$t('Reports.dateTimeTo')"
          :language="language"
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
      <div class="icon-submit" @click.prevent="getReport">
        <img
          src="@/assets/images/check-icon.svg"
          :title="$t('Reports.print')"
        />
      </div>

      <div
        @click.prevent="closeBottomSheet('CusomersClosedJobReport')"
        class="icon-cancel"
      >
        <img src="@/assets/images/cancel-icon.svg" :title="$t('cancel')" />
      </div>
    </div>
  </CustomBottomSheet>
</template>

<script>
import CustomBottomSheet from "./../../../components/general/CustomBottomSheet.vue";
import CustomInput from "./../../../components/general/CustomInput.vue";
import DateTimePicker from "./../../../components/general/DateTimePicker.vue";
import { STATUS } from "./../../../utils/constants";
import {
  getLanguage,
  getFullFilePathFromServer,
} from "./../../../utils/functions";
import PriceQuotationJobOrders from "./../../../models/products/priceQuotationJobOrders/PriceQuotationJobOrders";
import apiPriceQuotationJobOrder from "./../../../api/products/priceQuotationJobOrders";
import generalMixin from "./../../../utils/generalMixin";

export default {
  mixins: [generalMixin],
  data() {
    return {
      reportUrl: "",
      language: getLanguage(),
      priceQuotationJobOrders: new PriceQuotationJobOrders(),
    };
  },
  components: {
    CustomBottomSheet,
    CustomInput,
    DateTimePicker,
  },
  methods: {
    async getReport() {
      this.$emit("isLoading", true);
      this.reportUrl = "";
      try {
        const response =
          await apiPriceQuotationJobOrder.getCusomersClosedJobReport(
            this.priceQuotationJobOrders.filterData
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
  },
};
</script>

<template>
  <CustomBottomSheet
    :refName="'PriceQuotationReportSalesStatistics'"
    size="xl"
    :headerText="$t('Reports.SalesStatisticsReport')"
    :headerIcon="icon"
    @opened="reportUrl = ''"
  >
    <div class="report-container">
      <div class="row report-filter">
        <DateTimePicker
          class="col-md-6"
          id="SalesStatisticsReport-report-creationDateTimeFrom"
          type="dateTime"
          :value="priceQuotations.filterData.creationDateTimeFrom"
          v-on:changeValue="
            priceQuotations.filterData.creationDateTimeFrom = $event.dateTime
          "
          :title="$t('Reports.dateTimeFrom')"
          :language="language"
        />
        <DateTimePicker
          class="col-md-6"
          id="SalesStatisticsReport-report-creationDateTimeTo"
          type="dateTime"
          :value="priceQuotations.filterData.creationDateTimeTo"
          v-on:changeValue="
            priceQuotations.filterData.creationDateTimeTo = $event.dateTime
          "
          :title="$t('Reports.dateTimeTo')"
          :language="language"
        />

        <CustomInput
          :className="'col-md-12'"
          :id="`SalesStatisticsReport-report-sendTo`"
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
        @click.prevent="closeBottomSheet('PriceQuotationReportSalesStatistics')"
        class="icon-cancel"
      >
        <img src="@/assets/images/cancel-icon.svg" :title="$t('cancel')" />
      </div>
    </div>
  </CustomBottomSheet>
</template>

<script>
import CustomBottomSheet from "./../../../components/general/CustomBottomSheet.vue";
import DateTimePicker from "./../../../components/general/DateTimePicker.vue";
import CustomInput from "./../../../components/general/CustomInput.vue";
import { STATUS } from "./../../../utils/constants";
import {
  getLanguage,
  getFullFilePathFromServer,
} from "./../../../utils/functions";
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
      language: getLanguage(),
      priceQuotations: new PriceQuotations(),
      priceQuotationHistoryWorkTypeTokenOptions:
        getDialogOfPriceQuotationsHistoryWorkType(),
      placeTokensOptions: [],
      reportTemplateTokenOptions: [],
      userTokenOptions: [],
      icon,
    };
  },
  components: {
    CustomBottomSheet,
    DateTimePicker,
    CustomInput,
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
    async getReport() {
      this.$emit("isLoading", true);
      this.reportUrl = "";
      try {
        const response = await apiPriceQuotation.getReportSalesStatistics(
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
  },
};
</script>

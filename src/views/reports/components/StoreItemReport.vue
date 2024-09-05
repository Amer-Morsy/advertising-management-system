<template>
  <CustomBottomSheet
    :refName="'StoreItemReport'"
    size="xl"
    :headerText="$t('Reports.StoreItemsReport')"
    :headerIcon="storeItems.storeItem.icon"
    @opened="reportUrl = ''"
  >
    <div class="report-container">
      <div class="row report-filter">
        <CustomInput
          :className="'col-md-12'"
          :id="`StoreItems-report-sendTo`"
          :value="storeItems.filterData.sendTo"
          v-on:changeValue="storeItems.filterData.sendTo = $event"
          :title="$t('Reports.sendTo')"
          :imgName="'email.svg'"
        />
        <DateTimePicker
          class="col-md-6"
          id="StoreItems-report-priceQuotationFromDateTime"
          type="dateTime"
          :value="storeItems.filterData.priceQuotationFromDateTime"
          v-on:changeValue="
            storeItems.filterData.priceQuotationFromDateTime = $event.dateTime
          "
          :title="$t('Reports.dateTimeFrom')"
          :language="language"
        />
        <DateTimePicker
          class="col-md-6"
          id="StoreItems-report-priceQuotationToDateTime"
          type="dateTime"
          :value="storeItems.filterData.priceQuotationToDateTime"
          v-on:changeValue="
            storeItems.filterData.priceQuotationToDateTime = $event.dateTime
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
        @click.prevent="closeBottomSheet('StoreItemReport')"
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
import StoreItems from "./../../../models/products/storeItems/StoreItems";
import apiStoreItem from "./../../../api/products/storeItems";
import generalMixin from "./../../../utils/generalMixin";

export default {
  mixins: [generalMixin],
  data() {
    return {
      reportUrl: "",
      language: getLanguage(),
      storeItems: new StoreItems(),
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
        const response = await apiStoreItem.getReport(
          this.storeItems.filterData
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

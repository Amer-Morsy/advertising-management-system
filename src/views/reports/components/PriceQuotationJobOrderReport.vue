<template>
  <CustomBottomSheet
    :refName="'PriceQuotationJobOrderReport'"
    size="xl"
    :headerText="$t('Reports.PriceQuotationJobOrdersReport')"
    :headerIcon="priceQuotationJobOrders.priceQuotationJobOrder.icon"
    @opened="getDialogs"
  >
    <div class="report-container">
      <div class="row report-filter">
        <CustomSelectBox
          :className="'col-md-12'"
          :id="`PriceQuotations-report-jobOrderHistoryWorkTypeToken`"
          :value="
            priceQuotationJobOrders.filterData.jobOrderHistoryWorkTypeToken
          "
          :options="jobOrderHistoryWorkTypeTokenOptions"
          v-on:changeValue="
            priceQuotationJobOrders.filterData.jobOrderHistoryWorkTypeToken =
              $event
          "
          :title="$t('PriceQuotationJobOrders.status')"
          :imgName="`type.svg`"
        />

        <CustomSelectBox
          :className="'col-md-12'"
          :id="`PriceQuotationJobOrders-report-requestPlaceToken`"
          :value="priceQuotationJobOrders.filterData.requestPlaceToken"
          :options="placeTokenOptions"
          v-on:changeValue="
            priceQuotationJobOrders.filterData.requestPlaceToken = $event;
            getPriceQuotationsDialog();
          "
          :title="$t('clients.select')"
          :imgName="'places.svg'"
        />
        <CustomSelectBox
          :className="'col-md-12'"
          :id="`PriceQuotationJobOrders-report-priceQuotationToken`"
          :value="priceQuotationJobOrders.filterData.priceQuotationToken"
          :options="priceQuotationTokenOptions"
          v-on:changeValue="
            priceQuotationJobOrders.filterData.priceQuotationToken = $event
          "
          :title="$t('PriceQuotations.select')"
          :imgName="'PriceQuotations.svg'"
        />

        <CustomInput
          :className="'col-md-12'"
          :id="`PriceQuotationJobOrders-report-sendTo`"
          :value="priceQuotationJobOrders.filterData.sendTo"
          v-on:changeValue="priceQuotationJobOrders.filterData.sendTo = $event"
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
      <div class="icon-submit" @click.prevent="getReport">
        <img
          src="@/assets/images/check-icon.svg"
          :title="$t('Reports.print')"
        />
      </div>

      <div
        @click.prevent="closeBottomSheet('PriceQuotationJobOrderReport')"
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
import { STATUS } from "./../../../utils/constants";
import { getFullFilePathFromServer } from "./../../../utils/functions";
import {
  PRICE_QUOTATION_HISTORY_WORK_TYPES,
  PLACE_TYPE_TOKENS,
} from "./../../../utils/constantLists";

import {
  getPriceQuotationsDialogCustomized,
  getPlacesDialog,
} from "./../../../utils/dialogsOfApi";
import { getDialogOfJobOrderHistoryWorkType } from "./../../../utils/dialogsOfConstantsLists";
import PriceQuotationJobOrders from "./../../../models/products/priceQuotationJobOrders/PriceQuotationJobOrders";
import apiPriceQuotationJobOrder from "./../../../api/products/priceQuotationJobOrders";
import generalMixin from "./../../../utils/generalMixin";

export default {
  mixins: [generalMixin],
  data() {
    return {
      reportUrl: "",
      bottomSheetOpened: false,
      priceQuotationJobOrders: new PriceQuotationJobOrders(),
      jobOrderHistoryWorkTypeTokenOptions: getDialogOfJobOrderHistoryWorkType(),
      priceQuotationTokenOptions: [],
      placeTokenOptions: [],
    };
  },
  components: {
    CustomBottomSheet,
    CustomSelectBox,
    CustomInput,
  },
  methods: {
    getDialogs() {
      this.reportUrl = "";
      if (!this.bottomSheetOpened) {
        this.getPriceQuotationsDialog();
        this.getPlacesDialog();
        this.bottomSheetOpened = true;
      }
    },
    async getPriceQuotationsDialog() {
      this.$emit("isLoading", true);
      let params = {
        priceQuotationHistoryWorkTypeToken:
          PRICE_QUOTATION_HISTORY_WORK_TYPES.AcceptQuotesFormCustomer,
        requestPlaceToken:
          this.priceQuotationJobOrders.filterData.requestPlaceToken,
      };
      this.priceQuotationTokenOptions =
        await getPriceQuotationsDialogCustomized(params);
      this.$emit("isLoading", false);
    },
    async getPlacesDialog() {
      this.$emit("isLoading", true);
      let params = { placeTypeToken: PLACE_TYPE_TOKENS.Client };
      this.placeTokenOptions = await getPlacesDialog(params);
      this.$emit("isLoading", false);
    },
    async getReport() {
      this.$emit("isLoading", true);
      this.reportUrl = "";
      try {
        const response = await apiPriceQuotationJobOrder.getReport(
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

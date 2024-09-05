<template>
  <b-tabs v-if="theOptions" content-class="">
    <b-tab
      v-for="(option, index) in theOptions"
      :key="index"
      @click="
        filter(option.itemToken);
        currentTab = option.currentTab;
      "
      :title-item-class="'custom-tab-outer-li'"
      :active="currentTab == option.currentTab ? true : false"
    >
      <template #title>
        <span v-b-popover.hover.bottomright="`${option.itemName}`">
          <span class="badge badge-dark">
            {{ option.count }}
          </span>
          <img
            v-if="currentTab == option.currentTab"
            :src="`${option.itemImagePathActive}`"
            class="icon-tab"
          />
          <img v-else :src="`${option.itemImagePath}`" class="icon-tab" />
          <span class="cut-1line">{{ option.itemName }}</span>
        </span>
      </template>
    </b-tab>
  </b-tabs>
</template>

<script>
import { checkPrivilege } from "./../../../../utils/functions";
import {
  hasPriceQuotationNewlyWanted,
  hasPriceQuotationWaitingForSupplier,
  hasPriceQuotationCanceled,
  hasPriceQuotationWaitingForCustomerAccept,
} from "./../../../../utils/privilegeHelper";
import imgNewlyWanted from "@/assets/images/PriceQuotations_NewlyWanted.svg";
import imgNewlyWantedA from "@/assets/images/PriceQuotations_NewlyWantedA.svg";
import imgWaitingForSupplier from "@/assets/images/PriceQuotations_WaitingForSupplier.svg";
import imgWaitingForSupplierA from "@/assets/images/PriceQuotations_WaitingForSupplierA.svg";
import imgWaitingForCustomerAccept from "@/assets/images/PriceQuotations_WaitingForCustomerAccepts.svg";
import imgWaitingForCustomerAcceptA from "@/assets/images/PriceQuotations_WaitingForCustomerAcceptA.svg";
import imgCanceled from "@/assets/images/PriceQuotations_Canceled.svg";
import imgCanceledA from "@/assets/images/PriceQuotations_Canceled.svg";

import { PRICE_QUOTATION_HISTORY_WORK_TYPES } from "./../../../../utils/constantLists";

export default {
  name: "CountedServiceTransactionsTabs",
  props: {
    theFilterData: {
      type: Object,
    },
    statistics: {
      type: Object,
    },
    tabNumber: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentTab: "",
      filterData: this.theFilterData,
    };
  },
  computed: {
    theOptions() {
      let tabOptions = [];

      if (this.tabNumber == 1) {
        if (checkPrivilege(hasPriceQuotationNewlyWanted())) {
          tabOptions.push({
            itemToken: PRICE_QUOTATION_HISTORY_WORK_TYPES.NewlyWanted,
            itemName: this.$t("PriceQuotationHistoryWorkType.NewlyWanted"),
            itemImagePath: imgNewlyWanted,
            itemImagePathActive: imgNewlyWantedA,
            currentTab: "NewlyWanted",
            count: this.statistics.totalNewlyWanted,
          });
        }

        if (checkPrivilege(hasPriceQuotationWaitingForSupplier())) {
          tabOptions.push({
            itemToken: PRICE_QUOTATION_HISTORY_WORK_TYPES.WaitingForSupplier,
            itemName: this.$t(
              "PriceQuotationHistoryWorkType.WaitingForSupplier"
            ),
            itemImagePath: imgWaitingForSupplier,
            itemImagePathActive: imgWaitingForSupplierA,
            currentTab: "WaitingForSupplier",
            count: this.statistics.totalWaitingForSupplier,
          });
        }

        if (checkPrivilege(hasPriceQuotationWaitingForCustomerAccept())) {
          tabOptions.push({
            itemToken:
              PRICE_QUOTATION_HISTORY_WORK_TYPES.WaitingForCustomerAccept,
            itemName: this.$t(
              "PriceQuotationHistoryWorkType.WaitingForCustomerAccept"
            ),
            itemImagePath: imgWaitingForCustomerAccept,
            itemImagePathActive: imgWaitingForCustomerAcceptA,
            currentTab: "WaitingForCustomerAccept",
            count: this.statistics.totalWaitingForCustomerAccept,
          });
        }

        if (checkPrivilege(hasPriceQuotationCanceled())) {
          tabOptions.push({
            itemToken: PRICE_QUOTATION_HISTORY_WORK_TYPES.Canceled,
            itemName: this.$t("PriceQuotationHistoryWorkType.Canceled"),
            itemImagePath: imgCanceled,
            itemImagePathActive: imgCanceledA,
            currentTab: "Canceled",
            count: this.statistics.totalCanceledbyCustomer,
          });
        }
      }

      return tabOptions;
    },
  },
  methods: {
    filter(token) {
      if (this.filterData.priceQuotationHistoryWorkTypeToken != token) {
        this.filterData.priceQuotationHistoryWorkTypeToken = token;
        this.$emit("search", this.filterData);
      }
    },
    setCurrentTab() {
      if (this.tabNumber == 1) {
        if (checkPrivilege(hasPriceQuotationNewlyWanted()))
          this.currentTab = "NewlyWanted";
        else if (checkPrivilege(hasPriceQuotationWaitingForCustomerAccept()))
          this.currentTab = "WaitingForCustomerAccept";
        else if (checkPrivilege(hasPriceQuotationCanceled()))
          this.currentTab = "Canceled";
        else if (checkPrivilege(hasPriceQuotationWaitingForSupplier()))
          this.currentTab = "WaitingForSupplier";
        else this.currentTab = "";
      }
    },
    currentTabUpdated() {
      this.$emit("currentTabUpdated", this.currentTab);
    },
  },
  watch: {
    currentTab() {
      this.currentTabUpdated();
    },
  },
  async created() {
    this.setCurrentTab();
  },
};
</script>

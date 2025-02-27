<template>
  <CustomBottomSheet
    :refName="'filterSheet'"
    size="lg"
    :headerText="$t('filter')"
    :headerIcon="icon"
  >
    <div class="row">
      <CustomSelectBox
        :className="'col-md-12'"
        :id="`requestPlaceToken`"
        :value="filterData.requestPlaceToken"
        :options="placeTokenOptions"
        v-on:changeValue="
          filterData.requestPlaceToken = $event;
          getPriceQuotationsDialog();
        "
        :title="$t('clients.select')"
        :imgName="'places.svg'"
      />
      <CustomSelectBox
        :className="'col-md-12'"
        :id="`priceQuotationToken`"
        :value="filterData.priceQuotationToken"
        :options="priceQuotationTokenOptions"
        v-on:changeValue="filterData.priceQuotationToken = $event"
        :title="$t('PriceQuotations.select')"
        :imgName="'PriceQuotations.svg'"
      />
    </div>
    <CustomBaseEntityFilter
      :className="'row'"
      :value="filterData"
      v-on:changeValue="filterData.fillData($event)"
    />

    <div class="form-actions">
      <div class="icon-submit" @click.prevent="search">
        <img src="@/assets/images/search-icon.svg" :title="$t('search')" />
      </div>
      <div @click.prevent="closeBottomSheet('filterSheet')" class="icon-cancel">
        <img src="@/assets/images/cancel-icon.svg" :title="$t('cancel')" />
      </div>
    </div>
  </CustomBottomSheet>
</template>

<script>
import CustomBottomSheet from "./../../../../components/general/CustomBottomSheet.vue";
import CustomSelectBox from "./../../../../components/general/CustomSelectBox.vue";
import CustomBaseEntityFilter from "./../../../../components/general/CustomBaseEntityFilter.vue";
import generalMixin from "./../../../../utils/generalMixin";
import {
  PRICE_QUOTATION_HISTORY_WORK_TYPES,
  PLACE_TYPE_TOKENS,
} from "./../../../../utils/constantLists";

import {
  getPriceQuotationsDialogCustomized,
  getPlacesDialog,
} from "./../../../../utils/dialogsOfApi";
import icon from "@/assets/images/filter.svg";

export default {
  mixins: [generalMixin],
  props: {
    theFilterData: {
      type: Object,
    },
  },
  data() {
    return {
      filterData: this.theFilterData,
      icon,
      priceQuotationTokenOptions: [],
      placeTokenOptions: [],
    };
  },
  components: {
    CustomBottomSheet,
    CustomSelectBox,
    CustomBaseEntityFilter,
  },
  methods: {
    async getPriceQuotationsDialog() {
      this.$emit("isLoading", true);
      let params = {
        priceQuotationHistoryWorkTypeToken:
          PRICE_QUOTATION_HISTORY_WORK_TYPES.AcceptQuotesFormCustomer,
        requestPlaceToken: this.filterData.requestPlaceToken,
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
    search() {
      this.closeBottomSheet("filterSheet");
      this.$emit("search", this.filterData);
    },
  },
  async created() {
    this.getPriceQuotationsDialog();
    this.getPlacesDialog();
  },
};
</script>

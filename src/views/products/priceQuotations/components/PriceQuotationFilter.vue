<template>
  <CustomBottomSheet
    :refName="'filterSheet'"
    size="lg"
    :headerText="$t('filter')"
    :headerIcon="icon"
    @opened="getDialogs"
  >
    <div class="row">
      <CustomSelectBox
        :className="'col-md-6'"
        :id="`filterData-reportTemplateToken`"
        :value="filterData.reportTemplateToken"
        :options="reportTemplateTokenOptions"
        v-on:changeValue="filterData.reportTemplateToken = $event"
        :title="$t('ConstantsListSelect.ReportTemplates')"
        :imgName="'ReportTemplates.svg'"
      />
      <CustomSelectBox
        :className="'col-md-6'"
        :id="`filterData-requestPlaceToken`"
        :value="filterData.requestPlaceToken"
        :options="placeTokensOptions"
        v-on:changeValue="filterData.requestPlaceToken = $event"
        :title="$t('clients.select')"
        :imgName="'places.svg'"
      />

      <CustomSelectBox
        :className="'col-md-12'"
        :id="`filterData-usersSalesToken`"
        :value="filterData.usersSalesToken"
        :options="userTokenOptions"
        v-on:changeValue="filterData.usersSalesToken = $event"
        :title="$t('sales.select')"
        :imgName="'sales.svg'"
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
import CustomBaseEntityFilter from "./../../../../components/general/CustomBaseEntityFilter.vue";
import CustomSelectBox from "./../../../../components/general/CustomSelectBox.vue";
import {
  USER_TYPE,
  PLACE_TYPE_TOKENS,
  REPORT_TEMPLATE_TYPES,
} from "./../../../../utils/constantLists";
import {
  getPlacesDialog,
  getReportTemplatesDialog,
  getUsersDialog,
} from "./../../../../utils/dialogsOfApi";
import generalMixin from "./../../../../utils/generalMixin";
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
      bottomSheetOpened: false,
      placeTokensOptions: [],
      reportTemplateTokenOptions: [],
      userTokenOptions: [],
    };
  },
  components: {
    CustomBottomSheet,
    CustomBaseEntityFilter,
    CustomSelectBox,
  },
  methods: {
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
    getDialogs() {
      if (!this.bottomSheetOpened) {
        this.getPlacesDialog();
        this.getReportTemplatesDialog();
        this.getUsersDialog();
        this.bottomSheetOpened = true;
      }
    },

    search() {
      this.closeBottomSheet("filterSheet");
      this.$emit("search", this.filterData);
    },
  },
};
</script>

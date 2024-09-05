<template>
  <div class="">
    <DashboardNavbar
      v-on:updateViewType="updateViewType('educationalCategories', $event)"
      :viewType="generalSetting.educationalCategories.viewType"
      :viewTypeStatus="true"
      v-on:updateActivationTypeTokens="changeActivationType($event)"
      :activationTypeTokens="
        generalSetting.educationalCategories.activationTypeTokens
      "
      :activationTypesTokensOptions="activationTypesTokensOptions"
      :activationTypeStatus="true"
      :btnAddTitle="$t('EducationalCategories.add')"
      :btnAddName="'EducationalCategoryAdd'"
      :btnAddStatus="checkPrivilege(hasEducationalCategoryAdd())"
      :filterSheetName="'filterSheet'"
      :filterSheetStatus="true"
    />
    <PreLoader v-if="isLoading" />

    <div class="app-content pagination-with-content">
      <EducationalCategoryTabs />

      <template v-if="hasData">
        <EducationalCategoryTable
          v-if="
            generalSetting.educationalCategories.viewType == VIEW_TYPES.table
          "
          v-on:setEducationalCategoryData="
            educationalCategories.educationalCategory.fillData($event)
          "
          :educationalCategoriesData="
            educationalCategories.educationalCategoriesData
          "
          :defaultImg="educationalCategories.educationalCategory.defaultImg"
          :filterData="educationalCategories.filterData"
        />

        <EducationalCategoryCards
          v-else-if="
            generalSetting.educationalCategories.viewType == VIEW_TYPES.cards
          "
          v-on:setEducationalCategoryData="
            educationalCategories.educationalCategory.fillData($event)
          "
          :educationalCategoriesData="
            educationalCategories.educationalCategoriesData
          "
          :defaultImg="educationalCategories.educationalCategory.defaultImg"
          :filterData="educationalCategories.filterData"
        />

        <ActionsData :actionsData="educationalCategories.educationalCategory" />
        <EducationalCategoryInfo
          :educationalCategory="educationalCategories.educationalCategory"
        />
        <EducationalCategoryDelete
          :educationalCategory="educationalCategories.educationalCategory"
          v-on:refresh="getAllEducationalCategories()"
        />
        <EducationalCategoryChangeActivationType
          :educationalCategory="educationalCategories.educationalCategory"
          v-on:refresh="getAllEducationalCategories()"
        />
        <CustomBottomSheetQRCode
          :refName="'EducationalCategoryQRCode'"
          :code="educationalCategories.educationalCategory.fullCode"
          :codeTitle="$t('EducationalCategories.code')"
          :name="
            educationalCategories.educationalCategory
              .educationalCategoryNameCurrent
          "
          :nameTitle="$t('EducationalCategories.name')"
          :nameIcon="'EducationalCategories.svg'"
        />
      </template>
      <ExceptionWithImg
        v-if="exceptionMsg"
        :msg="exceptionMsg"
        :image="exceptionImg"
      />
      <CustomPagination
        v-if="hasData"
        :paginationData="educationalCategories.filterData"
        v-on:changePagination="changePagination($event)"
      />
      <EducationalCategoryFilter
        :theFilterData="educationalCategories.filterData"
        v-on:search="search($event)"
      />

      <EducationalCategoryAdd
        :educationalCategory="educationalCategories.educationalCategory"
        v-on:refresh="getAllEducationalCategories()"
      />
      <EducationalCategoryUpdate
        :educationalCategory="educationalCategories.educationalCategory"
        v-on:refresh="getAllEducationalCategories()"
      />
    </div>
  </div>
</template>

<script>
import { STATUS, VIEW_TYPES } from "./../../../utils/constants";
import { ACTIVATION_TYPE } from "./../../../utils/constantLists";
import DashboardNavbar from "./../../../layouts/components/DashboardNavbar.vue";
import PreLoader from "./../../../components/general/PreLoader.vue";
import ExceptionWithImg from "./../../../components/general/ExceptionWithImg.vue";
import ActionsData from "./../../../components/general/ActionsData.vue";
import CustomBottomSheetQRCode from "./../../../components/general/CustomBottomSheetQRCode.vue";
import CustomPagination from "./../../../components/general/CustomPagination.vue";
import EducationalCategoryAdd from "./components/EducationalCategoryAdd.vue";
import EducationalCategoryUpdate from "./components/EducationalCategoryUpdate.vue";
import EducationalCategoryCards from "./components/EducationalCategoryCards.vue";
import EducationalCategoryTable from "./components/EducationalCategoryTable.vue";
import EducationalCategoryTabs from "./components/EducationalCategoryTabs.vue";
import EducationalCategoryInfo from "./components/EducationalCategoryInfo.vue";
import EducationalCategoryDelete from "./components/EducationalCategoryDelete.vue";
import EducationalCategoryChangeActivationType from "./components/EducationalCategoryChangeActivationType.vue";
import EducationalCategoryFilter from "./components/EducationalCategoryFilter.vue";
import EducationalCategories from "./../../../models/educational/educationalCategories/EducationalCategories";
import apiEducationalCategory from "./../../../api/educational/educationalCategories";
import { getDialogOfActivationTypes } from "./../../../utils/dialogsOfConstantsLists";
import generalMixin from "./../../../utils/generalMixin";
import generalSettingsMixin from "./../../../utils/generalSettingsMixin";
import { checkPrivilege } from "./../../../utils/functions";
import {
  hasEducationalCategoryAdd,
  hasEducationalCategoryViewActive,
  hasEducationalCategoryViewArchive,
  hasEducationalCategoryViewBlocked,
} from "./../../../utils/privilegeHelper";

export default {
  mixins: [generalMixin, generalSettingsMixin],
  components: {
    DashboardNavbar,
    PreLoader,
    ExceptionWithImg,
    ActionsData,
    CustomBottomSheetQRCode,
    CustomPagination,
    EducationalCategoryAdd,
    EducationalCategoryUpdate,
    EducationalCategoryCards,
    EducationalCategoryTable,
    EducationalCategoryTabs,
    EducationalCategoryInfo,
    EducationalCategoryDelete,
    EducationalCategoryChangeActivationType,
    EducationalCategoryFilter,
  },
  props: {
    parentEducationalCategoryToken: {
      type: String,
      default: "",
    },
  },
  computed: {
    hasData() {
      return this.educationalCategories.educationalCategoriesData.length != 0;
    },
    activationTypesTokensOptions: function () {
      let arr = [];
      if (checkPrivilege(hasEducationalCategoryViewActive())) {
        let obj = this.activationTypesTokenOptions.find(
          (e) => e.value === ACTIVATION_TYPE.Active
        );
        obj.totalNumber =
          this.educationalCategories.activationStatistics.totalActiveCount || 0;
        if (obj) arr.push(obj);
      }
      if (checkPrivilege(hasEducationalCategoryViewArchive())) {
        let obj = this.activationTypesTokenOptions.find(
          (e) => e.value === ACTIVATION_TYPE.Archived
        );
        obj.totalNumber =
          this.educationalCategories.activationStatistics.totalArchivedCount ||
          0;
        if (obj) arr.push(obj);
      }
      if (checkPrivilege(hasEducationalCategoryViewBlocked())) {
        let obj = this.activationTypesTokenOptions.find(
          (e) => e.value === ACTIVATION_TYPE.Blocked
        );
        obj.totalNumber =
          this.educationalCategories.activationStatistics.totalBlockedCount ||
          0;
        if (obj) arr.push(obj);
      }
      return arr;
    },
  },
  data() {
    return {
      educationalCategories: new EducationalCategories(),
      VIEW_TYPES,
      activationTypesTokenOptions: getDialogOfActivationTypes(),
    };
  },
  methods: {
    checkPrivilege,
    hasEducationalCategoryAdd,
    changePagination(pagination) {
      this.educationalCategories.filterData.fillData(pagination);
      this.getAllEducationalCategories();
    },
    changeActivationType(data) {
      this.updateActivationTypeTokens("educationalCategories", data);
      this.educationalCategories.filterData.activationTypeTokens = data;
      this.getAllEducationalCategories();
    },
    search(data) {
      this.educationalCategories.filterData.fillData(data);
      this.getAllEducationalCategories();
    },
    async getAllEducationalCategories() {
      this.isLoading = true;
      try {
        this.educationalCategories.filterData.parentEducationalCategoryDataInclude = true;
        this.educationalCategories.filterData.gradingPlanDataInclude = true;
        this.educationalCategories.filterData.systemComponentDataInclude = true;
        this.educationalCategories.filterData.systemComponentsHierarchyDataInclude = true;
        this.educationalCategories.filterData.parentEducationalCategoryToken =
          this.parentEducationalCategoryToken;
        this.educationalCategories.filterData.getOnlyParentEducationalCategories =
          this.parentEducationalCategoryToken ? false : true;

        this.educationalCategories.educationalCategoriesData = [];
        const response = await apiEducationalCategory.getAll(
          this.educationalCategories.filterData
        );
        if (response.data.status == STATUS.SUCCESS) {
          this.exceptionMsg = null;
        } else if (response.data.status == STATUS.NO_INTERNET) {
          this.exceptionMsg = response.data.msg;
          this.exceptionImg = "illustrator-noInternet.svg";
        } else if (response.data.status == STATUS.NO_CONTENT) {
          this.exceptionMsg = response.data.msg;
          this.exceptionImg = "illustrator-noData.svg";
        } else if (response.data.status == STATUS.INVALID_TOKEN) {
          this.$store.dispatch("logoutUser", response.data.msg);
        } else {
          this.exceptionMsg = response.data.msg;
          this.exceptionImg = null;
        }
        this.educationalCategories.fillData(response.data);
      } catch (error) {
        this.exceptionMsg = this.$t("errorCatch");
        this.exceptionImg = null;
      }
      this.isLoading = false;
    },
  },
  watch: {
    parentEducationalCategoryToken: function () {
      this.getAllEducationalCategories();
    },
  },
  async created() {
    this.getAllEducationalCategories();
  },
};
</script>

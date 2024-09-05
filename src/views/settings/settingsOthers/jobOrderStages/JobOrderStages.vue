<template>
  <div class="">
    <DashboardNavbar
      v-on:updateViewType="updateViewType('jobOrderStages', $event)"
      :viewType="generalSetting.jobOrderStages.viewType"
      :viewTypeStatus="true"
      v-on:updateActivationTypeTokens="changeActivationType($event)"
      :activationTypeTokens="generalSetting.jobOrderStages.activationTypeTokens"
      :activationTypesTokensOptions="activationTypesTokensOptions"
      :activationTypeStatus="true"
      :btnAddTitle="$t('JobOrderStages.add')"
      :btnAddName="'JobOrderStageAdd'"
      :btnAddStatus="checkPrivilege(hasJobOrderStageAdd())"
      :filterSheetName="'filterSheet'"
      :filterSheetStatus="true"
    />
    <PreLoader v-if="isLoading" />

    <div class="app-content pagination-with-content">
      <template v-if="hasData">
        <JobOrderStageTable
          v-if="generalSetting.jobOrderStages.viewType == VIEW_TYPES.table"
          v-on:setJobOrderStageData="
            jobOrderStages.jobOrderStage.fillData($event)
          "
          :jobOrderStagesData="jobOrderStages.jobOrderStagesData"
          :defaultImg="jobOrderStages.jobOrderStage.defaultImg"
          :filterData="jobOrderStages.filterData"
        />

        <JobOrderStageCards
          v-else-if="generalSetting.jobOrderStages.viewType == VIEW_TYPES.cards"
          v-on:setJobOrderStageData="
            jobOrderStages.jobOrderStage.fillData($event)
          "
          :jobOrderStagesData="jobOrderStages.jobOrderStagesData"
          :defaultImg="jobOrderStages.jobOrderStage.defaultImg"
          :filterData="jobOrderStages.filterData"
        />

        <ActionsData :actionsData="jobOrderStages.jobOrderStage" />
        <JobOrderStageInfo :jobOrderStage="jobOrderStages.jobOrderStage" />
        <JobOrderStageDelete
          :jobOrderStage="jobOrderStages.jobOrderStage"
          v-on:refresh="getAllJobOrderStages()"
        />
        <JobOrderStageChangeActivationType
          :jobOrderStage="jobOrderStages.jobOrderStage"
          v-on:refresh="getAllJobOrderStages()"
        />
        <CustomBottomSheetQRCode
          :refName="'JobOrderStageQRCode'"
          :code="jobOrderStages.jobOrderStage.fullCode"
          :codeTitle="$t('JobOrderStages.code')"
          :name="jobOrderStages.jobOrderStage.jobOrderStageNameCurrent"
          :nameTitle="$t('JobOrderStages.name')"
          :nameIcon="'jobOrderStages.svg'"
        />
      </template>
      <ExceptionWithImg
        v-if="exceptionMsg"
        :msg="exceptionMsg"
        :image="exceptionImg"
      />
      <CustomPagination
        v-if="hasData"
        :paginationData="jobOrderStages.filterData"
        v-on:changePagination="changePagination($event)"
      />
      <JobOrderStageFilter
        :theFilterData="jobOrderStages.filterData"
        v-on:search="search($event)"
      />

      <JobOrderStageAdd
        :jobOrderStage="jobOrderStages.jobOrderStage"
        v-on:refresh="getAllJobOrderStages()"
      />
      <JobOrderStageUpdate
        :jobOrderStage="jobOrderStages.jobOrderStage"
        v-on:refresh="getAllJobOrderStages()"
      />
    </div>
  </div>
</template>

<script>
import { STATUS, VIEW_TYPES } from "./../../../../utils/constants";
import { ACTIVATION_TYPE } from "./../../../../utils/constantLists";
import DashboardNavbar from "./../../../../layouts/components/DashboardNavbar.vue";
import PreLoader from "./../../../../components/general/PreLoader.vue";
import ExceptionWithImg from "./../../../../components/general/ExceptionWithImg.vue";
import ActionsData from "./../../../../components/general/ActionsData.vue";
import CustomBottomSheetQRCode from "./../../../../components/general/CustomBottomSheetQRCode.vue";
import CustomPagination from "./../../../../components/general/CustomPagination.vue";
import JobOrderStageAdd from "./components/JobOrderStageAdd.vue";
import JobOrderStageUpdate from "./components/JobOrderStageUpdate.vue";
import JobOrderStageCards from "./components/JobOrderStageCards.vue";
import JobOrderStageTable from "./components/JobOrderStageTable.vue";
import JobOrderStageInfo from "./components/JobOrderStageInfo.vue";
import JobOrderStageDelete from "./components/JobOrderStageDelete.vue";
import JobOrderStageChangeActivationType from "./components/JobOrderStageChangeActivationType.vue";
import JobOrderStageFilter from "./components/JobOrderStageFilter.vue";
import JobOrderStages from "./../../../../models/settings/settingsOthers/jobOrderStages/JobOrderStages";
import apiJobOrderStage from "./../../../../api/settings/settingsOthers/jobOrderStages";
import { getDialogOfActivationTypes } from "./../../../../utils/dialogsOfConstantsLists";
import generalMixin from "./../../../../utils/generalMixin";
import generalSettingsMixin from "./../../../../utils/generalSettingsMixin";
import { checkPrivilege } from "./../../../../utils/functions";
import {
  hasJobOrderStageAdd,
  hasJobOrderStageViewActive,
  hasJobOrderStageViewArchive,
  hasJobOrderStageViewBlocked,
} from "./../../../../utils/privilegeHelper";

export default {
  mixins: [generalMixin, generalSettingsMixin],
  components: {
    DashboardNavbar,
    PreLoader,
    ExceptionWithImg,
    ActionsData,
    CustomBottomSheetQRCode,
    CustomPagination,
    JobOrderStageAdd,
    JobOrderStageUpdate,
    JobOrderStageCards,
    JobOrderStageTable,
    JobOrderStageInfo,
    JobOrderStageDelete,
    JobOrderStageChangeActivationType,
    JobOrderStageFilter,
  },
  computed: {
    hasData() {
      return this.jobOrderStages.jobOrderStagesData.length != 0;
    },
    activationTypesTokensOptions: function () {
      let arr = [];
      if (checkPrivilege(hasJobOrderStageViewActive())) {
        let obj = this.activationTypesTokenOptions.find(
          (e) => e.value === ACTIVATION_TYPE.Active
        );
        obj.totalNumber =
          this.jobOrderStages.activationStatistics.totalActiveCount || 0;
        if (obj) arr.push(obj);
      }
      if (checkPrivilege(hasJobOrderStageViewArchive())) {
        let obj = this.activationTypesTokenOptions.find(
          (e) => e.value === ACTIVATION_TYPE.Archived
        );
        obj.totalNumber =
          this.jobOrderStages.activationStatistics.totalArchivedCount || 0;
        if (obj) arr.push(obj);
      }
      if (checkPrivilege(hasJobOrderStageViewBlocked())) {
        let obj = this.activationTypesTokenOptions.find(
          (e) => e.value === ACTIVATION_TYPE.Blocked
        );
        obj.totalNumber =
          this.jobOrderStages.activationStatistics.totalBlockedCount || 0;
        if (obj) arr.push(obj);
      }
      return arr;
    },
  },
  data() {
    return {
      jobOrderStages: new JobOrderStages(),
      VIEW_TYPES,
      activationTypesTokenOptions: getDialogOfActivationTypes(),
    };
  },
  methods: {
    checkPrivilege,
    hasJobOrderStageAdd,
    changePagination(pagination) {
      this.jobOrderStages.filterData.fillData(pagination);
      this.getAllJobOrderStages();
    },
    changeActivationType(data) {
      this.updateActivationTypeTokens("jobOrderStages", data);
      this.jobOrderStages.filterData.activationTypeTokens = data;
      this.getAllJobOrderStages();
    },
    search(data) {
      this.jobOrderStages.filterData.fillData(data);
      this.getAllJobOrderStages();
    },
    async getAllJobOrderStages() {
      this.isLoading = true;
      try {
        this.jobOrderStages.jobOrderStagesData = [];
        const response = await apiJobOrderStage.getAll(
          this.jobOrderStages.filterData
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
        this.jobOrderStages.fillData(response.data);
      } catch (error) {
        this.exceptionMsg = this.$t("errorCatch");
        this.exceptionImg = null;
      }
      this.isLoading = false;
    },
  },
  async created() {
    this.getAllJobOrderStages();
  },
};
</script>

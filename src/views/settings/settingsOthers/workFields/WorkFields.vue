<template>
  <div class="">
    <DashboardNavbar
      v-on:updateViewType="updateViewType('workFields', $event)"
      :viewType="generalSetting.workFields.viewType"
      :viewTypeStatus="true"
      v-on:updateActivationTypeTokens="changeActivationType($event)"
      :activationTypeTokens="generalSetting.workFields.activationTypeTokens"
      :activationTypesTokensOptions="activationTypesTokensOptions"
      :activationTypeStatus="true"
      :btnAddTitle="$t('WorkFields.add')"
      :btnAddName="'WorkFieldAdd'"
      :btnAddStatus="checkPrivilege(hasWorkFieldAdd())"
      :filterSheetName="'filterSheet'"
      :filterSheetStatus="true"
    />
    <PreLoader v-if="isLoading" />

    <div class="app-content pagination-with-content">
      <template v-if="hasData">
        <WorkFieldTable
          v-if="generalSetting.workFields.viewType == VIEW_TYPES.table"
          v-on:setWorkFieldData="workFields.workField.fillData($event)"
          :workFieldsData="workFields.workFieldsData"
          :defaultImg="workFields.workField.defaultImg"
          :filterData="workFields.filterData"
        />

        <WorkFieldCards
          v-else-if="generalSetting.workFields.viewType == VIEW_TYPES.cards"
          v-on:setWorkFieldData="workFields.workField.fillData($event)"
          :workFieldsData="workFields.workFieldsData"
          :defaultImg="workFields.workField.defaultImg"
          :filterData="workFields.filterData"
        />

        <ActionsData :actionsData="workFields.workField" />
        <WorkFieldInfo :workField="workFields.workField" />
        <WorkFieldDelete
          :workField="workFields.workField"
          v-on:refresh="getAllWorkFields()"
        />
        <WorkFieldChangeActivationType
          :workField="workFields.workField"
          v-on:refresh="getAllWorkFields()"
        />
        <CustomBottomSheetQRCode
          :refName="'WorkFieldQRCode'"
          :code="workFields.workField.fullCode"
          :codeTitle="$t('WorkFields.code')"
          :name="workFields.workField.workFieldNameCurrent"
          :nameTitle="$t('WorkFields.name')"
          :nameIcon="'workFields.svg'"
        />
      </template>
      <ExceptionWithImg
        v-if="exceptionMsg"
        :msg="exceptionMsg"
        :image="exceptionImg"
      />
      <CustomPagination
        v-if="hasData"
        :paginationData="workFields.filterData"
        v-on:changePagination="changePagination($event)"
      />
      <WorkFieldFilter
        :theFilterData="workFields.filterData"
        v-on:search="search($event)"
      />

      <WorkFieldAdd
        :workField="workFields.workField"
        v-on:refresh="getAllWorkFields()"
      />
      <WorkFieldUpdate
        :workField="workFields.workField"
        v-on:refresh="getAllWorkFields()"
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
import WorkFieldAdd from "./components/WorkFieldAdd.vue";
import WorkFieldUpdate from "./components/WorkFieldUpdate.vue";
import WorkFieldCards from "./components/WorkFieldCards.vue";
import WorkFieldTable from "./components/WorkFieldTable.vue";
import WorkFieldInfo from "./components/WorkFieldInfo.vue";
import WorkFieldDelete from "./components/WorkFieldDelete.vue";
import WorkFieldChangeActivationType from "./components/WorkFieldChangeActivationType.vue";
import WorkFieldFilter from "./components/WorkFieldFilter.vue";
import WorkFields from "./../../../../models/settings/settingsOthers/workFields/WorkFields";
import apiWorkField from "./../../../../api/settings/settingsOthers/workFields";
import { getDialogOfActivationTypes } from "./../../../../utils/dialogsOfConstantsLists";
import generalMixin from "./../../../../utils/generalMixin";
import generalSettingsMixin from "./../../../../utils/generalSettingsMixin";
import { checkPrivilege } from "./../../../../utils/functions";
import {
  hasWorkFieldAdd,
  hasWorkFieldViewActive,
  hasWorkFieldViewArchive,
  hasWorkFieldViewBlocked,
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
    WorkFieldAdd,
    WorkFieldUpdate,
    WorkFieldCards,
    WorkFieldTable,
    WorkFieldInfo,
    WorkFieldDelete,
    WorkFieldChangeActivationType,
    WorkFieldFilter,
  },
  computed: {
    hasData() {
      return this.workFields.workFieldsData.length != 0;
    },
    activationTypesTokensOptions: function () {
      let arr = [];
      if (checkPrivilege(hasWorkFieldViewActive())) {
        let obj = this.activationTypesTokenOptions.find(
          (e) => e.value === ACTIVATION_TYPE.Active
        );
        obj.totalNumber =
          this.workFields.activationStatistics.totalActiveCount || 0;
        if (obj) arr.push(obj);
      }
      if (checkPrivilege(hasWorkFieldViewArchive())) {
        let obj = this.activationTypesTokenOptions.find(
          (e) => e.value === ACTIVATION_TYPE.Archived
        );
        obj.totalNumber =
          this.workFields.activationStatistics.totalArchivedCount || 0;
        if (obj) arr.push(obj);
      }
      if (checkPrivilege(hasWorkFieldViewBlocked())) {
        let obj = this.activationTypesTokenOptions.find(
          (e) => e.value === ACTIVATION_TYPE.Blocked
        );
        obj.totalNumber =
          this.workFields.activationStatistics.totalBlockedCount || 0;
        if (obj) arr.push(obj);
      }
      return arr;
    },
  },
  data() {
    return {
      workFields: new WorkFields(),
      VIEW_TYPES,
      activationTypesTokenOptions: getDialogOfActivationTypes(),
    };
  },
  methods: {
    checkPrivilege,
    hasWorkFieldAdd,
    changePagination(pagination) {
      this.workFields.filterData.fillData(pagination);
      this.getAllWorkFields();
    },
    changeActivationType(data) {
      this.updateActivationTypeTokens("workFields", data);
      this.workFields.filterData.activationTypeTokens = data;
      this.getAllWorkFields();
    },
    search(data) {
      this.workFields.filterData.fillData(data);
      this.getAllWorkFields();
    },
    async getAllWorkFields() {
      this.isLoading = true;
      try {
        this.workFields.workFieldsData = [];
        const response = await apiWorkField.getAll(this.workFields.filterData);
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
        this.workFields.fillData(response.data);
      } catch (error) {
        this.exceptionMsg = this.$t("errorCatch");
        this.exceptionImg = null;
      }
      this.isLoading = false;
    },
  },
  async created() {
    this.getAllWorkFields();
  },
};
</script>

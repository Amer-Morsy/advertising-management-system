<template>
  <div>
    <DashboardNavbar
      v-on:updateViewType="updateViewType('priceQuotationJobOrders', $event)"
      :viewType="generalSetting.priceQuotationJobOrders.viewType"
      :viewTypeStatus="true"
      :btnAddTitle="$t('PriceQuotationJobOrders.add')"
      :btnAddName="'PriceQuotationJobOrderAdd'"
      :btnAddStatus="checkPrivilege(hasPriceQuotationJobOrderAdd())"
      :filterSheetName="'filterSheet'"
      :filterSheetStatus="true"
    />
    <PreLoader v-if="isLoading" />

    <div class="app-content pagination-with-content">
      <PriceQuotationJobOrderTabs
        :theFilterData="priceQuotationJobOrders.filterData"
        :statistics="priceQuotationJobOrders.priceQuotationJobOrderStatistics"
        v-on:search="search($event)"
        v-on:currentTabUpdated="currentTab = $event"
      />

      <template v-if="hasData">
        <PriceQuotationJobOrderTable
          v-if="
            generalSetting.priceQuotationJobOrders.viewType == VIEW_TYPES.table
          "
          v-on:setPriceQuotationJobOrderData="
            priceQuotationJobOrders.priceQuotationJobOrder.fillData($event)
          "
          :priceQuotationJobOrdersData="
            priceQuotationJobOrders.priceQuotationJobOrdersData
          "
          :defaultImg="
            priceQuotationJobOrders.priceQuotationJobOrder.defaultImg
          "
          :filterData="priceQuotationJobOrders.filterData"
          :hasPriceQuotationJobOrderMoveTo="hasPriceQuotationJobOrderMoveTo"
          :showEditIcon="showEditIcon"
        />
        <PriceQuotationJobOrderCards
          v-if="
            generalSetting.priceQuotationJobOrders.viewType == VIEW_TYPES.cards
          "
          v-on:setPriceQuotationJobOrderData="
            priceQuotationJobOrders.priceQuotationJobOrder.fillData($event)
          "
          :priceQuotationJobOrdersData="
            priceQuotationJobOrders.priceQuotationJobOrdersData
          "
          :defaultImg="
            priceQuotationJobOrders.priceQuotationJobOrder.defaultImg
          "
          :filterData="priceQuotationJobOrders.filterData"
          :hasPriceQuotationJobOrderMoveTo="hasPriceQuotationJobOrderMoveTo"
          :showEditIcon="showEditIcon"
        />
        <PriceQuotationInfo
          :token="
            priceQuotationJobOrders.priceQuotationJobOrder
              .priceQuotationInfoData.priceQuotationToken
          "
        />
        <!-- <PriceQuotationJobOrderReportBill
          :token="
            priceQuotationJobOrders.priceQuotationJobOrder
              .priceQuotationInfoData.priceQuotationToken
          "
          v-on:isLoading="isLoading = $event"
        /> -->

        <!-- <ActionsData
          :actionsData="priceQuotationJobOrders.priceQuotationJobOrder"
        /> -->
        <PriceQuotationJobOrderInfo
          :priceQuotationJobOrder="
            priceQuotationJobOrders.priceQuotationJobOrder
          "
          v-on:setJobOrderStagesOfWorkData="
            jobOrderStagesOfWorks.jobOrderStagesOfWork.fillData($event)
          "
          :showActions="showActions"
        />
        <CustomBottomSheetQRCode
          :refName="'PriceQuotationJobOrderQRCode'"
          :code="priceQuotationJobOrders.priceQuotationJobOrder.fullCode"
          :codeTitle="$t('PriceQuotationJobOrders.code')"
          :name="
            priceQuotationJobOrders.priceQuotationJobOrder
              .priceQuotationJobOrderNameCurrent
          "
          :nameTitle="$t('general.name')"
          :nameIcon="'PriceQuotationJobOrders.svg'"
        />
        <PriceQuotationJobOrderMove
          :currentTab="currentTab"
          :priceQuotationJobOrder="
            priceQuotationJobOrders.priceQuotationJobOrder
          "
          :allawedMoveToTokens="allawedMoveToTokens"
          v-on:refresh="refresh()"
        />

        <PriceQuotationReport
          :token="
            priceQuotationJobOrders.priceQuotationJobOrder
              .priceQuotationInfoData.priceQuotationToken
          "
          :exportStatus="true"
          v-on:isLoading="isLoading = $event"
        />
        <PriceQuotationJobOrderReportExport
          :token="
            priceQuotationJobOrders.priceQuotationJobOrder
              .priceQuotationJobOrderToken
          "
          v-on:isLoading="isLoading = $event"
        />
        <PriceQuotationJobOrderReportLpo
          :token="
            priceQuotationJobOrders.priceQuotationJobOrder
              .priceQuotationInfoData.priceQuotationToken
          "
          v-on:isLoading="isLoading = $event"
        />
      </template>
      <ExceptionWithImg
        v-if="exceptionMsg"
        :msg="exceptionMsg"
        :image="exceptionImg"
      />
      <CustomPagination
        v-if="hasData"
        :paginationData="priceQuotationJobOrders.filterData"
        v-on:changePagination="changePagination($event)"
      />
      <PriceQuotationJobOrderFilter
        :theFilterData="priceQuotationJobOrders.filterData"
        v-on:search="search($event)"
        v-on:isLoading="isLoading = $event"
      />

      <PriceQuotationJobOrderAdd
        :priceQuotationJobOrder="priceQuotationJobOrders.priceQuotationJobOrder"
        v-on:refresh="refresh()"
      />
      <PriceQuotationJobOrderUpdate
        :priceQuotationJobOrder="priceQuotationJobOrders.priceQuotationJobOrder"
        v-on:refresh="refresh()"
      />
      <JobOrderStagesOfWorkAdd
        :jobOrderStagesOfWork="jobOrderStagesOfWorks.jobOrderStagesOfWork"
        v-on:getDetails="getDetails($event)"
      />
      <JobOrderStagesOfWorkFinish
        :jobOrderStagesOfWork="jobOrderStagesOfWorks.jobOrderStagesOfWork"
        v-on:getDetails="getDetails($event)"
      />
      <JobOrderStagesOfWorkCancelFinish
        :jobOrderStagesOfWork="jobOrderStagesOfWorks.jobOrderStagesOfWork"
        v-on:getDetails="getDetails($event)"
      />
      <JobOrderStagesOfWorkDelete
        :jobOrderStagesOfWork="jobOrderStagesOfWorks.jobOrderStagesOfWork"
        v-on:getDetails="getDetails($event)"
      />
    </div>
  </div>
</template>

<script>
import DashboardNavbar from "./../../../layouts/components/DashboardNavbar.vue";
import PreLoader from "./../../../components/general/PreLoader.vue";
import ExceptionWithImg from "./../../../components/general/ExceptionWithImg.vue";
// import ActionsData from "./../../../components/general/ActionsData.vue";
import CustomBottomSheetQRCode from "./../../../components/general/CustomBottomSheetQRCode.vue";
import CustomPagination from "./../../../components/general/CustomPagination.vue";
import PriceQuotationJobOrderTabs from "./components/PriceQuotationJobOrderTabs.vue";
import PriceQuotationJobOrderMove from "./components/PriceQuotationJobOrderMove.vue";
import PriceQuotationJobOrderTable from "./components/PriceQuotationJobOrderTable.vue";
import PriceQuotationJobOrderCards from "./components/PriceQuotationJobOrderCards.vue";
import PriceQuotationJobOrderInfo from "./components/PriceQuotationJobOrderInfo.vue";
import PriceQuotationJobOrderFilter from "./components/PriceQuotationJobOrderFilter.vue";
import PriceQuotationReport from "./../../reports/components/PriceQuotationReport.vue";
import PriceQuotationJobOrderReportExport from "./../../reports/components/PriceQuotationJobOrderReportExport.vue";
import PriceQuotationJobOrderReportLpo from "./../../reports/components/PriceQuotationJobOrderReportLpo.vue";
import PriceQuotationJobOrderAdd from "./components/PriceQuotationJobOrderAdd.vue";
import PriceQuotationJobOrderUpdate from "./components/PriceQuotationJobOrderUpdate.vue";
import JobOrderStagesOfWorkAdd from "./../jobOrderStagesOfWorks/components/JobOrderStagesOfWorkAdd.vue";
import PriceQuotationInfo from "./../priceQuotations/components/PriceQuotationInfo.vue";
import JobOrderStagesOfWorkFinish from "./../jobOrderStagesOfWorks/components/JobOrderStagesOfWorkFinish.vue";
import JobOrderStagesOfWorkCancelFinish from "./../jobOrderStagesOfWorks/components/JobOrderStagesOfWorkCancelFinish.vue";
import JobOrderStagesOfWorkDelete from "./../jobOrderStagesOfWorks/components/JobOrderStagesOfWorkDelete.vue";
import JobOrderStagesOfWorks from "./../../../models/products/jobOrderStagesOfWorks/JobOrderStagesOfWorks";
import PriceQuotationJobOrders from "./../../../models/products/priceQuotationJobOrders/PriceQuotationJobOrders";
import apiPriceQuotationJobOrder from "./../../../api/products/priceQuotationJobOrders";
import { STATUS, VIEW_TYPES } from "./../../../utils/constants";
import { JOB_ORDER_HISTORY_WORK_TYPES } from "./../../../utils/constantLists";
import { checkPrivilege } from "./../../../utils/functions";
// import PriceQuotationJobOrderReportBill from "./../../reports/components/PriceQuotationJobOrderReportBill.vue";
import {
  hasPriceQuotationJobOrderAdd,
  hasPriceQuotationJobOrderNewlyWanted,
  hasPriceQuotationJobOrderWorkProgres,
  hasPriceQuotationJobOrderFinishNotCustomerReceived,
  hasPriceQuotationJobOrderFinishCustomerReceived,
  hasPriceQuotationJobOrderCanceled,
  hasPriceQuotationJobOrderMoveToNewlyWanted,
  hasPriceQuotationJobOrderMoveToWorkProgres,
  hasPriceQuotationJobOrderMoveToFinishNotCustomerReceived,
  hasPriceQuotationJobOrderMoveToFinishCustomerReceived,
  hasPriceQuotationJobOrderMoveToCanceled,
} from "./../../../utils/privilegeHelper";
import generalMixin from "./../../../utils/generalMixin";
import generalSettingsMixin from "./../../../utils/generalSettingsMixin";

export default {
  mixins: [generalMixin, generalSettingsMixin],
  components: {
    DashboardNavbar,
    PreLoader,
    ExceptionWithImg,
    // ActionsData,
    CustomBottomSheetQRCode,
    CustomPagination,
    PriceQuotationJobOrderTabs,
    PriceQuotationJobOrderMove,
    PriceQuotationJobOrderTable,
    PriceQuotationJobOrderCards,
    PriceQuotationJobOrderInfo,
    PriceQuotationJobOrderFilter,
    PriceQuotationReport,
    PriceQuotationJobOrderReportExport,
    PriceQuotationJobOrderAdd,
    PriceQuotationInfo,
    PriceQuotationJobOrderUpdate,
    JobOrderStagesOfWorkAdd,
    JobOrderStagesOfWorkFinish,
    JobOrderStagesOfWorkCancelFinish,
    JobOrderStagesOfWorkDelete,
    PriceQuotationJobOrderReportLpo,
  },
  computed: {
    hasData() {
      return (
        this.priceQuotationJobOrders.priceQuotationJobOrdersData.length != 0
      );
    },
  },
  props: {},
  data() {
    return {
      currentTab: "",
      VIEW_TYPES,
      showEditIcon: false,
      showActions: false,
      allawedMoveToTokens: [],
      hasPriceQuotationJobOrderMoveTo: false,
      priceQuotationJobOrders: new PriceQuotationJobOrders(),
      jobOrderStagesOfWorks: new JobOrderStagesOfWorks(),
    };
  },
  watch: {
    currentTab(val) {
      if (val) {
        this.setAllawedMoveToTokens();
        this.setShowActions();
        this.setShowEditIcon();
        this.setHasPriceQuotationJobOrderMoveTo();
      }
    },
  },
  methods: {
    checkPrivilege,
    hasPriceQuotationJobOrderAdd,
    setShowActions() {
      if (this.currentTab == "WorkProgres") {
        this.showActions = true;
      } else {
        this.showActions = false;
      }
    },
    setShowEditIcon() {
      if (this.currentTab == "NewlyWanted") {
        this.showEditIcon = true;
      } else {
        this.showEditIcon = false;
      }
    },
    setAllawedMoveToTokens() {
      switch (this.currentTab) {
        case "NewlyWanted":
          this.allawedMoveToTokens = [
            JOB_ORDER_HISTORY_WORK_TYPES.WorkProgres,
            JOB_ORDER_HISTORY_WORK_TYPES.Canceled,
          ];
          break;
        case "WorkProgres":
          this.allawedMoveToTokens = [
            JOB_ORDER_HISTORY_WORK_TYPES.NewlyWanted,
            JOB_ORDER_HISTORY_WORK_TYPES.FinishNotCustomerReceived,
            JOB_ORDER_HISTORY_WORK_TYPES.FinishCustomerReceived,
            JOB_ORDER_HISTORY_WORK_TYPES.Canceled,
          ];
          break;
        case "FinishNotCustomerReceived":
          this.allawedMoveToTokens = [
            JOB_ORDER_HISTORY_WORK_TYPES.FinishCustomerReceived,
            JOB_ORDER_HISTORY_WORK_TYPES.Canceled,
          ];
          break;
        case "FinishCustomerReceived":
          this.allawedMoveToTokens = [];
          break;
        case "Canceled":
          this.allawedMoveToTokens = [];

          break;

        default:
          break;
      }
    },
    setHasPriceQuotationJobOrderMoveTo() {
      switch (this.currentTab) {
        case "NewlyWanted":
          this.hasPriceQuotationJobOrderMoveTo = checkPrivilege(
            hasPriceQuotationJobOrderMoveToWorkProgres() ||
              hasPriceQuotationJobOrderMoveToCanceled()
          );

          break;
        case "WorkProgres":
          this.hasPriceQuotationJobOrderMoveTo = checkPrivilege(
            hasPriceQuotationJobOrderMoveToNewlyWanted() ||
              hasPriceQuotationJobOrderMoveToFinishNotCustomerReceived() ||
              hasPriceQuotationJobOrderMoveToFinishCustomerReceived() ||
              hasPriceQuotationJobOrderMoveToCanceled()
          );
          break;
        case "FinishNotCustomerReceived":
          this.hasPriceQuotationJobOrderMoveTo = checkPrivilege(
            hasPriceQuotationJobOrderMoveToFinishCustomerReceived() ||
              hasPriceQuotationJobOrderMoveToCanceled()
          );
          break;
        case "FinishCustomerReceived":
          this.hasPriceQuotationJobOrderMoveTo = false;
          break;
        case "Canceled":
          this.hasPriceQuotationJobOrderMoveTo = false;

          break;

        default:
          break;
      }
    },
    changePagination(pagination) {
      this.priceQuotationJobOrders.filterData.fillData(pagination);
      this.getAllPriceQuotationJobOrders();
    },
    search(data) {
      this.priceQuotationJobOrders.filterData.fillData(data);
      this.getAllPriceQuotationJobOrders();
    },
    async refresh() {
      await this.setFilter();
      await this.getAllPriceQuotationJobOrders();
    },
    setFilter() {
      //#region check which tab is current
      if (checkPrivilege(hasPriceQuotationJobOrderNewlyWanted())) {
        this.priceQuotationJobOrders.filterData.jobOrderHistoryWorkTypeToken =
          JOB_ORDER_HISTORY_WORK_TYPES.NewlyWanted;
        this.priceQuotationJobOrders.priceQuotationJobOrder.jobOrderHistoryWorkTypeToken =
          JOB_ORDER_HISTORY_WORK_TYPES.NewlyWanted;
      } else if (checkPrivilege(hasPriceQuotationJobOrderWorkProgres())) {
        this.priceQuotationJobOrders.filterData.jobOrderHistoryWorkTypeToken =
          JOB_ORDER_HISTORY_WORK_TYPES.WorkProgres;
        this.priceQuotationJobOrders.priceQuotationJobOrder.jobOrderHistoryWorkTypeToken =
          JOB_ORDER_HISTORY_WORK_TYPES.WorkProgres;
      } else if (
        checkPrivilege(hasPriceQuotationJobOrderFinishNotCustomerReceived())
      ) {
        this.priceQuotationJobOrders.filterData.jobOrderHistoryWorkTypeToken =
          JOB_ORDER_HISTORY_WORK_TYPES.FinishNotCustomerReceived;
        this.priceQuotationJobOrders.priceQuotationJobOrder.jobOrderHistoryWorkTypeToken =
          JOB_ORDER_HISTORY_WORK_TYPES.FinishNotCustomerReceived;
      } else if (
        checkPrivilege(hasPriceQuotationJobOrderFinishCustomerReceived())
      ) {
        this.priceQuotationJobOrders.filterData.jobOrderHistoryWorkTypeToken =
          JOB_ORDER_HISTORY_WORK_TYPES.FinishCustomerReceived;
        this.priceQuotationJobOrders.priceQuotationJobOrder.jobOrderHistoryWorkTypeToken =
          JOB_ORDER_HISTORY_WORK_TYPES.FinishCustomerReceived;
      } else if (checkPrivilege(hasPriceQuotationJobOrderCanceled())) {
        this.priceQuotationJobOrders.filterData.jobOrderHistoryWorkTypeToken =
          JOB_ORDER_HISTORY_WORK_TYPES.Canceled;
        this.priceQuotationJobOrders.priceQuotationJobOrder.jobOrderHistoryWorkTypeToken =
          JOB_ORDER_HISTORY_WORK_TYPES.Canceled;
      } else {
        this.priceQuotationJobOrders.filterData.jobOrderHistoryWorkTypeToken =
          "";
        this.priceQuotationJobOrders.priceQuotationJobOrder.jobOrderHistoryWorkTypeToken =
          "";
      }
      //#endregion check which tab is current
    },

    async getDetails(token) {
      this.isLoading = true;
      try {
        const response = await apiPriceQuotationJobOrder.getDetails({
          token: token,
        });
        if (response.data.status == STATUS.SUCCESS) {
          this.exceptionMsg = null;
          this.priceQuotationJobOrders.priceQuotationJobOrder.fillData(
            response.data.priceQuotationJobOrder
          );
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
      } catch (e) {
        this.exceptionMsg = this.$t("errorCatch");
        this.exceptionImg = null;
      }
      this.isLoading = false;
    },
    async getAllPriceQuotationJobOrders() {
      this.isLoading = true;
      this.priceQuotationJobOrders.filterData.priceQuotationInfoDataInclude = true;
      this.priceQuotationJobOrders.filterData.priceQuotationJobOrderStagesOfWorkDataInclude = true;

      try {
        this.priceQuotationJobOrders.priceQuotationJobOrdersData = [];
        const response = await apiPriceQuotationJobOrder.getAll(
          this.priceQuotationJobOrders.filterData
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
        this.priceQuotationJobOrders.fillData(response.data);
      } catch (e) {
        this.exceptionMsg = this.$t("errorCatch");
        this.exceptionImg = null;
      }
      this.isLoading = false;
    },
  },
  async created() {
    await this.setFilter();
    await this.getAllPriceQuotationJobOrders();
  },
};
</script>

<template>
  <div :key="tabNumber">
    <DashboardNavbar
      :btnAddTitle="$t('PriceQuotations.add')"
      :btnAddName="'PriceQuotationAdd'"
      :btnAddStatus="checkPrivilege(hasPriceQuotationAdd())"
      :filterSheetName="'filterSheet'"
      :filterSheetStatus="true"
    />
    <PreLoader v-if="isLoading" />

    <div class="app-content pagination-with-content">
      <PriceQuotationTabs
        :tabNumber="tabNumber"
        :theFilterData="priceQuotations.filterData"
        :statistics="priceQuotations.priceQuotationStatistics"
        v-on:search="search($event)"
        v-on:currentTabUpdated="currentTab = $event"
      />

      <template v-if="hasData">
        <PriceQuotationTable
          v-on:setPriceQuotationData="
            priceQuotations.priceQuotation.fillData($event);
            priceQuotationJobOrder.priceQuotationToken =
              $event.priceQuotationToken;
          "
          :priceQuotationsData="priceQuotations.priceQuotationsData"
          :defaultImg="priceQuotations.priceQuotation.defaultImg"
          :filterData="priceQuotations.filterData"
          :hasPriceQuotationMoveTo="hasPriceQuotationMoveTo"
        />

        <!-- v-on:refresh="getDetails()" -->
        <SendRequestProductItemReport
          :token="priceQuotations.priceQuotation.priceQuotationToken"
          :companyMarkToken="
            priceQuotations.priceQuotation.reportTemplateInfoData
              .companyMarkToken
          "
          :priceQuotationDetail="priceQuotationDetail"
          v-on:refresh="getAllPriceQuotations()"
        />
        <ActionsData :actionsData="priceQuotations.priceQuotation" />
        <PriceQuotationInfo
          :token="priceQuotations.priceQuotation.priceQuotationToken"
        />
        <PriceQuotationUpdate
          :token="priceQuotations.priceQuotation.priceQuotationToken"
          v-on:refresh="getAllPriceQuotations()"
        />
        <PriceQuotationDuplicate
          :token="priceQuotations.priceQuotation.priceQuotationToken"
          v-on:refresh="getAllPriceQuotations()"
        />
        <PriceQuotationChangeDateAndTime
          :priceQuotation="priceQuotations.priceQuotation"
          v-on:refresh="getAllPriceQuotations()"
        />
        <CustomBottomSheetQRCode
          :refName="'PriceQuotationQRCode'"
          :code="priceQuotations.priceQuotation.fullCode"
          :codeTitle="$t('PriceQuotations.code')"
          :name="
            priceQuotations.priceQuotation.priceQuotationDescriptionCurrent
          "
          :nameTitle="$t('PriceQuotations.description')"
          :nameIcon="'PriceQuotations.svg'"
        />

        <PriceQuotationMove
          :priceQuotation="priceQuotations.priceQuotation"
          :allawedMoveToTokens="allawedMoveToTokens"
          v-on:refresh="getAllPriceQuotations()"
        />
        <PriceQuotationReport
          :token="priceQuotations.priceQuotation.priceQuotationToken"
          :reportTemplateToken="
            priceQuotations.priceQuotation.reportTemplateToken
          "
          :exportStatus="true"
          v-on:isLoading="isLoading = $event"
        />
        <PriceQuotationReportBill
          :token="priceQuotations.priceQuotation.priceQuotationToken"
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
        :paginationData="priceQuotations.filterData"
        v-on:changePagination="changePagination($event)"
      />
      <PriceQuotationFilter
        :theFilterData="priceQuotations.filterData"
        v-on:search="search($event)"
        v-on:isLoading="isLoading = $event"
      />

      <PriceQuotationAdd
        :priceQuotation="priceQuotations.priceQuotationModel"
        v-on:refresh="getAllPriceQuotations()"
      />
      <!-- <PriceQuotationUpdate
        :token="priceQuotations.priceQuotation.priceQuotationToken"
        v-on:refresh="getAllPriceQuotations()"
      /> -->
      <SendPriceQuotationToClient
        :token="priceQuotations.priceQuotation.priceQuotationToken"
        v-on:refresh="getAllPriceQuotations()"
      />
      <ResendPriceQuotationToClient
        :priceQuotation="priceQuotations.priceQuotation"
        v-on:refresh="getAllPriceQuotations()"
      />
      <ResendToManyClients
        :priceQuotation="priceQuotations.priceQuotation"
        v-on:refresh="getAllPriceQuotations()"
      />

      <PriceQuotationJobOrderAdd
        :priceQuotationJobOrder="priceQuotationJobOrder"
        :priceQuotationToken="
          priceQuotations.priceQuotation.priceQuotationToken
        "
        v-on:refresh="getAllPriceQuotations()"
      />
    </div>
  </div>
</template>

<script>
import PriceQuotationDetail from "./../../../models/products/priceQuotationDetails/PriceQuotationDetail";
import SendRequestProductItemReport from "./components/SendRequestProductItemReport.vue";
import DashboardNavbar from "./../../../layouts/components/DashboardNavbar.vue";
import PreLoader from "./../../../components/general/PreLoader.vue";
import ExceptionWithImg from "./../../../components/general/ExceptionWithImg.vue";
import ActionsData from "./../../../components/general/ActionsData.vue";
import CustomBottomSheetQRCode from "./../../../components/general/CustomBottomSheetQRCode.vue";
import CustomPagination from "./../../../components/general/CustomPagination.vue";
import PriceQuotationTabs from "./components/PriceQuotationTabs.vue";
import PriceQuotationAdd from "./components/PriceQuotationAdd.vue";
import PriceQuotationUpdate from "./components/PriceQuotationUpdate.vue";
import PriceQuotationDuplicate from "./components/PriceQuotationDuplicate.vue";
import SendPriceQuotationToClient from "./components/SendPriceQuotationToClient.vue";
import ResendPriceQuotationToClient from "./components/ResendPriceQuotationToClient.vue";
import ResendToManyClients from "./components/ResendToManyClients.vue";
import PriceQuotationTable from "./components/PriceQuotationTable.vue";
import PriceQuotationInfo from "./components/PriceQuotationInfo.vue";
import PriceQuotationChangeDateAndTime from "./components/PriceQuotationChangeDateAndTime.vue";
import PriceQuotationMove from "./components/PriceQuotationMove.vue";
import PriceQuotationFilter from "./components/PriceQuotationFilter.vue";
import PriceQuotationReport from "./../../reports/components/PriceQuotationReport.vue";
import PriceQuotationReportBill from "./../../reports/components/PriceQuotationReportBill.vue";
import PriceQuotationJobOrderAdd from "./../priceQuotationJobOrders/components/PriceQuotationJobOrderAdd.vue";
import PriceQuotations from "./../../../models/products/priceQuotations/PriceQuotations";
import PriceQuotationJobOrder from "./../../../models/products/priceQuotationJobOrders/PriceQuotationJobOrder";
import apiPriceQuotation from "./../../../api/products/priceQuotations";
import { STATUS } from "./../../../utils/constants";
import { PRICE_QUOTATION_HISTORY_WORK_TYPES } from "./../../../utils/constantLists";
import { checkPrivilege } from "./../../../utils/functions";
import {
  hasPriceQuotationAdd,
  hasPriceQuotationNewlyWanted,
  hasPriceQuotationWaitingForSupplier,
  hasPriceQuotationWaitingForCustomerAccept,
  hasPriceQuotationCanceled,
  hasPriceQuotationMoveToWaitingForSupplier,
  hasPriceQuotationMoveToCanceled,
} from "./../../../utils/privilegeHelper";
import generalMixin from "./../../../utils/generalMixin";

export default {
  mixins: [generalMixin],
  components: {
    DashboardNavbar,
    PreLoader,
    ExceptionWithImg,
    ActionsData,
    CustomBottomSheetQRCode,
    CustomPagination,
    PriceQuotationTabs,
    PriceQuotationAdd,
    PriceQuotationUpdate,
    PriceQuotationDuplicate,
    SendRequestProductItemReport,
    SendPriceQuotationToClient,
    ResendPriceQuotationToClient,
    ResendToManyClients,
    PriceQuotationTable,
    PriceQuotationInfo,
    PriceQuotationChangeDateAndTime,
    PriceQuotationMove,
    PriceQuotationReport,
    PriceQuotationReportBill,
    PriceQuotationFilter,
    PriceQuotationJobOrderAdd,
  },
  computed: {
    hasData() {
      return this.priceQuotations.priceQuotationsData.length != 0;
    },
  },
  props: {
    tabNumber: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      priceQuotationDetail: new PriceQuotationDetail(),
      currentTab: "",
      allawedMoveToTokens: [],
      hasPriceQuotationMoveTo: false,
      priceQuotations: new PriceQuotations(),
      priceQuotationJobOrder: new PriceQuotationJobOrder(),
    };
  },
  watch: {
    currentTab(val) {
      if (val) {
        this.setAllawedMoveToTokens();
        this.setHasPriceQuotationDetailMoveTo();
      }
    },
  },
  methods: {
    setAllawedMoveToTokens() {
      switch (this.currentTab) {
        case "NewlyWanted":
          this.allawedMoveToTokens = [
            PRICE_QUOTATION_HISTORY_WORK_TYPES.WaitingForSupplier,
            PRICE_QUOTATION_HISTORY_WORK_TYPES.Canceled,
          ];
          break;
        case "WaitingForSupplier":
          this.allawedMoveToTokens = [
            PRICE_QUOTATION_HISTORY_WORK_TYPES.Canceled,
          ];
          break;
        case "WaitingForCustomerAccept":
          this.allawedMoveToTokens = [
            PRICE_QUOTATION_HISTORY_WORK_TYPES.Canceled,
          ];
          break;
        default:
          this.allawedMoveToTokens = [];
          break;
      }
    },
    setHasPriceQuotationDetailMoveTo() {
      switch (this.currentTab) {
        case "NewlyWanted":
          this.hasPriceQuotationMoveTo = checkPrivilege(
            hasPriceQuotationMoveToWaitingForSupplier()
          );
          break;
        case "WaitingForSupplier":
          this.hasPriceQuotationMoveTo = checkPrivilege(
            hasPriceQuotationMoveToCanceled()
          );
          break;
        case "WaitingForCustomerAccept":
          this.hasPriceQuotationMoveTo = checkPrivilege(
            hasPriceQuotationMoveToCanceled()
          );
          break;
        case "FinishJobOrderCustomerReceive":
        case "Canceled":
        default:
          this.hasPriceQuotationMoveTo = false;
          break;
      }
    },
    changePagination(pagination) {
      this.priceQuotations.filterData.fillData(pagination);
      this.getAllPriceQuotations();
    },
    search(data) {
      this.priceQuotations.filterData.fillData(data);
      this.getAllPriceQuotations();
    },
    async getAllPriceQuotations() {
      this.isLoading = true;
      this.priceQuotations.filterData.requestPlaceInfoDataInclude = true;
      this.priceQuotations.filterData.reportTemplateInfoDataInclude = true;
      try {
        this.priceQuotations.priceQuotationsData = [];
        const response = await apiPriceQuotation.getAll(
          this.priceQuotations.filterData
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
        this.priceQuotations.fillData(response.data);
      } catch (error) {
        this.exceptionMsg = this.$t("errorCatch");
        this.exceptionImg = null;
      }
      this.isLoading = false;
    },

    checkPrivilege,
    hasPriceQuotationAdd,
  },
  async created() {
    //#region check which tab is current
    if (this.tabNumber == 1) {
      if (checkPrivilege(hasPriceQuotationNewlyWanted()))
        this.priceQuotations.filterData.priceQuotationHistoryWorkTypeToken =
          PRICE_QUOTATION_HISTORY_WORK_TYPES.NewlyWanted;
      else if (checkPrivilege(hasPriceQuotationWaitingForSupplier()))
        this.priceQuotations.filterData.priceQuotationHistoryWorkTypeToken =
          PRICE_QUOTATION_HISTORY_WORK_TYPES.WaitingForSupplier;
      else if (checkPrivilege(hasPriceQuotationWaitingForCustomerAccept()))
        this.priceQuotations.filterData.priceQuotationHistoryWorkTypeToken =
          PRICE_QUOTATION_HISTORY_WORK_TYPES.WaitingForCustomerAccept;
      else if (checkPrivilege(hasPriceQuotationCanceled()))
        this.priceQuotations.filterData.priceQuotationHistoryWorkTypeToken =
          PRICE_QUOTATION_HISTORY_WORK_TYPES.Canceled;
      else
        this.priceQuotations.filterData.priceQuotationHistoryWorkTypeToken = "";
    }
    //#endregion check which tab is current

    this.getAllPriceQuotations();
  },
};
</script>

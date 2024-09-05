<template>
  <div class="">
    <DashboardNavbar
      v-on:updateViewType="updateViewType('educationalGroupStudents', $event)"
      :viewType="generalSetting.educationalGroupStudents.viewType"
      :viewTypeStatus="true"
      :btnAddTitle="$t('EducationalGroupStudents.add')"
      :btnAddName="'EducationalGroupStudentAdd'"
      :btnAddStatus="checkPrivilege(hasEducationalGroupStudentAdd())"
      :filterSheetName="'filterSheet'"
      :filterSheetStatus="true"
    />
    <PreLoader v-if="isLoading" />

    <div class="app-content pagination-with-content">
      <template v-if="hasData">
        <EducationalGroupStudentTable
          v-if="
            generalSetting.educationalGroupStudents.viewType == VIEW_TYPES.table
          "
          v-on:setEducationalGroupStudentData="
            educationalGroupStudents.educationalGroupStudent.fillData($event)
          "
          :educationalGroupStudentsData="
            educationalGroupStudents.educationalGroupStudentsData
          "
          :defaultImg="
            educationalGroupStudents.educationalGroupStudent.defaultImg
          "
          :filterData="educationalGroupStudents.filterData"
        />

        <EducationalGroupStudentCards
          v-else-if="
            generalSetting.educationalGroupStudents.viewType == VIEW_TYPES.cards
          "
          :educationalGroupStudentsData="
            educationalGroupStudents.educationalGroupStudentsData
          "
          v-on:setEducationalGroupStudentData="
            educationalGroupStudents.educationalGroupStudent.fillData($event)
          "
          :defaultImg="
            educationalGroupStudents.educationalGroupStudent.defaultImg
          "
          :filterData="educationalGroupStudents.filterData"
        />

        <ActionsData
          :actionsData="educationalGroupStudents.educationalGroupStudent"
        />
        <EducationalGroupStudentInfo
          :educationalGroupStudent="
            educationalGroupStudents.educationalGroupStudent
          "
        />
      </template>
      <ExceptionWithImg
        v-if="exceptionMsg"
        :msg="exceptionMsg"
        :image="exceptionImg"
      />
      <CustomPagination
        v-if="hasData"
        :paginationData="educationalGroupStudents.filterData"
        v-on:changePagination="changePagination($event)"
      />
      <EducationalGroupStudentFilter
        :theFilterData="educationalGroupStudents.filterData"
        v-on:search="search($event)"
      />

      <EducationalGroupStudentAdd
        :educationalGroupStudent="
          educationalGroupStudents.educationalGroupStudent
        "
        :tokensData="{
          educationalGroupToken: educationalGroupToken,
          educationalCategoryToken: educationalCategoryToken,
        }"
        v-on:refresh="getAllEducationalGroupStudents()"
      />
    </div>
  </div>
</template>

<script>
import { STATUS, VIEW_TYPES } from "./../../../utils/constants";
import DashboardNavbar from "./../../../layouts/components/DashboardNavbar.vue";
import PreLoader from "./../../../components/general/PreLoader.vue";
import ExceptionWithImg from "./../../../components/general/ExceptionWithImg.vue";
import ActionsData from "./../../../components/general/ActionsData.vue";
import CustomPagination from "./../../../components/general/CustomPagination.vue";
import EducationalGroupStudentAdd from "./components/EducationalGroupStudentAdd.vue";
import EducationalGroupStudentCards from "./components/EducationalGroupStudentCards.vue";
import EducationalGroupStudentTable from "./components/EducationalGroupStudentTable.vue";
import EducationalGroupStudentInfo from "./components/EducationalGroupStudentInfo.vue";
import EducationalGroupStudentFilter from "./components/EducationalGroupStudentFilter.vue";
import EducationalGroupStudents from "./../../../models/educational/educationalGroupStudents/EducationalGroupStudents";
import apiEducationalGroupStudent from "./../../../api/educational/educationalGroupStudents";
import { getDialogOfActivationTypes } from "./../../../utils/dialogsOfConstantsLists";
import generalMixin from "./../../../utils/generalMixin";
import generalSettingsMixin from "./../../../utils/generalSettingsMixin";
import { checkPrivilege } from "./../../../utils/functions";
import { hasEducationalGroupStudentAdd } from "./../../../utils/privilegeHelper";

export default {
  mixins: [generalMixin, generalSettingsMixin],
  components: {
    DashboardNavbar,
    PreLoader,
    ExceptionWithImg,
    ActionsData,
    CustomPagination,
    EducationalGroupStudentAdd,
    EducationalGroupStudentCards,
    EducationalGroupStudentTable,
    EducationalGroupStudentInfo,
    EducationalGroupStudentFilter,
  },
  computed: {
    hasData() {
      return (
        this.educationalGroupStudents.educationalGroupStudentsData.length != 0
      );
    },
  },
  props: {
    educationalGroupToken: {
      type: String,
      default: "",
    },
    educationalCategoryToken: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      educationalGroupStudents: new EducationalGroupStudents(),
      VIEW_TYPES,
      activationTypesTokenOptions: getDialogOfActivationTypes(),
    };
  },
  methods: {
    checkPrivilege,
    hasEducationalGroupStudentAdd,
    changePagination(pagination) {
      this.educationalGroupStudents.filterData.fillData(pagination);
      this.getAllEducationalGroupStudents();
    },

    search(data) {
      this.educationalGroupStudents.filterData.fillData(data);
      this.getAllEducationalGroupStudents();
    },
    async getAllEducationalGroupStudents() {
      this.isLoading = true;
      try {
        this.educationalGroupStudents.educationalGroupStudentsData = [];
        const response = await apiEducationalGroupStudent.getAll(
          this.educationalGroupStudents.filterData
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
        this.educationalGroupStudents.fillData(response.data);
      } catch (error) {
        this.exceptionMsg = this.$t("errorCatch");
        this.exceptionImg = null;
      }
      this.isLoading = false;
    },
  },
  async created() {
    this.educationalGroupStudents.filterData.educationalGroupToken =
      this.educationalGroupToken || this.$route.params.educationalGroupToken;
    this.educationalGroupStudents.filterData.educationalCategoryToken =
      this.educationalCategoryToken ||
      this.$route.params.educationalCategoryToken;
    this.getAllEducationalGroupStudents();
  },
};
</script>

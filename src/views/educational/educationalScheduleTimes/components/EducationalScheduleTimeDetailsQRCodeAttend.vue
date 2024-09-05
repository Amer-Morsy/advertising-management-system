<template>
  <div class="table-container-custom">
    <PreLoader v-if="isLoading" />

    <div class="row">
      <DataLabelGroup
        :className="'col-md-6'"
        :value="
          educationalScheduleTime.educationalGroupInfoData
            .educationalGroupNameCurrent
        "
        :title="$t('EducationalGroups.name')"
        :imgName="'EducationalGroups.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="educationalScheduleTime.placeInfoData.placeNameCurrent"
        :title="$t('Places.name')"
        :imgName="'places.svg'"
      />

      <DataLabelGroup
        :className="'col-md-4'"
        :value="educationalScheduleTime.appointmentTypeNameCurrent"
        :title="$t('ConstantsListSelect.AppointmentTypesName')"
        :imgName="'AppointmentTypes.svg'"
      />
      <DataLabelGroup
        :className="'col-md-4'"
        :value="
          formateDateTimeLang(
            educationalScheduleTime.dateTimeFromDate,
            educationalScheduleTime.dateTimeFromTime
          )
        "
        :title="$t('from')"
        :imgName="'dateAndTime.svg'"
      />
      <DataLabelGroup
        :className="'col-md-4'"
        :value="
          formateDateTimeLang(
            educationalScheduleTime.dateTimeToDate,
            educationalScheduleTime.dateTimeToTime
          )
        "
        :title="$t('to')"
        :imgName="'dateAndTime.svg'"
      />

      <form
        autocomplete="off"
        method="post"
        @submit.prevent="search()"
        class="col-lg-10 col-md-8"
      >
        <CustomInput
          id="inputScan"
          :value="inputScan"
          v-on:changeValue="inputScan = $event"
          :title="$t('Users.code')"
          :imgName="'qr-code.svg'"
        />
      </form>
      <button
        :disabled="!hasDataFiltered"
        name="submit"
        type="submit"
        class="col-lg-2 col-md-4 btn btn-submit"
        @click.prevent="addEducationalGroupAttendance"
      >
        {{ $t("EducationalGroupAttendances.attend") }}
      </button>

      <EducationalScheduleTimeDetailsQRCodeAttendUsers
        :usersList="studentsList"
        :UsersDataMsg="$t('students.data')"
      />
      <EducationalScheduleTimeDetailsQRCodeAttendUsers
        :usersList="employeesList"
        :UsersDataMsg="$t('employees.data')"
      />
    </div>
  </div>
</template>

<script>
import {
  checkPrivilege,
  isDataExist,
  formateDateTimeLang,
  getObjectOfDateTime,
  fullPathFileFromServer,
  getLanguage,
} from "./../../../../utils/functions";
import { ATTENDANCE_TYPE } from "./../../../../utils/constantLists";
import { hasEducationalGroupAttendanceAdd } from "./../../../../utils/privilegeHelper";
import { STATUS } from "./../../../../utils/constants";
import PreLoader from "./../../../../components/general/PreLoader.vue";
import DataLabelGroup from "./../../../../components/general/DataLabelGroup.vue";
import CustomInput from "./../../../../components/general/CustomInput.vue";
import EducationalScheduleTimeDetailsQRCodeAttendUsers from "./EducationalScheduleTimeDetailsQRCodeAttendUsers.vue";
import EducationalGroupAttendanceModel from "./../../../../models/educational/educationalGroupAttendances/EducationalGroupAttendanceModel";
import apiEducationalGroupAttendance from "./../../../../api/educational/educationalGroupAttendances";
import usersImg from "@/assets/images/users.svg";
import generalMixin from "./../../../../utils/generalMixin";

export default {
  name: "EducationalScheduleTimeDetailsQRCodeAttend",
  mixins: [generalMixin],
  components: {
    PreLoader,
    DataLabelGroup,
    CustomInput,
    EducationalScheduleTimeDetailsQRCodeAttendUsers,
  },
  props: { educationalScheduleTime: { type: Object } },
  data() {
    return {
      language: getLanguage(),
      inputScan: "",
      attendFromDateTime: "",
      attendToDateTime: "",
      employeesList: [],
      studentsList: [],
      educationalGroupAttendance: new EducationalGroupAttendanceModel(),
      usersImg,
    };
  },
  computed: {
    hasDataFiltered() {
      return (
        (this.employeesList.length > 0 || this.studentsList.length > 0) &&
        checkPrivilege(hasEducationalGroupAttendanceAdd())
      );
    },
    studentsData() {
      return this.educationalScheduleTime.studentsData.filter(
        (user) =>
          user.attendanceTypeToken != ATTENDANCE_TYPE.Attendance &&
          user.attendanceTypeToken != ATTENDANCE_TYPE.Absence &&
          user.activeSubscriptionData &&
          user.activeSubscriptionData.canAttendaceStatus
      );
    },
    employeesData() {
      return this.educationalScheduleTime.employeesData.filter(
        (user) =>
          user.attendanceTypeToken != ATTENDANCE_TYPE.Attendance &&
          user.attendanceTypeToken != ATTENDANCE_TYPE.Absence &&
          user.activeSubscriptionData &&
          user.activeSubscriptionData.canAttendaceStatus
      );
    },
  },
  methods: {
    search() {
      const studentIndexAttend = this.studentsList.findIndex(
        (user) => user.fullCode == this.inputScan
      );
      const employeeIndexAttend = this.employeesList.findIndex(
        (user) => user.fullCode == this.inputScan
      );
      const studentIndex = this.studentsData.findIndex(
        (user) => user.studentUserInfoData.fullCode == this.inputScan
      );
      const employeeIndex = this.employeesData.findIndex(
        (user) => user.employeeUserInfoData.fullCode == this.inputScan
      );
      let attendanceItem = {
        userToken: "",
        attendanceTypeToken: ATTENDANCE_TYPE.Attendance,
        attendFromDateTime: getObjectOfDateTime(new Date()).dateTime,
        attendToDateTime: getObjectOfDateTime(
          this.educationalScheduleTime.dateTimeTo
        ).dateTime,
        userNameCurrent: "",
        userImagePath: "",
        fullCode: "",
      };

      if (studentIndex >= 0 && studentIndexAttend < 0) {
        attendanceItem.userToken =
          this.studentsData[studentIndex].studentUserToken;
        attendanceItem.userNameCurrent =
          this.studentsData[studentIndex].studentUserInfoData.userNameCurrent ??
          "";
        attendanceItem.userImagePath =
          this.studentsData[studentIndex].studentUserInfoData.userImagePath ??
          "";
        attendanceItem.fullCode =
          this.studentsData[studentIndex].studentUserInfoData.fullCode ?? "";
        this.studentsList.push(attendanceItem);
      } else if (employeeIndex >= 0 && employeeIndexAttend < 0) {
        attendanceItem.userToken =
          this.employeesData[employeeIndex].employeeUserToken;
        attendanceItem.userNameCurrent =
          this.employeesData[employeeIndex].employeeUserInfoData
            .userNameCurrent ?? "";
        attendanceItem.userImagePath =
          this.employeesData[employeeIndex].employeeUserInfoData
            .userImagePath ?? "";
        attendanceItem.fullCode =
          this.employeesData[employeeIndex].employeeUserInfoData.fullCode ?? "";
        this.employeesList.push(attendanceItem);
      } else {
        this.showMsg(this.$t("Users.selectRightOne"));
      }
      this.inputScan = "";
    },
    async addEducationalGroupAttendance() {
      if (this.employeesList.length < 1 && this.studentsList.length < 1) {
        this.showMsg(this.$t("Users.selectAtLeastOne"));
        return;
      }
      this.educationalGroupAttendance.educationalGroupToken =
        this.educationalScheduleTime.educationalGroupToken;
      this.educationalGroupAttendance.educationalScheduleTimeToken =
        this.educationalScheduleTime.educationalScheduleTimeToken;
      this.educationalGroupAttendance.employeesList = this.employeesList;
      this.educationalGroupAttendance.studentsList = this.studentsList;

      this.isLoading = true;
      try {
        const response = await apiEducationalGroupAttendance.add(
          this.educationalGroupAttendance
        );
        if (response.data.status == STATUS.SUCCESS) {
          this.showMsg(response.data.msg, true);
          this.$emit("refresh");
        } else if (response.data.status == STATUS.INVALID_TOKEN) {
          this.$store.dispatch("logoutUser", response.data.msg);
          this.showMsg(response.data.msg);
        } else {
          this.showMsg(response.data.msg);
        }
      } catch (error) {
        this.showMsg(this.$t("errorCatch"));
      }
      this.isLoading = false;
    },
    isDataExist,
    formateDateTimeLang,
    fullPathFileFromServer,
    hasEducationalGroupAttendanceAdd,
  },
};
</script>

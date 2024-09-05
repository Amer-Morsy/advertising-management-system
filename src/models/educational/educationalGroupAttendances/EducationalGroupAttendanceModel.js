import { getUserAuthorizeToken } from "./../../../utils/functions";
import defaultImg from "@/assets/images/EducationalGroupAttendances.svg";

export default class EducationalGroupAttendanceModel {
  icon = defaultImg;
  defaultImg = defaultImg;
  constructor() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.userAuthorizeToken = getUserAuthorizeToken();
    this.educationalGroupToken = "";
    this.educationalGroupTokenAlternative = "";
    this.educationalScheduleTimeToken = "";
    this.alternativeEducationalScheduleTimeToken = "";
    this.employeesList = [];
    this.studentsList = [];
  }
  fillData(data) {
    this.educationalGroupToken = data.educationalGroupToken || "";
    this.educationalGroupTokenAlternative =
      data.educationalGroupTokenAlternative || "";
    this.educationalScheduleTimeToken = data.educationalScheduleTimeToken || "";
    this.alternativeEducationalScheduleTimeToken =
      data.alternativeEducationalScheduleTimeToken || "";
    this.employeesList = data.employeesList || [];
    this.studentsList = data.studentsList || [];
  }
}

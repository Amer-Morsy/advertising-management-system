import EducationalCategoryInfoData from "./../educationalCategories/EducationalCategoryInfoData";
import EducationalGroupWeekDay from "./EducationalGroupWeekDay";
import { getDialogOfDaysOfWeek } from "./../../../utils/dialogsOfConstantsLists";
import { getUserAuthorizeToken } from "./../../../utils/functions";
import { WORK_TYPE_TOKENS } from "./../../../utils/constantLists";
import defaultImg from "@/assets/images/EducationalGroups.svg";

export default class EducationalGroupModel {
  icon = defaultImg;
  defaultImg = defaultImg;
  constructor() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.userAuthorizeToken = getUserAuthorizeToken();
    this.educationalGroupToken = "";
    this.fullCode = "";
    this.educationalGroupNameAr = "";
    this.educationalGroupNameEn = "";
    this.educationalGroupNameUnd = "";
    this.educationalGroupDescriptionCurrent = "";
    this.educationalGroupDescriptionAr = "";
    this.educationalGroupDescriptionEn = "";
    this.educationalGroupDescriptionUnd = "";
    this.educationalGroupNotes = "";
    this.educationalGroupStartDateTime = "";
    this.educationalGroupEndDateTime = "";
    this.educationalGroupTimeZoneToken = "";
    this.educationalCategoryToken = "";
    this.educationalCategoryData = new EducationalCategoryInfoData();
    this.educationalGroupWeekDayData = [];
    this.fixedScheduleStatus = false; // added by me
    this.fixedSchedule = new EducationalGroupWeekDay(); // added by me
    this.fixedScheduleDays = []; // added by me
    this.fixedScheduleDaysOptions = []; // added by me
    this.setInitialGroupWeekDays();
  }
  fillData(data) {
    this.educationalGroupToken = data.educationalGroupToken || "";
    this.fullCode = data.fullCode || "";
    this.educationalGroupNameAr = data.educationalGroupNameAr || "";
    this.educationalGroupNameEn = data.educationalGroupNameEn || "";
    this.educationalGroupNameUnd = data.educationalGroupNameUnd || "";
    this.educationalGroupDescriptionCurrent =
      data.educationalGroupDescriptionCurrent || "";
    this.educationalGroupDescriptionAr =
      data.educationalGroupDescriptionAr || "";
    this.educationalGroupDescriptionEn =
      data.educationalGroupDescriptionEn || "";
    this.educationalGroupDescriptionUnd =
      data.educationalGroupDescriptionUnd || "";
    this.educationalGroupNotes = data.educationalGroupNotes || "";
    this.educationalGroupStartDateTime =
      data.educationalGroupStartDateTime || "";
    this.educationalGroupEndDateTime = data.educationalGroupEndDateTime || "";
    this.educationalGroupTimeZoneToken =
      data.educationalGroupTimeZoneToken || "";
    this.educationalCategoryToken = data.educationalCategoryToken || "";
    this.educationalCategoryData.fillData(data.educationalCategoryData);
    this.educationalGroupWeekDayData = data.educationalGroupWeekDayData || [];
    this.fixedScheduleStatus = data.fixedScheduleStatus || false;
  }
  setInitialGroupWeekDays() {
    let daysOfWeek = getDialogOfDaysOfWeek();
    this.educationalGroupWeekDayData = [];
    this.fixedScheduleDaysOptions = [];

    daysOfWeek.forEach((element, index) => {
      let obj = {
        dayToken: element.value,
        dayNameCurrent: element.text,
      };
      this.educationalGroupWeekDayData.push(new EducationalGroupWeekDay());
      this.educationalGroupWeekDayData[index].fillData(obj);
      this.fixedScheduleDaysOptions.push(element);
    });
  }
  handleBeforeAdd() {
    let obj = { ...this };
    if (this.fixedScheduleStatus) {
      obj.educationalGroupWeekDayData = [];
      if (this.fixedScheduleDays.length > 0) {
        this.fixedScheduleDays.forEach(function (item) {
          let fixedSchedule = { ...obj.fixedSchedule };
          fixedSchedule.dayToken = item;
          fixedSchedule.dayWorkTypeToken = WORK_TYPE_TOKENS.Work;
          obj.educationalGroupWeekDayData.push(fixedSchedule);
        });
      }
    }
    delete obj.defaultImg;
    delete obj.icon;
    delete obj.fixedScheduleStatus;
    delete obj.fixedSchedule;
    delete obj.fixedScheduleDays;
    delete obj.fixedScheduleDaysOptions;
    return obj;
  }
}

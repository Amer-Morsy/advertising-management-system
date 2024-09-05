export default class EducationalGroupInfoData {
  constructor() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.educationalGroupToken = "";
    this.educationalGroupNameCurrent = "";
    this.educationalGroupImagePath = "";
    this.educationalGroupStartDateTimeCustomized = "";
    this.educationalGroupEndDateTimeCustomized = "";
    this.educationalGroupDurationCurrent = "";
  }
  fillData(data) {
    if (data) {
      this.educationalGroupToken = data.educationalGroupToken || "";
      this.educationalGroupNameCurrent = data.educationalGroupNameCurrent || "";
      this.educationalGroupImagePath = data.educationalGroupImagePath || "";
      this.educationalGroupStartDateTimeCustomized =
        data.educationalGroupStartDateTimeCustomized || "";
      this.educationalGroupEndDateTimeCustomized =
        data.educationalGroupEndDateTimeCustomized || "";
      this.educationalGroupDurationCurrent =
        data.educationalGroupDurationCurrent || "";
    } else {
      this.setInitialValue();
    }
  }
}

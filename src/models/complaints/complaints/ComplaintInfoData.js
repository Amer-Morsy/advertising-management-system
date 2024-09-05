import defaultImg from "@/assets/images/complaints.svg";

export default class ComplaintInfoData {
  icon = defaultImg;
  defaultImg = defaultImg;
  constructor() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.complaintToken = "";
    this.fullCode = "";
    this.complaintTitleCurrent = "";
    this.complaintDescriptionCurrent = "";
    this.complaintNotes = "";
    this.complaintStatusTypeToken = "";
    this.complaintStatusTypeNameCurrent = "";
    this.complaintImageIsDefault = "";
    this.complaintImagePath = "";
    this.complaintImageSizeBytes = "";
    this.complaintImageSizeTextCurrent = "";
  }
  fillData(data) {
    if (data) {
      this.complaintToken = data.complaintToken ?? "";
      this.fullCode = data.fullCode ?? "";
      this.complaintTitleCurrent = data.complaintTitleCurrent ?? "";
      this.complaintDescriptionCurrent = data.complaintDescriptionCurrent ?? "";
      this.complaintNotes = data.complaintNotes ?? "";
      this.complaintStatusTypeToken = data.complaintStatusTypeToken ?? "";
      this.complaintStatusTypeNameCurrent =
        data.complaintStatusTypeNameCurrent ?? "";
      this.complaintImageIsDefault = data.complaintImageIsDefault ?? "";
      this.complaintImagePath = data.complaintImagePath ?? "";
      this.complaintImageSizeBytes = data.complaintImageSizeBytes ?? "";
      this.complaintImageSizeTextCurrent =
        data.complaintImageSizeTextCurrent ?? "";
    } else {
      this.setInitialValue();
    }
  }
}

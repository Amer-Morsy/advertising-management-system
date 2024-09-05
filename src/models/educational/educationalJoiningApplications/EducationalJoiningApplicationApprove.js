export default class EducationalJoiningApplicationApprove {
  constructor() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.token = "";
    this.approvalTypeToken = "";
    this.rejectReasonAr = "";
    this.rejectReasonEn = "";
    this.rejectReasonUnd = "";
    this.approvalNote = "";
  }
  fillData(data) {
    if (data) {
      // this.token = data.token ?? data.educationalJoiningApplicationToken ?? "";
      this.token = data.token ?? "";
      this.approvalTypeToken = data.approvalTypeToken ?? "";
      this.rejectReasonAr = data.rejectReasonAr ?? "";
      this.rejectReasonEn = data.rejectReasonEn ?? "";
      this.rejectReasonUnd = data.rejectReasonUnd ?? "";
      this.approvalNote = data.approvalNote ?? "";
    } else {
      this.setInitialValue();
    }
  }
}

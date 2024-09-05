export default class JobOrderStageSavedData {
  constructor() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.jobOrderStageToken = "";
    this.jobOrderStageNameCurrent = "";
    this.jobOrderStageDescriptionCurrent = "";
    this.jobOrderStageNotes = "";
    this.mustAttachFile = false;
    this.mustWriteDescription = false;
    this.jobOrderStageImageIsDefault = false;
    this.jobOrderStageImagePath = 0;
    this.jobOrderStageImageSizeBytes = "";
    this.jobOrderStageImageSizeTextCurrent = "";
  }
  fillData(data) {
    if (data) {
      this.jobOrderStageToken = data.jobOrderStageToken ?? "";
      this.jobOrderStageNameCurrent = data.jobOrderStageNameCurrent ?? "";
      this.jobOrderStageDescriptionCurrent =
        data.jobOrderStageDescriptionCurrent ?? "";
      this.jobOrderStageNotes = data.jobOrderStageNotes ?? "";
      this.mustAttachFile = data.mustAttachFile ?? false;
      this.mustWriteDescription = data.mustWriteDescription ?? false;
      this.jobOrderStageImageIsDefault =
        data.jobOrderStageImageIsDefault ?? false;
      this.jobOrderStageImagePath = data.jobOrderStageImagePath ?? 0;
      this.jobOrderStageImageSizeBytes = data.jobOrderStageImageSizeBytes ?? "";
      this.jobOrderStageImageSizeTextCurrent =
        data.jobOrderStageImageSizeTextCurrent ?? "";
    } else {
      this.setInitialValue();
    }
  }
}

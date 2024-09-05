export default class JobOrderStagesOfWorkFinishData {
  constructor() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.stageFinishTypeToken = "";
    this.stageFinishTypeNameCurrent = "";
    this.finishDescriptionCurrent = "";
    this.finishDateTime = "";
    this.finishDateTimeCustomized = "";
    this.finishDate = "";
    this.finishTime = "";
    this.mediaFilePath = "";
    this.mediaFileIsDefault = false;
    this.mediaFileSizeBytes = 0;
    this.mediaFileSizeTextCurrent = "";
    this.mediaFileTypeToken = "";
    this.mediaFileTypeNameCurrent = "";
    this.userFinishToken = "";
    this.userImagePath = "";
    this.userNameCurrent = "";
  }
  fillData(data) {
    if (data) {
      this.stageFinishTypeToken = data.stageFinishTypeToken ?? "";
      this.stageFinishTypeNameCurrent = data.stageFinishTypeNameCurrent ?? "";
      this.finishDescriptionCurrent = data.finishDescriptionCurrent ?? "";
      this.finishDateTime = data.finishDateTime ?? "";
      this.finishDateTimeCustomized = data.finishDateTimeCustomized ?? "";
      this.finishDate = data.finishDate ?? "";
      this.finishTime = data.finishTime ?? "";
      this.mediaFilePath = data.mediaFilePath ?? "";
      this.mediaFileIsDefault = data.mediaFileIsDefault ?? false;
      this.mediaFileSizeBytes = data.mediaFileSizeBytes ?? 0;
      this.mediaFileSizeTextCurrent = data.mediaFileSizeTextCurrent ?? "";
      this.mediaFileTypeToken = data.mediaFileTypeToken ?? "";
      this.mediaFileTypeNameCurrent = data.mediaFileTypeNameCurrent ?? "";
      this.userFinishToken = data.userFinishToken ?? "";
      this.userImagePath = data.userImagePath ?? "";
      this.userNameCurrent = data.userNameCurrent ?? "";
    } else {
      this.setInitialValue();
    }
  }
}

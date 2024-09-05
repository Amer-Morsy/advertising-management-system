export default class WorkFieldInfoData {
  constructor() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.workFieldToken = "";
    this.fullCode = "";
    this.workFieldNameCurrent = "";
    this.placeTypeToken = "";
    this.placeTypeNameCurrent = "";
    this.workFieldImageIsDefault = true;
    this.workFieldImagePath = "";
    this.workFieldNotes = "";
  }
  fillData(data) {
    if (data) {
      this.workFieldToken = data.workFieldToken ?? "";
      this.fullCode = data.fullCode ?? "";
      this.workFieldNameCurrent = data.workFieldNameCurrent ?? "";
      this.placeTypeToken = data.placeTypeToken ?? "";
      this.placeTypeNameCurrent = data.placeTypeNameCurrent ?? "";
      this.workFieldImageIsDefault = data.workFieldImageIsDefault ?? true;
      this.workFieldImagePath = data.workFieldImagePath ?? "";
      this.workFieldNotes = data.workFieldNotes ?? "";
    } else {
      this.setInitialValue();
    }
  }
}

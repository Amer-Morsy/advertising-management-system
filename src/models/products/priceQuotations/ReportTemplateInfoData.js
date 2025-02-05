export default class ReportTemplateInfoData {
  constructor() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.reportTemplateToken = "";
    this.fullCode = "";
    this.reportTemplateNameCurrent = "";
    this.reportTemplateDescriptionCurrent = "";
    this.reportTemplateNotes = "";
    this.reportTemplateColorHexFromat = "";
    this.reportTemplateTypeToken = "";
    this.companyMarkToken = "";
    this.reportTemplateTypeNameCurrent = "";
    this.reportTemplateImageIsDefault = false;
    this.reportTemplateImagePath = "";
    this.reportTemplateImageSizeBytes = 0;
    this.reportTemplateImageSizeTextCurrent = "";
  }
  fillData(data) {
    if (data) {
      this.reportTemplateToken = data.reportTemplateToken || "";
      this.fullCode = data.fullCode || "";
      this.reportTemplateNameCurrent = data.reportTemplateNameCurrent || "";
      this.reportTemplateDescriptionCurrent =
        data.reportTemplateDescriptionCurrent || "";
      this.reportTemplateNotes = data.reportTemplateNotes || "";
      this.reportTemplateColorHexFromat =
        data.reportTemplateColorHexFromat || "";
      this.reportTemplateTypeToken = data.reportTemplateTypeToken || "";
      this.companyMarkToken = data.companyMarkToken || "";
      this.reportTemplateTypeNameCurrent =
        data.reportTemplateTypeNameCurrent || "";
      this.reportTemplateImageIsDefault =
        data.reportTemplateImageIsDefault || false;
      this.reportTemplateImagePath = data.reportTemplateImagePath || "";
      this.reportTemplateImageSizeBytes =
        data.reportTemplateImageSizeBytes || 0;
      this.reportTemplateImageSizeTextCurrent =
        data.reportTemplateImageSizeTextCurrent || "";
    } else {
      this.setInitialValue();
    }
  }
}

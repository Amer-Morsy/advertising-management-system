import BaseEntityModel from "./../general/BaseEntityModel";
import defaultImg from "@/assets/images/email.svg";

export default class EmailTemplate extends BaseEntityModel {
  icon = defaultImg;
  defaultImg = defaultImg;
  constructor() {
    super();
    this.setInitialValue();
  }
  setInitialValue() {
    this.setInitialValueBaseEntityModel();
    this.emailTemplateToken = "";
    this.emailTemplateNameCurrent = "";
    this.emailTemplateNameAr = "";
    this.emailTemplateNameEn = "";
    this.emailTemplateNameUnd = "";
    this.emailTemplateDescriptionCurrent = "";
    this.emailTemplateDescriptionAr = "";
    this.emailTemplateDescriptionEn = "";
    this.emailTemplateDescriptionUnd = "";
    this.emailTemplateNotes = "";
    this.emailTemplateImageIsDefault = false;
    this.emailTemplateImagePath = "";
    this.emailTemplateImageSizeBytes = 0;
    this.emailTemplateImageSizeTextCurrent = "";
    this.emailTemplateHtmlBody = "";
    this.emailTemplateHtmlSignature = "";
    this.userToken = "";
    this.userInfoData = null;
  }
  fillData(data) {
    if (data) {
      this.fillDataBaseEntityModel(data);
      this.emailTemplateToken = data.emailTemplateToken ?? "";
      this.emailTemplateNameCurrent = data.emailTemplateNameCurrent ?? "";
      this.emailTemplateNameAr = data.emailTemplateNameAr ?? "";
      this.emailTemplateNameEn = data.emailTemplateNameEn ?? "";
      this.emailTemplateNameUnd = data.emailTemplateNameUnd ?? "";
      this.emailTemplateDescriptionCurrent =
        data.emailTemplateDescriptionCurrent ?? "";
      this.emailTemplateDescriptionAr = data.emailTemplateDescriptionAr ?? "";
      this.emailTemplateDescriptionEn = data.emailTemplateDescriptionEn ?? "";
      this.emailTemplateDescriptionUnd = data.emailTemplateDescriptionUnd ?? "";
      this.emailTemplateNotes = data.emailTemplateNotes ?? "";
      this.emailTemplateImageIsDefault =
        data.emailTemplateImageIsDefault ?? false;
      this.emailTemplateImagePath = data.emailTemplateImagePath ?? "";
      this.emailTemplateImageSizeBytes = data.emailTemplateImageSizeBytes ?? 0;
      this.emailTemplateImageSizeTextCurrent =
        data.emailTemplateImageSizeTextCurrent ?? "";
      this.emailTemplateHtmlBody = data.emailTemplateHtmlBody ?? "";
      this.emailTemplateHtmlSignature = data.emailTemplateHtmlSignature ?? "";
      this.userToken = data.userToken ?? "";
      this.userInfoData = data.userInfoData ?? null;
    } else {
      this.setInitialValue();
    }
  }
}
//#endregion model

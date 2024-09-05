import BaseEntityModel from "./../../../general/BaseEntityModel";
import defaultImg from "@/assets/images/jobOrderStages.svg";

export default class JobOrderStage extends BaseEntityModel {
  icon = defaultImg;
  defaultImg = defaultImg;
  constructor() {
    super();
    this.setInitialValue();
  }
  setInitialValue() {
    this.setInitialValueBaseEntityModel();
    this.mediaFile = "";
    this.jobOrderStageToken = "";
    this.jobOrderStageNameCurrent = "";
    this.jobOrderStageNameAr = "";
    this.jobOrderStageNameEn = "";
    this.jobOrderStageNameUnd = "";
    this.jobOrderStageDescriptionCurrent = "";
    this.jobOrderStageDescriptionAr = "";
    this.jobOrderStageDescriptionEn = "";
    this.jobOrderStageDescriptionUnd = "";
    this.jobOrderStageNotes = "";
    this.jobOrderStageImageIsDefault = false;
    this.mustAttachFile = false;
    this.mustWriteDescription = false;
    this.jobOrderStageImagePath = "";
    this.jobOrderStageImageSizeBytes = 0;
    this.jobOrderStageImageSizeTextCurrent = "";
  }
  fillData(data) {
    if (data) {
      this.fillDataBaseEntityModel(data);
      this.mediaFile = "";
      this.jobOrderStageToken = data.jobOrderStageToken;
      this.jobOrderStageNameCurrent = data.jobOrderStageNameCurrent;
      this.jobOrderStageNameAr = data.jobOrderStageNameAr;
      this.jobOrderStageNameEn = data.jobOrderStageNameEn;
      this.jobOrderStageNameUnd = data.jobOrderStageNameUnd;
      this.jobOrderStageDescriptionCurrent =
        data.jobOrderStageDescriptionCurrent;
      this.jobOrderStageDescriptionAr = data.jobOrderStageDescriptionAr;
      this.jobOrderStageDescriptionEn = data.jobOrderStageDescriptionEn;
      this.jobOrderStageDescriptionUnd = data.jobOrderStageDescriptionUnd;
      this.jobOrderStageNotes = data.jobOrderStageNotes;
      this.jobOrderStageImageIsDefault = data.jobOrderStageImageIsDefault;
      this.mustAttachFile = data.mustAttachFile;
      this.mustWriteDescription = data.mustWriteDescription;
      this.jobOrderStageImagePath = data.jobOrderStageImagePath;
      this.jobOrderStageImageSizeBytes = data.jobOrderStageImageSizeBytes;
      this.jobOrderStageImageSizeTextCurrent =
        data.jobOrderStageImageSizeTextCurrent;
    } else {
      this.setInitialValue();
    }
  }
}

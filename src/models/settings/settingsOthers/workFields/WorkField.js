import BaseEntityModel from "./../../../general/BaseEntityModel";
import defaultImg from "@/assets/images/workFields.svg";

export default class WorkField extends BaseEntityModel {
  icon = defaultImg;
  defaultImg = defaultImg;
  constructor() {
    super();
    this.setInitialValue();
  }
  setInitialValue() {
    this.setInitialValueBaseEntityModel();
    this.mediaFile = "";
    this.workFieldToken = "";
    this.workFieldNameCurrent = "";
    this.workFieldNameAr = "";
    this.workFieldNameEn = "";
    this.workFieldNameUnd = "";
    this.placeTypeToken = "";
    this.placeTypeNameCurrent = "";
    this.placeTypeNameAr = "";
    this.placeTypeNameEn = "";
    this.placeTypeNameUnd = "";
    this.workFieldDescriptionCurrent = "";
    this.workFieldDescriptionAr = "";
    this.workFieldDescriptionEn = "";
    this.workFieldDescriptionUnd = "";
    this.workFieldNotes = "";
    this.workFieldImageIsDefault = true;
    this.workFieldImagePath = "";
    this.workFieldImageSizeBytes = 0;
    this.workFieldImageSizeTextCurrent = "";
  }
  fillData(data) {
    if (data) {
      this.fillDataBaseEntityModel(data);
      this.mediaFile = "";
      this.workFieldToken = data.workFieldToken ?? "";
      this.workFieldNameCurrent = data.workFieldNameCurrent ?? "";
      this.workFieldNameAr = data.workFieldNameAr ?? "";
      this.workFieldNameEn = data.workFieldNameEn ?? "";
      this.workFieldNameUnd = data.workFieldNameUnd ?? "";
      this.placeTypeToken = data.placeTypeToken ?? "";
      this.placeTypeNameCurrent = data.placeTypeNameCurrent ?? "";
      this.placeTypeNameAr = data.placeTypeNameAr ?? "";
      this.placeTypeNameEn = data.placeTypeNameEn ?? "";
      this.placeTypeNameUnd = data.placeTypeNameUnd ?? "";
      this.workFieldDescriptionCurrent = data.workFieldDescriptionCurrent ?? "";
      this.workFieldDescriptionAr = data.workFieldDescriptionAr ?? "";
      this.workFieldDescriptionEn = data.workFieldDescriptionEn ?? "";
      this.workFieldDescriptionUnd = data.workFieldDescriptionUnd ?? "";
      this.workFieldNotes = data.workFieldNotes ?? "";
      this.workFieldImageIsDefault = data.workFieldImageIsDefault ?? true;
      this.workFieldImagePath = data.workFieldImagePath ?? "";
      this.workFieldImageSizeBytes = data.workFieldImageSizeBytes ?? 0;
      this.workFieldImageSizeTextCurrent =
        data.workFieldImageSizeTextCurrent ?? "";
    } else {
      this.setInitialValue();
    }
  }
}

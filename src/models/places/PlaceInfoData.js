export default class PlaceInfoData {
  constructor(data = "") {
    if (data) this.fillData(data);
    else this.setInitialValue();
  }
  setInitialValue() {
    this.placeToken = "";
    this.fullCode = "";
    this.placeImagePath = "";
    this.placeFullImagePath = "";
    this.placeNameCurrent = "";
    this.placeNameAr = "";
    this.placeNameEn = "";
    this.placeNameUnd = "";
    this.placeAddressCurrent = "";
    this.placePhone1WithCC = "";
    this.placePhone1WhatsAppStatus = false;
    this.placePhone2WithCC = "";
    this.placePhone2WhatsAppStatus = false;
    this.placeLatitude = "";
    this.placelongitude = "";
    this.placeTypeToken = "";
    this.workFieldToken = "";
    this.systemComponentToken = "";
    this.systemComponentNameCurrent = "";
  }
  fillData(data) {
    if (data) {
      this.placeToken = data.placeToken ?? "";
      this.fullCode = data.fullCode ?? "";
      this.placeImagePath = data.placeImagePath ?? "";
      this.placeFullImagePath = data.placeFullImagePath ?? "";
      this.placeNameCurrent = data.placeNameCurrent ?? "";
      this.placeNameAr = data.placeNameAr ?? "";
      this.placeNameEn = data.placeNameEn ?? "";
      this.placeNameUnd = data.placeNameUnd ?? "";
      this.placeAddressCurrent = data.placeAddressCurrent ?? "";
      this.placePhone1WithCC = data.placePhone1WithCC ?? "";
      this.placePhone1WhatsAppStatus = data.placePhone1WhatsAppStatus ?? false;
      this.placePhone2WithCC = data.placePhone2WithCC ?? "";
      this.placePhone2WhatsAppStatus = data.placePhone2WhatsAppStatus ?? false;
      this.placeLatitude = data.placeLatitude ?? "";
      this.placelongitude = data.placelongitude ?? "";
      this.placeTypeToken = data.placeTypeToken ?? "";
      this.workFieldToken = data.workFieldToken ?? "";
      this.systemComponentToken = data.systemComponentToken ?? "";
      this.systemComponentNameCurrent = data.systemComponentNameCurrent ?? "";
    } else {
      this.setInitialValue();
    }
  }
}

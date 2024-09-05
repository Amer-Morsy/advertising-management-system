export default class PriceQuotationDetailsItem {
  constructor(data = "") {
    if (data) this.fillData(data);
    else this.setInitialValue();
  }
  setInitialValue() {
    this.propertyCopy = true; // added by me
    this.parentStoreItemToken = ""; // added by me
    this.storeItemTokenOptions = []; // added by me
    this.storeItemToken = "";
    this.storeItemName = "";
    this.storeItemQuantity = "";
    this.affiliateOperationTypeToken = "";
    this.affiliateOperationTypeNameCurrent = "";
    this.priceQuotationDetalisNotes = "";
    this.storeItemPropertyTypesData = [];
  }
  fillData(data) {
    if (data) {
      this.propertyCopy = data.propertyCopy ?? true; // added by me
      this.parentStoreItemToken = data.parentStoreItemToken ?? ""; // added by me
      this.storeItemTokenOptions = data.storeItemTokenOptions ?? []; // added by me
      this.storeItemToken = data.storeItemToken || "";
      this.storeItemName = data.storeItemName || "";
      this.storeItemQuantity = data.storeItemQuantity || "";
      this.affiliateOperationTypeToken = data.affiliateOperationTypeToken || "";
      this.affiliateOperationTypeNameCurrent =
        data.affiliateOperationTypeNameCurrent || "";
      this.priceQuotationDetalisNotes = data.priceQuotationDetalisNotes || "";
      this.storeItemPropertyTypesData = data.storeItemPropertyTypesData || [];
    } else {
      this.setInitialValue();
    }
  }
}

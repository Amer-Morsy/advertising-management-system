import BaseEntityModelFilter from "./../../general/BaseEntityModelFilter";

export default class PriceQuotationsFilter extends BaseEntityModelFilter {
  constructor() {
    super();
    this.setInitialValue();
  }
  setInitialValue() {
    this.setFilterInitialValue();
    this.priceQuotationDetailsTokens = "";
    this.token = "";
    this.reportTemplateToken = "";
    this.sendTo = "";
    this.priceQuotationHistoryWorkTypeToken = "";
    this.priceQuotationToken = "";
    this.requestPlaceToken = "";
    this.policiesAndTermToken = "";
    this.policiesAndTermDescription = "";
    this.usersSalesToken = "";
    this.requestPlaceInfoDataInclude = false;
    this.priceQuotationInfoDataInclude = false;
    this.reportTemplateInfoDataInclude = false;
    this.notShowHiddenProperties = false;
    this.emailTemplateToken = ""; //added by me
    this.emailHtmlBody = "";
    this.emailHtmlSignature = "";
    this.companyMarkToken = "";
  }
  fillData(data) {
    if (data) {
      this.fillFilterData(data);
      this.priceQuotationDetailsTokens = data.priceQuotationDetailsTokens ?? "";
      this.token = data.token ?? "";
      this.reportTemplateToken = data.reportTemplateToken ?? "";
      this.sendTo = data.sendTo ?? "";
      this.priceQuotationHistoryWorkTypeToken =
        data.priceQuotationHistoryWorkTypeToken ?? "";
      this.priceQuotationToken = data.priceQuotationToken ?? "";
      this.requestPlaceToken = data.requestPlaceToken ?? "";
      this.policiesAndTermToken = data.policiesAndTermToken ?? "";
      this.policiesAndTermDescription = data.policiesAndTermDescription ?? "";
      this.usersSalesToken = data.usersSalesToken ?? "";
      this.requestPlaceInfoDataInclude =
        data.requestPlaceInfoDataInclude ?? false;
      this.priceQuotationInfoDataInclude =
        data.priceQuotationInfoDataInclude ?? false;
      this.reportTemplateInfoDataInclude =
        data.reportTemplateInfoDataInclude ?? false;
      this.notShowHiddenProperties = data.notShowHiddenProperties ?? false;
      this.emailHtmlBody = data.emailHtmlBody ?? "";
      this.emailHtmlSignature = data.emailHtmlSignature ?? "";
      this.companyMarkToken = data.companyMarkToken ?? "";
    } else {
      this.setInitialValue();
    }
  }
}

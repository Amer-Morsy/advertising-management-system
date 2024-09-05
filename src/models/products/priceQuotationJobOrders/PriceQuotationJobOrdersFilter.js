import BaseEntityModelFilter from "./../../general/BaseEntityModelFilter";

export default class PriceQuotationJobOrdersFilter extends BaseEntityModelFilter {
  constructor() {
    super();
    this.setInitialValue();
  }
  setInitialValue() {
    this.setFilterInitialValue();
    this.jobOrderHistoryWorkTypeToken = "";
    this.priceQuotationJobOrderToken = "";
    this.priceQuotationToken = "";
    this.requestPlaceToken = "";
    this.userWorkInJobOrderToken = "";
    this.sendTo = "";
    this.reportTemplateToken = "";
    this.priceQuotationInfoDataInclude = false;
    this.priceQuotationJobOrderStagesOfWorkDataInclude = false;
    this.lastJobOrderHistoryWorkInfoDataInclude = false;
    this.notShowHiddenProperties = false;
    this.emailTemplateToken = ""; //added by me
    this.emailHtmlBody = "";
    this.emailHtmlSignature = "";
  }
  fillData(data) {
    if (data) {
      this.fillFilterData(data);
      this.jobOrderHistoryWorkTypeToken =
        data.jobOrderHistoryWorkTypeToken ?? "";
      this.priceQuotationJobOrderToken = data.priceQuotationJobOrderToken ?? "";
      this.priceQuotationToken = data.priceQuotationToken ?? "";
      this.requestPlaceToken = data.requestPlaceToken ?? "";
      this.userWorkInJobOrderToken = data.userWorkInJobOrderToken ?? "";
      this.sendTo = data.sendTo ?? "";
      this.reportTemplateToken = data.reportTemplateToken ?? "";
      this.priceQuotationInfoDataInclude =
        data.priceQuotationInfoDataInclude ?? false;
      this.priceQuotationJobOrderStagesOfWorkDataInclude =
        data.priceQuotationJobOrderStagesOfWorkDataInclude ?? false;
      this.lastJobOrderHistoryWorkInfoDataInclude =
        data.lastJobOrderHistoryWorkInfoDataInclude ?? false;
      this.notShowHiddenProperties = data.notShowHiddenProperties ?? false;
      this.emailHtmlBody = data.emailHtmlBody ?? "";
      this.emailHtmlSignature = data.emailHtmlSignature ?? "";
    } else {
      this.setInitialValue();
    }
  }
}

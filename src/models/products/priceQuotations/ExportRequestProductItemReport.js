import { getUserAuthorizeToken } from "./../../../utils/functions";
import defaultImg from "@/assets/images/send.svg";

export default class ExportRequestProductItemReport {
  icon = defaultImg;
  constructor() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.userAuthorizeToken = getUserAuthorizeToken();
    this.priceQuotationDetailsTokens = [];
    this.reportTemplateToken = "";
    this.emailTemplateToken = ""; //added by me
    this.emailHtmlBody = "";
    this.emailHtmlSignature = "";
    this.placeTokens = [];
    this.movePriceQuotationWatingFromSupplier = true; //set true
  }
  fillData(data) {
    if (data) {
      this.priceQuotationDetailsTokens = data.priceQuotationDetailsTokens ?? [];
      this.reportTemplateToken = data.reportTemplateToken ?? "";
      this.emailHtmlBody = data.emailHtmlBody ?? "";
      this.emailHtmlSignature = data.emailHtmlSignature ?? "";
      this.placeTokens = data.placeTokens ?? [];
      this.movePriceQuotationWatingFromSupplier = true;
    } else {
      this.setInitialValue();
    }
  }
}

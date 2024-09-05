import { getUserAuthorizeToken } from "./../../../utils/functions";
import defaultImg from "@/assets/images/sendToClient.svg";

export default class ResendToManyClientsModel {
  icon = defaultImg;
  constructor() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.userAuthorizeToken = getUserAuthorizeToken();
    this.priceQuotationToken = "";
    this.reportTemplateToken = "";
    this.emailTemplateToken = "";
    this.emailHtmlBody = "";
    this.emailHtmlSignature = "";
    this.policiesAndTermToken = ""; //handler
    this.policiesAndTermDescription = "";
    this.emails = [];
  }
  fillData(data) {
    if (data) {
      this.priceQuotationToken = data.priceQuotationToken ?? "";
      this.reportTemplateToken = data.reportTemplateToken ?? "";
      this.emailTemplateToken = data.emailTemplateToken ?? "";
      this.emailHtmlBody = data.emailHtmlBody ?? "";
      this.emailHtmlSignature = data.emailHtmlSignature ?? "";
      this.policiesAndTermDescription = data.policiesAndTermDescription ?? "";
      this.emails = data.emails ?? [];
    } else {
      this.setInitialValue();
    }
  }
}

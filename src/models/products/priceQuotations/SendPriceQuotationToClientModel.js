import { getUserAuthorizeToken } from "./../../../utils/functions";
import QuotationDetailsPriceReliance from "./QuotationDetailsPriceReliance";
import defaultImg from "@/assets/images/sendToClient.svg";

export default class SendPriceQuotationToClientModel {
  icon = defaultImg;
  constructor() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.userAuthorizeToken = getUserAuthorizeToken();
    this.emailTemplateToken = ""; //added by me
    this.emailHtmlBody = "";
    this.emailHtmlSignature = "";
    this.priceQuotationToken = "";
    this.sendAfterSave = false;
    this.feeTypeNameCurrent = "";
    this.feeTypeToken = "";
    this.feeTypeValue = 0;
    this.taxStatus = false;
    this.taxPercent = 0;
    this.quotationDetailsPriceRelianceList = [];
  }
  fillData(data) {
    if (data) {
      this.emailHtmlBody = data.emailHtmlBody ?? "";
      this.emailHtmlSignature = data.emailHtmlSignature ?? "";
      this.priceQuotationToken = data.priceQuotationToken || "";
      this.sendAfterSave = data.sendAfterSave || false;
      this.feeTypeNameCurrent = data.feeTypeNameCurrent || "";
      this.feeTypeToken = data.feeTypeToken || "";
      this.feeTypeValue = data.feeTypeValue || 0;
      this.taxStatus = data.taxStatus || false;
      this.taxPercent = data.taxPercent || 0;
      this.quotationDetailsPriceRelianceList = [];
      if (
        data.quotationDetailsPriceRelianceList != null &&
        data.quotationDetailsPriceRelianceList.length > 0
      ) {
        this.quotationDetailsPriceRelianceList =
          data.quotationDetailsPriceRelianceList.map((element) => {
            return new QuotationDetailsPriceReliance(element);
          });
      }
    } else {
      this.setInitialValue();
    }
  }
}

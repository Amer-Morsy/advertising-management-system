export default class PriceQuotationsStatistics {
  constructor() {
    this.setPriceQuotationsStatisticsInitialValue();
  }
  setPriceQuotationsStatisticsInitialValue() {
    this.totalCount = 0;
    this.totalNewlyWanted = 0;
    this.newlyWantedPercentage = 0;
    this.newlyWantedPercentageText = "";
    this.totalWaitingForSupplier = 0;
    this.waitingForSupplierPercentage = 0;
    this.waitingForSupplierPercentageText = "";
    this.totalWaitingForCustomerAccept = 0;
    this.waitingForCustomerAcceptPercentage = 0;
    this.waitingForCustomerAcceptPercentageText = "";
    this.totalRejectedQuotesFormCustomer = 0;
    this.rejectedQuotesFormCustomerPercentage = 0;
    this.rejectedQuotesFormCustomerPercentageText = "";
    this.totalAcceptQuotesFormCustomer = 0;
    this.acceptQuotesFormCustomerPercentage = 0;
    this.acceptQuotesFormCustomerPercentageText = "";
    this.totalInJobOrder = 0;
    this.inJobOrderPercentage = 0;
    this.inJobOrderPercentageText = "";
    this.totalFinishJobOrderNotCustomerReceive = 0;
    this.finishJobOrderNotCustomerReceivePercentage = 0;
    this.finishJobOrderNotCustomerReceivePercentageText = "";
    this.totalFinishJobOrderCustomerReceive = 0;
    this.finishJobOrderCustomerReceivePercentage = 0;
    this.finishJobOrderCustomerReceivePercentageText = "";
    this.totalCanceledbyCustomer = 0;
    this.canceledbyCustomerPercentage = 0;
    this.canceledbyCustomerPercentageText = "";

    // this.totalWorkProgress = 0;
    // this.workProgressPercentage = 0;
    // this.workProgressPercentageText = "";
    // this.totalWaitingForQuotes = 0;
    // this.waitingForQuotesPercentage = 0;
    // this.waitingForQuotesPercentageText = "";
  }
  fillPriceQuotationsStatisticsData(data) {
    if (data) {
      this.totalCount = data.totalCount ?? 0;
      this.totalNewlyWanted = data.totalNewlyWanted ?? 0;
      this.newlyWantedPercentage = data.newlyWantedPercentage ?? 0;
      this.newlyWantedPercentageText = data.newlyWantedPercentageText ?? 0;
      this.totalWaitingForSupplier = data.totalWaitingForSupplier ?? 0;
      this.waitingForSupplierPercentage =
        data.waitingForSupplierPercentage ?? 0;
      this.waitingForSupplierPercentageText =
        data.waitingForSupplierPercentageText ?? 0;
      this.totalWaitingForCustomerAccept =
        data.totalWaitingForCustomerAccept ?? 0;
      this.waitingForCustomerAcceptPercentage =
        data.waitingForCustomerAcceptPercentage ?? 0;
      this.waitingForCustomerAcceptPercentageText =
        data.waitingForCustomerAcceptPercentageText ?? "";
      this.totalRejectedQuotesFormCustomer =
        data.totalRejectedQuotesFormCustomer ?? 0;
      this.rejectedQuotesFormCustomerPercentage =
        data.rejectedQuotesFormCustomerPercentage ?? 0;
      this.rejectedQuotesFormCustomerPercentageText =
        data.rejectedQuotesFormCustomerPercentageText ?? "";
      this.totalAcceptQuotesFormCustomer =
        data.totalAcceptQuotesFormCustomer ?? 0;
      this.acceptQuotesFormCustomerPercentage =
        data.acceptQuotesFormCustomerPercentage ?? 0;
      this.acceptQuotesFormCustomerPercentageText =
        data.acceptQuotesFormCustomerPercentageText ?? "";
      this.totalInJobOrder = data.totalInJobOrder ?? 0;
      this.inJobOrderPercentage = data.inJobOrderPercentage ?? 0;
      this.inJobOrderPercentageText = data.inJobOrderPercentageText ?? "";
      this.totalFinishJobOrderNotCustomerReceive =
        data.totalFinishJobOrderNotCustomerReceive ?? 0;
      this.finishJobOrderNotCustomerReceivePercentage =
        data.finishJobOrderNotCustomerReceivePercentage ?? 0;
      this.finishJobOrderNotCustomerReceivePercentageText =
        data.finishJobOrderNotCustomerReceivePercentageText ?? "";
      this.totalFinishJobOrderCustomerReceive =
        data.totalFinishJobOrderCustomerReceive ?? 0;
      this.finishJobOrderCustomerReceivePercentage =
        data.finishJobOrderCustomerReceivePercentage ?? 0;
      this.finishJobOrderCustomerReceivePercentageText =
        data.finishJobOrderCustomerReceivePercentageText ?? "";
      this.totalCanceledbyCustomer = data.totalCanceledbyCustomer ?? 0;
      this.canceledbyCustomerPercentage =
        data.canceledbyCustomerPercentage ?? 0;
      this.canceledbyCustomerPercentageText =
        data.canceledbyCustomerPercentageText ?? "";
    } else {
      this.setPriceQuotationsStatisticsInitialValue();
    }
  }
}

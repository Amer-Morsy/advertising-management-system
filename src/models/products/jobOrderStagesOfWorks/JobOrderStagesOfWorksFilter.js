import BaseEntityModelFilter from "./../../general/BaseEntityModelFilter";

export default class JobOrderStagesOfWorks extends BaseEntityModelFilter {
  constructor() {
    super();
    this.setInitialValue();
  }
  setInitialValue() {
    this.setFilterInitialValue();
    this.priceQuotationJobOrderToken = "";
    this.stageFinishTypeToken = "";
  }
  fillData(data) {
    if (data) {
      this.fillFilterData(data);
    } else {
      this.setInitialValue();
    }
  }
}

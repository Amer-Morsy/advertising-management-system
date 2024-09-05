import GeneralModel from "./../../general/GeneralModel";
import JobOrderStagesOfWork from "./JobOrderStagesOfWork";
import JobOrderStagesOfWorksFilter from "./JobOrderStagesOfWorksFilter";

export default class JobOrderStagesOfWorks extends GeneralModel {
  constructor() {
    super();
    this.setInitialValue();
  }
  setInitialValue() {
    this.setGeneralModelInitialValue();
    this.jobOrderStagesOfWorksData = [];
    this.jobOrderStagesOfWork = new JobOrderStagesOfWork();
    this.filterData = new JobOrderStagesOfWorksFilter();
  }
  fillData(data) {
    if (data) {
      this.fillGeneralModelData(data);
      this.jobOrderStagesOfWorksData =
        data.priceQuotationJobOrderStagesOfWorksData || [];
      let filter = { ...this.filterData, ...data.pagination };
      this.filterData.fillData(filter);
    } else {
      this.setInitialValue();
    }
  }
}

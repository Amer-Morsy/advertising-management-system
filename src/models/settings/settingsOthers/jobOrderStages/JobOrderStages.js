import GeneralModel from "./../../../general/GeneralModel";
import JobOrderStage from "./JobOrderStage";
import JobOrderStagesFilter from "./JobOrderStagesFilter";

export default class JobOrderStages extends GeneralModel {
  constructor() {
    super();
    this.setInitialValue();
  }
  setInitialValue() {
    this.setGeneralModelInitialValue();
    this.jobOrderStagesData = [];
    this.jobOrderStage = new JobOrderStage();
    this.filterData = new JobOrderStagesFilter();
  }
  fillData(data) {
    if (data) {
      this.fillGeneralModelData(data);
      this.jobOrderStagesData = data.jobOrderStagesData || [];
      let filter = { ...this.filterData, ...data.pagination };
      this.filterData.fillData(filter);
    } else {
      this.setInitialValue();
    }
  }
}

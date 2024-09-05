import GeneralModel from "./../../../general/GeneralModel";
import WorkField from "./WorkField";
import WorkFieldsFilter from "./WorkFieldsFilter";

export default class WorkFields extends GeneralModel {
  constructor() {
    super();
    this.setInitialValue();
  }
  setInitialValue() {
    this.setGeneralModelInitialValue();
    this.workFieldsData = [];
    this.workField = new WorkField();
    this.filterData = new WorkFieldsFilter();
  }
  fillData(data) {
    if (data) {
      this.fillGeneralModelData(data);
      this.workFieldsData = data.workFieldsData || [];
      let filter = { ...this.filterData, ...data.pagination };
      this.filterData.fillData(filter);
    } else {
      this.setInitialValue();
    }
  }
}

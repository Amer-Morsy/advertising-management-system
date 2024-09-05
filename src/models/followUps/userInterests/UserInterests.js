import GeneralModel from "./../../general/GeneralModel";
import UserInterestData from "./UserInterestData";
import UserInterestsFilter from "./UserInterestsFilter";

export default class UserInterests extends GeneralModel {
  constructor() {
    super();
    this.setInitialValue();
  }
  setInitialValue() {
    this.setGeneralModelInitialValue();
    this.userInterestData = new UserInterestData();
    this.filterData = new UserInterestsFilter();
  }
  fillData(data) {
    if (data) {
      this.fillGeneralModelData(data);
      this.userInterestData.fillData(data.userInterestData);
    } else {
      this.setInitialValue();
    }
  }
}

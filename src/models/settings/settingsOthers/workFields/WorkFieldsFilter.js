import BaseEntityModelFilter from "./../../../general/BaseEntityModelFilter";
import store from "./../../../../store";

export default class WorkFieldsFilter extends BaseEntityModelFilter {
  constructor() {
    super();
    this.setInitialValue();
  }
  setInitialValue() {
    this.setFilterInitialValue();
    this.placeTypeToken = "";
    this.activationTypeTokens =
      store.getters.generalSetting.workFields.activationTypeTokens || [];
  }
  fillData(data) {
    if (data) {
      this.fillFilterData(data);
      this.placeTypeToken = data.placeTypeToken ?? "";
      this.activationTypeTokens = data.activationTypeTokens ?? [];
    } else {
      this.setInitialValue();
    }
  }
}

import BaseEntityModelFilter from "./../../../general/BaseEntityModelFilter";
import store from "./../../../../store";

export default class PriceListsFilter extends BaseEntityModelFilter {
  constructor() {
    super();
    this.setInitialValue();
  }
  setInitialValue() {
    this.setFilterInitialValue();
    this.educationalCategoryInfoDataInclude = true;

    this.educationalCategoryToken = "";
    this.showStatusToken = "";

    this.activationTypeTokens =
      store.getters.generalSetting.priceLists.activationTypeTokens || [];
  }
  fillData(data) {
    if (data) {
      this.fillFilterData(data);
    } else {
      this.setInitialValue();
    }
  }
}

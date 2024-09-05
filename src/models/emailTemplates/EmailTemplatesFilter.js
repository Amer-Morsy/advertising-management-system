import BaseEntityModelFilter from "./../general/BaseEntityModelFilter";
import store from "./../../store";

export default class EmailTemplatesFilter extends BaseEntityModelFilter {
  constructor() {
    super();
    this.setInitialValue();
  }
  setInitialValue() {
    this.setFilterInitialValue();
    this.activationTypeTokens =
      store.getters.generalSetting.emailTemplates.activationTypeTokens || [];
    this.userToken = "";
  }
  fillData(data) {
    if (data) {
      this.fillFilterData(data);
      this.userToken = data.userToken ?? "";
    } else {
      this.setInitialValue();
    }
  }
}

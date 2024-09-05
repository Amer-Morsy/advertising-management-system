import BaseEntityModelFilter from "./../general/BaseEntityModelFilter";
import store from "./../../store";
import { getLanguage } from "./../../utils/functions";
import { LANGUAGES } from "./../../utils/constants";
import i18n from "./../../i18n";

let language = getLanguage();
export default class UsersFilter extends BaseEntityModelFilter {
  constructor(modelName) {
    super();
    this.setInitialValue(modelName);
  }
  setInitialValue(modelName = "") {
    switch (language) {
      case LANGUAGES.arEG:
        this.itemName = `${i18n.t("code")}: {fullCode} - ${i18n.t(
          "name"
        )}: {userNameAr}`;
        break;
      case LANGUAGES.enUS:
        this.itemName = `${i18n.t("code")}: {fullCode} - ${i18n.t(
          "name"
        )}: {userNameEn}`;
        break;
    }

    try {
      this.activationTypeTokens =
        store.getters.generalSetting[modelName].activationTypeTokens;
    } catch (error) {
      this.activationTypeTokens = [];
    }
    this.userTypeToken = "";
    this.userActivityTypeToken = "";
    this.inPlaceToken = "";
    this.notInPlaceToken = "";
    this.userToken = "";
    this.token = "";
    this.establishmentRoleDataInclude = false;
    this.userProfileDataInclude = false;

    this.studentUserToken = "";
    this.educationalGroupToken = "";
    this.sendTo = "";
  }
  fillData(data) {
    if (data) {
      this.fillFilterData(data);
      this.userTypeToken = data.userTypeToken || "";
      this.userActivityTypeToken = data.userActivityTypeToken || "";
      this.inPlaceToken = data.inPlaceToken || "";
      this.notInPlaceToken = data.notInPlaceToken || "";
      this.userToken = data.userToken || "";
      this.token = data.token || "";
      this.establishmentRoleDataInclude =
        data.establishmentRoleDataInclude || false;
      this.userProfileDataInclude = data.userProfileDataInclude || false;
      // } else {
      //   this.setInitialValue();
    }
  }
}

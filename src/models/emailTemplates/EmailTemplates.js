import EmailTemplate from "./EmailTemplate";
import EmailTemplatesFilter from "./EmailTemplatesFilter";

export default class EmailTemplates {
  constructor() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.status = 0;
    this.msg = "";
    this.listSort = [];
    this.emailTemplatesData = [];
    this.emailTemplate = new EmailTemplate();
    this.filterData = new EmailTemplatesFilter();
  }
  fillData(data) {
    if (data) {
      this.status = data.status;
      this.msg = data.msg;
      this.listSort = data.listSort ?? [];
      let filter = { ...this.filterData, ...data.pagination };
      this.filterData.fillData(filter);
      this.emailTemplatesData = data.emailTemplatesData ?? [];
    } else {
      this.setInitialValue();
    }
  }
}

import { METHOD, request } from "./../utils/request";
import { CompanyMarks } from "./api";

async function getDialog(params) {
  return request(CompanyMarks.getDialog, METHOD.GET, params);
}

export default {
  getDialog,
};

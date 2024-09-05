import { METHOD, request } from "./../utils/request";
import { PoliciesAndTerms } from "./api";

async function getAll(params) {
  return request(PoliciesAndTerms.getAll, METHOD.GET, params);
}

async function getDialog(params) {
  return request(PoliciesAndTerms.getDialog, METHOD.GET, params);
}

export default {
  getAll,
  getDialog,
};

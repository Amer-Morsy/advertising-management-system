import { METHOD, request } from "./../utils/request";
import { EmailTemplates } from "./api";

async function getAll(params) {
  return request(EmailTemplates.getAll, METHOD.GET, params);
}

export default {
  getAll,
};

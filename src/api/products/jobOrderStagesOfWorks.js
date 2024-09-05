import { METHOD, request } from "./../../utils/request";
import { JobOrderStagesOfWorks } from "./../api";

async function getAll(params) {
  return request(JobOrderStagesOfWorks.getAll, METHOD.GET, params);
}
async function getDetails(params) {
  return request(JobOrderStagesOfWorks.getDetails, METHOD.GET, params);
}

async function add(data) {
  return request(JobOrderStagesOfWorks.add, METHOD.POST, data);
}
async function finish(data) {
  return request(JobOrderStagesOfWorks.finish, METHOD.POST, data);
}
async function cancle(data) {
  return request(JobOrderStagesOfWorks.cancle, METHOD.POST, data);
}
async function deleteStage(data) {
  return request(JobOrderStagesOfWorks.deleteStage, METHOD.POST, data);
}

export default {
  getAll,
  getDetails,
  add,
  finish,
  cancle,
  deleteStage,
};

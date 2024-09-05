import { METHOD, request } from "./../../../utils/request";
import { JobOrderStages } from "./../../api";

async function getAll(params) {
  return request(JobOrderStages.getAll, METHOD.GET, params);
}
async function getDetails(params) {
  return request(JobOrderStages.getDetails, METHOD.GET, params);
}
async function getDialog(params) {
  return request(JobOrderStages.getDialog, METHOD.GET, params);
}

async function add(data) {
  return request(JobOrderStages.add, METHOD.POST, data);
}
async function update(data) {
  return request(JobOrderStages.update, METHOD.POST, data);
}

async function changeActivationType(data) {
  return request(JobOrderStages.changeActivationType, METHOD.POST, data);
}

async function finalDelete(data) {
  return request(JobOrderStages.finalDelete, METHOD.POST, data);
}
async function deleteImage(data) {
  return request(JobOrderStages.deleteImage, METHOD.POST, data);
}

export default {
  getAll,
  getDetails,
  getDialog,
  add,
  update,
  changeActivationType,
  finalDelete,
  deleteImage,
};

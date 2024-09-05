import { METHOD, request } from "./../../../utils/request";
import { WorkFields } from "./../../api";

async function getAll(params) {
  return request(WorkFields.getAll, METHOD.GET, params);
}
async function getDetails(params) {
  return request(WorkFields.getDetails, METHOD.GET, params);
}
async function getDialog(params) {
  return request(WorkFields.getDialog, METHOD.GET, params);
}

async function add(data) {
  return request(WorkFields.add, METHOD.POST, data);
}
async function update(data) {
  return request(WorkFields.update, METHOD.POST, data);
}

async function changeActivationType(data) {
  return request(WorkFields.changeActivationType, METHOD.POST, data);
}

async function finalDelete(data) {
  return request(WorkFields.finalDelete, METHOD.POST, data);
}
async function deleteImage(data) {
  return request(WorkFields.deleteImage, METHOD.POST, data);
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

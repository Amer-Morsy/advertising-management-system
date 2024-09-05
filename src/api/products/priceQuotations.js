import { METHOD, request } from "./../../utils/request";
import { PriceQuotations } from "./../api";

async function getAll(params) {
  return request(PriceQuotations.getAll, METHOD.GET, params);
}
async function getDetails(params) {
  return request(PriceQuotations.getDetails, METHOD.GET, params);
}
async function getSuppliers(params) {
  return request(PriceQuotations.getSuppliers, METHOD.GET, params);
}
async function getReport(params) {
  return request(PriceQuotations.getReport, METHOD.GET, params);
}
async function getReportExport(data) {
  return request(PriceQuotations.getReportExport, METHOD.POST, data);
}
async function getReportBill(params) {
  return request(PriceQuotations.getReportBill, METHOD.GET, params);
}
async function getReportSalesStatistics(params) {
  return request(PriceQuotations.getReportSalesStatistics, METHOD.GET, params);
}

async function add(data) {
  return request(PriceQuotations.add, METHOD.POST, data);
}
async function update(data) {
  return request(PriceQuotations.update, METHOD.POST, data);
}
async function updateDateTime(data) {
  return request(PriceQuotations.updateDateTime, METHOD.POST, data);
}
async function sendToClient(data) {
  return request(PriceQuotations.sendToClient, METHOD.POST, data);
}
async function resend(data) {
  return request(PriceQuotations.resend, METHOD.POST, data);
}
async function resendToMany(data) {
  return request(PriceQuotations.resendToMany, METHOD.POST, data);
}

async function moveToWaitingForSupplier(data) {
  return request(PriceQuotations.moveToWaitingForSupplier, METHOD.POST, data);
}
async function moveToApproved(data) {
  return request(PriceQuotations.moveToApproved, METHOD.POST, data);
}
async function moveToCancel(data) {
  return request(PriceQuotations.moveToCancel, METHOD.POST, data);
}

export default {
  getAll,
  getDetails,
  getSuppliers,
  getReport,
  getReportExport,
  getReportBill,
  getReportSalesStatistics,
  add,
  update,
  updateDateTime,
  sendToClient,
  resend,
  resendToMany,
  moveToWaitingForSupplier,
  moveToApproved,
  moveToCancel,
};

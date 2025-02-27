import { METHOD, request } from "./../../utils/request";
import { PriceQuotationDetails } from "./../api";
import { QuotationDetailsHistoryWorks } from "./../api";

async function getAll(params) {
  return request(PriceQuotationDetails.getAll, METHOD.GET, params);
}
async function getDetails(params) {
  return request(PriceQuotationDetails.getDetails, METHOD.GET, params);
}

async function sendRequest(data) {
  return request(PriceQuotationDetails.sendRequest, METHOD.POST, data);
}
async function exportRequest(data) {
  return request(PriceQuotationDetails.exportRequest, METHOD.POST, data);
}

async function moveToNewlyWanted(data) {
  return request(
    QuotationDetailsHistoryWorks.moveToNewlyWanted,
    METHOD.POST,
    data
  );
}
async function moveToWorkProgres(data) {
  return request(
    QuotationDetailsHistoryWorks.moveToWorkProgres,
    METHOD.POST,
    data
  );
}
async function moveToReviewedByCustomer(data) {
  return request(
    QuotationDetailsHistoryWorks.moveToReviewedByCustomer,
    METHOD.POST,
    data
  );
}
async function moveToRejectedByCustomer(data) {
  return request(
    QuotationDetailsHistoryWorks.moveToRejectedByCustomer,
    METHOD.POST,
    data
  );
}
async function moveToAcceptedByCustomer(data) {
  return request(
    QuotationDetailsHistoryWorks.moveToAcceptedByCustomer,
    METHOD.POST,
    data
  );
}
async function moveToCanceledbyCustomer(data) {
  return request(
    QuotationDetailsHistoryWorks.moveToCanceledbyCustomer,
    METHOD.POST,
    data
  );
}

export default {
  getAll,
  getDetails,
  sendRequest,
  exportRequest,
  moveToNewlyWanted,
  moveToWorkProgres,
  moveToReviewedByCustomer,
  moveToRejectedByCustomer,
  moveToAcceptedByCustomer,
  moveToCanceledbyCustomer,
};

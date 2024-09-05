import BaseEntityModel from "./../../general/BaseEntityModel";
import defaultImg from "@/assets/images/jobOrderStages.svg";
import JobOrderStageSavedData from "./JobOrderStageSavedData";
import JobOrderStagesOfWorkFinishData from "./JobOrderStagesOfWorkFinishData";

export default class JobOrderStagesOfWork extends BaseEntityModel {
  icon = defaultImg;
  defaultImg = defaultImg;
  constructor() {
    super();
    this.setInitialValue();
  }
  setInitialValue() {
    this.setInitialValueBaseEntityModel();
    this.priceQuotationJobOrderStagesOfWorkToken = "";
    this.stageArrangement = 0;
    this.jobOrderStageSavedData = new JobOrderStageSavedData();
    this.jobOrderStagesOfWorkFinishData = new JobOrderStagesOfWorkFinishData();
    this.finishDescriptionAr = ""; //add by me
    this.finishDescriptionEn = ""; //add by me
    this.finishDescriptionUnd = ""; //add by me
    this.priceQuotationJobOrderToken = ""; //add by me
    this.jobOrderStageTokenList = []; //add by me
  }
  fillData(data) {
    if (data) {
      this.fillDataBaseEntityModel(data);
      this.priceQuotationJobOrderStagesOfWorkToken =
        data.priceQuotationJobOrderStagesOfWorkToken ?? "";
      this.stageArrangement = data.stageArrangement ?? 0;
      this.jobOrderStageSavedData.fillData(data.jobOrderStageSavedData);
      this.jobOrderStagesOfWorkFinishData.fillData(
        data.jobOrderStagesOfWorkFinishData
      );
      this.finishDescriptionAr = data.finishDescriptionAr ?? ""; //add by me
      this.finishDescriptionEn = data.finishDescriptionEn ?? ""; //add by me
      this.finishDescriptionUnd = data.finishDescriptionUnd ?? ""; //add by me
      this.priceQuotationJobOrderToken = data.priceQuotationJobOrderToken ?? ""; //add by me
      this.jobOrderStageTokenList = data.jobOrderStageTokenList ?? ""; //add by me
    } else {
      this.setInitialValue();
    }
  }
}

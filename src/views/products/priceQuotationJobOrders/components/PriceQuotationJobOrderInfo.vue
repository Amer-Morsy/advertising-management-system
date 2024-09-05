<template>
  <div>
    <PreLoader v-if="isLoading" />

    <CustomBottomSheet
      :refName="'PriceQuotationJobOrderInfo'"
      size="xl"
      :headerText="$t('PriceQuotationJobOrders.data')"
      :headerIcon="priceQuotationJobOrder.icon"
    >
      <!-- @opened="getDetails()" -->
      <ExceptionWithImg
        v-if="exceptionMsg"
        :msg="exceptionMsg"
        :image="exceptionImg"
      />
      <template v-else>
        <div class="row">
          <DataLabelGroup
            :className="'col-md-6'"
            :value="priceQuotationJobOrder.fullCode"
            :title="$t('PriceQuotationJobOrders.code')"
            :imgName="'code.svg'"
          />
          <DataLabelGroup
            :className="'col-md-6'"
            :value="priceQuotationJobOrder.priceQuotationJobOrderNameCurrent"
            :title="$t('general.name')"
            :imgName="'PriceQuotationJobOrders.svg'"
          />

          <DataLabelGroup
            :className="'col-md-12'"
            :value="
              priceQuotationJobOrder.priceQuotationInfoData
                .priceQuotationNameCurrent
            "
            :title="$t('PriceQuotations.name')"
            :imgName="'PriceQuotations.svg'"
          />

          <!-- <DataLabelGroup
            :className="'col-md-6'"
            :value="priceQuotationJobOrder.priceQuotationJobOrderDescriptionAr"
            :title="$t('PriceQuotationJobOrders.descriptionAr')"
            :imgName="'description.svg'"
          />
          <DataLabelGroup
            :className="'col-md-6'"
            :value="priceQuotationJobOrder.priceQuotationJobOrderDescriptionEn"
            :title="$t('PriceQuotationJobOrders.descriptionEn')"
            :imgName="'description.svg'"
          /> -->
          <!-- <DataLabelGroup
            :className="'col-md-6'"
            :value="priceQuotationJobOrder.priceQuotationJobOrderDescriptionUnd"
            :title="$t('PriceQuotationJobOrders.descriptionUnd')"
            :imgName="'description.svg'"
          /> -->

          <DataLabelGroup
            :className="'col-md-6'"
            :value="
              formateDateTimeLang(
                priceQuotationJobOrder.startWorkDate,
                priceQuotationJobOrder.startWorkTime
              )
            "
            :title="$t('PriceQuotationJobOrders.startWorkDateTime')"
            :imgName="'dateAndTime.svg'"
          />
          <DataLabelGroup
            :className="'col-md-6'"
            :value="
              formateDateTimeLang(
                priceQuotationJobOrder.expectedFinishWorkDate,
                priceQuotationJobOrder.expectedFinishWorkTime
              )
            "
            :title="$t('PriceQuotationJobOrders.expectedFinishWorkDateTime')"
            :imgName="'dateAndTime.svg'"
          />

          <DataLabelGroup
            :className="'col-md-12'"
            :value="
              priceQuotationJobOrder.priceQuotationInfoData.requestPlaceInfoData
                .placeNameCurrent
            "
            :title="$t('clientName')"
            :imgName="'man.svg'"
          />
        </div>
        <div class="my-card">
          <span class="my-card-title">{{
            $t("JobOrderStages.modelName")
          }}</span>
          <div
            v-if="showActions && checkPrivilege(hasJobOrderStagesOfWorkAdd())"
            class="row"
          >
            <div class="col-12">
              <img
                class="icon-lg"
                src="@/assets/images/plus.svg"
                @click="
                  setJobOrderStagesOfWorkData(priceQuotationJobOrder);
                  openBottomSheet('JobOrderStagesOfWorkAdd');
                "
                :title="$t('JobOrderStages.add')"
              />
            </div>
          </div>

          <template
            v-if="
              priceQuotationJobOrder.priceQuotationJobOrderStagesOfWorkData
                .length
            "
          >
            <table class="my-table">
              <thead>
                <tr>
                  <th rowspan="2">#</th>
                  <th colspan="2">{{ $t("JobOrderStages.data") }}</th>
                  <th v-if="showActions" rowspan="2">
                    <i class="fas fa-sliders-h"></i>
                  </th>
                </tr>
                <tr>
                  <th class="cell-lg">{{ $t("general.name") }}</th>
                  <th class="cell-lg">{{ $t("general.state") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(
                    stage, index
                  ) in priceQuotationJobOrder.priceQuotationJobOrderStagesOfWorkData"
                  :key="index"
                >
                  <td>{{ ++index }}</td>
                  <td>
                    {{
                      isDataExist(
                        stage.jobOrderStageSavedData.jobOrderStageNameCurrent
                      )
                    }}
                  </td>
                  <td>
                    {{
                      isDataExist(
                        stage.jobOrderStagesOfWorkFinishData
                          .stageFinishTypeNameCurrent
                      )
                    }}
                  </td>

                  <td v-if="showActions" class="fmenu-item-container">
                    <FloatingMenu>
                      <li
                        v-if="
                          stage.jobOrderStagesOfWorkFinishData
                            .stageFinishTypeToken ==
                            TERMINATION_TYPES.NotFinished &&
                          checkPrivilege(hasJobOrderStagesOfWorkFinish())
                        "
                      >
                        <button
                          @click="
                            setJobOrderStagesOfWorkData({
                              ...stage,
                              priceQuotationJobOrderToken:
                                priceQuotationJobOrder.priceQuotationJobOrderToken,
                            });
                            openBottomSheet('JobOrderStagesOfWorkFinish');
                          "
                          :title="$t('general.finish')"
                        >
                          <img src="@/assets/images/finish.svg" />
                        </button>
                      </li>
                      <li
                        v-if="
                          stage.jobOrderStagesOfWorkFinishData
                            .stageFinishTypeToken ==
                            TERMINATION_TYPES.Finished &&
                          checkPrivilege(hasJobOrderStagesOfWorkCancelFinish())
                        "
                      >
                        <button
                          v-b-modal.JobOrderStagesOfWorkCancelFinish
                          @click="
                            setJobOrderStagesOfWorkData({
                              ...stage,
                              priceQuotationJobOrderToken:
                                priceQuotationJobOrder.priceQuotationJobOrderToken,
                            })
                          "
                          :title="$t('general.cancelFinish')"
                        >
                          <img src="@/assets/images/cancel.svg" />
                        </button>
                      </li>
                      <li
                        v-if="
                          checkPrivilege(hasJobOrderStagesOfWorkFinaleDelete())
                        "
                      >
                        <button
                          v-b-modal.JobOrderStagesOfWorkDelete
                          @click="
                            setJobOrderStagesOfWorkData({
                              ...stage,
                              priceQuotationJobOrderToken:
                                priceQuotationJobOrder.priceQuotationJobOrderToken,
                            })
                          "
                          :title="$t('delete')"
                        >
                          <img src="@/assets/images/trash.svg" />
                        </button>
                      </li>
                    </FloatingMenu>
                  </td>
                </tr>
              </tbody>
            </table>
          </template>
          <template v-else>
            <span>{{ $t("Login.noData") }}</span>
          </template>
        </div>
      </template>
    </CustomBottomSheet>
  </div>
</template>

<script>
import PreLoader from "./../../../../components/general/PreLoader.vue";
import FloatingMenu from "./../../../../components/general/FloatingMenu.vue";
import ExceptionWithImg from "./../../../../components/general/ExceptionWithImg.vue";
import CustomBottomSheet from "./../../../../components/general/CustomBottomSheet.vue";
import DataLabelGroup from "./../../../../components/general/DataLabelGroup.vue";
import {
  isDataExist,
  checkPrivilege,
  formateDateTimeLang,
} from "./../../../../utils/functions";
import {
  hasJobOrderStagesOfWorkAdd,
  hasJobOrderStagesOfWorkFinish,
  hasJobOrderStagesOfWorkCancelFinish,
  hasJobOrderStagesOfWorkFinaleDelete,
} from "./../../../../utils/privilegeHelper";
import { TERMINATION_TYPES } from "./../../../../utils/constantLists";
import generalMixin from "./../../../../utils/generalMixin";
// import PriceQuotationJobOrderlMixin from "./PriceQuotationJobOrderlMixin";

export default {
  mixins: [generalMixin],
  props: ["priceQuotationJobOrder", "showActions"],
  components: {
    PreLoader,
    FloatingMenu,
    ExceptionWithImg,
    CustomBottomSheet,
    DataLabelGroup,
  },
  data() {
    return { TERMINATION_TYPES };
  },
  methods: {
    isDataExist,
    checkPrivilege,
    hasJobOrderStagesOfWorkAdd,
    hasJobOrderStagesOfWorkFinish,
    hasJobOrderStagesOfWorkCancelFinish,
    hasJobOrderStagesOfWorkFinaleDelete,
    formateDateTimeLang,
    setJobOrderStagesOfWorkData(stage) {
      this.$emit("setJobOrderStagesOfWorkData", stage);
    },
  },
};
</script>

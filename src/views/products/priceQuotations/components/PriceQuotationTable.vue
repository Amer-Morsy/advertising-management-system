<template>
  <div v-if="priceQuotationsData" class="table-container">
    <table class="my-table">
      <thead>
        <tr>
          <th>{{ $t("PriceQuotations.number") }}</th>
          <th>{{ $t("PriceQuotations.code") }}</th>
          <th colspan="2">{{ $t("PriceQuotations.clientName") }}</th>
          <th>{{ $t("general.user") }}</th>
          <th>{{ $t("date") }}</th>
          <th>{{ $t("ConstantsListSelect.ReportTemplatesName") }}</th>
          <th><i class="fas fa-sliders-h"></i></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(priceQuotation, index) in priceQuotationsData" :key="index">
          <td>{{ ++index + filterData.currentIndex }}</td>
          <td>{{ isDataExist(priceQuotation.fullCode) }}</td>
          <td>
            {{
              isDataExist(
                priceQuotation.requestPlaceInfoData
                  ? priceQuotation.requestPlaceInfoData.placeNameAr
                  : ""
              )
            }}
          </td>
          <td>
            {{
              isDataExist(
                priceQuotation.requestPlaceInfoData
                  ? priceQuotation.requestPlaceInfoData.placeNameEn
                  : ""
              )
            }}
          </td>
          <td>
            {{ isDataExist(priceQuotation.userCreatedData.userNameCurrent) }}
          </td>
          <td>
            {{ isDataExist(priceQuotation.priceQuotationDateTimeCustomized) }}
          </td>
          <td
            :style="`color: ${priceQuotation.reportTemplateInfoData.reportTemplateColorHexFromat}`"
          >
            {{
              isDataExist(
                priceQuotation.reportTemplateInfoData
                  ? priceQuotation.reportTemplateInfoData
                      .reportTemplateNameCurrent
                  : ""
              )
            }}
          </td>
          <td class="fmenu-item-container">
            <FloatingMenu>
              <li
                v-if="
                  checkPrivilege(hasPriceQuotationJobOrderAdd()) &&
                  priceQuotation.priceQuotationHistoryWorkTypeToken ==
                    PRICE_QUOTATION_HISTORY_WORK_TYPES.WaitingForCustomerAccept
                "
              >
                <button
                  @click="
                    setPriceQuotationData(priceQuotation);
                    openBottomSheet('PriceQuotationJobOrderAdd');
                  "
                  :title="$t('PriceQuotationJobOrders.add')"
                >
                  <img src="@/assets/images/PriceQuotationJobOrdersW.svg" />
                </button>
              </li>
              <li
                v-if="
                  checkPrivilege(
                    hasPriceQuotationSendPriceQuotationToClient()
                  ) &&
                  priceQuotation.priceQuotationHistoryWorkTypeToken ==
                    PRICE_QUOTATION_HISTORY_WORK_TYPES.WaitingForSupplier
                "
              >
                <button
                  @click="
                    setPriceQuotationData(priceQuotation);
                    openBottomSheet('SendPriceQuotationToClient');
                  "
                  :title="$t('PriceQuotations.sendToClient')"
                >
                  <img src="@/assets/images/sendToClient.svg" />
                </button>
              </li>
              <li
                v-if="
                  priceQuotation.priceQuotationHistoryWorkTypeToken ==
                    PRICE_QUOTATION_HISTORY_WORK_TYPES.WaitingForCustomerAccept ||
                  priceQuotation.priceQuotationHistoryWorkTypeToken ==
                    PRICE_QUOTATION_HISTORY_WORK_TYPES.WaitingForSupplier
                "
              >
                <button
                  @click="
                    setPriceQuotationData(priceQuotation);
                    openBottomSheet('ResendToManyClients');
                  "
                  :title="$t('PriceQuotations.resendToManyEmployeesClient')"
                >
                  <img src="@/assets/images/employees.svg" />
                </button>
              </li>
              <li
                v-if="
                  checkPrivilege(hasPriceQuotationResendPriceQuotations()) &&
                  priceQuotation.priceQuotationHistoryWorkTypeToken ==
                    PRICE_QUOTATION_HISTORY_WORK_TYPES.WaitingForCustomerAccept
                "
              >
                <button
                  @click="
                    setPriceQuotationData(priceQuotation);
                    openBottomSheet('ResendPriceQuotationToClient');
                  "
                  :title="$t('PriceQuotations.resendToClient')"
                >
                  <img src="@/assets/images/email.svg" />
                </button>
              </li>
              <li v-if="hasPriceQuotationMoveTo">
                <button
                  v-b-modal.PriceQuotationMove
                  :title="$t('PriceQuotations.moveTo')"
                  @click="setPriceQuotationData(priceQuotation)"
                >
                  <img src="@/assets/images/EducationalGroupTransfers.svg" />
                </button>
              </li>
              <li>
                <button
                  @click="
                    setPriceQuotationData(priceQuotation);
                    openBottomSheet('PriceQuotationReport');
                  "
                  :title="$t('PriceQuotations.report')"
                >
                  <img src="@/assets/images/report.svg" />
                </button>
              </li>
              <li
                v-if="
                  checkPrivilege(hasPriceQuotationReportBill()) &&
                  priceQuotation.priceQuotationHistoryWorkTypeToken !=
                    PRICE_QUOTATION_HISTORY_WORK_TYPES.NewlyWanted &&
                  priceQuotation.priceQuotationHistoryWorkTypeToken !=
                    PRICE_QUOTATION_HISTORY_WORK_TYPES.WaitingForSupplier
                "
              >
                <button
                  @click="
                    setPriceQuotationData(priceQuotation);
                    openBottomSheet('PriceQuotationReportBill');
                  "
                  :title="$t('PriceQuotations.reportBill')"
                >
                  <img src="@/assets/images/receipt.svg" />
                </button>
              </li>
              <li
                v-if="
                  checkPrivilege(hasPriceQuotationEdit()) &&
                  priceQuotation.priceQuotationHistoryWorkTypeToken !=
                    PRICE_QUOTATION_HISTORY_WORK_TYPES.Canceled
                "
              >
                <button
                  @click="
                    setPriceQuotationData(priceQuotation);
                    openBottomSheet('PriceQuotationUpdate');
                  "
                  :title="$t('edit')"
                >
                  <img src="@/assets/images/pencil.svg" />
                </button>
              </li>
              <li v-if="checkPrivilege(hasPriceQuotationAdd())">
                <button
                  @click="
                    setPriceQuotationData(priceQuotation);
                    openBottomSheet('PriceQuotationDuplicate');
                  "
                  :title="$t('duplicate')"
                >
                  <img src="@/assets/images/duplicate.svg" />
                </button>
              </li>
              <li
                v-if="
                  priceQuotation.priceQuotationHistoryWorkTypeToken !=
                    PRICE_QUOTATION_HISTORY_WORK_TYPES.Canceled &&
                  priceQuotation.priceQuotationHistoryWorkTypeToken !=
                    PRICE_QUOTATION_HISTORY_WORK_TYPES.NewlyWanted
                "
              >
                <router-link
                  :to="{
                    name: 'PriceQuotationInfo',
                    params: { token: priceQuotation.priceQuotationToken },
                  }"
                  :title="$t('PriceQuotationsInfo.modelName')"
                >
                  <img src="@/assets/images/PriceQuotationsInfo.svg" />
                </router-link>
              </li>
              <li>
                <button
                  @click="
                    setPriceQuotationData(priceQuotation);
                    openBottomSheet('PriceQuotationInfo');
                  "
                  :title="$t('info')"
                >
                  <img src="@/assets/images/info.svg" />
                </button>
              </li>
              <li
                v-if="
                  checkPrivilege(hasPriceQuotationChangeDateTime()) &&
                  priceQuotation.priceQuotationHistoryWorkTypeToken !=
                    PRICE_QUOTATION_HISTORY_WORK_TYPES.Canceled
                "
              >
                <button
                  @click="
                    setPriceQuotationData(priceQuotation);
                    openBottomSheet('PriceQuotationChangeDateAndTime');
                  "
                  :title="$t('PriceQuotations.changeDateAndTime')"
                >
                  <img src="@/assets/images/dateAndTime.svg" />
                </button>
              </li>
              <li
                v-if="
                  checkPrivilege(hasPriceQuotationMoveToWaitingForSupplier()) &&
                  priceQuotation.priceQuotationHistoryWorkTypeToken !=
                    PRICE_QUOTATION_HISTORY_WORK_TYPES.Canceled
                "
              >
                <button
                  @click="
                    setPriceQuotationData(priceQuotation);
                    openBottomSheet('SendRequestProductItemReport');
                  "
                  :title="$t('PriceQuotations.SendRequestProductItemReport')"
                >
                  <img src="@/assets/images/send.svg" />
                </button>
              </li>

              <li>
                <button
                  @click="
                    setPriceQuotationData(priceQuotation);
                    openBottomSheet('ActionsData');
                  "
                  :title="$t('actionsData.modelName')"
                >
                  <img src="@/assets/images/actions-data.svg" />
                </button>
              </li>
            </FloatingMenu>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { checkPrivilege, isDataExist } from "./../../../../utils/functions";
import {
  hasPriceQuotationSendPriceQuotationToClient,
  hasPriceQuotationResendPriceQuotations,
  hasPriceQuotationReportBill,
  hasPriceQuotationEdit,
  hasPriceQuotationAdd,
  hasPriceQuotationJobOrderAdd,
  hasPriceQuotationChangeDateTime,
  hasPriceQuotationMoveToWaitingForSupplier,
} from "./../../../../utils/privilegeHelper";
import FloatingMenu from "./../../../../components/general/FloatingMenu.vue";
import { PRICE_QUOTATION_HISTORY_WORK_TYPES } from "./../../../../utils/constantLists";
import generalMixin from "./../../../../utils/generalMixin";

export default {
  name: "PriceQuotationsTable",
  mixins: [generalMixin],
  components: {
    FloatingMenu,
  },
  props: [
    "priceQuotationsData",
    "filterData",
    "defaultImg",
    "hasPriceQuotationMoveTo",
  ],
  data() {
    return {
      PRICE_QUOTATION_HISTORY_WORK_TYPES,
    };
  },
  methods: {
    setPriceQuotationData(priceQuotation) {
      this.$emit("setPriceQuotationData", priceQuotation);
    },

    checkPrivilege,
    isDataExist,
    hasPriceQuotationSendPriceQuotationToClient,
    hasPriceQuotationResendPriceQuotations,
    hasPriceQuotationReportBill,
    hasPriceQuotationEdit,
    hasPriceQuotationAdd,
    hasPriceQuotationJobOrderAdd,
    hasPriceQuotationChangeDateTime,
    hasPriceQuotationMoveToWaitingForSupplier,
  },
};
</script>

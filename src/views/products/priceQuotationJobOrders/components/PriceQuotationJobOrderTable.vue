<template>
  <div v-if="priceQuotationJobOrdersData" class="table-container">
    <table class="my-table">
      <thead>
        <tr>
          <th rowspan="2">#</th>
          <th colspan="5">{{ $t("PriceQuotationJobOrders.data") }}</th>
          <th rowspan="2"><i class="fas fa-sliders-h"></i></th>
        </tr>
        <tr>
          <th>{{ $t("general.image") }}</th>
          <th>{{ $t("PriceQuotations.code") }}</th>
          <th>{{ $t("PriceQuotationJobOrders.code") }}</th>
          <th colspan="2">{{ $t("PriceQuotations.clientName") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(priceQuotationJobOrder, index) in priceQuotationJobOrdersData"
          :key="index"
        >
          <td>{{ ++index + filterData.currentIndex }}</td>
          <td>
            <img
              class="item-img-table"
              :src="
                fullPathFileFromServer(
                  priceQuotationJobOrder.priceQuotationJobOrderImagePath,
                  priceQuotationJobOrder.defaultImg
                )
              "
            />
          </td>
          <td>
            {{
              isDataExist(
                priceQuotationJobOrder.priceQuotationInfoData.fullCode
              )
            }}
          </td>
          <td>{{ isDataExist(priceQuotationJobOrder.fullCode) }}</td>
          <td>
            {{
              isDataExist(
                priceQuotationJobOrder.priceQuotationInfoData
                  .requestPlaceInfoData.placeNameAr
              )
            }}
          </td>
          <td>
            {{
              isDataExist(
                priceQuotationJobOrder.priceQuotationInfoData
                  .requestPlaceInfoData.placeNameEn
              )
            }}
          </td>

          <td class="fmenu-item-container">
            <FloatingMenu>
              <li
                v-if="
                  checkPrivilege(hasPriceQuotation1() || hasPriceQuotation2())
                "
              >
                <button
                  @click="
                    setPriceQuotationJobOrderData(priceQuotationJobOrder);
                    openBottomSheet('PriceQuotationReport');
                  "
                  :title="$t('PriceQuotations.report')"
                >
                  <img src="@/assets/images/report.svg" />
                </button>
              </li>
              <li
                v-if="checkPrivilege(hasPriceQuotationJobOrderReportExport())"
              >
                <button
                  @click="
                    setPriceQuotationJobOrderData(priceQuotationJobOrder);
                    openBottomSheet('PriceQuotationJobOrderReportExport');
                  "
                  :title="$t('PriceQuotationJobOrders.report')"
                >
                  <img src="@/assets/images/ReportTemplates.svg" />
                </button>
              </li>
              <li>
                <button
                  @click="
                    setPriceQuotationJobOrderData(priceQuotationJobOrder);
                    openBottomSheet('PriceQuotationJobOrderReportLpo');
                  "
                  :title="$t('PriceQuotationJobOrders.lpo')"
                >
                  <img src="@/assets/images/statistics.svg" />
                </button>
              </li>
              <li>
                <button
                  @click="
                    setPriceQuotationJobOrderData(priceQuotationJobOrder);
                    openBottomSheet('PriceQuotationInfo');
                  "
                  :title="$t('PriceQuotations.data')"
                >
                  <img src="@/assets/images/PriceQuotations1H.svg" />
                </button>
              </li>
              <li>
                <button
                  @click="
                    setPriceQuotationJobOrderData(priceQuotationJobOrder);
                    openBottomSheet('PriceQuotationJobOrderInfo');
                  "
                  :title="$t('info')"
                >
                  <img src="@/assets/images/info.svg" />
                </button>
              </li>

              <li
                v-if="
                  showEditIcon &&
                  checkPrivilege(hasPriceQuotationJobOrderEdit())
                "
              >
                <button
                  @click="
                    setPriceQuotationJobOrderData(priceQuotationJobOrder);
                    openBottomSheet('PriceQuotationJobOrderUpdate');
                  "
                  :title="$t('edit')"
                >
                  <img src="@/assets/images/pencil.svg" />
                </button>
              </li>
              <li v-if="hasPriceQuotationJobOrderMoveTo">
                <button
                  v-b-modal.PriceQuotationJobOrderMove
                  :title="$t('PriceQuotationJobOrders.moveTo')"
                  @click="setPriceQuotationJobOrderData(priceQuotationJobOrder)"
                >
                  <img src="@/assets/images/EducationalGroupTransfers.svg" />
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
import { isDataExist } from "./../../../../utils/functions";
import FloatingMenu from "./../../../../components/general/FloatingMenu.vue";
import {
  hasPriceQuotation1,
  hasPriceQuotation2,
  hasPriceQuotationJobOrderReportExport,
  hasPriceQuotationJobOrderEdit,
} from "./../../../../utils/privilegeHelper";
import {
  checkPrivilege,
  fullPathFileFromServer,
} from "./../../../../utils/functions";
import generalMixin from "./../../../../utils/generalMixin";

export default {
  name: "PriceQuotationJobOrdersTable",
  mixins: [generalMixin],
  components: {
    FloatingMenu,
  },
  props: [
    "priceQuotationJobOrdersData",
    "filterData",
    "defaultImg",
    "hasPriceQuotationJobOrderMoveTo",
    "showEditIcon",
  ],
  data() {
    return {};
  },
  methods: {
    setPriceQuotationJobOrderData(priceQuotationJobOrder) {
      this.$emit("setPriceQuotationJobOrderData", priceQuotationJobOrder);
    },

    isDataExist,
    checkPrivilege,
    fullPathFileFromServer,
    hasPriceQuotation1,
    hasPriceQuotation2,
    hasPriceQuotationJobOrderReportExport,
    hasPriceQuotationJobOrderEdit,
  },
};
</script>

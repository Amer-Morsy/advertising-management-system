<template>
  <CustomBottomSheet
    :refName="'PlaceStoreItemsInfo'"
    size="xl"
    :headerText="$t('general.data')"
    :headerIcon="place.icon"
    @opened="getPlaceDetails()"
  >
    <PreLoader v-if="isLoading" />
    <template>
      <div class="row">
        <DataLabelGroup
          v-if="!isPlaceTypeTokenEmployee"
          :className="'col-md-12'"
          :value="places.place.workFieldInfoData.workFieldNameCurrent"
          :title="$t('Places.activityType')"
          :imgName="'type.svg'"
        />

        <DataLabelGroup
          :className="'col-md-6'"
          :value="places.place.fullCode"
          :title="$t('general.code')"
          :imgName="'code.svg'"
        />
        <DataLabelGroup
          :className="'col-md-6'"
          :value="places.place.placeNameCurrent"
          :title="$t('name')"
          :imgName="'places.svg'"
        />
        <div class="my-card col-12">
          <span class="my-card-title">{{ $t("StoreItems.modelName") }}</span>
          <div
            v-if="places.place.storeItemsData.length == 0"
            class="my-card-no-content"
          >
            {{ $t("PriceQuotations.details.thereAreNoSlides") }}
          </div>

          <template v-else>
            <div class="table-container">
              <table class="my-table">
                <thead>
                  <tr>
                    <th rowspan="2">#</th>
                    <th colspan="3">{{ $t("StoreItems.data") }}</th>
                  </tr>
                  <tr>
                    <th>{{ $t("general.image") }}</th>
                    <th>{{ $t("general.code") }}</th>
                    <th class="cell-lg">{{ $t("general.name") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(storeItem, index) in places.place.storeItemsData"
                    :key="index"
                  >
                    <td>{{ ++index }}</td>
                    <td>
                      <img
                        class="item-img-table"
                        :src="
                          fullPathFileFromServer(
                            storeItem.storeItemImagePath,
                            defaultImg
                          )
                        "
                        :onerror="`this.src='${defaultImg}'`"
                      />
                    </td>
                    <td>{{ isDataExist(storeItem.fullCode) }}</td>
                    <td>
                      {{ isDataExist(storeItem.storeItemNameCurrent) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </template>
        </div>
      </div>
    </template>
    <ExceptionWithImg
      v-if="exceptionMsg"
      :msg="exceptionMsg"
      :image="exceptionImg"
    />
  </CustomBottomSheet>
</template>

<script>
import CustomBottomSheet from "./../../../components/general/CustomBottomSheet.vue";
import DataLabelGroup from "./../../../components/general/DataLabelGroup.vue";
import PreLoader from "./../../../components/general/PreLoader.vue";
import {
  formateDateTimeLang,
  isDataExist,
  fullPathFileFromServer,
} from "./../../../utils/functions";
import Places from "./../../../models/places/Places";
import apiPlace from "./../../../api/place";
import { STATUS } from "./../../../utils/constants";
import { PLACE_TYPE_TOKENS } from "./../../../utils/constantLists";

export default {
  components: {
    CustomBottomSheet,
    DataLabelGroup,
    PreLoader,
  },
  props: ["placeTypeToken", "place"],
  computed: {
    isPlaceTypeTokenEmployee() {
      return this.placeTypeToken == PLACE_TYPE_TOKENS.Employee;
    },
  },
  data() {
    return {
      isLoading: false,
      exceptionMsg: null,
      exceptionImg: null,
      places: new Places(PLACE_TYPE_TOKENS.Supplier),
    };
  },
  methods: {
    formateDateTimeLang,
    isDataExist,
    fullPathFileFromServer,

    async getPlaceDetails() {
      this.isLoading = true;
      try {
        this.places.filterData.token = this.place.placeToken;
        const response = await apiPlace.getDetails(this.places.filterData);
        if (response.data.status == STATUS.SUCCESS) {
          this.exceptionMsg = null;
          this.places.place.fillData(response.data.place);
        } else if (response.data.status == STATUS.NO_INTERNET) {
          this.exceptionMsg = response.data.msg;
          this.exceptionImg = "illustrator-noInternet.svg";
        } else if (response.data.status == STATUS.NO_CONTENT) {
          this.exceptionMsg = response.data.msg;
          this.exceptionImg = "illustrator-noData.svg";
        } else if (response.data.status == STATUS.INVALID_TOKEN) {
          this.$store.dispatch("logoutUser", response.data.msg);
        } else {
          this.exceptionMsg = response.data.msg;
          this.exceptionImg = null;
        }
      } catch (error) {
        this.exceptionMsg = this.$t("errorCatch");
        this.exceptionImg = null;
      }
      this.isLoading = false;
    },
  },
  async created() {},
};
</script>

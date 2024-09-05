<template>
  <div class="my-card">
    <table class="my-table">
      <thead>
        <tr>
          <th rowspan="2">#</th>
          <th colspan="4">{{ $t("suppliers.modelName") }}</th>
        </tr>
        <tr>
          <th>{{ $t("general.image") }}</th>
          <th>{{ $t("general.code") }}</th>
          <th>{{ $t("general.name") }}</th>
          <th>{{ $t("phoneNumber") }}</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="placesInfoData.length == 0">
          <tr>
            <th colspan="5">
              {{ $t("suppliers.thereAreNoOne") }}
            </th>
          </tr>
        </template>
        <template v-else>
          <tr v-for="(item, index) in placesInfoData" :key="index">
            <td>{{ ++index }}</td>
            <td>
              <img
                class="item-img-table"
                :src="fullPathFileFromServer(item.placeImagePath, defaultImg)"
                :onerror="`this.src='${defaultImg}'`"
              />
            </td>
            <td>{{ isDataExist(item.fullCode) }}</td>
            <td>{{ isDataExist(item.placeNameCurrent) }}</td>
            <td class="table-phone-number">
              {{ isDataExist(item.placePhone1WithCC) }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  fullPathFileFromServer,
  isDataExist,
} from "./../../../../utils/functions";
import defaultImg from "@/assets/images/suppliers.svg";

export default {
  props: { placesInfoData: { type: Array, default: () => [] } },
  methods: { fullPathFileFromServer, isDataExist },
  data() {
    return { defaultImg };
  },
};
</script>

<template>
  <div v-if="workFieldsData" class="table-container">
    <table class="my-table">
      <thead>
        <tr>
          <th rowspan="2">#</th>
          <th colspan="4">{{ $t("WorkFields.data") }}</th>
          <th rowspan="2"><i class="fas fa-sliders-h"></i></th>
        </tr>
        <tr>
          <th>{{ $t("general.image") }}</th>
          <th>{{ $t("general.code") }}</th>
          <th class="cell-lg">{{ $t("general.name") }}</th>
          <th>{{ $t("Places.placeType") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(workField, index) in workFieldsData" :key="index">
          <td>{{ ++index + filterData.currentIndex }}</td>
          <td>
            <img
              class="item-img-table"
              :src="
                fullPathFileFromServer(workField.workFieldImagePath, defaultImg)
              "
              :onerror="`this.src='${defaultImg}'`"
            />
          </td>
          <td>{{ isDataExist(workField.fullCode) }}</td>
          <td>
            {{ isDataExist(workField.workFieldNameCurrent) }}
          </td>
          <td>
            {{ isDataExist(workField.placeTypeNameCurrent) }}
          </td>
          <td class="fmenu-item-container">
            <FloatingMenu>
              <li>
                <button
                  @click="
                    setWorkFieldData(workField);
                    openBottomSheet('WorkFieldInfo');
                  "
                  :title="$t('info')"
                >
                  <img src="@/assets/images/info.svg" />
                </button>
              </li>
              <li>
                <button
                  @click="
                    setWorkFieldData(workField);
                    openBottomSheet('WorkFieldQRCode');
                  "
                  :title="$t('general.qrCode')"
                >
                  <img src="@/assets/images/qr-code.svg" />
                </button>
              </li>
              <li v-if="checkPrivilege(hasWorkFieldEdit())">
                <button
                  @click="
                    setWorkFieldData(workField);
                    openBottomSheet('WorkFieldUpdate');
                  "
                  :title="$t('edit')"
                >
                  <img src="@/assets/images/pencil.svg" />
                </button>
              </li>
              <li v-if="checkPrivilege(hasWorkFieldFinaleDelete())">
                <button
                  v-b-modal.WorkFieldDelete
                  :title="$t('delete')"
                  @click="setWorkFieldData(workField)"
                >
                  <img src="@/assets/images/trash.svg" />
                </button>
              </li>
              <li v-if="checkPrivilege(hasWorkFieldChangeActivationType())">
                <button
                  v-b-modal.WorkFieldChangeActivationType
                  :title="$t('changeActivationType')"
                  @click="setWorkFieldData(workField)"
                >
                  <img src="@/assets/images/changeActivationType.svg" />
                </button>
              </li>
              <li>
                <button
                  @click="
                    setWorkFieldData(workField);
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
import {
  checkPrivilege,
  isDataExist,
  fullPathFileFromServer,
} from "./../../../../../utils/functions";
import {
  hasWorkFieldEdit,
  hasWorkFieldFinaleDelete,
  hasWorkFieldChangeActivationType,
} from "./../../../../../utils/privilegeHelper";
import FloatingMenu from "./../../../../../components/general/FloatingMenu.vue";
import generalMixin from "./../../../../../utils/generalMixin";

export default {
  name: "WorkFieldsTable",
  mixins: [generalMixin],
  components: {
    FloatingMenu,
  },
  props: ["workFieldsData", "filterData", "defaultImg"],
  methods: {
    setWorkFieldData(workField) {
      this.$emit("setWorkFieldData", workField);
    },
    checkPrivilege,
    isDataExist,
    fullPathFileFromServer,
    hasWorkFieldEdit,
    hasWorkFieldFinaleDelete,
    hasWorkFieldChangeActivationType,
  },
};
</script>

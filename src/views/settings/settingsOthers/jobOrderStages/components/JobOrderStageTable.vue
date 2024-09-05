<template>
  <div v-if="jobOrderStagesData" class="table-container">
    <table class="my-table">
      <thead>
        <tr>
          <th rowspan="2">#</th>
          <th colspan="3">{{ $t("JobOrderStages.data") }}</th>
          <th rowspan="2"><i class="fas fa-sliders-h"></i></th>
        </tr>
        <tr>
          <th>{{ $t("general.image") }}</th>
          <th>{{ $t("general.code") }}</th>
          <th class="cell-lg">{{ $t("general.name") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(jobOrderStage, index) in jobOrderStagesData" :key="index">
          <td>{{ ++index + filterData.currentIndex }}</td>
          <td>
            <img
              class="item-img-table"
              :src="
                fullPathFileFromServer(
                  jobOrderStage.jobOrderStageImagePath,
                  defaultImg
                )
              "
              :onerror="`this.src='${defaultImg}'`"
            />
          </td>
          <td>{{ isDataExist(jobOrderStage.fullCode) }}</td>
          <td>
            {{ isDataExist(jobOrderStage.jobOrderStageNameCurrent) }}
          </td>
          <td class="fmenu-item-container">
            <FloatingMenu>
              <li>
                <button
                  @click="
                    setJobOrderStageData(jobOrderStage);
                    openBottomSheet('JobOrderStageInfo');
                  "
                  :title="$t('info')"
                >
                  <img src="@/assets/images/info.svg" />
                </button>
              </li>
              <li>
                <button
                  @click="
                    setJobOrderStageData(jobOrderStage);
                    openBottomSheet('JobOrderStageQRCode');
                  "
                  :title="$t('general.qrCode')"
                >
                  <img src="@/assets/images/qr-code.svg" />
                </button>
              </li>
              <li v-if="checkPrivilege(hasJobOrderStageEdit())">
                <button
                  @click="
                    setJobOrderStageData(jobOrderStage);
                    openBottomSheet('JobOrderStageUpdate');
                  "
                  :title="$t('edit')"
                >
                  <img src="@/assets/images/pencil.svg" />
                </button>
              </li>
              <li v-if="checkPrivilege(hasJobOrderStageFinaleDelete())">
                <button
                  v-b-modal.JobOrderStageDelete
                  :title="$t('delete')"
                  @click="setJobOrderStageData(jobOrderStage)"
                >
                  <img src="@/assets/images/trash.svg" />
                </button>
              </li>
              <li v-if="checkPrivilege(hasJobOrderStageChangeActivationType())">
                <button
                  v-b-modal.JobOrderStageChangeActivationType
                  :title="$t('changeActivationType')"
                  @click="setJobOrderStageData(jobOrderStage)"
                >
                  <img src="@/assets/images/changeActivationType.svg" />
                </button>
              </li>
              <li>
                <button
                  @click="
                    setJobOrderStageData(jobOrderStage);
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
  hasJobOrderStageEdit,
  hasJobOrderStageFinaleDelete,
  hasJobOrderStageChangeActivationType,
} from "./../../../../../utils/privilegeHelper";
import FloatingMenu from "./../../../../../components/general/FloatingMenu.vue";
import generalMixin from "./../../../../../utils/generalMixin";

export default {
  name: "JobOrderStagesTable",
  mixins: [generalMixin],
  components: {
    FloatingMenu,
  },
  props: ["jobOrderStagesData", "filterData", "defaultImg"],
  methods: {
    setJobOrderStageData(jobOrderStage) {
      this.$emit("setJobOrderStageData", jobOrderStage);
    },
    checkPrivilege,
    isDataExist,
    fullPathFileFromServer,
    hasJobOrderStageEdit,
    hasJobOrderStageFinaleDelete,
    hasJobOrderStageChangeActivationType,
  },
};
</script>

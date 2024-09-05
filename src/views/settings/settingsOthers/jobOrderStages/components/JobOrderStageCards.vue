<template>
  <div class="row custom-cards">
    <CustomCard
      v-for="(jobOrderStage, index) in jobOrderStagesData"
      :key="index"
      :className="'col-sm-6 col-md-4 col-lg-3'"
      :title="jobOrderStage.jobOrderStageNameCurrent"
      :description="jobOrderStage.fullCode"
      :imagePath="jobOrderStage.jobOrderStageImagePath"
      :defaultImg="defaultImg"
      :index="++index + filterData.currentIndex"
    >
      <li>
        <button
          :title="$t('info')"
          @click="
            setJobOrderStageData(jobOrderStage);
            openBottomSheet('JobOrderStageInfo');
          "
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
    </CustomCard>
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
import CustomCard from "./../../../../../components/general/CustomCard.vue";
import generalMixin from "./../../../../../utils/generalMixin";

export default {
  mixins: [generalMixin],
  components: {
    CustomCard,
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

<template>
  <CustomBottomSheet
    :refName="'JobOrderStageInfo'"
    size="xl"
    :headerText="$t('JobOrderStages.data')"
    :headerIcon="jobOrderStage.icon"
  >
    <div class="row">
      <DataLabelGroup
        :className="'col-md-6'"
        :value="jobOrderStage.fullCode"
        :title="$t('JobOrderStages.code')"
        :imgName="'code.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="jobOrderStage.jobOrderStageNameAr"
        :title="$t('JobOrderStages.nameAr')"
        :imgName="'jobOrderStages.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="jobOrderStage.jobOrderStageNameEn"
        :title="$t('JobOrderStages.nameEn')"
        :imgName="'jobOrderStages.svg'"
      />
      <!-- <DataLabelGroup
        :className="'col-md-6'"
        :value="jobOrderStage.jobOrderStageNameUnd"
        :title="$t('JobOrderStages.nameUnd')"
        :imgName="'jobOrderStages.svg'"
      />

      <DataLabelGroup
        :className="'col-md-6'"
        :value="jobOrderStage.jobOrderStageDescriptionAr"
        :title="$t('JobOrderStages.descriptionAr')"
        :imgName="'description.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="jobOrderStage.jobOrderStageDescriptionEn"
        :title="$t('JobOrderStages.descriptionEn')"
        :imgName="'description.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="jobOrderStage.jobOrderStageDescriptionUnd"
        :title="$t('JobOrderStages.descriptionUnd')"
        :imgName="'description.svg'"
      /> -->
      <DataLabelGroup
        :className="'col-md-6'"
        :value="jobOrderStage.jobOrderStageNotes"
        :title="$t('notes')"
        :imgName="'notes.svg'"
      />
      <CustomCheckbox
        :className="'col-md-6'"
        :value="jobOrderStage.mustAttachFile"
        v-on:changeValue="jobOrderStage.mustAttachFile = $event"
        :title="$t('JobOrderStages.mustAttachFile')"
        :showAsInfo="true"
      />
      <CustomCheckbox
        :className="'col-md-6'"
        :value="jobOrderStage.mustWriteDescription"
        v-on:changeValue="jobOrderStage.mustWriteDescription = $event"
        :title="$t('JobOrderStages.mustWriteDescription')"
        :showAsInfo="true"
      />
    </div>
  </CustomBottomSheet>
</template>

<script>
import CustomBottomSheet from "./../../../../../components/general/CustomBottomSheet.vue";
import DataLabelGroup from "./../../../../../components/general/DataLabelGroup.vue";
import CustomCheckbox from "./../../../../../components/general/CustomCheckbox.vue";

export default {
  components: {
    CustomBottomSheet,
    DataLabelGroup,
    CustomCheckbox,
  },
  props: ["jobOrderStage"],
};
</script>

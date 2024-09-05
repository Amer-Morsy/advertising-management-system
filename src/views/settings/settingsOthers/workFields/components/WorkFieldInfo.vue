<template>
  <CustomBottomSheet
    :refName="'WorkFieldInfo'"
    size="xl"
    :headerText="$t('WorkFields.data')"
    :headerIcon="workField.icon"
  >
    <div class="row">
      <DataLabelGroup
        :className="'col-md-6'"
        :value="workField.placeTypeNameCurrent"
        :title="$t('Places.placeType')"
        :imgName="'type.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="workField.fullCode"
        :title="$t('WorkFields.code')"
        :imgName="'code.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="workField.workFieldNameAr"
        :title="$t('WorkFields.nameAr')"
        :imgName="'workFields.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="workField.workFieldNameEn"
        :title="$t('WorkFields.nameEn')"
        :imgName="'workFields.svg'"
      />
      <!-- <DataLabelGroup
        :className="'col-md-6'"
        :value="workField.workFieldNameUnd"
        :title="$t('WorkFields.nameUnd')"
        :imgName="'workFields.svg'"
      />

      <DataLabelGroup
        :className="'col-md-6'"
        :value="workField.workFieldDescriptionAr"
        :title="$t('WorkFields.descriptionAr')"
        :imgName="'description.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="workField.workFieldDescriptionEn"
        :title="$t('WorkFields.descriptionEn')"
        :imgName="'description.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="workField.workFieldDescriptionUnd"
        :title="$t('WorkFields.descriptionUnd')"
        :imgName="'description.svg'"
      /> -->
      <DataLabelGroup
        :className="'col-md-12'"
        :value="workField.workFieldNotes"
        :title="$t('notes')"
        :imgName="'notes.svg'"
      />
    </div>
  </CustomBottomSheet>
</template>

<script>
import CustomBottomSheet from "./../../../../../components/general/CustomBottomSheet.vue";
import DataLabelGroup from "./../../../../../components/general/DataLabelGroup.vue";

export default {
  components: {
    CustomBottomSheet,
    DataLabelGroup,
  },
  props: ["workField"],
};
</script>

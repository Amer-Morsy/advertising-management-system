<template>
  <div>
    <CustomBottomSheet :refName="'MilitaryStatusTypeInfo'">
      <h3 class="text-center mb-3">
        <img src="@/assets/images/militaryStatus.svg" class="icon-lg" />
        {{ $t("MilitaryStatusTypes.data") }}
      </h3>

      <div class="row">
        <DataLabelGroup
          :className="'col-md-6'"
          :value="militaryStatusType.fullCode"
          :title="$t('MilitaryStatusTypes.code')"
          :imgName="'code.svg'"
        />

        <DataLabelGroup
          :className="'col-md-6'"
          :value="militaryStatusType.militaryStatusTypeNameAr"
          :title="$t('MilitaryStatusTypes.nameAr')"
          :imgName="'militaryStatus.svg'"
        />
        <DataLabelGroup
          :className="'col-md-6'"
          :value="militaryStatusType.militaryStatusTypeNameEn"
          :title="$t('MilitaryStatusTypes.nameEn')"
          :imgName="'militaryStatus.svg'"
        />
        <!-- <DataLabelGroup
          :className="'col-md-6'"
          :value="militaryStatusType.militaryStatusTypeNameUnd"
          :title="$t('MilitaryStatusTypes.nameUnd')"
          :imgName="'militaryStatus.svg'"
        />

        <DataLabelGroup
          :className="'col-md-6'"
          :value="militaryStatusType.militaryStatusTypeDescriptionAr"
          :title="$t('MilitaryStatusTypes.descriptionAr')"
          :imgName="'description.svg'"
        />
        <DataLabelGroup
          :className="'col-md-6'"
          :value="militaryStatusType.militaryStatusTypeDescriptionEn"
          :title="$t('MilitaryStatusTypes.descriptionEn')"
          :imgName="'description.svg'"
        />
        <DataLabelGroup
          :className="'col-md-6'"
          :value="militaryStatusType.militaryStatusTypeDescriptionUnd"
          :title="$t('MilitaryStatusTypes.descriptionUnd')"
          :imgName="'description.svg'"
        /> -->

        <DataLabelGroup
          :className="'col-md-6'"
          :value="militaryStatusType.militaryStatusTypeNotes"
          :title="$t('notes')"
          :imgName="'notes.svg'"
        />
      </div>
    </CustomBottomSheet>
  </div>
</template>

<script>
import CustomBottomSheet from "@/components/general/CustomBottomSheet.vue";
import DataLabelGroup from "@/components/general/DataLabelGroup.vue";

export default {
  components: {
    CustomBottomSheet,
    DataLabelGroup,
  },
  data() {
    return {};
  },
  props: ["militaryStatusType"],
  methods: {},
};
</script>

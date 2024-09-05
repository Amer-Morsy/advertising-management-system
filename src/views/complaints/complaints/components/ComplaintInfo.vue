<template>
  <CustomBottomSheet
    :refName="'ComplaintInfo'"
    size="xl"
    :headerText="$t('Complaints.data')"
    :headerIcon="complaint.icon"
  >
    <div class="row">
      <DataLabelGroup
        :className="'col-md-6'"
        :value="complaint.fullCode"
        :title="$t('Complaints.code')"
        :imgName="'code.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="complaint.complaintTitleAr"
        :title="$t('Complaints.titleAr')"
        :imgName="'complaints.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="complaint.complaintTitleEn"
        :title="$t('Complaints.titleEn')"
        :imgName="'complaints.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="complaint.complaintTitleUnd"
        :title="$t('Complaints.titleUnd')"
        :imgName="'complaints.svg'"
      />

      <DataLabelGroup
        :className="'col-md-6'"
        :value="complaint.complaintDescriptionAr"
        :title="$t('Complaints.descriptionAr')"
        :imgName="'description.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="complaint.complaintDescriptionEn"
        :title="$t('Complaints.descriptionEn')"
        :imgName="'description.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="complaint.complaintDescriptionUnd"
        :title="$t('Complaints.descriptionUnd')"
        :imgName="'description.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="complaint.complaintStatusTypeNameCurrent"
        :title="$t('general.state')"
        :imgName="'type.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="complaint.complainingPersonUserInfoData.userNameCurrent"
        :title="$t('Complaints.complainingPersonUser')"
        :imgName="'user.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="complaint.priorityTypeInfoData.priorityTypeNameCurrent"
        :title="$t('PriorityTypes.name')"
        :imgName="'priorityTypes.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="complaint.complaintTypeInfoData.complaintTypeNameCurrent"
        :title="$t('ComplaintTypes.name')"
        :imgName="'complaintTypes.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="complaint.complaintSectorInfoData.complaintSectorNameCurrent"
        :title="$t('ComplaintSectors.name')"
        :imgName="'complaintSectors.svg'"
      />
      <DataLabelGroup
        :className="'col-md-12'"
        :value="complaint.complaintNotes"
        :title="$t('notes')"
        :imgName="'notes.svg'"
      />
      <template
        v-if="
          complaint.complaintStatusTypeToken == COMPLAINT_STATUS_TYPE.Closed
        "
      >
        <DataLabelGroup
          :className="'col-md-6'"
          :value="complaint.closedByUserInfoData.userNameCurrent"
          :title="$t('Complaints.closedBy')"
          :imgName="'user.svg'"
        />
        <DataLabelGroup
          :className="'col-md-6'"
          :value="
            formateDateTimeLang(complaint.closedDate, complaint.closedTime)
          "
          :title="$t('actionsData.dateTime')"
          :imgName="'dateAndTime.svg'"
        />
        <DataLabelGroup
          :className="'col-md-12'"
          :value="complaint.closedNotes"
          :title="$t('notes')"
          :imgName="'notes.svg'"
        />
      </template>
    </div>
  </CustomBottomSheet>
</template>

<script>
import CustomBottomSheet from "./../../../../components/general/CustomBottomSheet.vue";
import DataLabelGroup from "./../../../../components/general/DataLabelGroup.vue";
import { COMPLAINT_STATUS_TYPE } from "./../../../../utils/constantLists";
import { formateDateTimeLang } from "./../../../../utils/functions";

export default {
  components: {
    CustomBottomSheet,
    DataLabelGroup,
  },
  props: ["complaint"],
  data() {
    return {
      COMPLAINT_STATUS_TYPE: COMPLAINT_STATUS_TYPE,
    };
  },
  methods: {
    formateDateTimeLang,
  },
};
</script>

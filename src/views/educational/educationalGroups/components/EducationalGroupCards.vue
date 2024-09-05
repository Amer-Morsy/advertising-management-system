<template>
  <div class="row custom-cards">
    <CustomCard
      v-for="(educationalGroup, index) in educationalGroupsData"
      :key="index"
      :className="'col-sm-6 col-md-4 col-lg-3'"
      :title="educationalGroup.educationalGroupNameCurrent"
      :description="educationalGroup.fullCode"
      :imagePath="educationalGroup.educationalGroupImagePath"
      :defaultImg="defaultImg"
      :index="++index + filterData.currentIndex"
    >
      <li v-if="checkPrivilege(hasEducationalScheduleTime())">
        <router-link
          :to="{
            name: 'EducationalScheduleTimes',
            params: {
              educationalGroupToken: educationalGroup.educationalGroupToken,
            },
          }"
          :title="$t('EducationalScheduleTimes.modelName')"
        >
          <img src="@/assets/images/EducationalScheduleTimes.svg" />
        </router-link>
      </li>
      <li v-if="checkPrivilege(hasEducationalGroupStudent())">
        <router-link
          :to="{
            name: 'EducationalGroupStudents',
            params: {
              educationalGroupToken: educationalGroup.educationalGroupToken,
              educationalCategoryToken:
                educationalGroup.educationalCategoryToken,
            },
          }"
          :title="$t('EducationalGroupStudents.studentsData')"
        >
          <img src="@/assets/images/students.svg" />
        </router-link>
      </li>
      <li v-if="checkPrivilege(hasStorageSpaceEducationalGroup())">
        <router-link
          :to="{
            name: 'StorageSpacesEducationalGroup',
            params: {
              mainToken: educationalGroup.educationalGroupToken,
            },
          }"
          :title="$t('StorageSpaces.modelName')"
        >
          <img src="@/assets/images/StorageSpaces.svg" />
        </router-link>
      </li>
      <li v-if="checkPrivilege(hasEducationalRating())">
        <router-link
          :to="{
            name: 'EducationalGroupsRatings',
            params: {
              educationalGroupToken: educationalGroup.educationalGroupToken,
            },
          }"
          :title="$t('EducationalRatings.modelName')"
        >
          <img src="@/assets/images/educationalRatings.svg" />
        </router-link>
      </li>
      <li v-if="checkPrivilege(hasGroupScheduleExam())">
        <router-link
          :to="{
            name: 'GroupScheduleExams',
            params: {
              educationalGroupToken: educationalGroup.educationalGroupToken,
            },
          }"
          :title="$t('GroupScheduleExams.modelName')"
        >
          <img src="@/assets/images/GroupScheduleExams.svg" />
        </router-link>
      </li>
      <li v-if="checkPrivilege(hasEducationalGroupTransferAdd())">
        <button
          @click="
            setEducationalGroupData(educationalGroup);
            openBottomSheet('EducationalGroupTransferAdd');
          "
          :title="$t('EducationalGroupTransfers.add')"
        >
          <img src="@/assets/images/EducationalGroupTransfers.svg" />
        </button>
      </li>
      <li v-if="checkPrivilege(hasEducationalGroupAttendance())">
        <router-link
          :to="{
            name: 'EducationalGroupAttendances',
            params: {
              educationalGroupToken: educationalGroup.educationalGroupToken,
            },
          }"
          :title="$t('EducationalGroupAttendances.modelName')"
        >
          <img src="@/assets/images/EducationalGroupAttendances.svg" />
        </router-link>
      </li>
      <li>
        <button
          @click="
            setEducationalGroupData(educationalGroup);
            openBottomSheet('EducationalGroupInfo');
          "
          :title="$t('info')"
        >
          <img src="@/assets/images/info.svg" />
        </button>
      </li>
      <li>
        <button
          @click="
            setEducationalGroupData(educationalGroup);
            openBottomSheet('EducationalGroupQRCode');
          "
          :title="$t('general.qrCode')"
        >
          <img src="@/assets/images/qr-code.svg" />
        </button>
      </li>
      <li v-if="checkPrivilege(hasEducationalGroupEdit())">
        <button
          @click="
            setEducationalGroupData(educationalGroup);
            openBottomSheet('EducationalGroupUpdate');
          "
          :title="$t('edit')"
        >
          <img src="@/assets/images/pencil.svg" />
        </button>
      </li>
      <li v-if="checkPrivilege(hasEducationalGroupFinaleDelete())">
        <button
          v-b-modal.EducationalGroupDelete
          :title="$t('delete')"
          @click="setEducationalGroupData(educationalGroup)"
        >
          <img src="@/assets/images/trash.svg" />
        </button>
      </li>
      <li v-if="checkPrivilege(hasEducationalGroupChangeActivationType())">
        <button
          v-b-modal.EducationalGroupChangeActivationType
          :title="$t('changeActivationType')"
          @click="setEducationalGroupData(educationalGroup)"
        >
          <img src="@/assets/images/changeActivationType.svg" />
        </button>
      </li>
      <li>
        <button
          @click="
            setEducationalGroupData(educationalGroup);
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
} from "./../../../../utils/functions";
import {
  hasEducationalGroupEdit,
  hasEducationalGroupStudent,
  hasEducationalRating,
  hasEducationalGroupFinaleDelete,
  hasEducationalGroupChangeActivationType,
  hasEducationalScheduleTime,
  hasGroupScheduleExam,
  hasStorageSpaceEducationalGroup,
  hasEducationalGroupTransferAdd,
  hasEducationalGroupAttendance,
} from "./../../../../utils/privilegeHelper";
import CustomCard from "./../../../../components/general/CustomCard.vue";
import generalMixin from "./../../../../utils/generalMixin";

export default {
  mixins: [generalMixin],
  components: {
    CustomCard,
  },
  props: ["educationalGroupsData", "filterData", "defaultImg"],
  methods: {
    setEducationalGroupData(educationalGroup) {
      this.$emit("setEducationalGroupData", educationalGroup);
    },
    checkPrivilege,
    isDataExist,
    fullPathFileFromServer,
    hasEducationalGroupEdit,
    hasEducationalGroupStudent,
    hasEducationalRating,
    hasEducationalGroupFinaleDelete,
    hasEducationalGroupChangeActivationType,
    hasEducationalScheduleTime,
    hasGroupScheduleExam,
    hasStorageSpaceEducationalGroup,
    hasEducationalGroupTransferAdd,
    hasEducationalGroupAttendance,
  },
};
</script>

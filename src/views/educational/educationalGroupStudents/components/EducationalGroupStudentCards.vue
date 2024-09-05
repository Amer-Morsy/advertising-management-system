<template>
  <div class="row custom-cards">
    <CustomCard
      v-for="(educationalGroupStudent, index) in educationalGroupStudentsData"
      :key="index"
      :className="'col-sm-6 col-md-4 col-lg-3'"
      :title="
        educationalGroupStudent.studentUserInfoDate
          ? educationalGroupStudent.studentUserInfoDate.userNameCurrent
          : ''
      "
      :description="
        educationalGroupStudent.studentUserInfoDate
          ? educationalGroupStudent.studentUserInfoDate.fullCode
          : ''
      "
      :imagePath="educationalGroupStudent.defaultImg"
      :defaultImg="defaultImg"
      :index="++index + filterData.currentIndex"
    >
      <li>
        <button
          :title="$t('info')"
          @click="
            setEducationalGroupStudentData(educationalGroupStudent);
            openBottomSheet('EducationalGroupStudentInfo');
          "
        >
          <img src="@/assets/images/info.svg" />
        </button>
      </li>

      <li>
        <button
          @click="
            setEducationalGroupStudentData(educationalGroupStudent);
            openBottomSheet('ActionsData');
          "
          :title="$t('actionsData.modelName')"
        >
          <img src="@/assets/images/actions-data.svg" />
        </button>
      </li>
      <li v-if="checkPrivilege(hasStudent())">
        <router-link
          :to="{
            name: 'Students',
            params: {
              userToken: educationalGroupStudent.studentUserToken,
            },
          }"
          :title="$t('students.data')"
        >
          <img src="@/assets/images/students.svg" />
        </router-link>
      </li>
      <li v-if="checkPrivilege(hasDebt())">
        <router-link
          :to="{
            name: 'Debts',
            params: {
              userToken: educationalGroupStudent.studentUserToken,
            },
          }"
          :title="$t('Debts.data')"
        >
          <img src="@/assets/images/debts.svg" />
        </router-link>
      </li>
      <li v-if="checkPrivilege(hasInstallment())">
        <router-link
          :to="{
            name: 'Installments',
            params: {
              userToken: educationalGroupStudent.studentUserToken,
            },
          }"
          :title="$t('Installments.data')"
        >
          <img src="@/assets/images/installments.svg" />
        </router-link>
      </li>
      <li v-if="checkPrivilege(hasInstallmentPayment())">
        <router-link
          :to="{
            name: 'InstallmentPayments',
            params: {
              userToken: educationalGroupStudent.studentUserToken,
            },
          }"
          :title="$t('InstallmentPayments.data')"
        >
          <img src="@/assets/images/installmentPayments.svg" />
        </router-link>
      </li>
      <li v-if="checkPrivilege(hasStudentScheduleExamTime())">
        <router-link
          :to="{
            name: 'StudentScheduleExamTimes',
            params: {
              userToken: educationalGroupStudent.studentUserToken,
              educationalGroupToken:
                educationalGroupStudent.educationalGroupToken,
            },
          }"
          :title="$t('StudentScheduleExamTimes.data')"
        >
          <img src="@/assets/images/StudentScheduleExamTimes.svg" />
        </router-link>
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
  hasStudent,
  hasDebt,
  hasInstallment,
  hasInstallmentPayment,
  hasStudentScheduleExamTime,
} from "./../../../../utils/privilegeHelper";
import CustomCard from "./../../../../components/general/CustomCard.vue";
import generalMixin from "./../../../../utils/generalMixin";

export default {
  mixins: [generalMixin],
  components: {
    CustomCard,
  },
  props: ["educationalGroupStudentsData", "filterData", "defaultImg"],
  methods: {
    setEducationalGroupStudentData(educationalGroupStudent) {
      this.$emit("setEducationalGroupStudentData", educationalGroupStudent);
    },
    checkPrivilege,
    hasStudent,
    hasDebt,
    hasInstallment,
    hasInstallmentPayment,
    hasStudentScheduleExamTime,
    isDataExist,
    fullPathFileFromServer,
  },
};
</script>

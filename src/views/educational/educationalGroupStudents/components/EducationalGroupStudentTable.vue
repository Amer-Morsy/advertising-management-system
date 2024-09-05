<template>
  <div v-if="educationalGroupStudentsData" class="table-container">
    <table class="my-table">
      <thead>
        <tr>
          <th>#</th>
          <th>{{ $t("students.name") }}</th>
          <th>{{ $t("EducationalGroups.name") }}</th>
          <th>{{ $t("EducationalJoiningApplications.name") }}</th>
          <th>{{ $t("actionsData.dateTime") }}</th>
          <th><i class="fas fa-sliders-h"></i></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(
            educationalGroupStudent, index
          ) in educationalGroupStudentsData"
          :key="index"
        >
          <td>{{ ++index + filterData.currentIndex }}</td>
          <td>
            {{
              isDataExist(
                educationalGroupStudent.studentUserInfoDate
                  ? educationalGroupStudent.studentUserInfoDate.userNameCurrent
                  : ""
              )
            }}
          </td>
          <td>
            {{
              isDataExist(
                educationalGroupStudent.educationalGroupInfoData
                  ? educationalGroupStudent.educationalGroupInfoData
                      .educationalGroupNameCurrent
                  : ""
              )
            }}
          </td>
          <td>
            {{
              isDataExist(
                educationalGroupStudent.educationalJoiningApplicationInfoDate
                  ? educationalGroupStudent
                      .educationalJoiningApplicationInfoDate
                      .educationalJoiningApplicationNameCurrent
                  : ""
              )
            }}
          </td>
          <td>
            {{
              formateDateTimeLang(
                educationalGroupStudent.creationDate,
                educationalGroupStudent.creationTime
              )
            }}
          </td>

          <td class="fmenu-item-container">
            <FloatingMenu>
              <li>
                <button
                  @click="
                    setEducationalGroupStudentData(educationalGroupStudent);
                    openBottomSheet('EducationalGroupStudentInfo');
                  "
                  :title="$t('info')"
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
  formateDateTimeLang,
} from "./../../../../utils/functions";
import {
  hasStudent,
  hasDebt,
  hasInstallment,
  hasInstallmentPayment,
  hasStudentScheduleExamTime,
} from "./../../../../utils/privilegeHelper";
import FloatingMenu from "./../../../../components/general/FloatingMenu.vue";
import generalMixin from "./../../../../utils/generalMixin";

export default {
  name: "EducationalGroupStudentsTable",
  mixins: [generalMixin],
  components: {
    FloatingMenu,
  },
  props: ["educationalGroupStudentsData", "filterData", "defaultImg"],
  methods: {
    setEducationalGroupStudentData(educationalGroupStudent) {
      this.$emit("setEducationalGroupStudentData", educationalGroupStudent);
    },
    checkPrivilege,
    isDataExist,
    hasStudent,
    hasDebt,
    hasInstallment,
    hasInstallmentPayment,
    hasStudentScheduleExamTime,
    fullPathFileFromServer,
    formateDateTimeLang,
  },
};
</script>

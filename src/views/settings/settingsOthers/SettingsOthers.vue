<template>
  <div class="">
    <DashboardNavbar />
    <div class="app-content">
      <div class="reports-cards">
        <!-- <div v-if="checkPrivilege(hasServiceType())" class="reports-card">
          <router-link :to="{ name: 'ServiceTypes' }" class="">
            <img src="@/assets/images/serviceTypes.svg" />{{
              $t("ServiceTypes.modelName")
            }}
          </router-link>
        </div>
        <div
          v-if="checkPrivilege(hasCountedServiceType())"
          class="reports-card"
        >
          <router-link :to="{ name: 'CountedServiceTypes' }" class="">
            <img src="@/assets/images/countedServiceTypes.svg" />{{
              $t("CountedServiceTypes.modelName")
            }}
          </router-link>
        </div>
        <div v-if="checkPrivilege(hasService())" class="reports-card">
          <router-link :to="{ name: 'Services' }" class="">
            <img src="@/assets/images/services.svg" />{{
              $t("Services.modelName")
            }}
          </router-link>
        </div>
        <div v-if="checkPrivilege(hasCountedService())" class="reports-card">
          <router-link :to="{ name: 'CountedServices' }" class="">
            <img src="@/assets/images/countedServices.svg" />{{
              $t("CountedServices.modelName")
            }}
          </router-link>
        </div> -->
        <div v-if="checkPrivilege(hasJobOrderStage())" class="reports-card">
          <router-link :to="{ name: 'JobOrderStages' }" class="">
            <img src="@/assets/images/jobOrderStages.svg" />{{
              $t("JobOrderStages.modelName")
            }}
          </router-link>
        </div>
        <div
          v-if="checkPrivilege(hasSystemComponentsHierarchyPlace())"
          class="reports-card"
        >
          <router-link
            :to="{ name: 'SystemComponentsHierarchyPlace' }"
            class=""
          >
            <img src="@/assets/images/systemComponentsHierarchies.svg" />{{
              $t("SystemComponentsHierarchies.placeOther")
            }}
          </router-link>
        </div>
        <div
          v-if="checkPrivilege(hasSystemComponentPlace())"
          class="reports-card"
        >
          <router-link :to="{ name: 'SystemComponentPlace' }" class="">
            <img src="@/assets/images/systemComponentsHierarchies.svg" />{{
              $t("SystemComponents.placeOther")
            }}
          </router-link>
        </div>
        <div v-if="checkPrivilege(hasQualification())" class="reports-card">
          <router-link :to="{ name: 'Qualifications' }" class="">
            <img src="@/assets/images/qualifications.svg" />{{
              $t("Qualifications.modelName")
            }}
          </router-link>
        </div>
        <div v-if="checkPrivilege(hasWorkField())" class="reports-card">
          <router-link :to="{ name: 'WorkFields' }" class="">
            <img src="@/assets/images/workFields.svg" />{{
              $t("WorkFields.modelName")
            }}
          </router-link>
        </div>
        <div v-if="checkPrivilege(hasReligion())" class="reports-card">
          <router-link :to="{ name: 'Religions' }" class="">
            <img src="@/assets/images/religions.svg" />{{
              $t("Religions.modelName")
            }}
          </router-link>
        </div>
        <div
          v-if="checkPrivilege(hasInstallmentBatchType())"
          class="reports-card"
        >
          <router-link :to="{ name: 'InstallmentBatchTypes' }" class="">
            <img src="@/assets/images/installmentBatchTypes.svg" />{{
              $t("InstallmentBatchTypes.modelName")
            }}
          </router-link>
        </div>
        <div v-if="checkPrivilege(hasPersonalCardType())" class="reports-card">
          <router-link :to="{ name: 'PersonalCardTypes' }" class="">
            <img src="@/assets/images/personalCardTypes.svg" />{{
              $t("PersonalCardTypes.modelName")
            }}
          </router-link>
        </div>
        <div
          v-if="checkPrivilege(hasClassificationDegree())"
          class="reports-card"
        >
          <router-link :to="{ name: 'ClassificationDegrees' }" class="">
            <img src="@/assets/images/classificationDegrees.svg" />{{
              $t("ClassificationDegrees.modelName")
            }}
          </router-link>
        </div>
        <div v-if="checkPrivilege(hasScientificDegree())" class="reports-card">
          <router-link :to="{ name: 'ScientificDegrees' }" class="">
            <img src="@/assets/images/scientificDegrees.svg" />{{
              $t("ScientificDegrees.modelName")
            }}
          </router-link>
        </div>
        <div
          v-if="checkPrivilege(hasRelativeRelationType())"
          class="reports-card"
        >
          <router-link :to="{ name: 'RelativeRelationTypes' }" class="">
            <img src="@/assets/images/RelativeRelationTypes.svg" />{{
              $t("RelativeRelationTypes.modelName")
            }}
          </router-link>
        </div>
        <div v-if="checkPrivilege(hasGeneralJob())" class="reports-card">
          <router-link :to="{ name: 'GeneralJobs' }" class="">
            <img src="@/assets/images/generalJobs.svg" />{{
              $t("GeneralJobs.modelName")
            }}
          </router-link>
        </div>
        <div
          v-if="checkPrivilege(hasMilitaryStatusType())"
          class="reports-card"
        >
          <router-link :to="{ name: 'MilitaryStatusTypes' }" class="">
            <img src="@/assets/images/militaryStatus.svg" />{{
              $t("MilitaryStatusTypes.modelName")
            }}
          </router-link>
        </div>

        <div v-if="checkPrivilege(hasBloodType())" class="reports-card">
          <router-link :to="{ name: 'BloodTypes' }" class="">
            <img src="@/assets/images/BloodTypes.svg" />{{
              $t("BloodTypes.modelName")
            }}
          </router-link>
        </div>

        <div v-if="checkPrivilege(hasCertificate())" class="reports-card">
          <router-link :to="{ name: 'Certificates' }" class="">
            <img src="@/assets/images/certificates.svg" />{{
              $t("Certificates.modelName")
            }}
          </router-link>
        </div>

        <div v-if="checkPrivilege(hasCountry())" class="reports-card">
          <router-link :to="{ name: 'Countries' }" class="">
            <img src="@/assets/images/countries.svg" />{{
              $t("Countries.modelName")
            }}
          </router-link>
        </div>

        <!-- <div v-if="checkPrivilege(hasGovernorate())" class="reports-card">
          <router-link :to="{ name: 'Governorates' }" class="">
            <img src="@/assets/images/governorates.svg" />{{
              $t("Governorates.modelName")
            }}
          </router-link>
        </div>

        <div v-if="checkPrivilege(hasCity())" class="reports-card">
          <router-link :to="{ name: 'Cities' }" class="">
            <img src="@/assets/images/cities.svg" />{{ $t("Cities.modelName") }}
          </router-link>
        </div>

        <div v-if="checkPrivilege(hasDistrict())" class="reports-card">
          <router-link :to="{ name: 'Districts' }" class="">
            <img src="@/assets/images/districts.svg" />{{
              $t("Districts.modelName")
            }}
          </router-link>
        </div> -->

        <div v-if="checkPrivilege(hasSocialStatuse())" class="reports-card">
          <router-link :to="{ name: 'SocialStatuses' }" class="">
            <img src="@/assets/images/socialStatuses.svg" />{{
              $t("SocialStatuses.modelName")
            }}
          </router-link>
        </div>

        <div v-if="checkPrivilege(hasBank())" class="reports-card">
          <router-link :to="{ name: 'Banks' }" class="">
            <img src="@/assets/images/banks.svg" />{{ $t("Banks.modelName") }}
          </router-link>
        </div>
        <div v-if="checkPrivilege(hasInsuranceCompany())" class="reports-card">
          <router-link :to="{ name: 'InsuranceCompanies' }" class="">
            <img src="@/assets/images/insuranceCompanies.svg" />{{
              $t("InsuranceCompanies.modelName")
            }}
          </router-link>
        </div>
        <div v-if="checkPrivilege(hasColor())" class="reports-card">
          <router-link :to="{ name: 'Colors' }" class="">
            <img src="@/assets/images/colors.svg" />{{ $t("Colors.modelName") }}
          </router-link>
        </div>
        <div v-if="checkPrivilege(hasPriorityType())" class="reports-card">
          <router-link :to="{ name: 'PriorityTypes' }" class="">
            <img src="@/assets/images/priorityTypes.svg" />{{
              $t("PriorityTypes.modelName")
            }}
          </router-link>
        </div>
        <div v-if="checkPrivilege(hasComplaintType())" class="reports-card">
          <router-link :to="{ name: 'ComplaintTypes' }" class="">
            <img src="@/assets/images/complaintTypes.svg" />{{
              $t("ComplaintTypes.modelName")
            }}
          </router-link>
        </div>
        <div v-if="checkPrivilege(hasNewsCategory())" class="reports-card">
          <router-link :to="{ name: 'NewsCategories' }" class="">
            <img src="@/assets/images/newsCategories.svg" />{{
              $t("NewsCategories.modelName")
            }}
          </router-link>
        </div>
        <div v-if="checkPrivilege(hasComplaintSector())" class="reports-card">
          <router-link :to="{ name: 'ComplaintSectors' }" class="">
            <img src="@/assets/images/complaintSectors.svg" />{{
              $t("ComplaintSectors.modelName")
            }}
          </router-link>
        </div>
        <div v-if="checkPrivilege(hasReminderPlan())" class="reports-card">
          <router-link :to="{ name: 'ReminderPlans' }" class="">
            <img src="@/assets/images/reminderPlans.svg" />{{
              $t("ReminderPlans.modelName")
            }}
          </router-link>
        </div>
        <!-- <div v-if="checkPrivilege(hasExpensesType())" class="reports-card">
          <router-link :to="{ name: 'ExpensesTypes' }" class="">
            <img src="@/assets/images/expensesTypes.svg" />{{
              $t("ExpensesTypes.modelName")
            }}
          </router-link>
        </div> -->
        <!-- <div v-if="checkPrivilege(hasRevenuesType())" class="reports-card">
          <router-link :to="{ name: 'RevenuesTypes' }" class="">
            <img src="@/assets/images/revenuesTypes.svg" />{{
              $t("RevenuesTypes.modelName")
            }}
          </router-link>
        </div> -->
        <div v-if="checkPrivilege(hasPaymentMethod())" class="reports-card">
          <router-link :to="{ name: 'PaymentMethods' }" class="">
            <img src="@/assets/images/paymentMethods.svg" />{{
              $t("PaymentMethods.modelName")
            }}
          </router-link>
        </div>
        <div v-if="checkPrivilege(hasGradingPlan())" class="reports-card">
          <router-link :to="{ name: 'GradingPlans' }" class="">
            <img src="@/assets/images/GradingPlans.svg" />{{
              $t("GradingPlans.modelName")
            }}
          </router-link>
        </div>
        <div v-if="checkPrivilege(hasKnownMethod())" class="reports-card">
          <router-link :to="{ name: 'KnownMethods' }" class="">
            <img src="@/assets/images/knownMethods.svg" />{{
              $t("KnownMethods.modelName")
            }}
          </router-link>
        </div>
        <div
          v-if="
            checkPrivilege(
              hasJobGrade() ||
                hasSystemComponentsHierarchyJobGrade() ||
                hasSystemComponentJobGrade()
            )
          "
          class="reports-card"
        >
          <router-link
            v-if="checkPrivilege(hasJobGrade())"
            :to="{ name: 'JobGrades' }"
            class=""
          >
            <img src="@/assets/images/jobGrade.svg" />{{
              $t("JobGrades.modelName")
            }}
          </router-link>
          <router-link
            v-if="checkPrivilege(hasSystemComponentsHierarchyJobGrade())"
            :to="{ name: 'SystemComponentsHierarchyJobGrade' }"
            class=""
          >
            <img src="@/assets/images/systemComponentsHierarchies.svg" />{{
              $t("SystemComponentsHierarchies.modelName")
            }}
          </router-link>
          <router-link
            v-if="checkPrivilege(hasSystemComponentJobGrade())"
            :to="{ name: 'SystemComponentJobGrade' }"
            class=""
          >
            <img src="@/assets/images/systemComponents.svg" />{{
              $t("SystemComponents.modelName")
            }}
          </router-link>
        </div>
        <div
          v-if="
            checkPrivilege(
              hasGeographicalDistribution() ||
                hasSystemComponentGeographicalDistribution() ||
                hasSystemComponentsHierarchyGeographicalDistribution()
            )
          "
          class="reports-card"
        >
          <router-link
            v-if="checkPrivilege(hasGeographicalDistribution())"
            :to="{ name: 'GeographicalDistributions' }"
            class=""
          >
            <img src="@/assets/images/geographicalDistributions.svg" />{{
              $t("GeographicalDistributions.modelName")
            }}
          </router-link>
          <router-link
            v-if="
              checkPrivilege(
                hasSystemComponentsHierarchyGeographicalDistribution()
              )
            "
            :to="{ name: 'SystemComponentsHierarchyGeographicalDistribution' }"
            class=""
          >
            <img src="@/assets/images/systemComponentsHierarchies.svg" />{{
              $t("SystemComponentsHierarchies.modelName")
            }}
          </router-link>
          <router-link
            v-if="checkPrivilege(hasSystemComponentGeographicalDistribution())"
            :to="{ name: 'SystemComponentGeographicalDistribution' }"
            class=""
          >
            <img src="@/assets/images/systemComponents.svg" />{{
              $t("SystemComponents.modelName")
            }}
          </router-link>
        </div>
        <!-- <div v-if="checkPrivilege(hasPriceList())" class="reports-card">
          <router-link :to="{ name: 'PriceLists' }" class="">
            <img src="@/assets/images/PriceLists.svg" />{{
              $t("PriceLists.modelName")
            }}
          </router-link>
        </div> -->

        <!-- <div
        v-if="
          checkPrivilege(
            usersPrivilegeData.usersPrivilegeScientificDegrees.viewData
          )
        "
        class="reports-card"
      >
        <router-link :to="{ name: 'ScientificDegrees' }" class="">
          <img src="@/assets/images/scientificDegrees.svg" />{{
            $t("ScientificDegrees.modelName")
          }}
        </router-link>
      </div>
      <div
        v-if="
          checkPrivilege(
            usersPrivilegeData.usersPrivilegeClassificationDegrees.viewData
          )
        "
        class="reports-card"
      >
        <router-link :to="{ name: 'ClassificationDegrees' }" class="">
          <img src="@/assets/images/classificationDegrees.svg" />{{
            $t("ClassificationDegrees.modelName")
          }}
        </router-link>
      </div>


      <div
        v-if="
          checkPrivilege(usersPrivilegeData.usersPrivilegeReligions.viewData)
        "
        class="reports-card"
      >
        <router-link :to="{ name: 'Religions' }" class="">
          <img src="@/assets/images/religions.svg" />{{
            $t("Religions.modelName")
          }}
        </router-link>
      </div>




      <div
        v-if="checkPrivilege(usersPrivilegeData.usersPrivilegeSectors.viewData)"
        class="reports-card"
      >
        <router-link :to="{ name: 'Sectors' }" class="">
          <img src="@/assets/images/sectors.svg" />{{ $t("Sectors.modelName") }}
        </router-link>
      </div>
      <div
        v-if="checkPrivilege(usersPrivilegeData.usersPrivilegeJobs.viewData)"
        class="reports-card"
      >
        <router-link :to="{ name: 'Jobs' }" class="">
          <img src="@/assets/images/jobs.svg" />{{ $t("Jobs.modelName") }}
        </router-link>
      </div>
      <div
        v-if="
          checkPrivilege(
            usersPrivilegeData.usersPrivilegePersonalCardTypes.viewData
          )
        "
        class="reports-card"
      >
        <router-link :to="{ name: 'PersonalCardTypes' }" class="">
          <img src="@/assets/images/personalCardTypes.svg" />{{
            $t("PersonalCardTypes.modelName")
          }}
        </router-link>
      </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DashboardNavbar from "./../../../layouts/components/DashboardNavbar.vue";
import { checkPrivilege } from "@/utils/functions";
import {
  hasQualification,
  hasWorkField,
  hasSystemComponentPlace,
  hasSystemComponentsHierarchyPlace,
  hasJobOrderStage,
  hasReligion,
  hasInstallmentBatchType,
  hasPersonalCardType,
  hasJobGrade,
  hasSystemComponentsHierarchyJobGrade,
  hasSystemComponentJobGrade,
  hasClassificationDegree,
  hasScientificDegree,
  hasRelativeRelationType,
  hasGeneralJob,
  hasColor,
  hasPriorityType,
  hasComplaintType,
  hasNewsCategory,
  hasComplaintSector,
  hasReminderPlan,
  // hasExpensesType,
  // hasRevenuesType,
  hasPaymentMethod,
  hasGradingPlan,
  // hasPriceList,
  // hasServiceType,
  // hasCountedServiceType,
  // hasService,
  // hasCountedService,
  hasMilitaryStatusType,
  hasBloodType,
  hasCertificate,
  hasSocialStatuse,
  hasBank,
  hasKnownMethod,
  hasCountry,
  hasGeographicalDistribution,
  hasSystemComponentGeographicalDistribution,
  hasSystemComponentsHierarchyGeographicalDistribution,
  hasInsuranceCompany,
} from "@/utils/privilegeHelper";

export default {
  components: { DashboardNavbar },
  data() {
    return {};
  },
  methods: {
    checkPrivilege,
    hasQualification,
    hasWorkField,
    hasSystemComponentPlace,
    hasSystemComponentsHierarchyPlace,
    hasJobOrderStage,
    hasReligion,
    hasInstallmentBatchType,
    hasPersonalCardType,
    hasJobGrade,
    hasSystemComponentsHierarchyJobGrade,
    hasSystemComponentJobGrade,
    hasClassificationDegree,
    hasScientificDegree,
    hasRelativeRelationType,
    hasGeneralJob,
    hasColor,
    hasPriorityType,
    hasComplaintType,
    hasNewsCategory,
    hasComplaintSector,
    hasReminderPlan,
    // hasExpensesType,
    // hasRevenuesType,
    hasPaymentMethod,
    hasGradingPlan,
    // hasPriceList,
    // hasServiceType,
    // hasCountedServiceType,
    // hasService,
    // hasCountedService,
    hasMilitaryStatusType,
    hasBloodType,
    hasCertificate,
    hasSocialStatuse,
    hasBank,
    hasKnownMethod,
    hasCountry,
    hasGeographicalDistribution,
    hasSystemComponentGeographicalDistribution,
    hasSystemComponentsHierarchyGeographicalDistribution,
    hasInsuranceCompany,
  },
  computed: {
    ...mapGetters(["usersPrivilegeData"]),
  },
};
</script>

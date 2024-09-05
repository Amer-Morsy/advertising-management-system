<template>
  <div>
    <PreLoader v-if="isLoading" />

    <CustomBottomSheet
      refName="JobOrderStagesOfWorkAdd"
      size="xl"
      :headerText="$t('JobOrderStages.add')"
      :headerIcon="jobOrderStagesOfWork.icon"
      :clickToClose="false"
      :swipeAble="false"
    >
      <!-- @opened="" -->
      <JobOrderStagesOfWorkForm
        v-if="!isLoading"
        id="add"
        :jobOrderStagesOfWork="jobOrderStagesOfWork"
        v-on:submitForm="addJobOrderStagesOfWork()"
        bottomSheetName="JobOrderStagesOfWorkAdd"
        :submitName="$t('add')"
      />
    </CustomBottomSheet>
  </div>
</template>

<script>
import PreLoader from "./../../../../components/general/PreLoader.vue";
import CustomBottomSheet from "./../../../../components/general/CustomBottomSheet.vue";
import JobOrderStagesOfWorkForm from "./JobOrderStagesOfWorkForm.vue";
import { STATUS } from "./../../../../utils/constants";
import { objectToFormData } from "./../../../../utils/functions";
import apiJobOrderStagesOfWork from "./../../../../api/products/jobOrderStagesOfWorks";
import generalMixin from "./../../../../utils/generalMixin";

export default {
  mixins: [generalMixin],
  components: {
    PreLoader,
    CustomBottomSheet,
    JobOrderStagesOfWorkForm,
  },
  props: {
    jobOrderStagesOfWork: {
      type: Object,
    },
    priceQuotationToken: {
      type: String,
      default: "",
    },
  },
  methods: {
    async addJobOrderStagesOfWork() {
      this.isLoading = true;
      let formData = objectToFormData(this.jobOrderStagesOfWork);
      try {
        const response = await apiJobOrderStagesOfWork.add(formData);
        if (response.data.status == STATUS.SUCCESS) {
          this.showMsg(response.data.msg, true);
          this.closeBottomSheet("JobOrderStagesOfWorkAdd");
          this.$emit(
            "getDetails",
            this.jobOrderStagesOfWork.priceQuotationJobOrderToken
          );
        } else if (response.data.status == STATUS.INVALID_TOKEN) {
          this.$store.dispatch("logoutUser", response.data.msg);
          this.showMsg(response.data.msg);
        } else {
          this.showMsg(response.data.msg);
        }
      } catch (error) {
        this.showMsg(this.$t("errorCatch"));
      }
      this.isLoading = false;
    },
  },
};
</script>

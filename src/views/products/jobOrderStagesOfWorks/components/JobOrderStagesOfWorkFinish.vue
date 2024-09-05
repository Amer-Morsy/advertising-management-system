<template>
  <div>
    <PreLoader v-if="isLoading" />

    <CustomBottomSheet
      refName="JobOrderStagesOfWorkFinish"
      size="xl"
      :headerText="$t('JobOrderStages.finish')"
      :headerIcon="jobOrderStagesOfWork.icon"
      :clickToClose="false"
      :swipeAble="false"
    >
      <JobOrderStagesOfWorkForm
        v-if="!isLoading"
        id="finish"
        :jobOrderStagesOfWork="jobOrderStagesOfWork"
        v-on:submitForm="finishJobOrderStagesOfWork()"
        :deleteFileStatus="true"
        bottomSheetName="JobOrderStagesOfWorkFinish"
        :submitName="$t('general.finish')"
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
  props: ["jobOrderStagesOfWork"],
  data() {
    return {};
  },
  methods: {
    async finishJobOrderStagesOfWork() {
      this.isLoading = true;
      let formData = objectToFormData(this.jobOrderStagesOfWork);
      try {
        const response = await apiJobOrderStagesOfWork.finish(formData);
        if (response.data.status == STATUS.SUCCESS) {
          this.showMsg(response.data.msg, true);
          this.closeBottomSheet("JobOrderStagesOfWorkFinish");
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

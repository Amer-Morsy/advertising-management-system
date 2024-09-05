<template>
  <div>
    <PreLoader v-if="isLoading" />

    <CustomBottomSheet
      refName="JobOrderStageAdd"
      size="xl"
      :headerText="$t('JobOrderStages.add')"
      :headerIcon="jobOrderStage.icon"
      :clickToClose="false"
      :swipeAble="false"
      @opened="jobOrderStage.setInitialValue()"
    >
      <JobOrderStageForm
        v-if="!isLoading"
        id="add"
        :jobOrderStage="jobOrderStage"
        v-on:submitForm="addJobOrderStage()"
        bottomSheetName="JobOrderStageAdd"
        :submitName="$t('add')"
      />
    </CustomBottomSheet>
    <ConfirmClearData
      dialogName="JobOrderStageAdd"
      v-on:response="response($event)"
    />
  </div>
</template>

<script>
import PreLoader from "./../../../../../components/general/PreLoader.vue";
import CustomBottomSheet from "./../../../../../components/general/CustomBottomSheet.vue";
import ConfirmClearData from "./../../../../../components/general/ConfirmClearData.vue";
import JobOrderStageForm from "./JobOrderStageForm.vue";
import { STATUS } from "./../../../../../utils/constants";
import { objectToFormData } from "./../../../../../utils/functions";
import apiJobOrderStage from "./../../../../../api/settings/settingsOthers/jobOrderStages";
import generalMixin from "./../../../../../utils/generalMixin";

export default {
  mixins: [generalMixin],
  components: {
    PreLoader,
    CustomBottomSheet,
    ConfirmClearData,
    JobOrderStageForm,
  },
  props: ["jobOrderStage"],
  methods: {
    async addJobOrderStage() {
      this.isLoading = true;
      let formData = objectToFormData(this.jobOrderStage);
      try {
        const response = await apiJobOrderStage.add(formData);
        if (response.data.status == STATUS.SUCCESS) {
          this.showMsg(response.data.msg, true);
          this.$bvModal.show("ConfirmClearData-JobOrderStageAdd");
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
    response(data) {
      this.$emit("refresh");
      switch (data) {
        case "yes":
          this.jobOrderStage.setInitialValue();
          break;
        case "leave":
          this.jobOrderStage.setInitialValue();
          this.closeBottomSheet("JobOrderStageAdd");
          break;
      }
    },
  },
};
</script>

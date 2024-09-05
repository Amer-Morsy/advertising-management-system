<template>
  <div>
    <PreLoader v-if="isLoading" />

    <CustomBottomSheet
      refName="JobOrderStageUpdate"
      size="xl"
      :headerText="$t('JobOrderStages.edit')"
      :headerIcon="jobOrderStage.icon"
      :clickToClose="false"
      :swipeAble="false"
    >
      <JobOrderStageForm
        v-if="!isLoading"
        id="update"
        :jobOrderStage="jobOrderStage"
        v-on:submitForm="updateJobOrderStage()"
        :deleteFileStatus="true"
        v-on:deleteFile="deleteFile()"
        bottomSheetName="JobOrderStageUpdate"
        :submitName="$t('edit')"
      />
    </CustomBottomSheet>
  </div>
</template>

<script>
import PreLoader from "./../../../../../components/general/PreLoader.vue";
import CustomBottomSheet from "./../../../../../components/general/CustomBottomSheet.vue";
import JobOrderStageForm from "./JobOrderStageForm.vue";
import { STATUS } from "./../../../../../utils/constants";
import { objectToFormData } from "./../../../../../utils/functions";
import GeneralDelete from "./../../../../../models/general/GeneralDelete";
import apiJobOrderStage from "./../../../../../api/settings/settingsOthers/jobOrderStages";
import generalMixin from "./../../../../../utils/generalMixin";

export default {
  mixins: [generalMixin],
  components: {
    PreLoader,
    CustomBottomSheet,
    JobOrderStageForm,
  },
  props: ["jobOrderStage"],
  data() {
    return {
      model: new GeneralDelete(),
    };
  },
  methods: {
    async updateJobOrderStage() {
      this.isLoading = true;
      let formData = objectToFormData(this.jobOrderStage);
      try {
        const response = await apiJobOrderStage.update(formData);
        if (response.data.status == STATUS.SUCCESS) {
          this.showMsg(response.data.msg, true);
          this.closeBottomSheet("JobOrderStageUpdate");
          this.$emit("refresh");
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
    async deleteFile() {
      this.isLoading = true;
      try {
        this.model.fillData({
          token: this.jobOrderStage.jobOrderStageToken,
        });
        let formData = objectToFormData(this.model);
        const response = await apiJobOrderStage.deleteImage(formData);
        if (response.data.status == STATUS.SUCCESS) {
          this.showMsg(response.data.msg, true);
          this.jobOrderStage.jobOrderStageImagePath = "";
          this.jobOrderStage.jobOrderStageImageIsDefault = true;
          this.$emit("refresh");
        } else if (response.data.status == STATUS.INVALID_TOKEN) {
          this.showMsg(response.data.msg);
          this.$store.dispatch("logoutUser", response.data.msg);
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

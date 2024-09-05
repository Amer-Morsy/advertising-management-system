<template>
  <div>
    <PreLoader v-if="isLoading" />

    <CustomBottomSheet
      refName="WorkFieldUpdate"
      size="xl"
      :headerText="$t('WorkFields.edit')"
      :headerIcon="workField.icon"
      :clickToClose="false"
      :swipeAble="false"
    >
      <WorkFieldForm
        v-if="!isLoading"
        id="update"
        :workField="workField"
        v-on:submitForm="updateWorkField()"
        :deleteFileStatus="true"
        v-on:deleteFile="deleteFile()"
        bottomSheetName="WorkFieldUpdate"
        :submitName="$t('edit')"
      />
    </CustomBottomSheet>
  </div>
</template>

<script>
import PreLoader from "./../../../../../components/general/PreLoader.vue";
import CustomBottomSheet from "./../../../../../components/general/CustomBottomSheet.vue";
import WorkFieldForm from "./WorkFieldForm.vue";
import { STATUS } from "./../../../../../utils/constants";
import { objectToFormData } from "./../../../../../utils/functions";
import GeneralDelete from "./../../../../../models/general/GeneralDelete";
import apiWorkField from "./../../../../../api/settings/settingsOthers/workFields";
import generalMixin from "./../../../../../utils/generalMixin";

export default {
  mixins: [generalMixin],
  components: {
    PreLoader,
    CustomBottomSheet,
    WorkFieldForm,
  },
  props: ["workField"],
  data() {
    return {
      model: new GeneralDelete(),
    };
  },
  methods: {
    async updateWorkField() {
      this.isLoading = true;
      let formData = objectToFormData(this.workField);
      try {
        const response = await apiWorkField.update(formData);
        if (response.data.status == STATUS.SUCCESS) {
          this.showMsg(response.data.msg, true);
          this.closeBottomSheet("WorkFieldUpdate");
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
          token: this.workField.workFieldToken,
        });
        let formData = objectToFormData(this.model);
        const response = await apiWorkField.deleteImage(formData);
        if (response.data.status == STATUS.SUCCESS) {
          this.showMsg(response.data.msg, true);
          this.workField.workFieldImagePath = "";
          this.workField.workFieldImageIsDefault = true;
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

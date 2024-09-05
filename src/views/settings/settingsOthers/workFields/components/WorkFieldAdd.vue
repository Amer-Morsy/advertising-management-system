<template>
  <div>
    <PreLoader v-if="isLoading" />

    <CustomBottomSheet
      refName="WorkFieldAdd"
      size="xl"
      :headerText="$t('WorkFields.add')"
      :headerIcon="workField.icon"
      :clickToClose="false"
      :swipeAble="false"
      @opened="workField.setInitialValue()"
    >
      <WorkFieldForm
        v-if="!isLoading"
        id="add"
        :workField="workField"
        v-on:submitForm="addWorkField()"
        bottomSheetName="WorkFieldAdd"
        :submitName="$t('add')"
      />
    </CustomBottomSheet>
    <ConfirmClearData
      dialogName="WorkFieldAdd"
      v-on:response="response($event)"
    />
  </div>
</template>

<script>
import PreLoader from "./../../../../../components/general/PreLoader.vue";
import CustomBottomSheet from "./../../../../../components/general/CustomBottomSheet.vue";
import ConfirmClearData from "./../../../../../components/general/ConfirmClearData.vue";
import WorkFieldForm from "./WorkFieldForm.vue";
import { STATUS } from "./../../../../../utils/constants";
import { objectToFormData } from "./../../../../../utils/functions";
import apiWorkField from "./../../../../../api/settings/settingsOthers/workFields";
import generalMixin from "./../../../../../utils/generalMixin";

export default {
  mixins: [generalMixin],
  components: {
    PreLoader,
    CustomBottomSheet,
    ConfirmClearData,
    WorkFieldForm,
  },
  props: ["workField"],
  methods: {
    async addWorkField() {
      this.isLoading = true;
      let formData = objectToFormData(this.workField);
      try {
        const response = await apiWorkField.add(formData);
        if (response.data.status == STATUS.SUCCESS) {
          this.showMsg(response.data.msg, true);
          this.$bvModal.show("ConfirmClearData-WorkFieldAdd");
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
          this.workField.setInitialValue();
          break;
        case "leave":
          this.workField.setInitialValue();
          this.closeBottomSheet("WorkFieldAdd");
          break;
      }
    },
  },
};
</script>

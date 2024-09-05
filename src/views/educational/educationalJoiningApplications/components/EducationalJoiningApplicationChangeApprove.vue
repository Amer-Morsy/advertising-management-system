<template>
  <CustomBottomSheet
    :refName="'EducationalJoiningApplicationChangeApprove'"
    size="md"
    @opened="
      educationalJoiningApplicationApprove.approvalTypeToken =
        APPROVAL_TYPE_TOKENS.Accepted
    "
    :headerText="$t('EducationalJoiningApplications.approveOrReject')"
    :headerIcon="icon"
  >
    <div class="row">
      <!-- <CustomSelectBox
        :className="'col-12'"
        :id="'approvalTypeToken'"
        :value="educationalJoiningApplicationApprove.approvalTypeToken"
        :options="approvalTypeTokensOptions"
        v-on:changeValue="
          educationalJoiningApplicationApprove.approvalTypeToken = $event
        "
        :title="$t('ConstantsListSelect.ApprovalTypes')"
        :imgName="'ApprovalTypes.svg'"
        :imgStatus="true"
      /> -->

      <div class="col-12 text-center">
        <CustomCheckbox
          :value="educationalJoiningApplicationApprove.approvalTypeToken"
          v-on:changeValue="
            educationalJoiningApplicationApprove.approvalTypeToken = $event
          "
          :checkedValue="APPROVAL_TYPE_TOKENS.Accepted"
          uncheckedValue=""
          :title="$t('EducationalJoiningApplications.approve')"
          :inlineStatus="true"
        />
        <CustomCheckbox
          :value="educationalJoiningApplicationApprove.approvalTypeToken"
          v-on:changeValue="
            educationalJoiningApplicationApprove.approvalTypeToken = $event
          "
          :checkedValue="APPROVAL_TYPE_TOKENS.Rejected"
          uncheckedValue=""
          :title="$t('EducationalJoiningApplications.reject')"
          :inlineStatus="true"
        />
      </div>

      <TextArea
        :className="'col-md-6'"
        id="rejectReasonAr"
        :value="educationalJoiningApplicationApprove.rejectReasonAr"
        v-on:changeValue="
          educationalJoiningApplicationApprove.rejectReasonAr = $event
        "
        :isDisabled="
          educationalJoiningApplicationApprove.approvalTypeToken !=
          APPROVAL_TYPE_TOKENS.Rejected
        "
        :title="$t('EducationalJoiningApplications.rejectReasonAr')"
        :imgName="'reason.svg'"
      />
      <TextArea
        :className="'col-md-6'"
        id="rejectReasonEn"
        :value="educationalJoiningApplicationApprove.rejectReasonEn"
        v-on:changeValue="
          educationalJoiningApplicationApprove.rejectReasonEn = $event
        "
        :isDisabled="
          educationalJoiningApplicationApprove.approvalTypeToken !=
          APPROVAL_TYPE_TOKENS.Rejected
        "
        :title="$t('EducationalJoiningApplications.rejectReasonEn')"
        :imgName="'reason.svg'"
      />
      <TextArea
        :className="'col-md-6'"
        id="rejectReasonUnd"
        :value="educationalJoiningApplicationApprove.rejectReasonUnd"
        v-on:changeValue="
          educationalJoiningApplicationApprove.rejectReasonUnd = $event
        "
        :isDisabled="
          educationalJoiningApplicationApprove.approvalTypeToken !=
          APPROVAL_TYPE_TOKENS.Rejected
        "
        :title="$t('EducationalJoiningApplications.rejectReasonUnd')"
        :imgName="'reason.svg'"
      />
      <TextArea
        :className="'col-md-6'"
        id="approvalNote"
        :value="educationalJoiningApplicationApprove.approvalNote"
        v-on:changeValue="
          educationalJoiningApplicationApprove.approvalNote = $event
        "
        :isDisabled="
          educationalJoiningApplicationApprove.approvalTypeToken !=
          APPROVAL_TYPE_TOKENS.Rejected
        "
        :title="$t('notes')"
        :imgName="'notes.svg'"
      />
    </div>

    <div class="form-actions">
      <div class="icon-submit" @click.prevent="changeApprove()">
        <img src="@/assets/images/check-icon.svg" :title="$t('yes')" />
      </div>
      <div
        @click.prevent="
          closeBottomSheet('EducationalJoiningApplicationChangeApprove')
        "
        class="icon-cancel"
      >
        <img src="@/assets/images/cancel-icon.svg" :title="$t('cancel')" />
      </div>
    </div>
  </CustomBottomSheet>
</template>

<script>
import CustomBottomSheet from "./../../../../components/general/CustomBottomSheet.vue";
import CustomCheckbox from "./../../../../components/general/CustomCheckbox.vue";
import TextArea from "./../../../../components/general/TextArea.vue";
import generalMixin from "./../../../../utils/generalMixin";
import icon from "@/assets/images/ApprovalTypes.svg";
import { STATUS } from "./../../../../utils/constants";
import { APPROVAL_TYPE_TOKENS } from "./../../../../utils/constantLists";
import { objectToFormData } from "./../../../../utils/functions";
// import { getDialogOfApprovalTypes } from "./../../../../utils/dialogsOfConstantsLists";
import EducationalJoiningApplicationApprove from "./../../../../models/educational/educationalJoiningApplications/EducationalJoiningApplicationApprove";
import apiEducationalJoiningApplication from "./../../../../api/educational/educationalJoiningApplications";

export default {
  mixins: [generalMixin],
  data() {
    return {
      isLoading: false,
      // approvalTypeTokensOptions: getDialogOfApprovalTypes(),
      educationalJoiningApplicationApprove:
        new EducationalJoiningApplicationApprove(),
      icon,
      APPROVAL_TYPE_TOKENS,
    };
  },
  components: {
    CustomBottomSheet,
    CustomCheckbox,
    TextArea,
  },
  props: ["educationalJoiningApplication"],
  methods: {
    async changeApprove() {
      this.$emit("isLoading", true);
      if (!this.educationalJoiningApplicationApprove.approvalTypeToken) {
        this.showMsg(
          this.$t("EducationalJoiningApplications.pleaseSelectAproveOrReject")
        );
      } else {
        try {
          this.educationalJoiningApplicationApprove.token =
            this.educationalJoiningApplication.educationalJoiningApplicationToken;
          let formData = objectToFormData(
            this.educationalJoiningApplicationApprove
          );

          const response = await apiEducationalJoiningApplication.changeApprove(
            formData
          );
          if (response.data.status == STATUS.SUCCESS) {
            this.showMsg(response.data.msg, true);
            this.closeBottomSheet("EducationalJoiningApplicationChangeApprove");
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
      }
      this.$emit("isLoading", false);
    },
  },
};
</script>

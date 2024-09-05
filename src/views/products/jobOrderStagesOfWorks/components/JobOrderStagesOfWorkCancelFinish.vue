<template>
  <b-modal
    id="JobOrderStagesOfWorkCancelFinish"
    scrollable
    centered
    hide-footer
  >
    <PreLoader v-if="isLoading" />

    <template #modal-title>
      <h3>
        <img src="@/assets/images/alert.svg" class="icon-lg" />
        {{ $t("alert") }}
      </h3>
    </template>
    <h4 class="text-center">
      {{ $t("areYouSureToCancelStart") }}
      <span class="co-red">{{
        jobOrderStagesOfWork.jobOrderStageSavedData.jobOrderStageNameCurrent
      }}</span>
      {{ $t("areYouSureToCancelEnd") }}
    </h4>
    <div class="modal-footer">
      <button
        name="submit"
        type="submit"
        class="btn btn-submit"
        @click.prevent="cancelFinishJobOrderStagesOfWork"
      >
        {{ $t("yes") }}
      </button>
      <button
        name="submit"
        type="submit"
        class="btn btn-cancel"
        @click.prevent="$bvModal.hide('JobOrderStagesOfWorkCancelFinish')"
      >
        {{ $t("no") }}
      </button>
    </div>
  </b-modal>
</template>

<script>
import PreLoader from "./../../../../components/general/PreLoader.vue";
import { STATUS } from "./../../../../utils/constants";
import { objectToFormData } from "./../../../../utils/functions";
import apiJobOrderStagesOfWork from "./../../../../api/products/jobOrderStagesOfWorks";
import generalMixin from "./../../../../utils/generalMixin";

export default {
  mixins: [generalMixin],
  components: {
    PreLoader,
  },
  data() {
    return {};
  },
  props: ["jobOrderStagesOfWork"],
  methods: {
    async cancelFinishJobOrderStagesOfWork() {
      this.isLoading = true;
      try {
        let formData = objectToFormData({
          priceQuotationJobOrderStagesOfWorkToken:
            this.jobOrderStagesOfWork.priceQuotationJobOrderStagesOfWorkToken,
        });
        const response = await apiJobOrderStagesOfWork.cancle(formData);
        if (response.data.status == STATUS.SUCCESS) {
          this.showMsg(response.data.msg, true);
          this.$bvModal.hide("JobOrderStagesOfWorkCancelFinish");
          this.$emit(
            "getDetails",
            this.jobOrderStagesOfWork.priceQuotationJobOrderToken
          );
        } else if (response.data.status == STATUS.INVALID_TOKEN) {
          this.showMsg(response.data.msg);
          this.$store.dispatch("logoutUser", response.data.msg);
        } else {
          this.showMsg(response.data.msg);
        }
      } catch (e) {
        this.showMsg(this.$t("errorCatch"));
      }
      this.isLoading = false;
    },
  },
};
</script>

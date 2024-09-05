<template>
  <div class="">
    <form autocomplete="off">
      <div v-if="id == 'finish'" class="row">
        <CustomFileInput
          :className="'col-12'"
          @changeValue="jobOrderStagesOfWork.mediaFile = $event.file"
        />
      </div>

      <div class="my-card">
        <div v-if="id == 'add'" class="row">
          <CustomSelectBox
            :className="'col-md-12'"
            :id="'jobOrderStages'"
            :value="''"
            :options="jobOrderStageOptions"
            v-on:changeValue="optionsListHandeler($event)"
            :title="$t('JobOrderStages.select')"
            :imgName="'jobOrderStages.svg'"
          />
          <CustomSortable
            v-if="sortList.length"
            :className="'col-md-12'"
            :list="sortList"
          />
        </div>
        <!-- <div v-if="id == 'finish'" class="row">
          <TextArea
            :className="'col-md-6'"
            :id="`${id}-finishDescriptionAr`"
            :errors="errors_finishDescriptionAr"
            :value="jobOrderStagesOfWork.finishDescriptionAr"
            v-on:changeValue="
              jobOrderStagesOfWork.finishDescriptionAr = $event;
              $v.jobOrderStagesOfWork.finishDescriptionAr.$touch();
            "
            :title="$t('descriptionAr')"
            :imgName="'description.svg'"
          />
          <TextArea
            :className="'col-md-6'"
            :id="`${id}-finishDescriptionEn`"
            :errors="errors_finishDescriptionEn"
            :value="jobOrderStagesOfWork.finishDescriptionEn"
            v-on:changeValue="
              jobOrderStagesOfWork.finishDescriptionEn = $event;
              $v.jobOrderStagesOfWork.finishDescriptionEn.$touch();
            "
            :title="$t('descriptionEn')"
            :imgName="'description.svg'"
          />
          <TextArea
            :className="'col-md-6'"
            :id="`${id}-finishDescriptionUnd`"
            :value="jobOrderStagesOfWork.finishDescriptionUnd"
            v-on:changeValue="
              jobOrderStagesOfWork.finishDescriptionUnd = $event
            "
            :title="$t('descriptionUnd')"
            :imgName="'description.svg'"
          />
        </div> -->
      </div>

      <div class="form-actions">
        <div class="icon-submit" @click.prevent="submitForm">
          <img src="@/assets/images/check-icon.svg" :title="submitName" />
        </div>
        <div
          @click.prevent
          class="icon-cancel"
          v-b-modal="`ConfirmCloseSheet-${bottomSheetName}`"
        >
          <img src="@/assets/images/cancel-icon.svg" :title="$t('cancel')" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {
  checkPrivilege,
  fullPathFileFromServer,
  bottomSheetScrollToTop,
} from "./../../../../utils/functions";
import {
  isValidTextAr,
  isValidTextEn,
} from "./../../../../utils/validationHelper";
import CustomFileInput from "./../../../../components/general/CustomFileInput.vue";
import CustomSelectBox from "./../../../../components/general/CustomSelectBox.vue";
import CustomSortable from "./../../../../components/general/CustomSortable.vue";
// import TextArea from "./../../../../components/general/TextArea.vue";
import generalMixin from "./../../../../utils/generalMixin";
import { validationMixin } from "vuelidate";
// import { required } from "vuelidate/lib/validators";
import { getJobOrderStagesDialog } from "./../../../../utils/dialogsOfApi";

export default {
  mixins: [generalMixin, validationMixin],
  components: {
    CustomFileInput,
    CustomSelectBox,
    CustomSortable,
    // TextArea,
  },
  data() {
    return {
      jobOrderStageOptions: [],
      sortList: [],
    };
  },
  props: {
    jobOrderStagesOfWork: {
      type: Object,
    },
    submitName: {
      type: String,
    },
    id: {
      type: String,
      default: "id",
    },
    deleteFileStatus: {
      type: Boolean,
      default: false,
    },
    bottomSheetName: {
      type: String,
      default: "",
    },
  },
  validations: {
    jobOrderStagesOfWork: {
      finishDescriptionAr: { isValidTextAr },
      finishDescriptionEn: { isValidTextEn },
    },
  },
  computed: {
    errors_finishDescriptionAr() {
      let errors = [];
      if (this.$v.jobOrderStagesOfWork.finishDescriptionAr.$error) {
        if (!this.$v.jobOrderStagesOfWork.finishDescriptionAr.isValidTextAr)
          errors.push(this.$t("validation.fieldIsRequiredInAr"));
      }
      return errors;
    },
    errors_finishDescriptionEn() {
      let errors = [];
      if (this.$v.jobOrderStagesOfWork.finishDescriptionEn.$error) {
        if (!this.$v.jobOrderStagesOfWork.finishDescriptionEn.isValidTextEn)
          errors.push(this.$t("validation.fieldIsRequiredInEn"));
      }
      return errors;
    },
  },
  methods: {
    async getJobOrderStagesDialog() {
      this.isLoading = true;
      this.jobOrderStageOptions = await getJobOrderStagesDialog();
      this.isLoading = false;
    },
    getJobOrderStageByToken(token) {
      return this.jobOrderStageOptions.find(
        (element) => element.value == token
      );
    },
    optionsListHandeler(token) {
      let item = "";
      if (token) {
        item = this.getJobOrderStageByToken(token);
      }
      if (item) {
        this.sortList.push(item);
      }
    },
    async submitForm() {
      bottomSheetScrollToTop();
      this.$v.$touch();
      let check = true;
      if (this.id == "finish") {
        check =
          this.$v.jobOrderStagesOfWork.finishDescriptionAr.isValidTextAr &&
          this.$v.jobOrderStagesOfWork.finishDescriptionEn.isValidTextEn;
      }
      if (check) {
        if (this.id == "add") {
          if (this.sortList.length) {
            let jobOrderStageTokenList = this.sortList.map((x) => x.value);
            this.jobOrderStagesOfWork.jobOrderStageTokenList =
              jobOrderStageTokenList;
          }
        }
        this.$emit("submitForm");
      }
    },

    checkPrivilege,
    fullPathFileFromServer,
  },
  async created() {
    if (this.id == "add") {
      this.getJobOrderStagesDialog();
    }
  },

  watch: {},
};
</script>

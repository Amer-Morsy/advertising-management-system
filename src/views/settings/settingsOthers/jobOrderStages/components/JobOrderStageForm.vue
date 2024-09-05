<template>
  <div class="">
    <form autocomplete="off">
      <div class="row">
        <CustomFileInput
          :className="'col-12'"
          @changeValue="jobOrderStage.mediaFile = $event.file"
          :defaultImg="
            fullPathFileFromServer(
              jobOrderStage.jobOrderStageImagePath,
              jobOrderStage.defaultImg
            )
          "
          :deleteFileStatus="
            deleteFileStatus &&
            !jobOrderStage.jobOrderStageImageIsDefault &&
            checkPrivilege(hasJobOrderStageDeleteImage())
          "
          v-on:deleteFile="$emit('deleteFile')"
        />
      </div>

      <div class="my-card">
        <div class="row">
          <CustomInput
            :className="'col-md-6'"
            :id="`${id}-fullCode`"
            :value="jobOrderStage.fullCode"
            v-on:changeValue="jobOrderStage.fullCode = $event"
            :title="$t('JobOrderStages.code')"
            :imgName="'code.svg'"
          />
          <CustomInput
            :className="'col-md-6'"
            :id="`${id}-jobOrderStageNameAr`"
            :errors="errors_jobOrderStageNameAr"
            :value="jobOrderStage.jobOrderStageNameAr"
            v-on:changeValue="
              jobOrderStage.jobOrderStageNameAr = $event;
              $v.jobOrderStage.jobOrderStageNameAr.$touch();
            "
            :title="$t('JobOrderStages.nameAr')"
            :imgName="'jobOrderStages.svg'"
          />
          <CustomInput
            :className="'col-md-6'"
            :id="`${id}-jobOrderStageNameEn`"
            :errors="errors_jobOrderStageNameEn"
            :value="jobOrderStage.jobOrderStageNameEn"
            v-on:changeValue="
              jobOrderStage.jobOrderStageNameEn = $event;
              $v.jobOrderStage.jobOrderStageNameEn.$touch();
            "
            :title="$t('JobOrderStages.nameEn')"
            :imgName="'jobOrderStages.svg'"
          />
          <!-- <CustomInput
            :className="'col-md-6'"
            :id="`${id}-jobOrderStageNameUnd`"
            :value="jobOrderStage.jobOrderStageNameUnd"
            v-on:changeValue="jobOrderStage.jobOrderStageNameUnd = $event"
            :title="$t('JobOrderStages.nameUnd')"
            :imgName="'jobOrderStages.svg'"
          />

          <TextArea
            :className="'col-md-6'"
            :id="`${id}-jobOrderStageDescriptionAr`"
            :errors="errors_jobOrderStageDescriptionAr"
            :value="jobOrderStage.jobOrderStageDescriptionAr"
            v-on:changeValue="
              jobOrderStage.jobOrderStageDescriptionAr = $event;
              $v.jobOrderStage.jobOrderStageDescriptionAr.$touch();
            "
            :title="$t('JobOrderStages.descriptionAr')"
            :imgName="'description.svg'"
          />
          <TextArea
            :className="'col-md-6'"
            :id="`${id}-jobOrderStageDescriptionEn`"
            :errors="errors_jobOrderStageDescriptionEn"
            :value="jobOrderStage.jobOrderStageDescriptionEn"
            v-on:changeValue="
              jobOrderStage.jobOrderStageDescriptionEn = $event;
              $v.jobOrderStage.jobOrderStageDescriptionEn.$touch();
            "
            :title="$t('JobOrderStages.descriptionEn')"
            :imgName="'description.svg'"
          />
          <TextArea
            :className="'col-md-6'"
            :id="`${id}-jobOrderStageDescriptionUnd`"
            :value="jobOrderStage.jobOrderStageDescriptionUnd"
            v-on:changeValue="
              jobOrderStage.jobOrderStageDescriptionUnd = $event
            "
            :title="$t('JobOrderStages.descriptionUnd')"
            :imgName="'description.svg'"
          /> -->
          <TextArea
            :className="'col-md-6'"
            :id="`${id}-jobOrderStageNotes`"
            :value="jobOrderStage.jobOrderStageNotes"
            v-on:changeValue="jobOrderStage.jobOrderStageNotes = $event"
            :title="$t('notes')"
            :imgName="'notes.svg'"
          />
          <CustomCheckbox
            :className="'col-md-6'"
            :value="jobOrderStage.mustAttachFile"
            v-on:changeValue="jobOrderStage.mustAttachFile = $event"
            :title="$t('JobOrderStages.mustAttachFile')"
          />
          <CustomCheckbox
            :className="'col-md-6'"
            :value="jobOrderStage.mustWriteDescription"
            v-on:changeValue="jobOrderStage.mustWriteDescription = $event"
            :title="$t('JobOrderStages.mustWriteDescription')"
          />
        </div>
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
  fullPathFileFromServer,
  bottomSheetScrollToTop,
} from "./../../../../../utils/functions";
import {
  isValidNameAr,
  isValidNameEn,
  isValidTextAr,
  isValidTextEn,
} from "./../../../../../utils/validationHelper";
import CustomFileInput from "./../../../../../components/general/CustomFileInput.vue";
import CustomCheckbox from "./../../../../../components/general/CustomCheckbox.vue";
import CustomInput from "./../../../../../components/general/CustomInput.vue";
import TextArea from "./../../../../../components/general/TextArea.vue";
import { hasJobOrderStageDeleteImage } from "./../../../../../utils/privilegeHelper";
import { checkPrivilege } from "./../../../../../utils/functions";
import generalMixin from "./../../../../../utils/generalMixin";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [generalMixin, validationMixin],
  components: {
    CustomFileInput,
    CustomCheckbox,
    CustomInput,
    TextArea,
  },
  // data() {
  //   return {};
  // },
  props: {
    jobOrderStage: {
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
    jobOrderStage: {
      jobOrderStageNameAr: { required, isValidNameAr },
      jobOrderStageNameEn: { required, isValidNameEn },
      jobOrderStageDescriptionAr: { isValidTextAr },
      jobOrderStageDescriptionEn: { isValidTextEn },
    },
  },
  computed: {
    errors_jobOrderStageNameAr() {
      let errors = [];
      if (this.$v.jobOrderStage.jobOrderStageNameAr.$error) {
        if (
          !this.$v.jobOrderStage.jobOrderStageNameAr.required &&
          !this.$v.jobOrderStage.jobOrderStageNameEn.required
        )
          errors.push(this.$t("validation.fieldIsRequired"));
        else if (
          this.$v.jobOrderStage.jobOrderStageNameAr.required &&
          !this.$v.jobOrderStage.jobOrderStageNameAr.isValidNameAr
        )
          errors.push(this.$t("validation.nameIsRequiredInAr"));
      }
      return errors;
    },
    errors_jobOrderStageNameEn() {
      let errors = [];
      if (this.$v.jobOrderStage.jobOrderStageNameEn.$error) {
        if (
          !this.$v.jobOrderStage.jobOrderStageNameAr.required &&
          !this.$v.jobOrderStage.jobOrderStageNameEn.required
        )
          errors.push(this.$t("validation.fieldIsRequired"));
        else if (
          this.$v.jobOrderStage.jobOrderStageNameEn.required &&
          !this.$v.jobOrderStage.jobOrderStageNameEn.isValidNameEn
        )
          errors.push(this.$t("validation.nameIsRequiredInEn"));
      }
      return errors;
    },
    errors_jobOrderStageDescriptionAr() {
      let errors = [];
      if (this.$v.jobOrderStage.jobOrderStageDescriptionAr.$error) {
        if (!this.$v.jobOrderStage.jobOrderStageDescriptionAr.isValidTextAr)
          errors.push(this.$t("validation.fieldIsRequiredInAr"));
      }
      return errors;
    },
    errors_jobOrderStageDescriptionEn() {
      let errors = [];
      if (this.$v.jobOrderStage.jobOrderStageDescriptionEn.$error) {
        if (!this.$v.jobOrderStage.jobOrderStageDescriptionEn.isValidTextEn)
          errors.push(this.$t("validation.fieldIsRequiredInEn"));
      }
      return errors;
    },
  },
  methods: {
    async submitForm() {
      bottomSheetScrollToTop();
      this.$v.$touch();
      if (
        ((this.$v.jobOrderStage.jobOrderStageNameAr.required &&
          this.$v.jobOrderStage.jobOrderStageNameAr.isValidNameAr) ||
          (this.$v.jobOrderStage.jobOrderStageNameEn.required &&
            this.$v.jobOrderStage.jobOrderStageNameEn.isValidNameEn)) &&
        this.$v.jobOrderStage.jobOrderStageDescriptionAr.isValidTextAr &&
        this.$v.jobOrderStage.jobOrderStageDescriptionEn.isValidTextEn
      ) {
        this.$emit("submitForm");
      }
    },
    checkPrivilege,
    hasJobOrderStageDeleteImage,
    fullPathFileFromServer,
  },
};
</script>

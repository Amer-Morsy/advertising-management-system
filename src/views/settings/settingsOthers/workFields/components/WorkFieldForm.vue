<template>
  <div class="">
    <form autocomplete="off">
      <div class="row">
        <CustomFileInput
          :className="'col-12'"
          @changeValue="workField.mediaFile = $event.file"
          :defaultImg="
            fullPathFileFromServer(
              workField.workFieldImagePath,
              workField.defaultImg
            )
          "
          :deleteFileStatus="
            deleteFileStatus &&
            !workField.workFieldImageIsDefault &&
            checkPrivilege(hasWorkFieldDeleteImage())
          "
          v-on:deleteFile="$emit('deleteFile')"
        />
      </div>

      <div class="my-card">
        <div class="row">
          <CustomRadioButton
            :className="'col-md-12'"
            :id="`${id}-placeTypeToken`"
            :value="workField.placeTypeToken"
            :options="placeTypeTokenOptions"
            v-on:changeValue="workField.placeTypeToken = $event"
            :title="$t('Places.type')"
            :imgName="'type.svg'"
          />
          <!-- <CustomSelectBox
            :className="'col-md-12'"
            :id="`${id}-placeTypeToken`"
            :value="workField.placeTypeToken"
            :options="placeTypeTokenOptions"
            v-on:changeValue="workField.placeTypeToken = $event"
            :title="$t('Places.type')"
            :imgName="'type.svg'"
          /> -->
          <CustomInput
            :className="'col-md-6'"
            :id="`${id}-fullCode`"
            :value="workField.fullCode"
            v-on:changeValue="workField.fullCode = $event"
            :title="$t('WorkFields.code')"
            :imgName="'code.svg'"
          />
          <CustomInput
            :className="'col-md-6'"
            :id="`${id}-workFieldNameAr`"
            :errors="errors_workFieldNameAr"
            :value="workField.workFieldNameAr"
            v-on:changeValue="
              workField.workFieldNameAr = $event;
              $v.workField.workFieldNameAr.$touch();
            "
            :title="$t('WorkFields.nameAr')"
            :imgName="'workFields.svg'"
          />
          <CustomInput
            :className="'col-md-6'"
            :id="`${id}-workFieldNameEn`"
            :errors="errors_workFieldNameEn"
            :value="workField.workFieldNameEn"
            v-on:changeValue="
              workField.workFieldNameEn = $event;
              $v.workField.workFieldNameEn.$touch();
            "
            :title="$t('WorkFields.nameEn')"
            :imgName="'workFields.svg'"
          />
          <!-- <CustomInput
            :className="'col-md-6'"
            :id="`${id}-workFieldNameUnd`"
            :value="workField.workFieldNameUnd"
            v-on:changeValue="workField.workFieldNameUnd = $event"
            :title="$t('WorkFields.nameUnd')"
            :imgName="'workFields.svg'"
          />

          <TextArea
            :className="'col-md-6'"
            :id="`${id}-workFieldDescriptionAr`"
            :errors="errors_workFieldDescriptionAr"
            :value="workField.workFieldDescriptionAr"
            v-on:changeValue="
              workField.workFieldDescriptionAr = $event;
              $v.workField.workFieldDescriptionAr.$touch();
            "
            :title="$t('WorkFields.descriptionAr')"
            :imgName="'description.svg'"
          />
          <TextArea
            :className="'col-md-6'"
            :id="`${id}-workFieldDescriptionEn`"
            :errors="errors_workFieldDescriptionEn"
            :value="workField.workFieldDescriptionEn"
            v-on:changeValue="
              workField.workFieldDescriptionEn = $event;
              $v.workField.workFieldDescriptionEn.$touch();
            "
            :title="$t('WorkFields.descriptionEn')"
            :imgName="'description.svg'"
          />
          <TextArea
            :className="'col-md-6'"
            :id="`${id}-workFieldDescriptionUnd`"
            :value="workField.workFieldDescriptionUnd"
            v-on:changeValue="workField.workFieldDescriptionUnd = $event"
            :title="$t('WorkFields.descriptionUnd')"
            :imgName="'description.svg'"
          /> -->
          <TextArea
            :className="'col-md-6'"
            :id="`${id}-workFieldNotes`"
            :value="workField.workFieldNotes"
            v-on:changeValue="workField.workFieldNotes = $event"
            :title="$t('notes')"
            :imgName="'notes.svg'"
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
import CustomRadioButton from "./../../../../../components/general/CustomRadioButton.vue";
import CustomInput from "./../../../../../components/general/CustomInput.vue";
import TextArea from "./../../../../../components/general/TextArea.vue";
import { hasWorkFieldDeleteImage } from "./../../../../../utils/privilegeHelper";
import { checkPrivilege } from "./../../../../../utils/functions";
import generalMixin from "./../../../../../utils/generalMixin";
import { getDialogOfPlaceType } from "./../../../../../utils/dialogsOfConstantsLists";
import { PLACE_TYPE_TOKENS } from "./../../../../../utils/constantLists";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [generalMixin, validationMixin],
  components: {
    CustomFileInput,
    CustomRadioButton,
    CustomInput,
    TextArea,
  },
  data() {
    return {
      placeTypeTokenOptions:
        getDialogOfPlaceType().filter(
          (i) =>
            i.value == PLACE_TYPE_TOKENS.Supplier ||
            i.value == PLACE_TYPE_TOKENS.Client
        ) || [],
    };
  },
  props: {
    workField: {
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
    workField: {
      workFieldNameAr: { required, isValidNameAr },
      workFieldNameEn: { required, isValidNameEn },
      workFieldDescriptionAr: { isValidTextAr },
      workFieldDescriptionEn: { isValidTextEn },
    },
  },
  computed: {
    errors_workFieldNameAr() {
      let errors = [];
      if (this.$v.workField.workFieldNameAr.$error) {
        if (
          !this.$v.workField.workFieldNameAr.required &&
          !this.$v.workField.workFieldNameEn.required
        )
          errors.push(this.$t("validation.fieldIsRequired"));
        else if (
          this.$v.workField.workFieldNameAr.required &&
          !this.$v.workField.workFieldNameAr.isValidNameAr
        )
          errors.push(this.$t("validation.nameIsRequiredInAr"));
      }
      return errors;
    },
    errors_workFieldNameEn() {
      let errors = [];
      if (this.$v.workField.workFieldNameEn.$error) {
        if (
          !this.$v.workField.workFieldNameAr.required &&
          !this.$v.workField.workFieldNameEn.required
        )
          errors.push(this.$t("validation.fieldIsRequired"));
        else if (
          this.$v.workField.workFieldNameEn.required &&
          !this.$v.workField.workFieldNameEn.isValidNameEn
        )
          errors.push(this.$t("validation.nameIsRequiredInEn"));
      }
      return errors;
    },
    errors_workFieldDescriptionAr() {
      let errors = [];
      if (this.$v.workField.workFieldDescriptionAr.$error) {
        if (!this.$v.workField.workFieldDescriptionAr.isValidTextAr)
          errors.push(this.$t("validation.fieldIsRequiredInAr"));
      }
      return errors;
    },
    errors_workFieldDescriptionEn() {
      let errors = [];
      if (this.$v.workField.workFieldDescriptionEn.$error) {
        if (!this.$v.workField.workFieldDescriptionEn.isValidTextEn)
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
        ((this.$v.workField.workFieldNameAr.required &&
          this.$v.workField.workFieldNameAr.isValidNameAr) ||
          (this.$v.workField.workFieldNameEn.required &&
            this.$v.workField.workFieldNameEn.isValidNameEn)) &&
        this.$v.workField.workFieldDescriptionAr.isValidTextAr &&
        this.$v.workField.workFieldDescriptionEn.isValidTextEn
      ) {
        this.$emit("submitForm");
      }
    },
    checkPrivilege,
    hasWorkFieldDeleteImage,
    fullPathFileFromServer,
  },
};
</script>

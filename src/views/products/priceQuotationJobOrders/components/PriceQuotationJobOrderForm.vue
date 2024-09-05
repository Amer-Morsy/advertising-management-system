<template>
  <div class="">
    <form autocomplete="off">
      <div class="row">
        <CustomFileInput
          :className="'col-12'"
          @changeValue="priceQuotationJobOrder.mediaFile = $event.file"
          :defaultImg="
            fullPathFileFromServer(
              priceQuotationJobOrder.priceQuotationJobOrderImagePath,
              priceQuotationJobOrder.defaultImg
            )
          "
          :deleteFileStatus="
            deleteFileStatus &&
            !priceQuotationJobOrder.priceQuotationJobOrderImageIsDefault &&
            checkPrivilege(hasPriceQuotationJobOrderDeleteImage())
          "
          v-on:deleteFile="$emit('deleteFile')"
        />
      </div>

      <div class="my-card">
        <div class="row">
          <CustomInput
            :className="'col-md-12'"
            :id="`${id}-fullCode`"
            :value="priceQuotationJobOrder.fullCode"
            v-on:changeValue="priceQuotationJobOrder.fullCode = $event"
            :title="$t('PriceQuotationJobOrders.code')"
            :imgName="'code.svg'"
          />

          <!-- <TextArea
            :className="'col-md-6'"
            :id="`${id}-priceQuotationJobOrderDescriptionAr`"
            :errors="errors_priceQuotationJobOrderDescriptionAr"
            :value="priceQuotationJobOrder.priceQuotationJobOrderDescriptionAr"
            v-on:changeValue="
              priceQuotationJobOrder.priceQuotationJobOrderDescriptionAr =
                $event;
              $v.priceQuotationJobOrder.priceQuotationJobOrderDescriptionAr.$touch();
            "
            :title="$t('PriceQuotationJobOrders.descriptionAr')"
            :imgName="'description.svg'"
          />
          <TextArea
            :className="'col-md-6'"
            :id="`${id}-priceQuotationJobOrderDescriptionEn`"
            :errors="errors_priceQuotationJobOrderDescriptionEn"
            :value="priceQuotationJobOrder.priceQuotationJobOrderDescriptionEn"
            v-on:changeValue="
              priceQuotationJobOrder.priceQuotationJobOrderDescriptionEn =
                $event;
              $v.priceQuotationJobOrder.priceQuotationJobOrderDescriptionEn.$touch();
            "
            :title="$t('PriceQuotationJobOrders.descriptionEn')"
            :imgName="'description.svg'"
          />
          <TextArea
            :className="'col-md-6'"
            :id="`${id}-priceQuotationJobOrderDescriptionUnd`"
            :value="priceQuotationJobOrder.priceQuotationJobOrderDescriptionUnd"
            v-on:changeValue="
              priceQuotationJobOrder.priceQuotationJobOrderDescriptionUnd =
                $event
            "
            :title="$t('PriceQuotationJobOrders.descriptionUnd')"
            :imgName="'description.svg'"
          /> -->
          <DateTimePicker
            class="col-md-6"
            :id="`${id}-startWorkDateTime`"
            type="dateTime"
            :value="priceQuotationJobOrder.startWorkDateTime"
            v-on:changeValue="
              priceQuotationJobOrder.startWorkDateTime = $event.dateTime
            "
            :title="$t('PriceQuotationJobOrders.startWorkDateTime')"
            :language="language"
          />
          <DateTimePicker
            class="col-md-6"
            :id="`${id}-expectedFinishWorkDateTime`"
            type="dateTime"
            :value="priceQuotationJobOrder.expectedFinishWorkDateTime"
            v-on:changeValue="
              priceQuotationJobOrder.expectedFinishWorkDateTime =
                $event.dateTime
            "
            :title="$t('PriceQuotationJobOrders.expectedFinishWorkDateTime')"
            :language="language"
          />
          <CustomSelectBox
            v-if="!isEditing"
            :className="'col-md-12'"
            :id="`${id}-priceQuotationToken`"
            :value="priceQuotationJobOrder.priceQuotationToken"
            :options="priceQuotationTokenOptions"
            v-on:changeValue="
              priceQuotationJobOrder.priceQuotationToken = $event
            "
            :title="$t('PriceQuotations.select')"
            :imgName="'PriceQuotations.svg'"
          />
          <DataLabelGroup
            v-else
            :className="'col-md-12'"
            :value="
              priceQuotationJobOrder.priceQuotationInfoData
                .priceQuotationNameCurrent
            "
            :title="$t('PriceQuotations.name')"
            :imgName="'PriceQuotations.svg'"
          />
          <CustomSelectBoxMultiple
            :className="'col-md-12'"
            :id="`userTokenList`"
            :value="priceQuotationJobOrder.userTokenList"
            :options="userTokenOptions"
            v-on:changeValue="priceQuotationJobOrder.userTokenList = $event"
            :title="$t('Users.select')"
            :imgName="'user.svg'"
            :returnArrayOfObjects="false"
          />
          <!-- JobOrderStages -->
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
  getLanguage,
  checkPrivilege,
  fullPathFileFromServer,
  bottomSheetScrollToTop,
} from "./../../../../utils/functions";
import {
  isValidTextAr,
  isValidTextEn,
} from "./../../../../utils/validationHelper";
import CustomFileInput from "./../../../../components/general/CustomFileInput.vue";
import CustomInput from "./../../../../components/general/CustomInput.vue";
import DateTimePicker from "./../../../../components/general/DateTimePicker.vue";
// import TextArea from "./../../../../components/general/TextArea.vue";
import CustomSelectBox from "./../../../../components/general/CustomSelectBox.vue";
import DataLabelGroup from "./../../../../components/general/DataLabelGroup.vue";
import CustomSortable from "./../../../../components/general/CustomSortable.vue";
import CustomSelectBoxMultiple from "./../../../../components/general/CustomSelectBoxMultiple.vue";
import { hasPriceQuotationJobOrderDeleteImage } from "./../../../../utils/privilegeHelper";
import {
  PRICE_QUOTATION_HISTORY_WORK_TYPES,
  USER_TYPE,
} from "./../../../../utils/constantLists";
import {
  getPriceQuotationsDialogCustomized,
  getUsersDialog,
  getJobOrderStagesDialog,
} from "./../../../../utils/dialogsOfApi";
import generalMixin from "./../../../../utils/generalMixin";
import { validationMixin } from "vuelidate";
// import { required } from "vuelidate/lib/validators";

export default {
  mixins: [generalMixin, validationMixin],
  components: {
    CustomFileInput,
    CustomInput,
    DateTimePicker,
    // TextArea,
    CustomSelectBox,
    DataLabelGroup,
    CustomSortable,
    CustomSelectBoxMultiple,
  },
  data() {
    return {
      priceQuotationTokenOptions: [],
      userTokenOptions: [],
      language: getLanguage(),
      jobOrderStageOptions: [],
      sortList: [],
      isEditing: false,
    };
  },
  props: {
    priceQuotationJobOrder: {
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
    updateSheetOpened: {
      type: Boolean,
      default: false,
    },
    bottomSheetName: {
      type: String,
      default: "",
    },
  },
  validations: {
    priceQuotationJobOrder: {
      priceQuotationJobOrderDescriptionAr: { isValidTextAr },
      priceQuotationJobOrderDescriptionEn: { isValidTextEn },
    },
  },
  computed: {
    errors_priceQuotationJobOrderDescriptionAr() {
      let errors = [];
      if (
        this.$v.priceQuotationJobOrder.priceQuotationJobOrderDescriptionAr
          .$error
      ) {
        if (
          !this.$v.priceQuotationJobOrder.priceQuotationJobOrderDescriptionAr
            .isValidTextAr
        )
          errors.push(this.$t("validation.fieldIsRequiredInAr"));
      }
      return errors;
    },
    errors_priceQuotationJobOrderDescriptionEn() {
      let errors = [];
      if (
        this.$v.priceQuotationJobOrder.priceQuotationJobOrderDescriptionEn
          .$error
      ) {
        if (
          !this.$v.priceQuotationJobOrder.priceQuotationJobOrderDescriptionEn
            .isValidTextEn
        )
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

    async getUsersDialog() {
      this.isLoading = true;
      let params = {
        modelName: "employees",
        userTypeToken: USER_TYPE.Employee,
      };
      this.userTokenOptions = await getUsersDialog(params);
      this.isLoading = false;
    },
    async getPriceQuotationsDialog() {
      this.isLoading = true;
      let params = {
        priceQuotationHistoryWorkTypeToken:
          PRICE_QUOTATION_HISTORY_WORK_TYPES.WaitingForCustomerAccept,
      };
      this.priceQuotationTokenOptions =
        await getPriceQuotationsDialogCustomized(params);
      this.isLoading = false;
    },
    async submitForm() {
      bottomSheetScrollToTop();
      this.$v.$touch();
      if (
        this.$v.priceQuotationJobOrder.priceQuotationJobOrderDescriptionAr
          .isValidTextAr &&
        this.$v.priceQuotationJobOrder.priceQuotationJobOrderDescriptionEn
          .isValidTextEn
      ) {
        if (this.sortList.length) {
          let jobOrderStageTokenList = this.sortList.map((x) => x.value);
          this.priceQuotationJobOrder.jobOrderStageTokenList =
            jobOrderStageTokenList;
        }
        this.$emit("submitForm");
      }
    },

    setSortListAtUpdate() {
      if (this.submitName == this.$t("edit")) {
        this.sortList = [];
        this.isEditing = true;
        if (this.priceQuotationJobOrder.jobOrderStageTokenList.length) {
          this.priceQuotationJobOrder.jobOrderStageTokenList.forEach(
            (token) => {
              let listItem = this.getJobOrderStageByToken(token);
              if (listItem) this.sortList.push(listItem);
            }
          );
        } else {
          this.priceQuotationJobOrder.priceQuotationJobOrderStagesOfWorkData.forEach(
            (item) => {
              let listItem = this.getJobOrderStageByToken(
                item.jobOrderStageSavedData.jobOrderStageToken
              );
              if (listItem) this.sortList.push(listItem);
            }
          );
        }
      }
    },
    checkPrivilege,
    hasPriceQuotationJobOrderDeleteImage,
    fullPathFileFromServer,
  },
  async created() {
    this.getUsersDialog();
    this.getJobOrderStagesDialog();
    this.getPriceQuotationsDialog();
    this.setSortListAtUpdate();
  },

  watch: {
    updateSheetOpened: function () {
      this.setSortListAtUpdate();
      // if (
      //   this.priceQuotationJobOrder.priceQuotationJobOrderStagesOfWorkData
      //     .length
      // ) {

      // }
    },
  },
};
</script>

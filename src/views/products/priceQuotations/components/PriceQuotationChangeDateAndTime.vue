<template>
  <div>
    <PreLoader v-if="isLoading" />

    <CustomBottomSheet
      refName="PriceQuotationChangeDateAndTime"
      size="xl"
      :headerText="$t('PriceQuotations.changeDateAndTime')"
      :headerIcon="icon"
    >
      <div class="row">
        <DateTimePicker
          class="col-md-12"
          :id="`filter-priceQuotationDateTime`"
          type="dateTime"
          :value="priceQuotation.priceQuotationDateTime"
          v-on:changeValue="
            priceQuotation.priceQuotationDateTime = $event.dateTime
          "
          :title="$t('actionsData.dateTime')"
          :language="language"
        />

        <div class="form-actions">
          <div class="icon-submit" @click.prevent="updateDateTime">
            <img
              src="@/assets/images/check-icon.svg"
              :title="$t('PriceQuotations.changeDateAndTime')"
            />
          </div>
          <div
            @click.prevent="closeBottomSheet('PriceQuotationChangeDateAndTime')"
            class="icon-cancel"
          >
            <img src="@/assets/images/cancel-icon.svg" :title="$t('cancel')" />
          </div>
        </div>
      </div>
    </CustomBottomSheet>
  </div>
</template>

<script>
import icon from "@/assets/images/dateAndTime.svg";
import PreLoader from "./../../../../components/general/PreLoader.vue";
import CustomBottomSheet from "./../../../../components/general/CustomBottomSheet.vue";
import DateTimePicker from "./../../../../components/general/DateTimePicker.vue";
import { STATUS } from "./../../../../utils/constants";
import { objectToFormData, getLanguage } from "./../../../../utils/functions";
import apiPriceQuotation from "./../../../../api/products/priceQuotations";
import generalMixin from "./../../../../utils/generalMixin";

export default {
  mixins: [generalMixin],
  components: {
    PreLoader,
    CustomBottomSheet,
    DateTimePicker,
  },
  props: ["priceQuotation"],
  data() {
    return {
      icon,
      language: getLanguage(),
    };
  },
  methods: {
    async updateDateTime() {
      this.isLoading = true;
      let params = {
        priceQuotationToken: this.priceQuotation.priceQuotationToken,
        priceQuotationDateTime: this.priceQuotation.priceQuotationDateTime,
      };
      let formData = objectToFormData(params);
      try {
        const response = await apiPriceQuotation.updateDateTime(formData);
        if (response.data.status == STATUS.SUCCESS) {
          this.showMsg(response.data.msg, true);
          this.closeBottomSheet("PriceQuotationChangeDateAndTime");
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
  },
};
</script>

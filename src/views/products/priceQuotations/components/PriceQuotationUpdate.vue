<template>
  <div>
    <PreLoader v-if="isLoading" />

    <CustomBottomSheet
      refName="PriceQuotationUpdate"
      size="xl"
      :headerText="$t('PriceQuotations.update')"
      :headerIcon="priceQuotation.icon"
      :clickToClose="false"
      :swipeAble="false"
      @opened="
        getDetails();
        isOpened = true;
      "
      @closed="isOpened = false"
    >
      <PriceQuotationForm
        v-if="!isLoading"
        id="update"
        :priceQuotation="priceQuotation"
        :isOpened="isOpened"
        v-on:submitForm="updatePriceQuotation()"
        bottomSheetName="PriceQuotationUpdate"
        :submitName="$t('update')"
      />
    </CustomBottomSheet>
  </div>
</template>

<script>
import PreLoader from "./../../../../components/general/PreLoader.vue";
import CustomBottomSheet from "./../../../../components/general/CustomBottomSheet.vue";
import PriceQuotationForm from "./PriceQuotationForm.vue";
import { STATUS } from "./../../../../utils/constants";
import { PLACE_TYPE_TOKENS } from "./../../../../utils/constantLists";
// import { objectToFormData } from "./../../../../utils/functions";
import apiPriceQuotation from "./../../../../api/products/priceQuotations";
import generalMixin from "./../../../../utils/generalMixin";
import { getUserAuthorizeToken } from "./../../../../utils/functions";
import PriceQuotationMixin from "./PriceQuotationMixin";

export default {
  mixins: [generalMixin, PriceQuotationMixin],
  components: {
    PreLoader,
    CustomBottomSheet,
    PriceQuotationForm,
  },
  // props: ["priceQuotation"],
  data() {
    return {
      isOpened: false,
      PLACE_TYPE_TOKENS,
      userAuthorizeToken: getUserAuthorizeToken(),
    };
  },
  methods: {
    async updatePriceQuotation() {
      this.isLoading = true;
      this.priceQuotation.priceQuotationDetails.map(
        (d) =>
          (d.storeItemPropertyTypesData = d.storeItemPropertyTypesData.filter(
            (s) => s.propertyDetailsData.length
          ))
      );
      let params = {
        userAuthorizeToken: this.userAuthorizeToken,
        priceQuotationToken: this.priceQuotation.priceQuotationToken,
        priceQuotationDetails: this.priceQuotation.priceQuotationDetails,
      };

      try {
        const response = await apiPriceQuotation.update(params);
        if (response.data.status == STATUS.SUCCESS) {
          this.showMsg(response.data.msg, true);
          this.closeBottomSheet("PriceQuotationUpdate");
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

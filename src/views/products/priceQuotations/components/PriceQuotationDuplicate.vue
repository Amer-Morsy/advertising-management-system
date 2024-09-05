<template>
  <div>
    <PreLoader v-if="isLoading" />

    <CustomBottomSheet
      refName="PriceQuotationDuplicate"
      size="xl"
      :headerText="$t('PriceQuotations.add')"
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
        id="duplicate"
        :priceQuotation="priceQuotation"
        :isOpened="isOpened"
        v-on:submitForm="addPriceQuotation()"
        bottomSheetName="PriceQuotationDuplicate"
        :submitName="$t('duplicate')"
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
    async addPriceQuotation() {
      this.isLoading = true;
      let objetAdd = {
        userAuthorizeToken: this.userAuthorizeToken,
        priceQuotationDescriptionAr:
          this.priceQuotation.priceQuotationDescriptionAr,
        priceQuotationDescriptionEn:
          this.priceQuotation.priceQuotationDescriptionEn,
        priceQuotationDescriptionUnd:
          this.priceQuotation.priceQuotationDescriptionUnd,
        priceQuotationDateTime: this.priceQuotation.priceQuotationDateTime,
        priceQuotationNotes: this.priceQuotation.priceQuotationNotes,
        requestPlaceToken: this.priceQuotation.requestPlaceToken,
        requestUserClientToken: this.priceQuotation.requestUserClientToken,
        reportTemplateToken: this.priceQuotation.reportTemplateToken,
        usersSalesTokenList: this.priceQuotation.usersSalesTokenList,
        priceQuotationDetails: this.priceQuotation.priceQuotationDetails.map(
          (item) => {
            let obj = {
              storeItemToken: item.storeItemToken,
              storeItemQuantity: item.storeItemQuantity,
              affiliateOperationTypeToken: item.affiliateOperationTypeToken,
              priceQuotationDetalisNotes: item.priceQuotationDetalisNotes,
              storeItemPropertyTypesData: item.storeItemPropertyTypesData,
            };
            return obj;
          }
        ),
      };
      try {
        const response = await apiPriceQuotation.add(objetAdd);
        if (response.data.status == STATUS.SUCCESS) {
          this.showMsg(response.data.msg, true);
          this.closeBottomSheet("PriceQuotationDuplicate");
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

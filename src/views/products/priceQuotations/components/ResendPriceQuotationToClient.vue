<template>
  <div>
    <PreLoader v-if="isLoading" />

    <CustomBottomSheet
      refName="ResendPriceQuotationToClient"
      size="xl"
      :headerText="$t('PriceQuotations.resendToClient')"
      :headerIcon="priceQuotationSendPrice.icon"
      :clickToClose="false"
      :swipeAble="false"
      @opened="getEmailTemplatesDialog()"
    >
      <form autocomplete="off">
        <div class="row">
          <CustomSelectBox
            :className="'col-md-12'"
            :id="`resendToClient-emailTemplateToken`"
            :emitObject="true"
            :value="priceQuotationSendPrice.emailTemplateToken"
            :options="emailTemplateTokenOptions"
            v-on:changeValue="
              priceQuotationSendPrice.emailTemplateToken = $event.value;
              priceQuotationSendPrice.emailHtmlBody = $event.body;
              priceQuotationSendPrice.emailHtmlSignature = $event.signature;
            "
            :title="$t('EmailTemplates.select')"
            :imgName="'email.svg'"
          />
        </div>

        <div class="form-actions">
          <div class="icon-submit" @click.prevent="resend">
            <img
              src="@/assets/images/check-icon.svg"
              :title="$t('PriceQuotations.resendToClient')"
            />
          </div>
          <div
            @click.prevent
            class="icon-cancel"
            v-b-modal="`ConfirmCloseSheet-ResendPriceQuotationToClient`"
          >
            <img src="@/assets/images/cancel-icon.svg" :title="$t('cancel')" />
          </div>
        </div>
      </form>
    </CustomBottomSheet>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PreLoader from "./../../../../components/general/PreLoader.vue";
import CustomSelectBox from "./../../../../components/general/CustomSelectBox.vue";
// import ExceptionWithImg from "./../../../../components/general/ExceptionWithImg.vue";
import CustomBottomSheet from "./../../../../components/general/CustomBottomSheet.vue";
import ResendPriceQuotationToClientModel from "./../../../../models/products/priceQuotations/ResendPriceQuotationToClientModel";
import apiPriceQuotation from "./../../../../api/products/priceQuotations";
import { STATUS } from "./../../../../utils/constants";
import generalMixin from "./../../../../utils/generalMixin";
import { getEmailTemplatesDialogCustomized } from "./../../../../utils/dialogsOfApi";

export default {
  mixins: [generalMixin],
  components: {
    PreLoader,
    CustomSelectBox,
    // ExceptionWithImg,
    CustomBottomSheet,
  },
  props: ["priceQuotation"],
  data() {
    return {
      priceQuotationSendPrice: new ResendPriceQuotationToClientModel(),
      emailTemplateTokenOptions: [],
    };
  },

  computed: {
    ...mapGetters(["userPersonalData"]),
  },
  methods: {
    async getEmailTemplatesDialog() {
      this.isLoading = true;
      let params = {
        userToken: this.userPersonalData.userToken,
      };
      const [options, error] = await getEmailTemplatesDialogCustomized(params);
      this.emailTemplateTokenOptions = options;
      this.exceptionMsg = error;
      this.isLoading = false;
    },
    async resend() {
      this.isLoading = true;
      this.priceQuotationSendPrice.fillData({
        priceQuotationHistoryDtoItemList: [
          { priceQuotationToken: this.priceQuotation.priceQuotationToken },
        ],
      });
      try {
        const response = await apiPriceQuotation.resend(
          this.priceQuotationSendPrice
        );
        if (response.data.status == STATUS.SUCCESS) {
          this.$emit("refresh");
          this.showMsg(response.data.msg, true);
          this.closeBottomSheet("ResendPriceQuotationToClient");
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

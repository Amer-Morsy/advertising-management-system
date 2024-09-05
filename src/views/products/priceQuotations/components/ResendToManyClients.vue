<template>
  <div>
    <PreLoader v-if="isLoading" />

    <CustomBottomSheet
      refName="ResendToManyClients"
      size="xl"
      :headerText="$t('PriceQuotations.resendToManyEmployeesClient')"
      :headerIcon="resendToManyClients.icon"
      :clickToClose="false"
      :swipeAble="false"
      @opened="getDialogs()"
    >
      <form autocomplete="off">
        <div class="row">
          <CustomSelectBox
            :className="'col-md-12'"
            :id="`ResendToManyClients-reportTemplateToken`"
            :value="resendToManyClients.reportTemplateToken"
            :options="reportTemplateTokenOptions"
            v-on:changeValue="resendToManyClients.reportTemplateToken = $event"
            :title="$t('ConstantsListSelect.ReportTemplates')"
            :imgName="'ReportTemplates.svg'"
          />

          <CustomSelectBox
            :className="'col-md-12'"
            :id="`ResendToManyClients-emailTemplateToken`"
            :emitObject="true"
            :value="resendToManyClients.emailTemplateToken"
            :options="emailTemplateTokenOptions"
            v-on:changeValue="
              resendToManyClients.emailTemplateToken = $event.value;
              resendToManyClients.emailHtmlBody = $event.body;
              resendToManyClients.emailHtmlSignature = $event.signature;
            "
            :title="$t('EmailTemplates.select')"
            :imgName="'email.svg'"
          />
          <CustomSelectBox
            :className="'col-md-12'"
            :id="`ResendToManyClients-policiesAndTermToken`"
            :emitObject="true"
            :value="resendToManyClients.policiesAndTermToken"
            :options="policiesAndTermsTokenOptions"
            v-on:changeValue="
              resendToManyClients.policiesAndTermToken = $event.value;
              resendToManyClients.policiesAndTermDescription = $event.body;
            "
            :title="$t('PoliciesAndTerms.select')"
            :imgName="'type.svg'"
          />
          <TextArea
            :className="'col-md-12'"
            :id="`ResendToManyClients-policiesAndTermDescription`"
            :value="resendToManyClients.policiesAndTermDescription"
            v-on:changeValue="
              resendToManyClients.policiesAndTermDescription = $event
            "
            :title="$t('PoliciesAndTerms.text')"
          />

          <DataLabelGroup
            :className="'col-md-12'"
            :value="priceQuotation.requestPlaceInfoData.placeNameCurrent"
            :title="$t('clients.name')"
            :imgName="'clients.svg'"
          />
          <template>
            <div v-if="userEmployeeTokenOptions.length" class="table-container">
              <table class="my-table">
                <thead>
                  <tr>
                    <th rowspan="2">#</th>
                    <th rowspan="2">
                      <input
                        v-if="userEmployeeTokenOptions.length > 0"
                        type="checkbox"
                        id="place-selectAll"
                        @click="selectAll()"
                        v-model="selectedAll"
                        class="checkbox"
                      />
                      {{ $t("general.all") }}
                    </th>
                    <th colspan="4">{{ $t("Users.data") }}</th>
                  </tr>
                  <tr>
                    <th>{{ $t("general.code") }}</th>
                    <th>{{ $t("general.name") }}</th>
                    <th colspan="2">{{ $t("email") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in userEmployeeTokenOptions"
                    :key="index"
                  >
                    <td>{{ ++index }}</td>
                    <td>
                      <input
                        type="checkbox"
                        v-model="resendToManyClients.emails"
                        :value="item.email"
                        @click="select(item.email)"
                        class="checkbox"
                      />
                    </td>
                    <td>{{ isDataExist(item.fullCode) }}</td>
                    <td>{{ isDataExist(item.userNameCurrent) }}</td>
                    <td>{{ isDataExist(item.email) }}</td>
                    <td>
                      <CustomInput
                        :id="`table-[${index}][email]`"
                        :value="item.email"
                        v-on:changeValue="item.email = $event"
                        :withOutDesign="true"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 v-else class="co-red">{{ exceptionMsg }}</h2>
          </template>
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
            v-b-modal="`ConfirmCloseSheet-ResendToManyClients`"
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
import TextArea from "./../../../../components/general/TextArea.vue";
import DataLabelGroup from "./../../../../components/general/DataLabelGroup.vue";
import CustomInput from "./../../../../components/general/CustomInput.vue";
// import ExceptionWithImg from "./../../../../components/general/ExceptionWithImg.vue";
import CustomBottomSheet from "./../../../../components/general/CustomBottomSheet.vue";
import ResendToManyClientsModel from "./../../../../models/products/priceQuotations/ResendToManyClientsModel";
import apiPriceQuotation from "./../../../../api/products/priceQuotations";
import { STATUS } from "./../../../../utils/constants";
import generalMixin from "./../../../../utils/generalMixin";
import {
  getEmailTemplatesDialogCustomized,
  getPoliciesAndTermsDialog,
  getUsersDialogCustomized,
  getReportTemplatesDialog,
} from "./../../../../utils/dialogsOfApi";
import {
  USER_TYPE,
  REPORT_TEMPLATE_TYPES,
} from "./../../../../utils/constantLists";
import { isDataExist } from "./../../../../utils/functions";
import apiPlace from "./../../../../api/place";

export default {
  mixins: [generalMixin],
  components: {
    PreLoader,
    CustomSelectBox,
    TextArea,
    DataLabelGroup,
    CustomInput,
    // ExceptionWithImg,
    CustomBottomSheet,
  },
  props: ["priceQuotation"],
  data() {
    return {
      resendToManyClients: new ResendToManyClientsModel(),
      reportTemplateTokenOptions: [],
      emailTemplateTokenOptions: [],
      exceptionMsgEmail: null,
      policiesAndTermsTokenOptions: [],
      userEmployeeTokenOptions: [],
      exceptionMsg: null,
      selectedAll: false,
    };
  },

  computed: {
    ...mapGetters(["userPersonalData"]),
  },
  methods: {
    isDataExist,
    async getDialogs() {
      this.selectedAll = false;
      this.resendToManyClients.setInitialValue();
      this.getReportTemplatesDialog();
      this.getEmailTemplatesDialog();
      this.getPoliciesAndTermsDialog();
      this.getEmployeesDialog();
    },

    async getReportTemplatesDialog() {
      this.isLoading = true;
      this.reportTemplateTokenOptions = await getReportTemplatesDialog({
        reportTemplateTypeToken: REPORT_TEMPLATE_TYPES.PriceQuotation,
      });
      this.isLoading = false;
    },

    async getEmailTemplatesDialog() {
      this.isLoading = true;
      let params = {
        userToken: this.userPersonalData.userToken,
      };
      const [options, error] = await getEmailTemplatesDialogCustomized(params);
      this.emailTemplateTokenOptions = options;
      this.exceptionMsgEmail = error;
      this.isLoading = false;
    },

    async getPoliciesAndTermsDialog() {
      this.isLoading = true;
      this.policiesAndTermsTokenOptions = await getPoliciesAndTermsDialog();
      this.isLoading = false;
    },

    async getEmployeesDialog() {
      this.isLoading = true;
      let params = {
        modelName: "employees",
        userTypeToken: USER_TYPE.Employee,
        inPlaceToken: this.priceQuotation.requestPlaceToken,
      };
      const [options, error] = await getUsersDialogCustomized(params);
      this.userEmployeeTokenOptions = options;
      this.exceptionMsg = error;
      this.isLoading = false;
      this.getPlaceDetails();
    },

    async getPlaceDetails() {
      this.isLoading = true;
      try {
        const response = await apiPlace.getDetails({
          token: this.priceQuotation.requestPlaceToken,
        });
        if (response.data.status == STATUS.SUCCESS) {
          this.exceptionMsg = null;

          let item = {
            fullCode: response.data.place.fullCode,
            userNameCurrent: response.data.place.placeNameCurrent,
            email: response.data.place.placeEmail,
            value: response.data.place.placeToken,
          };

          this.userEmployeeTokenOptions.unshift(item);
        } else {
          this.exceptionMsg = response.data.msg;
          this.exceptionImg = null;
        }
      } catch (error) {
        this.exceptionMsg = this.$t("errorCatch");
        this.exceptionImg = null;
      }
      this.isLoading = false;
    },

    selectAll() {
      this.resendToManyClients.emails = [];
      this.selectedAll = !this.selectedAll;
      if (this.selectedAll) {
        for (let ietm in this.userEmployeeTokenOptions) {
          this.resendToManyClients.emails.push(
            this.userEmployeeTokenOptions[ietm].email
          );
        }
      }
    },
    select(value) {
      const indexItemPlace = this.resendToManyClients.emails.indexOf(value);
      if (indexItemPlace > -1) {
        this.resendToManyClients.emails.splice(indexItemPlace, 1);
      }
      setTimeout(() => {
        if (
          this.userEmployeeTokenOptions.length ==
          this.resendToManyClients.emails.length
        ) {
          this.selectedAll = true;
        } else {
          this.selectedAll = false;
        }
      }, 1000);
    },

    async resend() {
      this.isLoading = true;
      this.resendToManyClients.priceQuotationToken =
        this.priceQuotation.priceQuotationToken;
      try {
        const response = await apiPriceQuotation.resendToMany(
          this.resendToManyClients
        );
        if (response.data.status == STATUS.SUCCESS) {
          this.$emit("refresh");
          this.showMsg(response.data.msg, true);
          this.closeBottomSheet("ResendToManyClients");
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

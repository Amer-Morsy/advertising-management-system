<template>
  <b-modal :id="id" scrollable centered hide-footer>
    <PreLoader v-if="isLoading" />
    <ExceptionWithImg v-if="exceptionMsg" :msg="exceptionMsg" />

    <template #modal-title>
      <h3>
        <img src="@/assets/images/changePassword.svg" class="icon-lg" />
        {{ $t("Users.changeEmailPassword") }}
      </h3>
    </template>
    <div class="row">
      <CustomInputPassword
        :className="'col-12'"
        :id="'userEmailPassword'"
        :value="userEmailPassword"
        v-on:changeValue="userEmailPassword = $event"
        :title="$t('password')"
        :imgName="'passwordlock.svg'"
      />
      <!-- <CustomInputPassword
        :className="'col-12'"
        :id="'userEmailPasswordConfirm'"
        :value="userEmailPasswordConfirm"
        v-on:changeValue="userEmailPasswordConfirm = $event"
        :title="$t('passwordConfirm')"
        :imgName="'passwordlock.svg'"
      /> -->
    </div>
    <div class="modal-footer">
      <button
        name="submit"
        type="submit"
        class="btn btn-submit"
        @click.prevent="changeUserEmailPassword"
      >
        {{ $t("yes") }}
      </button>
      <button
        name="submit"
        type="submit"
        class="btn btn-cancel"
        @click.prevent="$bvModal.hide('UserChangeEmailPassword')"
      >
        {{ $t("no") }}
      </button>
    </div>
  </b-modal>
</template>

<script>
import PreLoader from "@/components/general/PreLoader.vue";
import ExceptionWithImg from "@/components/general/ExceptionWithImg.vue";
import CustomInputPassword from "@/components/general/CustomInputPassword.vue";
import { mapGetters } from "vuex";
import { STATUS } from "@/utils/constants";
import axios from "axios";
import generalMixin from "@/utils/generalMixin";

export default {
  name: "UserChangeEmailPassword",
  mixins: [generalMixin],
  components: {
    PreLoader,
    ExceptionWithImg,
    CustomInputPassword,
  },
  computed: {
    ...mapGetters(["userPersonalData"]),
  },
  data() {
    return {
      isLoading: false,
      exceptionMsg: null,
      exceptionImg: null,
      language: localStorage.getItem("userLanguage") || "ar-EG",
      userEmailPassword: "",
      // userEmailPasswordConfirm: "User@1234",
      showPassword: true,
      // showPasswordConfirm: true,
    };
  },
  methods: {
    async changeUserEmailPassword() {
      this.isLoading = true;
      try {
        var formData = new FormData();
        formData.append("language", this.language);
        if (this.userToken) {
          formData.append("userToken", this.userToken);
        } else {
          formData.append("userToken", this.userPersonalData.userToken);
        }
        formData.append("userEmailPassword", this.userEmailPassword);

        try {
          const response = await axios.post(
            `/api/UsersAuthentication/ChangeUserEmailPassword`,
            formData
          );

          if (response.data.status == STATUS.SUCCESS) {
            this.showMsg(response.data.msg, true);
            this.$bvModal.hide("UserChangeEmailPassword");
            this.$emit("logout");
          } else if (response.data.status == STATUS.INVALID_TOKEN) {
            this.showMsg(response.data.msg);
            this.$store.dispatch("logoutUser", response.data.msg);
          } else {
            this.showMsg(response.data.msg);
          }
        } catch (e) {
          this.showMsg(this.$t("errorCatch"));
        }
      } catch (e) {
        this.showMsg(this.$t("errorCatch"));
      }
      this.isLoading = false;
    },
  },
  props: {
    userToken: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "UserChangeEmailPassword",
    },
  },
};
</script>

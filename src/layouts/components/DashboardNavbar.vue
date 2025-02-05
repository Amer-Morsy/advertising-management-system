<template>
  <header class="dashboard-navbar">
    <PreLoader v-if="isLoading" />

    <nav>
      <div class="navbar-start">
        <label
          class="menu-icon"
          @click="
            toggleSidebarStatus();
            toggleMenu = !toggleMenu;
          "
        >
          <img
            v-if="toggleMenu"
            :src="require('@/assets/images/closeMenu.svg')"
          />
          <img v-else :src="require('@/assets/images/openMenu.svg')" />
        </label>
        <div class="page-name">
          <img :src="require('@/assets/images/' + pageIcon)" />
          <h3>{{ pageName }}</h3>
        </div>
      </div>

      <div class="navbar-end">
        <div
          class="notifications-icon"
          v-if="checkPrivilege(hasNotification())"
        >
          <b-dropdown variant="link" no-caret @show="openAllNotifications()">
            <template #button-content>
              <img class="icon" src="@/assets/images/notifications.svg" />
              <b-badge
                v-if="notificationsCount != 0"
                variant="danger"
                class="count-notifications"
                >{{ notificationsCount }}</b-badge
              >
            </template>

            <div v-if="notificationLoading">
              <b-card v-for="index in 3" :key="index">
                <b-skeleton animation="wave" width="90%"></b-skeleton>
                <b-skeleton animation="wave" width="100%"></b-skeleton>
                <b-skeleton animation="wave" width="45%"></b-skeleton>
              </b-card>
            </div>
            <div v-if="hasNotificationsData" class="dropdown-list">
              <div
                v-for="(notification, index) in notificationsData"
                :key="index"
                class="list-item"
                :class="{ 'read-done': notification.statusRead == true }"
              >
                <div
                  class="list-item-content"
                  @click="readNotification(notification)"
                >
                  <h5 class="list-item-title cut-2line">
                    <span
                      class="status-circle"
                      :class="{
                        'status-red': notification.statusRead != true,
                        'status-grey': notification.statusRead == true,
                      }"
                    ></span>
                    {{ isDataExist(notification.titleCurrent) }}
                  </h5>
                  <p class="list-item-description cut-2line">
                    {{ isDataExist(notification.bodyCurrent) }}
                  </p>
                  <span class="list-item-date">
                    {{ isDataExist(notification.dateTimeAgo) }}
                  </span>
                </div>
              </div>
            </div>
            <b-dropdown-item v-else>
              <h6 class="notifications-title">{{ exceptionMsg }}</h6>
            </b-dropdown-item>
            <template v-if="hasNotificationsData">
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item to="/notifications">
                <h6>{{ $t("notifications.showAll") }}</h6>
              </b-dropdown-item>
            </template>
          </b-dropdown>
        </div>
        <div
          v-if="activationTypeStatus"
          class="navbar-icon"
          :title="$t('general.activationType')"
        >
          <b-dropdown>
            <template #button-content>
              <img src="@/assets/images/changeActivationType.svg" />
            </template>
            <b-dropdown-item-button
              v-for="(activationType, index) in activationTypesTokensOptions"
              :key="index"
              :active="
                activationTypeTokens.includes(activationType.value)
                  ? true
                  : false
              "
              @click="updateActivationTypeTokens(activationType.value)"
            >
              <img
                :src="activationType.image"
                :onerror="`this.src='${defaultImgActivationType}'`"
              />
              <span>{{ activationType.text }}</span>
              <span>{{ activationType.totalNumber }}</span>
            </b-dropdown-item-button>
          </b-dropdown>
        </div>

        <template v-if="viewTypeStatus">
          <div
            v-if="viewType == VIEW_TYPES.cards"
            class="navbar-icon"
            :title="$t('general.viewAsTable')"
            @click="updateViewType(VIEW_TYPES.table)"
          >
            <img src="@/assets/images/view-list.svg" />
          </div>
          <div
            v-if="viewType == VIEW_TYPES.table"
            class="navbar-icon"
            :title="$t('general.viewAsCards')"
            @click="updateViewType(VIEW_TYPES.cards)"
          >
            <img src="@/assets/images/view-grid.svg" />
          </div>
        </template>

        <div v-if="filterSheetStatus" class="navbar-icon" :title="$t('filter')">
          <img
            src="@/assets/images/filter.svg"
            @click="openBottomSheet(filterSheetName)"
          />
        </div>

        <div
          v-if="btnAddStatus"
          class="navbar-icon"
          :title="btnAddTitle || $t('add')"
        >
          <router-link v-if="btnAddLinkStatus" :to="{ name: btnAddName }">
            <img src="@/assets/images/plus.svg" />
          </router-link>
          <img
            v-else
            src="@/assets/images/plus.svg"
            @click="openBottomSheet(btnAddName)"
          />
        </div>

        <div class="user-icon" v-if="userPersonalData">
          <b-dropdown id="dropdown-user">
            <template #button-content>
              <img :src="require('@/assets/images/settings.svg')" />
            </template>
            <!-- <div class="text-center">
              <img
                :src="employeeImage"
                :onerror="`this.src='${defaultImg}'`"
                alt="images"
                class="img-profile"
              />
              <b-dropdown-item>{{ employeeName }}</b-dropdown-item>
            </div>
            <b-dropdown-divider></b-dropdown-divider> -->
            <b-dropdown-item
              v-if="language == LANGUAGES.enUS"
              @click="setLanguage(LANGUAGES.arEG)"
            >
              <img src="@/assets/images/lang-ar.svg" />
              العربية
            </b-dropdown-item>
            <b-dropdown-item
              v-if="language == LANGUAGES.arEG"
              @click="setLanguage(LANGUAGES.enUS)"
            >
              <img src="@/assets/images/lang-en.svg" />
              English
            </b-dropdown-item>
            <b-dropdown-item v-b-modal.AppUserChangePassword>
              <img src="@/assets/images/changePassword.svg" />
              {{ $t("changePassword") }}
            </b-dropdown-item>
            <b-dropdown-item :to="{ name: 'UserAppSettings' }">
              <img src="@/assets/images/UserAppSettings.svg" />
              {{ $t("UserAppSettings.modelName") }}
            </b-dropdown-item>

            <b-dropdown-item
              v-if="DESKTOP_STATUS"
              @click="viewFileFromServer(DESKTOP_LINK)"
            >
              <img src="@/assets/images/DesktopApp.svg" />
              {{ $t("DesktopApp.modelName") }}
            </b-dropdown-item>

            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item v-b-modal.UserLogOut>
              <img src="@/assets/images/logout.svg" />
              {{ $t("logout") }}
            </b-dropdown-item>
            <!-- <b-dropdown-item active>Active action</b-dropdown-item> -->
          </b-dropdown>
        </div>
      </div>
    </nav>

    <UserChangePassword id="AppUserChangePassword" v-on:logout="logout" />
    <UserLogOut v-on:logout="logout" />
    <NotificationInfo :notification="this.notifications.notification" />
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PreLoader from "./../../components/general/PreLoader.vue";
import {
  LANGUAGES,
  VIEW_TYPES,
  STATUS,
  DESKTOP_STATUS,
  DESKTOP_LINK,
} from "./../../utils/constants";
import {
  checkPrivilege,
  viewFileFromServer,
  setLanguage,
  getLanguage,
  // setDataMultiLang,
  isDataExist,
} from "./../../utils/functions";
// import { getDialogOfActivationTypes } from "./../../utils/dialogsOfConstantsLists";
import DEFAULT_IMG from "./../../assets/images/user.jpg";
import defaultImgActivationType from "@/assets/images/changeActivationType.svg";
import UserChangePassword from "./../../components/users/UserChangePassword.vue";
import UserLogOut from "./../../components/users/UserLogOut.vue";
import generalMixin from "./../../utils/generalMixin";
import apiNotification from "./../../api/notification/notifications";
import Notifications from "./../../models/notifications/Notifications";
import NotificationInfo from "./../../views/notifications/components/NotificationInfo.vue";
import {
  hasNotification,
  hasNotificationRead,
  hasNotificationOpen,
} from "./../../utils/privilegeHelper";

export default {
  name: "DashboardNavbar",
  mixins: [generalMixin],
  components: {
    PreLoader,
    UserChangePassword,
    UserLogOut,
    NotificationInfo,
  },
  data() {
    return {
      isLoading: false,
      toggleMenu: true,
      notificationLoading: false,
      exceptionMsg: null,
      language: getLanguage(),
      LANGUAGES: LANGUAGES,
      checked: false,
      pageName: this.$t("homePage"),
      pageIcon: "homepage.svg",
      defaultImg: DEFAULT_IMG,
      defaultImgActivationType,
      VIEW_TYPES,
      DESKTOP_STATUS,
      DESKTOP_LINK,
      // activationTypesTokenOptions: getDialogOfActivationTypes(),

      notifications: new Notifications(),
      notificationsData: [],
      notificationsErrorMsg: null,
      notificationsCount: 0,
    };
  },
  props: {
    filterSheetStatus: {
      type: Boolean,
      default: false,
    },
    filterSheetName: {
      type: String,
      default: "",
    },

    btnAddStatus: {
      type: Boolean,
      default: false,
    },
    btnAddLinkStatus: {
      type: Boolean,
      default: false,
    },
    btnAddName: {
      type: String,
      default: "",
    },
    btnAddTitle: {
      type: String,
      default: "",
    },

    viewTypeStatus: {
      type: Boolean,
      default: false,
    },
    viewType: {
      type: String,
      default: VIEW_TYPES.default,
    },

    activationTypeStatus: {
      type: Boolean,
      default: false,
    },
    activationTypeTokens: {
      type: Array,
      default: () => [],
    },
    activationTypesTokensOptions: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    checkPrivilege,
    hasNotification,
    hasNotificationRead,
    hasNotificationOpen,
    viewFileFromServer,
    ...mapActions(["toggleSidebarStatus"]),
    logout() {
      this.isLoading = true;
      this.$store.dispatch("logoutUser", this.$t("logoutDone"));
    },
    setLanguage(lang) {
      this.isLoading = true;
      setLanguage(lang);
    },
    getPageInfo() {
      this.pageName = this.$route.meta.pageName || this.$t("homePage");
      this.pageIcon = this.$route.meta.pageIcon || "homepage.svg";
    },
    isDataExist(data) {
      return isDataExist(data);
    },
    updateViewType(viewType) {
      this.$emit("updateViewType", viewType);
    },
    updateActivationTypeTokens(viewType) {
      this.$emit("updateActivationTypeTokens", [viewType]);
    },

    // notifications
    async getAllNotifications() {
      this.notificationLoading = true;
      try {
        this.notifications.filterData.selfPage = 1;
        this.notifications.filterData.pageSize = 5;
        this.notifications.notificationsData = [];
        let response = await apiNotification.getAll(
          this.notifications.filterData
        );
        if (response.data.status == STATUS.SUCCESS) {
          this.exceptionMsg = null;
        } else if (response.data.status == STATUS.NO_INTERNET) {
          this.exceptionMsg = response.data.msg;
          this.exceptionImg = "illustrator-noInternet.svg";
        } else if (response.data.status == STATUS.NO_CONTENT) {
          this.exceptionMsg = response.data.msg;
          this.exceptionImg = "illustrator-noData.svg";
        } else if (response.data.status == STATUS.INVALID_TOKEN) {
          this.$store.dispatch("logoutUser", response.data.msg);
        } else {
          this.exceptionMsg = response.data.msg;
          this.exceptionImg = null;
        }
        this.notifications.fillData(response.data);
        this.notificationsData = this.notifications.notificationsData;
      } catch (error) {
        this.exceptionMsg = this.$t("errorCatch");
        this.exceptionImg = null;
      }
      this.notificationLoading = false;
    },

    async getCountNotReadNotifications() {
      this.notificationLoading = true;
      try {
        let response = await apiNotification.getCountNotRead();

        if (response.data.status == STATUS.SUCCESS) {
          if (response.data.notificationsCount > 99) {
            this.notificationsCount = "+99";
          } else {
            this.notificationsCount = response.data.notificationsCount;
          }
        } else if (
          response.data.status == STATUS.INVALID_TOKEN ||
          response.data.status == STATUS.VERSION
        ) {
          this.$store.dispatch("logoutUser", response.data.msg);
        } else {
          this.notificationsCount = 0;
          this.exceptionMsg = response.data.msg;
        }
      } catch (e) {
        this.notificationsCount = 0;
      }
      this.notificationLoading = false;
    },

    async openAllNotifications() {
      this.notificationLoading = true;
      if (checkPrivilege(hasNotificationOpen())) {
        try {
          this.notifications.notificationsData = [];
          let params = {
            statusOpen: this.notifications.filterData.statusOpen,
          };
          let response = await apiNotification.openAll(params);
          if (response.data.status == STATUS.SUCCESS) {
            this.notificationsCount = 0;
          } else if (response.data.status == STATUS.INVALID_TOKEN) {
            this.$store.dispatch("logoutUser", response.data.status);
          } else {
            this.notificationsCount = 0;
          }
          await this.getAllNotifications();
        } catch (e) {
          this.notificationsCount = 0;
        }
      }
    },

    async readNotification(notification) {
      if (checkPrivilege(hasNotificationRead())) {
        this.notificationLoading = true;
        try {
          this.notifications.notification.fillData(notification);
          this.notifications.filterData.token =
            this.notifications.notification.notificationToken;
          let params = {
            token: this.notifications.filterData.token,
            statusRead: this.notifications.filterData.statusRead,
          };
          let response = await apiNotification.read(params);
          if (response.data.status == STATUS.SUCCESS) {
            this.openBottomSheet("NotificationInfo");
          }
        } catch (e) {
          this.showMsg(this.$t("errorCatch"));
        }
        this.notificationLoading = false;
      }
    },
    // goToDetails(notification) {
    //   console.log(notification);
    // },
  },
  computed: {
    ...mapGetters([
      "userAuthorizeToken",
      "userPersonalData",
      "constantsListsData",
    ]),

    hasNotificationsData() {
      return this.notifications.notificationsData.length != 0;
    },
  },
  watch: {
    async $route() {
      this.getPageInfo();
      this.getCountNotReadNotifications();
    },
  },
  async created() {
    this.getPageInfo();
    this.getCountNotReadNotifications();
  },
};
</script>

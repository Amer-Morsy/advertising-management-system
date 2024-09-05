<template>
  <div class="dashboard-sidebar" :class="{ closed: sidebarIsClosed }">
    <div class="v-overlay" @click="toggleSidebarStatus()">
      <div class="v-overlay__scrim"></div>
    </div>

    <div class="sidebar">
      <header>
        <span class="header-image">
          <img
            :src="employeeImage"
            :onerror="`this.src='${defaultImg}'`"
            alt="images"
          />
        </span>
        <div class="header-text">
          <span class="name">{{ employeeName }}</span>
        </div>
      </header>

      <div class="menu">
        <ul class="menu-links">
          <template v-for="(route, index) in routes">
            <li
              :key="index"
              :class="
                !route.childrens || route.childrens.length == 0
                  ? ''
                  : 'sub-menu'
              "
            >
              <router-link
                v-if="!route.childrens || route.childrens.length == 0"
                :to="{ name: route.name }"
              >
                <span class="icon"
                  ><img :src="route.icon" v-b-popover.hover.top="route.title"
                /></span>
                <span class="text">{{ route.title }}</span>
              </router-link>

              <template v-else>
                <b-button v-b-toggle="route.name">
                  <span class="icon"
                    ><img :src="route.icon" v-b-popover.hover.top="route.title"
                  /></span>
                  <span class="text">
                    <span class="sub-text">{{ route.title }}</span>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </b-button>
                <b-collapse :id="route.name">
                  <li v-for="(route, index) in route.childrens" :key="index">
                    <router-link :to="{ name: route.name }">
                      <span class="icon"
                        ><img
                          :src="route.icon"
                          v-b-popover.hover.top="route.title"
                      /></span>
                      <span class="text">{{ route.title }}</span>
                    </router-link>
                  </li>
                </b-collapse>
              </template>
            </li>
            <hr :key="`${index}hr1`" v-if="index == 3" />
            <hr :key="`${index}hr2`" v-if="index == 8" />
          </template>
        </ul>
      </div>
      <div class="sidebar-logo">
        <!-- <img :src="require('@/assets/images/logo_mot.png')" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { checkPrivilege, getLanguage } from "./../../utils/functions";
import {
  hasUsers,
  hasUserSettings,
  hasEmployee,
  hasPlaceEmployee,
  hasSupplier,
  hasPlaceSupplier,
  hasClient,
  hasPlaceClient,
  hasReports,
  hasStoreItemsTab,
  hasStoreItem,
  hasPropertyType,
  hasDropDownList,
  hasSystemComponentStoreItem,
  hasSystemComponentsHierarchyStoreItem,
  hasPriceQuotation1,
  hasPriceQuotationDetail,
  hasPriceQuotationJobOrder,
  hasAlerts,
  hasComplaint,
  hasReminder,
  hasSettingsOthers,
  hasUserValidSettingsTabsEmployee,
  hasEmployeeEstablishmentsRole,
  hasEmployeeValidSetting,
  hasEmployeeLoginCode,
  hasUserValidSettingsTabsSupplier,
  hasSupplierEstablishmentsRole,
  hasSupplierValidSetting,
  hasSupplierLoginCode,
  hasUserValidSettingsTabsClient,
  hasClientEstablishmentsRole,
  hasClientValidSetting,
  hasClientLoginCode,
} from "./../../utils/privilegeHelper";
import { BASE_URL, LANGUAGES } from "./../../utils/constants";

import iconPriceQuotations from "./../../assets/images/PriceQuotations1.svg";
import iconPriceQuotationJobOrders from "./../../assets/images/PriceQuotationJobOrders.svg";
import iconPriceQuotationDetails from "./../../assets/images/PriceQuotationDetails.svg";
import iconReports from "./../../assets/images/reports.svg";
import iconEmployees from "./../../assets/images/users.svg";

import iconClients from "./../../assets/images/clients.svg";
import iconSuppliers from "./../../assets/images/suppliers.svg";
import iconComplaints from "./../../assets/images/alerts.svg";
import iconReminders from "./../../assets/images/alerts.svg";
import iconSettingsOthers from "./../../assets/images/settings-other.svg";
import iconStoreItems from "./../../assets/images/productsSidebar.svg";
import iconPrivileges from "./../../assets/images/privilagesSidebar.svg";

import defaultImg from "./../../assets/images/user.jpg";

export default {
  computed: {
    ...mapGetters(["sidebarIsClosed", "userPersonalData"]),
    employeeName: function () {
      if (this.userPersonalData) {
        return this.language == LANGUAGES.arEG
          ? this.userPersonalData.userNameAr
          : this.userPersonalData.userNameEn;
      } else {
        return this.$t("projectName");
      }
    },
    employeeImage: function () {
      return BASE_URL + this.userPersonalData.userImagePath;
    },

    routes: function () {
      let theRoutes = [];

      //#region PriceQuotations
      if (checkPrivilege(hasPriceQuotation1()))
        theRoutes.push({
          name: "PriceQuotations1",
          icon: iconPriceQuotations,
          title: this.$t("PriceQuotations.modelName"),
        });
      //#endregion PriceQuotations

      //#region PriceQuotationJobOrders
      if (checkPrivilege(hasPriceQuotationJobOrder()))
        theRoutes.push({
          name: "PriceQuotationJobOrders",
          icon: iconPriceQuotationJobOrders,
          title: this.$t("PriceQuotationJobOrders.modelName"),
        });
      //#endregion PriceQuotationJobOrders

      //#region PriceQuotationDetails
      if (checkPrivilege(hasPriceQuotationDetail()))
        theRoutes.push({
          name: "PriceQuotationDetails",
          icon: iconPriceQuotationDetails,
          title: this.$t("PriceQuotationDetails.modelName"),
        });
      //#endregion PriceQuotationDetails

      //#region reports
      if (checkPrivilege(hasReports()))
        theRoutes.push({
          name: "Reports",
          icon: iconReports,
          title: this.$t("Reports.modelName"),
        });
      //#endregion reports

      //#region UsersModule
      if (checkPrivilege(hasUsers() || hasUserSettings())) {
        if (
          checkPrivilege(hasEmployee() || hasUserValidSettingsTabsEmployee())
        ) {
          let title = this.$t("Users.modelName");
          if (checkPrivilege(hasPlaceEmployee())) {
            theRoutes.push({
              name: "PlaceEmployees",
              icon: iconEmployees,
              title: title,
            });
          } else if (checkPrivilege(hasEmployee())) {
            theRoutes.push({
              name: "Employees",
              icon: iconEmployees,
              title: title,
            });
          } else if (checkPrivilege(hasEmployeeEstablishmentsRole())) {
            theRoutes.push({
              name: "EmployeeEstablishmentsRole",
              icon: iconEmployees,
              title: title,
            });
          } else if (checkPrivilege(hasEmployeeValidSetting())) {
            theRoutes.push({
              name: "EmployeeValidSetting",
              icon: iconEmployees,
              title: title,
            });
          } else if (checkPrivilege(hasEmployeeLoginCode())) {
            theRoutes.push({
              name: "EmployeeLoginCode",
              icon: iconEmployees,
              title: title,
            });
          }
        }

        if (
          checkPrivilege(hasEmployee() || hasUserValidSettingsTabsEmployee())
        ) {
          if (checkPrivilege(hasEmployeeEstablishmentsRole())) {
            theRoutes.push({
              name: "EmployeeEstablishmentsRole",
              icon: iconPrivileges,
              title: this.$t("privileges"),
            });
          }
        }

        if (checkPrivilege(hasClient() || hasUserValidSettingsTabsClient())) {
          if (checkPrivilege(hasPlaceClient())) {
            theRoutes.push({
              name: "PlaceClients",
              icon: iconClients,
              title: this.$t("clients.modelName"),
            });
          } else if (checkPrivilege(hasClient())) {
            theRoutes.push({
              name: "Clients",
              icon: iconClients,
              title: this.$t("clients.modelName"),
            });
          } else if (checkPrivilege(hasClientEstablishmentsRole())) {
            theRoutes.push({
              name: "ClientEstablishmentsRole",
              icon: iconClients,
              title: this.$t("clients.modelName"),
            });
          } else if (checkPrivilege(hasClientValidSetting())) {
            theRoutes.push({
              name: "ClientValidSetting",
              icon: iconClients,
              title: this.$t("clients.modelName"),
            });
          } else if (checkPrivilege(hasClientLoginCode())) {
            theRoutes.push({
              name: "ClientLoginCode",
              icon: iconClients,
              title: this.$t("clients.modelName"),
            });
          }
        }

        if (
          checkPrivilege(hasSupplier() || hasUserValidSettingsTabsSupplier())
        ) {
          if (checkPrivilege(hasPlaceSupplier())) {
            theRoutes.push({
              name: "PlaceSuppliers",
              icon: iconSuppliers,
              title: this.$t("suppliers.modelName"),
            });
          } else if (checkPrivilege(hasSupplier())) {
            theRoutes.push({
              name: "Suppliers",
              icon: iconSuppliers,
              title: this.$t("suppliers.modelName"),
            });
          } else if (checkPrivilege(hasSupplierEstablishmentsRole())) {
            theRoutes.push({
              name: "SupplierEstablishmentsRole",
              icon: iconSuppliers,
              title: this.$t("suppliers.modelName"),
            });
          } else if (checkPrivilege(hasSupplierValidSetting())) {
            theRoutes.push({
              name: "SupplierValidSetting",
              icon: iconSuppliers,
              title: this.$t("suppliers.modelName"),
            });
          } else if (checkPrivilege(hasSupplierLoginCode())) {
            theRoutes.push({
              name: "SupplierLoginCode",
              icon: iconSuppliers,
              title: this.$t("suppliers.modelName"),
            });
          }
        }
      }
      //#endregion UsersModule

      //#region StoreItems
      if (checkPrivilege(hasStoreItemsTab())) {
        let item = {
          name: "",
          icon: iconStoreItems,
          title: this.$t("StoreItems.modelName"),
        };

        if (checkPrivilege(hasStoreItem())) item.name = "StoreItems";
        else if (checkPrivilege(hasPropertyType())) item.name = "PropertyTypes";
        else if (checkPrivilege(hasDropDownList())) item.name = "DropDownLists";
        else if (checkPrivilege(hasSystemComponentsHierarchyStoreItem()))
          item.name = "SystemComponentsHierarchyStoreItem";
        else if (checkPrivilege(hasSystemComponentStoreItem()))
          item.name = "SystemComponentStoreItem";

        theRoutes.push(item);
      }
      //#endregion StoreItems

      //#region Alerts

      if (checkPrivilege(hasAlerts())) {
        if (checkPrivilege(hasComplaint()))
          theRoutes.push({
            name: "Complaints",
            icon: iconComplaints,
            title: this.$t("Complaints.modelName"),
          });
        if (checkPrivilege(hasReminder()))
          theRoutes.push({
            name: "Reminders",
            icon: iconReminders,
            title: this.$t("Reminders.modelName"),
          });
      }

      //#endregion Alerts

      //#region Settings

      if (checkPrivilege(hasSettingsOthers()))
        theRoutes.push({
          name: "SettingsOthers",
          icon: iconSettingsOthers,
          title: this.$t("general.settings"),
        });

      //#endregion Settings

      return theRoutes;
    },
  },
  data() {
    return {
      language: getLanguage(),
      defaultImg,
    };
  },
  methods: {
    ...mapActions(["toggleSidebarStatus"]),
    getCurrentActive() {
      setTimeout(() => {
        const allButtons = document.querySelectorAll(".menu-links li button");
        if (allButtons != undefined && allButtons.length != 0) {
          allButtons.forEach(function (item) {
            item.classList.remove("active");
          });
        }
        const allSelectors = document.querySelectorAll(".router-link-active");
        if (allSelectors != undefined && allSelectors.length != 0) {
          allSelectors.forEach(function (item) {
            if (item.parentNode.parentNode.previousSibling)
              item.parentNode.parentNode.previousSibling.classList.add(
                "active"
              );
          });
        }
      }, 1000);
    },
  },
  watch: {
    $route() {
      this.getCurrentActive();
    },
  },
  async created() {
    this.getCurrentActive();
  },
};
</script>

<template>
  <div v-if="placesData" class="table-container">
    <table class="my-table">
      <thead>
        <tr>
          <th rowspan="2">#</th>
          <th :colspan="!isPlaceTypeTokenEmployee ? 6 : 5">
            {{ $t("general.data") }}
          </th>
          <th rowspan="2">{{ $t("SystemComponentsHierarchies.place") }}</th>
          <th rowspan="2">{{ $t("SystemComponents.place") }}</th>
          <th rowspan="2"><i class="fas fa-sliders-h"></i></th>
        </tr>
        <tr>
          <th>{{ $t("general.image") }}</th>
          <th>{{ $t("general.code") }}</th>
          <th class="cell-lg">{{ $t("general.name") }}</th>
          <th>{{ $t("phone1") }}</th>
          <th>{{ $t("address") }}</th>
          <th v-if="!isPlaceTypeTokenEmployee">
            {{ $t("Places.activityType") }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(place, index) in placesData" :key="index">
          <td>{{ ++index + filterData.currentIndex }}</td>
          <td>
            <img
              class="item-img-table"
              :src="fullPathFileFromServer(place.placeImagePath, defaultImg)"
              :onerror="`this.src='${defaultImg}'`"
            />
          </td>
          <td>{{ isDataExist(place.fullCode) }}</td>
          <td>
            {{ isDataExist(place.placeNameCurrent) }}
          </td>
          <td class="table-phone-number">
            {{ isDataExist(place.placePhone1WithCC) }}
          </td>
          <td>
            {{ isDataExist(place.placeAddressCurrent) }}
          </td>
          <td v-if="!isPlaceTypeTokenEmployee">
            {{ isDataExist(place.workFieldInfoData.workFieldNameCurrent) }}
          </td>
          <td>
            {{
              isDataExist(
                place.systemComponentsHierarchyData
                  .systemComponentsHierarchyNameCurrent
              )
            }}
          </td>
          <td>
            {{
              isDataExist(place.systemComponentData.systemComponentNameCurrent)
            }}
          </td>
          <td class="fmenu-item-container">
            <FloatingMenu>
              <li v-if="checkPrivilege(hasPlaceUser())">
                <router-link
                  :to="{
                    name: 'PlaceUser',
                    params: {
                      placeTypeToken: place.placeTypeToken,
                      placeToken: place.placeToken,
                      placeModelName: modelName,
                      userTypeToken: ' ',
                      userToken: ' ',
                      userModelName: ' ',
                    },
                  }"
                  :title="$t('PlaceUsers.modelName')"
                >
                  <img src="@/assets/images/users.svg" />
                </router-link>
              </li>
              <li v-if="checkPrivilege(hasEducationalScheduleTimeReport())">
                <button
                  @click="
                    setPlaceData(place);
                    openBottomSheet('EducationalScheduleTimePlaceReportFilter');
                  "
                  :title="$t('Reports.educationalScheduleTimePlaceReport')"
                >
                  <img src="@/assets/images/reports.svg" />
                </button>
              </li>
              <li v-if="place.isHaveChildrenStatus">
                <router-link
                  :to="{
                    name: childPlaceRoute,
                    params: {
                      parentPlaceToken: place.placeToken,
                    },
                  }"
                  :title="$t('Places.modelName')"
                >
                  <img src="@/assets/images/open.svg" />
                </router-link>
              </li>
              <li v-if="checkPrivilege(hasStorageSpacePlace)">
                <router-link
                  :to="{
                    name: StorageSpacesPlaceRouteName,
                    params: {
                      mainToken: place.placeToken,
                    },
                  }"
                  :title="$t('StorageSpaces.modelName')"
                >
                  <img src="@/assets/images/StorageSpaces.svg" />
                </router-link>
              </li>
              <li>
                <button
                  @click="
                    setPlaceData(place);
                    openBottomSheet('PlaceInfo');
                  "
                  :title="$t('info')"
                >
                  <img src="@/assets/images/info.svg" />
                </button>
              </li>
              <li>
                <button
                  @click="
                    setPlaceData(place);
                    openBottomSheet('PlaceStoreItemsInfo');
                  "
                  :title="$t('StoreItems.modelName')"
                >
                  <img src="@/assets/images/productsSidebar.svg" />
                </button>
              </li>
              <!-- <li>
                <button
                  @click="
                    setPlaceData(place);
                    openBottomSheet('PlaceQRCode');
                  "
                  :title="$t('general.qrCode')"
                >
                  <img src="@/assets/images/qr-code.svg" />
                </button>
              </li> -->
              <li v-if="checkPrivilege(hasPrivilegeEdit)">
                <button
                  @click="
                    setPlaceData(place);
                    openBottomSheet('PlaceUpdate');
                  "
                  :title="$t('edit')"
                >
                  <img src="@/assets/images/pencil.svg" />
                </button>
              </li>
              <li v-if="checkPrivilege(hasPrivilegeFinaleDelete)">
                <button
                  v-b-modal.PlaceDelete
                  :title="$t('delete')"
                  @click="setPlaceData(place)"
                >
                  <img src="@/assets/images/trash.svg" />
                </button>
              </li>
              <li v-if="checkPrivilege(hasPrivilegeChangeActivationType)">
                <button
                  v-b-modal.PlaceChangeActivationType
                  :title="$t('changeActivationType')"
                  @click="setPlaceData(place)"
                >
                  <img src="@/assets/images/changeActivationType.svg" />
                </button>
              </li>
              <li>
                <button
                  @click="
                    setPlaceData(place);
                    openBottomSheet('ActionsData');
                  "
                  :title="$t('actionsData.modelName')"
                >
                  <img src="@/assets/images/actions-data.svg" />
                </button>
              </li>
            </FloatingMenu>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  checkPrivilege,
  isDataExist,
  fullPathFileFromServer,
} from "./../../../utils/functions";
import {
  hasPlaceMasterAdminEdit,
  hasPlaceEmployeeEdit,
  hasPlaceStudentEdit,
  hasPlaceClientEdit,
  hasPlaceSupplierEdit,
  hasPlaceParentEdit,
  hasPlaceOtherEdit,
  hasPlaceMasterAdminFinaleDelete,
  hasPlaceEmployeeFinaleDelete,
  hasPlaceStudentFinaleDelete,
  hasPlaceClientFinaleDelete,
  hasPlaceSupplierFinaleDelete,
  hasPlaceParentFinaleDelete,
  hasPlaceOtherFinaleDelete,
  hasPlaceMasterAdminChangeActivationType,
  hasPlaceEmployeeChangeActivationType,
  hasPlaceStudentChangeActivationType,
  hasPlaceClientChangeActivationType,
  hasPlaceSupplierChangeActivationType,
  hasPlaceParentChangeActivationType,
  hasPlaceOtherChangeActivationType,
  hasStorageSpacePlaceMasterAdmin,
  hasStorageSpacePlaceEmployee,
  hasStorageSpacePlaceStudent,
  hasStorageSpacePlaceSupplier,
  hasStorageSpacePlaceParent,
  hasStorageSpacePlaceClient,
  hasStorageSpacePlaceOther,
  hasEducationalScheduleTimeReport,
  hasPlaceUser,
} from "./../../../utils/privilegeHelper";
import FloatingMenu from "./../../../components/general/FloatingMenu.vue";
import generalMixin from "./../../../utils/generalMixin";
import { PLACE_TYPE_TOKENS } from "./../../../utils/constantLists";

export default {
  name: "PlacesTable",
  mixins: [generalMixin],
  components: {
    FloatingMenu,
  },
  props: [
    "placeTypeToken",
    "placesData",
    "filterData",
    "defaultImg",
    "modelName",
  ],
  methods: {
    setPlaceData(place) {
      this.$emit("setPlaceData", place);
    },
    checkPrivilege,
    isDataExist,
    fullPathFileFromServer,
    hasEducationalScheduleTimeReport,
    hasPlaceUser,
  },
  computed: {
    isPlaceTypeTokenEmployee() {
      return this.placeTypeToken == PLACE_TYPE_TOKENS.Employee;
    },
    StorageSpacesPlaceRouteName() {
      let route = "";
      switch (this.modelName) {
        case "placeMasterAdmin":
          route = "StorageSpacesPlaceMasterAdmin";
          break;
        case "placeEmployees":
          route = "StorageSpacesPlaceEmployees";
          break;
        case "placeStudents":
          route = "StorageSpacesPlaceStudents";
          break;
        case "placeClients":
          route = "StorageSpacesPlaceClients";
          break;
        case "placeSuppliers":
          route = "StorageSpacesPlaceSuppliers";
          break;
        case "placeParents":
          route = "StorageSpacesPlaceParents";
          break;
        case "placeOthers":
          route = "StorageSpacesPlaceOthers";
          break;
      }
      return route;
    },
    hasStorageSpacePlace() {
      let status = false;
      switch (this.modelName) {
        case "placeMasterAdmin":
          status = checkPrivilege(hasStorageSpacePlaceMasterAdmin());
          break;
        case "placeEmployees":
          status = checkPrivilege(hasStorageSpacePlaceEmployee());
          break;
        case "placeStudents":
          status = checkPrivilege(hasStorageSpacePlaceStudent());
          break;
        case "placeClients":
          status = checkPrivilege(hasStorageSpacePlaceClient());
          break;
        case "placeSuppliers":
          status = checkPrivilege(hasStorageSpacePlaceSupplier());
          break;
        case "placeParents":
          status = checkPrivilege(hasStorageSpacePlaceParent());
          break;
        case "placeOthers":
          status = checkPrivilege(hasStorageSpacePlaceOther());
          break;
      }
      return status;
    },
    childPlaceRoute() {
      let route = "";
      switch (this.modelName) {
        case "placeMasterAdmin":
          route = "PlaceMasterAdmin";
          break;
        case "placeEmployees":
          route = "PlaceEmployees";
          break;
        case "placeStudents":
          route = "PlaceStudents";
          break;
        case "placeClients":
          route = "PlaceClients";
          break;
        case "placeSuppliers":
          route = "PlaceSuppliers";
          break;
        case "placeParents":
          route = "PlaceParents";
          break;
        case "placeOthers":
          route = "PlaceOthers";
          break;
      }
      return route;
    },

    hasPrivilegeEdit() {
      let status = false;
      switch (this.modelName) {
        case "placeMasterAdmin":
          status = checkPrivilege(hasPlaceMasterAdminEdit());
          break;
        case "placeEmployees":
          status = checkPrivilege(hasPlaceEmployeeEdit());
          break;
        case "placeStudents":
          status = checkPrivilege(hasPlaceStudentEdit());
          break;
        case "placeClients":
          status = checkPrivilege(hasPlaceClientEdit());
          break;
        case "placeSuppliers":
          status = checkPrivilege(hasPlaceSupplierEdit());
          break;
        case "placeParents":
          status = checkPrivilege(hasPlaceParentEdit());
          break;
        case "placeOthers":
          status = checkPrivilege(hasPlaceOtherEdit());
          break;
      }
      return status;
    },
    hasPrivilegeFinaleDelete() {
      let status = false;
      switch (this.modelName) {
        case "placeMasterAdmin":
          status = checkPrivilege(hasPlaceMasterAdminFinaleDelete());
          break;
        case "placeEmployees":
          status = checkPrivilege(hasPlaceEmployeeFinaleDelete());
          break;
        case "placeStudents":
          status = checkPrivilege(hasPlaceStudentFinaleDelete());
          break;
        case "placeClients":
          status = checkPrivilege(hasPlaceClientFinaleDelete());
          break;
        case "placeSuppliers":
          status = checkPrivilege(hasPlaceSupplierFinaleDelete());
          break;
        case "placeParents":
          status = checkPrivilege(hasPlaceParentFinaleDelete());
          break;
        case "placeOthers":
          status = checkPrivilege(hasPlaceOtherFinaleDelete());
          break;
      }
      return status;
    },
    hasPrivilegeChangeActivationType() {
      let status = false;
      switch (this.modelName) {
        case "placeMasterAdmin":
          status = checkPrivilege(hasPlaceMasterAdminChangeActivationType());
          break;
        case "placeEmployees":
          status = checkPrivilege(hasPlaceEmployeeChangeActivationType());
          break;
        case "placeStudents":
          status = checkPrivilege(hasPlaceStudentChangeActivationType());
          break;
        case "placeClients":
          status = checkPrivilege(hasPlaceClientChangeActivationType());
          break;
        case "placeSuppliers":
          status = checkPrivilege(hasPlaceSupplierChangeActivationType());
          break;
        case "placeParents":
          status = checkPrivilege(hasPlaceParentChangeActivationType());
          break;
        case "placeOthers":
          status = checkPrivilege(hasPlaceOtherChangeActivationType());
          break;
      }
      return status;
    },
  },
};
</script>

<template>
  <CustomBottomSheet
    :refName="'PlaceInfo'"
    size="xl"
    :headerText="$t('general.data')"
    :headerIcon="place.icon"
  >
    <div class="row">
      <DataLabelGroup
        v-if="!isPlaceTypeTokenEmployee"
        :className="'col-md-12'"
        :value="place.workFieldInfoData.workFieldNameCurrent"
        :title="$t('Places.activityType')"
        :imgName="'type.svg'"
      />
      <!-- place -->
      <DataLabelGroup
        v-if="place.systemComponentsHierarchyData"
        :className="'col-md-6'"
        :value="
          place.systemComponentsHierarchyData
            .systemComponentsHierarchyNameCurrent
        "
        :title="$t('SystemComponentsHierarchies.place')"
        :imgName="'systemComponentsHierarchies.svg'"
      />
      <DataLabelGroup
        v-if="place.systemComponentData"
        :className="'col-md-6'"
        :value="place.systemComponentData.systemComponentNameCurrent"
        :title="$t('SystemComponents.place')"
        :imgName="'systemComponents.svg'"
      />
      <DataLabelGroup
        v-if="place.parentPlaceData"
        :className="'col-md-6'"
        :value="place.parentPlaceData.placeNameCurrent"
        :title="$t('Places.parent')"
        :imgName="'places.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.fullCode"
        :title="$t('general.code')"
        :imgName="'code.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeNameAr"
        :title="$t('nameAr')"
        :imgName="'places.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeNameEn"
        :title="$t('nameEn')"
        :imgName="'places.svg'"
      />
      <!-- <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeNameUnd"
        :title="$t('nameUnd')"
        :imgName="'places.svg'"
      /> -->
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeAddressAr"
        :title="$t('addressAr')"
        :imgName="'address.svg'"
      />
      <!-- <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeAddressEn"
        :title="$t('addressEn')"
        :imgName="'address.svg'"
      /> -->
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeAddressUnd"
        :title="$t('addressUnd')"
        :imgName="'address.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeMapLink"
        :title="$t('Places.mapLink')"
        :imgName="'location.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placePhone1WithCC"
        :title="$t('phone1')"
        :imgName="'phone.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placePhone1WhatsAppStatus ? $t('yes') : $t('no')"
        :title="$t('Places.whatsAppStatus')"
        :imgName="'whatsapp.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placePhone2WithCC"
        :title="$t('phone2')"
        :imgName="'phone.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placePhone2WhatsAppStatus ? $t('yes') : $t('no')"
        :title="$t('Places.whatsAppStatus')"
        :imgName="'whatsapp.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placePhone3WithCC"
        :title="$t('phone3')"
        :imgName="'phone.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placePhone3WhatsAppStatus ? $t('yes') : $t('no')"
        :title="$t('Places.whatsAppStatus')"
        :imgName="'whatsapp.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placePhone4WithCC"
        :title="$t('phone4')"
        :imgName="'phone.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placePhone4WhatsAppStatus ? $t('yes') : $t('no')"
        :title="$t('Places.whatsAppStatus')"
        :imgName="'whatsapp.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeEmail"
        :title="$t('email')"
        :imgName="'email.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeWebSiteLink"
        :title="$t('Places.webSiteLink')"
        :imgName="'places.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeFaceBookLink"
        :title="$t('Places.faceBookLink')"
        :imgName="'facebook.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeTwitterLink"
        :title="$t('Places.twitterLink')"
        :imgName="'twitter.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeInstgramLink"
        :title="$t('Places.instagramLink')"
        :imgName="'instagram.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeYouTubeLink"
        :title="$t('Places.youTubeLink')"
        :imgName="'youtube.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeFaxNumber"
        :title="$t('Places.faxNumber')"
        :imgName="'number.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeTaxNumber"
        :title="$t('Places.taxNumber')"
        :imgName="'number.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placePostOfficeNameAr"
        :title="$t('Places.postOfficeNameAr')"
        :imgName="'places.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placePostOfficeNameEn"
        :title="$t('Places.postOfficeNameEn')"
        :imgName="'places.svg'"
      />
      <!-- <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placePostOfficeNameUnd"
        :title="$t('Places.postOfficeNameUnd')"
        :imgName="'places.svg'"
      /> -->
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placePostalCode"
        :title="$t('Places.postalCode')"
        :imgName="'number.svg'"
      />

      <DataLabelGroup
        :className="'col-md-6'"
        :value="
          formateDateTimeLang(place.placeOpeningDate, place.placeOpeningTime)
        "
        :title="$t('Places.openingDateAndTime')"
        :imgName="'dateAndTime.svg'"
      />

      <DataLabelGroup
        v-if="place.geographicalDistributionData"
        :className="'col-md-6 col-lg-4'"
        :value="
          place.geographicalDistributionData.systemComponentsHierarchyData
            .systemComponentsHierarchyNameCurrent
        "
        :title="$t('SystemComponentsHierarchies.geographicalDistribution')"
        :imgName="'systemComponentsHierarchies.svg'"
      />
      <DataLabelGroup
        v-if="place.geographicalDistributionData"
        :className="'col-md-6 col-lg-4'"
        :value="
          place.geographicalDistributionData.systemComponentData
            .systemComponentNameCurrent
        "
        :title="$t('SystemComponents.geographicalDistribution')"
        :imgName="'systemComponents.svg'"
      />
      <DataLabelGroup
        v-if="place.geographicalDistributionData"
        :className="'col-md-12 col-lg-4'"
        :value="
          place.geographicalDistributionData.geographicalDistributionNameCurrent
        "
        :title="$t('GeographicalDistributions.parent')"
        :imgName="'geographicalDistributions.svg'"
      />
      <!-- 
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeDescriptionAr"
        :title="$t('descriptionAr')"
        :imgName="'description.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeDescriptionEn"
        :title="$t('descriptionEn')"
        :imgName="'description.svg'"
      /> -->
      <!-- <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeDescriptionUnd"
        :title="$t('descriptionUnd')"
        :imgName="'description.svg'"
      /> -->

      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeLatitude"
        :title="$t('latitude')"
        :imgName="'latitude.svg'"
      />

      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placelongitude"
        :title="$t('longitude')"
        :imgName="'longitude.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeEndLatitude"
        :title="$t('endLatitude')"
        :imgName="'latitude.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeEndlongitude"
        :title="$t('endLongitude')"
        :imgName="'longitude.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeDistance"
        :title="$t('Places.placeDistance')"
        :imgName="'number.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="place.placeLocalIpAddress"
        :title="$t('Places.localIpAddress')"
        :imgName="'pc.svg'"
      />

      <DataLabelGroup
        :className="'col-md-12'"
        :value="place.placeNotes"
        :title="$t('notes')"
        :imgName="'notes.svg'"
      />
    </div>
  </CustomBottomSheet>
</template>

<script>
import CustomBottomSheet from "./../../../components/general/CustomBottomSheet.vue";
import DataLabelGroup from "./../../../components/general/DataLabelGroup.vue";
import { formateDateTimeLang } from "./../../../utils/functions";
import { PLACE_TYPE_TOKENS } from "./../../../utils/constantLists";

export default {
  components: {
    CustomBottomSheet,
    DataLabelGroup,
  },
  props: ["placeTypeToken", "place"],
  computed: {
    isPlaceTypeTokenEmployee() {
      return this.placeTypeToken == PLACE_TYPE_TOKENS.Employee;
    },
  },
  methods: {
    formateDateTimeLang,
  },
  async created() {},
};
</script>

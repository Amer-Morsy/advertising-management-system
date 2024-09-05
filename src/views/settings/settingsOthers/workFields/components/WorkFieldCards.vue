<template>
  <div class="row custom-cards">
    <CustomCard
      v-for="(workField, index) in workFieldsData"
      :key="index"
      :className="'col-sm-6 col-md-4 col-lg-3'"
      :title="workField.workFieldNameCurrent"
      :description="workField.fullCode"
      :imagePath="workField.workFieldImagePath"
      :defaultImg="defaultImg"
      :index="++index + filterData.currentIndex"
    >
      <li>
        <button
          :title="$t('info')"
          @click="
            setWorkFieldData(workField);
            openBottomSheet('WorkFieldInfo');
          "
        >
          <img src="@/assets/images/info.svg" />
        </button>
      </li>
      <li>
        <button
          @click="
            setWorkFieldData(workField);
            openBottomSheet('WorkFieldQRCode');
          "
          :title="$t('general.qrCode')"
        >
          <img src="@/assets/images/qr-code.svg" />
        </button>
      </li>
      <li v-if="checkPrivilege(hasWorkFieldEdit())">
        <button
          @click="
            setWorkFieldData(workField);
            openBottomSheet('WorkFieldUpdate');
          "
          :title="$t('edit')"
        >
          <img src="@/assets/images/pencil.svg" />
        </button>
      </li>
      <li v-if="checkPrivilege(hasWorkFieldFinaleDelete())">
        <button
          v-b-modal.WorkFieldDelete
          :title="$t('delete')"
          @click="setWorkFieldData(workField)"
        >
          <img src="@/assets/images/trash.svg" />
        </button>
      </li>
      <li v-if="checkPrivilege(hasWorkFieldChangeActivationType())">
        <button
          v-b-modal.WorkFieldChangeActivationType
          :title="$t('changeActivationType')"
          @click="setWorkFieldData(workField)"
        >
          <img src="@/assets/images/changeActivationType.svg" />
        </button>
      </li>
      <li>
        <button
          @click="
            setWorkFieldData(workField);
            openBottomSheet('ActionsData');
          "
          :title="$t('actionsData.modelName')"
        >
          <img src="@/assets/images/actions-data.svg" />
        </button>
      </li>
    </CustomCard>
  </div>
</template>

<script>
import {
  checkPrivilege,
  isDataExist,
  fullPathFileFromServer,
} from "./../../../../../utils/functions";
import {
  hasWorkFieldEdit,
  hasWorkFieldFinaleDelete,
  hasWorkFieldChangeActivationType,
} from "./../../../../../utils/privilegeHelper";
import CustomCard from "./../../../../../components/general/CustomCard.vue";
import generalMixin from "./../../../../../utils/generalMixin";

export default {
  mixins: [generalMixin],
  components: {
    CustomCard,
  },
  props: ["workFieldsData", "filterData", "defaultImg"],
  methods: {
    setWorkFieldData(workField) {
      this.$emit("setWorkFieldData", workField);
    },
    checkPrivilege,
    isDataExist,
    fullPathFileFromServer,
    hasWorkFieldEdit,
    hasWorkFieldFinaleDelete,
    hasWorkFieldChangeActivationType,
  },
};
</script>

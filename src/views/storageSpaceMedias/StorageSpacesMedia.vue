<template>
  <StorageSpacesMediaComponent
    :key="storageSpaceMediaTypeToken"
    v-if="hasData"
  />
</template>

<script>
import StorageSpacesMediaComponent from "./StorageSpacesMediaComponent.vue";

import generalMixin from "./../../utils/generalMixin";
import generalSettingsMixin from "./../../utils/generalSettingsMixin";

export default {
  mixins: [generalMixin, generalSettingsMixin],
  components: {
    StorageSpacesMediaComponent,
  },
  computed: {
    hasData() {
      return this.storageSpaceMediaTypeToken && this.modelName ? true : false;
    },
  },
  data() {
    return {
      storageSpaceMediaTypeToken: "",
      modelName: "",
    };
  },
  methods: {
    updateModelName() {
      this.modelName = this.$route.meta.modelName;
    },
    updateStorageSpaceMediaTypeToken() {
      this.storageSpaceMediaTypeToken =
        this.$route.meta.storageSpaceMediaTypeToken;
    },
  },
  created() {
    this.updateStorageSpaceMediaTypeToken();
    this.updateModelName();
  },
  watch: {
    $route() {
      this.storageSpaceMediaTypeToken = "";
      this.modelName = "";
      this.updateStorageSpaceMediaTypeToken();
      this.updateModelName();
    },
  },
};
</script>

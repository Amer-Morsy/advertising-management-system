<template>
  <div class="main-container mb-2">
    <div
      v-if="media.storageSpaceMediaFileTypeToken == MEDIA_TYPE_TOKENS.image"
      class="media-container"
    >
      <img
        class="media-item"
        :src="
          fullPathFileFromServer(
            media.storageSpaceMediaFilePath,
            media.defaultImg
          )
        "
        :onerror="`this.src='${media.defaultImg}'`"
      />
    </div>
    <div
      v-if="media.storageSpaceMediaFileTypeToken == MEDIA_TYPE_TOKENS.video"
      class="media-container"
    >
      <video controls class="media-item" style="cursor: pointer">
        <source
          :src="
            fullPathFileFromServer(
              media.storageSpaceMediaFilePath,
              media.defaultImg
            )
          "
          type="video/mp4"
          :onerror="`this.src='${media.defaultImg}'`"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <div
      v-if="media.storageSpaceMediaFileTypeToken == MEDIA_TYPE_TOKENS.audio"
      class="media-container"
    >
      <aplayer :audio="audio" />
    </div>
    <div
      v-if="media.storageSpaceMediaFileTypeToken == MEDIA_TYPE_TOKENS.pdf"
      class="media-container"
    >
      <vue-pdf-app
        :pdf="
          fullPathFileFromServer(
            media.storageSpaceMediaFilePath,
            media.defaultImg
          )
        "
        theme="dark"
      ></vue-pdf-app>
    </div>
    <div v-if="isExWoPo()" class="media-container">
      <VueDocPreview
        class="office"
        :url="
          fullPathFileFromServer(
            media.storageSpaceMediaFilePath,
            media.defaultImg
          )
        "
        :type="`office`"
      />
    </div>
    <div
      v-if="media.storageSpaceMediaFileTypeToken == MEDIA_TYPE_TOKENS.other"
      class="media-container"
    >
      <img
        class="download"
        src="@/assets/images/download.svg"
        @click="viewFileFromServer(media.storageSpaceMediaFilePath)"
      />
    </div>
  </div>
</template>

<script>
import { MEDIA_TYPE_TOKENS } from "@/utils/constantLists";
import { fullPathFileFromServer, viewFileFromServer } from "@/utils/functions";
import VuePdfApp from "vue-pdf-app";
import VueDocPreview from "vue-doc-preview";

export default {
  name: "ShowMedia",
  components: {
    VueDocPreview,
    VuePdfApp,
  },
  data() {
    return {
      MEDIA_TYPE_TOKENS: MEDIA_TYPE_TOKENS,
      audio: {
        name: this.media.storageSpaceMediaNameCurrent,
        artist: this.media.fullCode,
        url: fullPathFileFromServer(
          this.media.storageSpaceMediaFilePath,
          this.media.defaultImg
        ),
        cover: this.media.defaultImg,
      },
    };
  },
  props: {
    media: {
      type: Object,
    },
  },
  methods: {
    fullPathFileFromServer,
    viewFileFromServer,
    isExWoPo() {
      let check =
        this.media.storageSpaceMediaFileTypeToken == MEDIA_TYPE_TOKENS.excel ||
        this.media.storageSpaceMediaFileTypeToken == MEDIA_TYPE_TOKENS.word ||
        this.media.storageSpaceMediaFileTypeToken ==
          MEDIA_TYPE_TOKENS.powerPoint;
      return check;
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.main-container {
  max-height: 80%;
  .media-container {
    display: flex;
    justify-content: center;
    .media-item {
      max-width: 80%;
    }
    .office {
      width: 100%;
    }
    .download {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      align-self: center;
      cursor: pointer;
    }
  }
}
</style>

<template>
  <div class="generate-url">
    <h1 class="title">
      Loop Youtube
    </h1>
    <h2 class="subtitle">
      Paste a Youtube URL you want to loop below and click "Search button"
    </h2>
    <div class="search-group">
      <div class="search-form-group">
        <input
          v-model="searchFormText"
          class="search-form"
          type="text"
          placeholder="https://www.youtube.com/watch?v=9bZkp7q19f0"
        />

        <span
          v-if="validationErrorStatus"
          class="help-block error"
          style="margin-top: 5px;color: red"
        >Please enter a valid Youtube URL.</span>
      </div>
      <button
        @click="onClick"
        class="button search-button"
      >Search</button>
    </div>
    <br>
    <br>
    <template v-if="loadingStatus">
      <div class="line" />
      <loading />
    </template>
    <template v-else-if="!loadingStatus && showVideoStatus">

      <div class="edit-youtube-group">

        <YoutubeIframe />

      </div>
      <LinkShare />
    </template>
    <!-- <section class="hero">

      <div class="hero-body">
        <div class="container">

          <h1 class="title">
            Loop Youtube
          </h1>

          <h2 class="subtitle">
            Paste a Youtube URL you want to loop below and click "Search button"
          </h2>
          <div class="search-group">
            <div class="search-form-group">
              <input
                v-model="searchFormText"
                class="search-form"
                type="text"
                placeholder="https://www.youtube.com/watch?v=9bZkp7q19f0"
              />

              <span
                v-if="validationErrorStatus"
                class="help-block error"
                style="margin-top: 5px;color: red"
              >Please enter a valid Youtube URL.</span>
            </div>
            <button
              @click="onClick"
              class="button search-button"
            >Search</button>
          </div>

          <br>
          <br>
          <template v-if="loadingStatus">
            <div class="line" />
            <loading />
          </template>
          <template v-else-if="!loadingStatus && showVideoStatus">

            <div class="edit-youtube-group">

              <YoutubeIframe />

            </div>
            <LinkShare />
          </template>

        </div>

      </div>
    </section> -->

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import loading from "@/components/loading.vue";
import LinkShare from "@/components/LinkShare.vue";
import YoutubeIframe from "@/components/YoutubeIframe.vue";
import getYouTubeID from "get-youtube-id";

import { SET_VIDEO_ID } from "@/store/Video/mutations";

export default Vue.extend({
  name: "generateUrl",
  components: {
    loading,
    //vueSlider,
    LinkShare,
    YoutubeIframe
    //navLink
    //VueYoutube
  },
  data() {
    return {
      loadingStatus: false,
      showVideoStatus: false,
      validationErrorStatus: false,
      searchFormText: ""
    };
  },

  //props: {
  //  msg: String
  //},
  created() {
    //const params = location.pathname.split("/");
    //(this as any).videoId = getParam("v");
  },
  methods: {
    onClick() {
      const videoId = getYouTubeID(this.searchFormText);
      if (videoId) {
        this.validationErrorStatus = false;
        this.loadingStatus = true;
        const showVideo = this.showVideo;

        this.$store.commit(`video/${SET_VIDEO_ID}`, videoId);
        //showVideo();
        setTimeout(function() {
          showVideo();
        }, 300);
      } else {
        this.validationErrorStatus = true;
      }
    },
    showVideo() {
      this.showVideoStatus = true;
      this.loadingStatus = false;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input {
  font-size: 20px;
  height: 54px;
  outline: 0;
  border: 0;
}
.title {
  font-size: 56px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
}
//.edit-youtube-group {
//  max-width: 750px;
//}

.search-group {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 479px) {
    flex-direction: column;
    align-items: center;
  }
}
.search-form-group {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.search-form-group input {
  @media screen and (max-width: 479px) {
    font-size: 15px;
  }
}
.search-form {
  width: 41vw;
  background: rgba(255, 255, 255, 0.5);

  @media screen and (max-width: 479px) {
    width: 90vw;
  }
}
.search-button:focus {
  outline: none;
}
.search-button {
  cursor: pointer;
  margin-left: 5px;

  @media screen and (max-width: 479px) {
    align-items: center;
    margin-top: 1rem;
    margin-left: 0px;
  }
  padding: 0px 40px 0px 40px;

  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
  line-height: 50px;
}

.search-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.search-button:active {
  /*押したとき*/
  -webkit-transform: translateY(2px);
  transform: translateY(2px); /*沈むように*/
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
  background-image: linear-gradient(
    #fed6e3 0%,
    #ffbcbc 100%
  ); /*グラデーションを明るく*/
}
</style>

<template>
  <div class="generate-url">

    <section class="hero">

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
            <div class="line" />
            <h1>video</h1>
            <vueSlider />
            <LinkShare />
          </template>

          <!-- <div class="line" /> -->
          <!-- <h2 class="subtitle">
            Hero subtitle
          </h2> -->

        </div>

      </div>
    </section>
    <!-- <h1>{{ msg }}</h1> -->

    <!--
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>

    <h3>Ecosystem</h3>
    <input
      type="button"
      value="Link Share"
    >
    <h3>Installed CLI Plugins</h3>

    <h3>Ecosystem</h3>
    -->

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import loading from "@/components/loading.vue";
import vueSlider from "@/components/vueSlider.vue";
//import navLink from "@/components/navLink.vue";
import LinkShare from "@/components/LinkShare.vue";
import getYouTubeID from "get-youtube-id";

export default Vue.extend({
  name: "generateUrl",
  components: {
    loading,
    vueSlider,
    LinkShare
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
      console.log("onClick searchFormText", getYouTubeID(this.searchFormText));
      if (getYouTubeID(this.searchFormText)) {
        this.validationErrorStatus = false;
        this.loadingStatus = true;
        const showVideo = this.showVideo;

        setTimeout(function() {
          showVideo();
        }, 2000);
      } else {
        this.validationErrorStatus = true;
      }
    },
    showVideo() {
      console.log("showVideo");
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
.search-form {
  width: 530px;
  background: rgba(255, 255, 255, 0.5);
}
.search-button:focus {
  outline: none;
}
.search-button {
  cursor: pointer;
  margin-left: 5px;

  @media screen and (max-width: 479px) {
    align-items: center;
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

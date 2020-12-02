<template>
  <div>
    <h5 id="qr-url"> {{shareLinkUrl()}} </h5>

    <button
      id="copy-button"
      @click="onClick"
      class="button search-button"
      data-clipboard-target="#qr-url"
    >Link Copy</button>

    <h2 class="nav-link subtitle is-size-3">

      <!-- <a href="https://www.instagram.com/romesrf/"><span class="icon"><svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="data"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-instagram fa-w-14"
          > 
            <path
              fill="currentColor"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              class=""
            ></path>
          </svg></span></a> -->
      <a
        href="#"
        @click="onClickTwitterShareButton"
        target="_blank"
        alt="Share on Twitter"
      >
        <span class="icon is-small">
          <i class="fab fa-twitter svg-inline--fa"></i>
        </span>

      </a>

      <a
        href="#"
        @click="onClickFacebookShareButton"
        target="_blank"
        alt="Share on Facebook"
      >
        <!-- <span class="icon">
          <img
            alt="Vue logo"
            src="../assets/icon/iconmonstr-facebook-6.svg"
          />
        </span> -->

        <span class="icon is-small">
          <i class="fab fa-facebook svg-inline--fa"></i>
        </span>
      </a>
      <!-- <a href="https://facebook.com/loop-youtube"><span class="icon">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            class="svg-inline--fa fa-facebook fa-w-12"
          >
            <path
              fill="currentColor"
              d="M381.9 388.2c-6.4 27.4-27.2 42.8-55.1 48-24.5 4.5-44.9 5.6-64.5-10.2-23.9-20.1-24.2-53.4-2.7-74.4 17-16.2 40.9-19.5 76.8-25.8 6-1.1 11.2-2.5 15.6-7.4 6.4-7.2 4.4-4.1 4.4-163.2 0-11.2-5.5-14.3-17-12.3-8.2 1.4-185.7 34.6-185.7 34.6-10.2 2.2-13.4 5.2-13.4 16.7 0 234.7 1.1 223.9-2.5 239.5-4.2 18.2-15.4 31.9-30.2 39.5-16.8 9.3-47.2 13.4-63.4 10.4-43.2-8.1-58.4-58-29.1-86.6 17-16.2 40.9-19.5 76.8-25.8 6-1.1 11.2-2.5 15.6-7.4 10.1-11.5 1.8-256.6 5.2-270.2.8-5.2 3-9.6 7.1-12.9 4.2-3.5 11.8-5.5 13.4-5.5 204-38.2 228.9-43.1 232.4-43.1 11.5-.8 18.1 6 18.1 17.6.2 344.5 1.1 326-1.8 338.5z"
              class=""
            ></path>
          </svg></span></a> <a href="https://www.youtube.com/channel/loop-youtube"><span class="icon"><svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="youtube"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            class="svg-inline--fa fa-youtube fa-w-18"
          >
            <path
              fill="currentColor"
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
              class=""
            ></path>
          </svg></span></a> -->
    </h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ClipboardJS from "clipboard";
import { toHHMMSS } from "@/util/index";
///Users/sehwakim/docker/loop-youtube/src/assets/icon/facebook.svg
//import facebook from "../assets"
//import Facebook from "../assets/icon/facebook.svg";

//import Facebook2 from "~/assets/icon/iconmonstr-facebook-6.svg";

//import Facebook from "./facebook.svg";
//import DownloadIcon from '@/assets/images/icons/download.svg?component'

export default Vue.extend({
  name: "searchButton",
  components: {
    //Facebook2
  },
  data() {
    return {
      value: ""
    };
  },

  //props: {
  //  msg: String
  //},
  created() {
    //const params = location.pathname.split("/");
    //(this as any).videoId = getParam("v");
  },
  computed: {
    videoId(): string {
      return this.$store.getters["video/getVideoId"];
    },
    start(): string {
      return toHHMMSS(this.$store.getters["video/getStartTime"]);
    },
    //end(): number {
    //  return this.$store.getters["video/getEndTime"];
    //},
    end(): string {
      return toHHMMSS(this.$store.getters["video/getEndTime"]);
      //const end = this.$store.getters["video/getEndTime"];
      //if (end) {
      //  return end;
      //} else {
      //  return this.player.getDuration();
      //}
    },
    word(): string {
      return this.$store.getters["video/getWordTime"];
    },
    player(): any {
      return this.$store.getters["video/getPlayer"];
    }
    //shareLinkUrl() {
    //  return `https://l-youtube.com/watch?v=${this.videoId}&s=${this.start}&e=${this.end}`;
    //}
  },
  methods: {
    onClickTwitterShareButton() {
      window.open(
        "https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20" +
          encodeURIComponent(this.shareLinkUrl()) +
          "%20-%20" +
          encodeURIComponent(document.title),
        "twittersharedialog",
        "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600"
      );
      return false;
    },
    onClickFacebookShareButton() {
      window.open(
        "https://www.facebook.com/sharer/sharer.php?u=" +
          encodeURIComponent(this.shareLinkUrl()) +
          "&t=" +
          encodeURIComponent(document.title),
        "facebooksharedialog",
        "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600"
      );
    },

    onClick() {
      const clipboard = new ClipboardJS("#copy-button");
    },
    shareLinkUrl() {
      return `https://l-youtube.com/watch?v=${this.videoId}&s=${this.start}&e=${this.end}`;
    }
  }
});
</script>
<style scoped lang="scss">
.nav-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.is-size-3 {
  font-size: 2rem !important;
}
.icon {
  color: #fff;
  margin-right: 1rem;
  align-items: center;
  display: inline-flex;
  justify-content: center;
}
.svg-inline--fa {
  /* display: inline-block; */
  /* font-size: inherit; */
  height: 1em;
  vertical-align: -0.125em;
}
</style>
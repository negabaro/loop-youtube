<template>
  <div id="app">
    <!-- <router-view /> -->
    <div v-if="isParams">
      <Youtube
        :start="start"
        :end="end"
        :videoId="videoId"
        :word="word"
      />
    </div>
    <div v-else>
      <GenerateUrl />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { toSecond, toHHMMSS, getParam } from "@/util/index";
import VueHead from "vue-head";
import GenerateUrl from "@/components/GenerateUrl.vue";
import Youtube from "@/components/Youtube.vue";
import {
  SET_VIDEO_ID,
  SET_WORD,
  SET_START_TIME,
  SET_END_TIME
} from "@/store/Video/mutations";

Vue.use(VueHead);

//export type DataType = {
//  title: string;
//  videoId: string;
//  word: string;
//  start: number;
//  end: number;
//};

export default Vue.extend({
  components: {
    GenerateUrl,
    Youtube
  },
  data() {
    return {
      title: "Loop Youtube"
      //videoId: "",
      //word: "",
      //start: 0,
      //end: 0
    };
  },
  head: {
    title: function() {
      return {
        inner: (this as any).metaTitle
      };
    },
    meta: function() {
      return [
        { property: "og:site_name", content: (this as any).title },
        { property: "og:title", content: (this as any).metaTitle },
        { property: "og:description", content: (this as any).description },
        {
          p: "og:image",
          c: (this as any).img
        },
        { property: "og:image:type", content: "image/gif" },
        { property: "og:image:width", content: "500" },
        { property: "og:image:height", content: "376" },
        { property: "og:type", content: "video.other" },
        {
          property: "og:video:secure_url",
          content: "https://www.youtube.com/embed/1IxnZtmP_7c"
        },
        {
          property: "og:video:url",
          content: "https://www.youtube.com/embed/1IxnZtmP_7c"
        },
        { property: "og:video:width", content: "1280" },
        { property: "og:video:height", content: "720" },
        { property: "og:video:type", content: "text/html" }

        // ...
      ];
    }
    /*
    meta: [
      { name: "application-name", content: "Name of my application" },
      { name: "description", content: "A description of the page", id: "desc" }, // id to replace intead of create element
      // ...
      // Twitter
      { name: "twitter:title", content: "!!Content Title" },
      // with shorthand
      {
        n: "twitter:description",
        c: "Content description less than 200 characters"
      },
      // ...
      // Google+ / Schema.org
      { itemprop: "name", content: "Content Title" },
      { itemprop: "description", content: "Content Title" },
      // ...
      // Facebook / Open Graph
      //{ property: "fb:app_id", content: "123456789" },
      { property: "og:title", content: "Content 22333" },
      { property: "og:description", content: "yyyyyyyyy" },
      //{ property: "og:type", content: "website" },
      //{ property: "og:url", content: "https://media3.giphy.com/media/fBEDuhnVCiP16/giphy.gif" },
      // with shorthand
      {
        p: "og:image",
        c: "https://media3.giphy.com/media/fBEDuhnVCiP16/giphy.gif"
      },
      { property: "og:image:type", content: "image/gif" },
      { property: "og:image:width", content: "500" },
      { property: "og:image:height", content: "376" }
      // ...
    ]*/
  },
  //https://loop-youtube.netlify.app/?v=WIUH0lhsbL0&s=00:20&e=00:30
  created() {
    this.$store.commit(`video/${SET_VIDEO_ID}`, getParam("v"));
    //this.videoId = getParam("v");
    this.$store.commit(`video/${SET_START_TIME}`, toSecond(getParam("s")));
    //this.start = toSecond(getParam("s"));
    this.$store.commit(`video/${SET_END_TIME}`, toSecond(getParam("e")));
    //this.end = toSecond(getParam("e"));
    this.$store.commit(`video/${SET_WORD}`, toSecond(getParam("w")));
    //this.word = getParam("w");
  },
  computed: {
    videoId(): string {
      return this.$store.getters["video/getVideoId"];
    },
    start(): number {
      return this.$store.getters["video/getStartTime"];
    },
    end(): number {
      return this.$store.getters["video/getEndTime"];
    },
    word(): string {
      return this.$store.getters["video/getWordTime"];
    },
    metaTitle(): string {
      if (this.isParams) {
        return `${this.title} | ${toHHMMSS(this.start)}~${toHHMMSS(this.end)}`;
      } else {
        return `${this.title}`;
      }
    },
    decodedWord(): string {
      return decodeURIComponent(this.word);
    },
    description(): string {
      if (this.isParams) {
        return `${this.decodedWord} | ${toHHMMSS(this.start)}~${toHHMMSS(
          this.end
        )}`;
      } else {
        return "";
      }
    },
    img(): string {
      return `https://i.ytimg.com/vi/${this.videoId}/mqdefault.jpg`;
    },
    isParams(): boolean {
      return !!this.videoId && !!this.start && !!this.end;
    }
  }
});
</script>
<style lang="scss">
@import "../node_modules/bulma/bulma.sass";

iframe {
  width: 100%;
  max-width: 650px; /* Also helpful. Optional. */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

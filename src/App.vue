<template>
  <div id="app">
    <div id="nav">
      <h1>{{this.description}}</h1>
      <!-- <div id="player" /> -->
      <div v-if="isParams">
        <youtube
          :fitParent="fitParentStatus"
          :resize="resizeStatus"
          :video-id="videoId"
          :player-vars="playerVars"
          @ready="ready"
          @playing="playing"
          @ended="ended"
          @error="error"
          ref="youtube"
        />
      </div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <!-- <router-view /> -->
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import VueYoutube from "vue-youtube";
import { toSecond, toHHMMSS, getParam } from "@/util/index";
import VueHead from "vue-head";

//let YouTubeIframeLoader = require("youtube-iframe");
//const VueYoutube = require("vue-youtube");
Vue.use(VueYoutube);
Vue.use(VueHead);

export default Vue.extend({
  components: {
    //VueYoutube
  },
  data() {
    return {
      fitParentStatus: true,
      resizeStatus: true,
      title: "Loop Youtube",
      //description: "sdsdsdsdsd",
      videoId: "",
      word: "",
      start: 0,
      end: 0,
      duration: 0,
      currentLoopCount: 0
      //player: null,
      //playerVars: {
      //  autoplay: 1,
      //  start: 20,
      //  end: 30
      //}
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
        { property: "og:image:height", content: "376" }
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
    //const params = location.pathname.split("/");

    this.videoId = getParam("v");
    this.start = toSecond(getParam("s"));
    this.end = toSecond(getParam("e"));
    this.word = getParam("w");

    console.log("xx this.word", this.word);
    //this.loadVideoById();

    //console.log(location.pathname.split("/"));
  },
  mounted() {
    this.player.addEventListener(
      "onStateChange",
      (this as any).youtubStateChange
    );
  },
  computed: {
    loopTrigerMilliSecond(): number {
      return (this.end - this.start) * 1000;
    },
    metaTitle(): string {
      return `${this.title} | ${toHHMMSS(this.start)}~${toHHMMSS(this.end)}`;
    },
    decodedWord(): string {
      return decodeURIComponent(this.word);
    },
    description(): string {
      return `${this.decodedWord} | ${toHHMMSS(this.start)}~${toHHMMSS(
        this.end
      )}`;
    },
    img(): string {
      return `https://i.ytimg.com/vi/${this.videoId}/mqdefault.jpg`;
    },
    playerVars(): any {
      return {
        autoplay: 1,
        start: this.start,
        end: this.end
      };
    },
    isParams(): boolean {
      return !!this.videoId && !!this.start && !!this.end;
    },
    //player() {
    //  YouTubeIframeLoader.load((YT: any) => {
    //    const player = new YT.Player("player", {
    //      //startSeconds: '1999',
    //      //height: '390',
    //      //width: '640',
    //      videoId: this.videoId,
    //      //videoId: "Vw-tayLQLuQ",
    //      events: {}
    //    });
    //  });
    //},
    player(): any {
      const youtube: any = this.$refs.youtube;
      //console.log("this.$refs.youtube", this.$refs.youtube);
      console.log("xxxxx jjjjjjjj", this.$refs.j);
      console.log("xxxxx videoData", this.$refs.videoData);

      return youtube.player;
    }
  },
  methods: {
    //createFrame() {
    //  return new YT.Player("ytplayer", {
    //    height: "285",
    //    width: "480",
    //    events: {
    //      onReady: onPlayerReady
    //    }
    //  });
    //},
    //cueVideoById() {
    //  this.player.cueVideoById({
    //    videoId: this.videoId,
    //    startSeconds: 20,
    //    endSeconds: 30
    //  });
    //},
    youtubStateChange(youtubeState: object) {
      console.log("youtubeState:", youtubeState);
    },
    seekTo() {
      this.player.seekTo(this.start);
    },
    playing() {
      console.log("playing", this.loopTrigerMilliSecond);
      setTimeout(this.seekTo, this.loopTrigerMilliSecond);
    },
    playVideo() {
      this.player.playVideo();
    },
    loadVideoById() {
      //console.log("loadVideoById this.player", this.player);
      //console.log("loadVideoById this.player", this.videoId);
      //this.player.loadVideoById({
      //  videoId: this.videoId,
      //  startSeconds: 20,
      //  endSeconds: 30
      //});
    },
    async ready() {
      console.log("ready this.player", this.player);
      console.log("ready this.player getVideoData", this.player.getVideoData);

      console.log(
        "ready this.player getDuration",
        await this.player.getDuration()
      );

      const playerDom = await this.player.getIframe();
      console.log("playerDom", playerDom);
      console.log(
        "ready this.player getIframe",
        playerDom.querySelector("iframe")
      );
      this.playVideo();
      //this.loadVideoById();
      //this.cueVideoById();
    },
    ended() {
      //console.log("ended");
      //this.player.seekTo(this.start);
    },
    error(e: any) {
      //console.log("error", e);
    }
  }
});
</script>
<style>
iframe {
  width: 100%;
  max-width: 800px; /* Also helpful. Optional. */
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

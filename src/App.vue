<template>
  <div id="app">
    <div id="nav">
      <h1>22xxxxxxxxxxxx</h1>
      <!-- <div id="player" /> -->
      <div v-if="isParams">
        <youtube
          :video-id="videoId"
          :player-vars="playerVars"
          @ready="ready"
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
import { toSecond, getParam } from "@/util/index";
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
      title: "My Title22",
      description: "sdsdsdsdsd",
      videoId: "",
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
        inner: (this as any).title
      };
    },
    meta: function() {
      return [
        { property: "og:title", content: (this as any).title + " | subtitle" },
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

    //this.loadVideoById();

    //console.log(location.pathname.split("/"));
  },
  computed: {
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
      //console.log("xxxxx youtube", youtube);
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
    ready() {
      //console.log("ready");
      //console.log("ready this.player", this.player);
      this.playVideo();
      //this.loadVideoById();
      //this.cueVideoById();
    },
    ended() {
      this.player.seekTo(this.start);
    },
    error(e: any) {
      //console.log("error", e);
    }
  }
});
</script>
<style>
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

<template>
  <div id="app">
    <div id="nav">
      <!-- <h1>ver14</h1> -->

      <!-- <div id="player" /> -->
      <div v-if="isParams">
        <h1 class="itc-kabel">{{this.description}}</h1>
        <div id="player2" />
        <!-- <youtube
          :video-id="videoId"
          :player-vars="playerVars"
          @ready="ready"
          @playing="playing"
          @ended="ended"
          @error="error"
          ref="youtube"
        /> -->
      </div>
      <div v-else>
        <GenerateUrl />

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
import GenerateUrl from "@/components/GenerateUrl.vue";
//const YouTubeIframeLoader = require("youtube-iframe");
import YouTubeIframeLoader from "youtube-iframe";
Vue.use(VueYoutube);
Vue.use(VueHead);
export default Vue.extend({
  components: {
    GenerateUrl
    //VueYoutube
  },
  data() {
    return {
      title: "Loop Youtube",
      timeupdater: Object,
      //description: "sdsdsdsdsd",
      videoId: "",
      word: "",
      playingTime: 0,
      start: 0,
      end: 0,
      videotime: 0
      //duration: 0,
      //currentLoopCount: 0
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
    this.videoId = getParam("v");
    this.start = toSecond(getParam("s"));
    this.end = toSecond(getParam("e"));
    this.word = getParam("w");
    this.player2();
  },
  computed: {
    endPlus1(): number {
      return this.end + 1;
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
        //controls: 0,
        player3: Object,
        rel: 0,
        autoplay: 1,
        enablejsapi: 1,
        fs: 0,
        playsinline: 1,
        ivLoadPolicy2: 1,
        //playlist: this.videoId,
        //muted: 1,
        //loop: 1,
        start: this.start,
        end: this.end
      };
    },
    isParams(): boolean {
      return !!this.videoId && !!this.start && !!this.end;
    },
    player(): any {
      const youtube: any = this.$refs.youtube;
      return youtube.player;
    }
  },
  methods: {
    player2() {
      YouTubeIframeLoader.load((YT: any) => {
        const player = new YT.Player("player2", {
          //startSeconds: '1999',
          //height: '390',
          //width: '640',
          videoId: this.videoId,
          //videoId: "Vw-tayLQLuQ",
          events: {
            onReady: () => {
              (this as any).player3 = player;
              this.playingTime = this.start;
              (this as any).player3.loadVideoById({
                videoId: this.videoId,
                //videoId: "Vw-tayLQLuQ",
                startSeconds: this.start || 0,
                endSeconds: this.endPlus1 || player.getDuration(),
                playerVars: {
                  start: this.start,
                  end: this.endPlus1,
                  playsinline: 1,
                  loop: 1, // ループの設定
                  playlist: this.videoId // 再生する動画のリスト
                }
                //startSeconds: hmsToSecondsOnly(this.props.start_time) || 0,
                //endSeconds: hmsToSecondsOnly(this.props.end_time) || 100
              });
            },
            onStateChange: e => {
              //switch(e.data){
              //    case YT.PlayerState.ENDED:
              //       s+=" / YT.PlayerState.ENDED";
              //       break;
              //    case YT.PlayerState.PLAYING:
              //       s+=" / YT.PlayerState.PLAYING";
              //       break;
              //    case YT.PlayerState.PAUSED:
              //       s+=" / YT.PlayerState.PAUSED";
              //       break;
              //    case YT.PlayerState.BUFFERING:
              //       s+=" / YT.PlayerState.BUFFERING";
              //       break;
              //    case YT.PlayerState.CUED:
              //       s+=" / YT.PlayerState.CUED";
              //       break;
              // }
              //let timeupdater;
              if (e.data == YT.PlayerState.ENDED) {
                this.clearTimeInterval();
              } else if (e.data == YT.PlayerState.PLAYING) {
                const updateTime = this.updateTime;
                (this as any).timeupdater = setInterval(function() {
                  updateTime();
                }, 1000);
              } else if (e.data == YT.PlayerState.PAUSED) {
                this.clearTimeInterval();
              }
            }
          }
        });
      });
    },
    clearTimeInterval() {
      clearInterval((this as any).timeupdater);
    },
    updateTime() {
      const player = (this as any).player3;
      const oldTime = this.videotime;
      if (player && player.getCurrentTime) {
        this.videotime = player.getCurrentTime();
      }
      if (this.videotime !== oldTime) {
        this.onProgress(this.videotime);
      }
    },
    onProgress(currentTime) {
      if (Math.floor(currentTime) == this.end) {
        this.seekTo();
        this.clearTimeInterval();
      }
    },
    playVideo() {
      this.player.playVideo();
    },
    seekTo(): void {
      (this as any).player3.seekTo(this.start);
    },
    ended() {
      this.seekTo();
    },
    error(e: any) {
      //console.log("error", e);
    },
    onPlayerStateChange(YT, evt) {
      console.log("onPlayerStateChange evt", evt);
    }
  }
});
</script>
<style>
.itc-kabel {
  font-family: ITCKabel;
}
.line {
  border-bottom: 2px solid #fff;
}
#app {
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #fff;
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
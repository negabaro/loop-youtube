<template>
  <div id="app">
    <div id="nav">
      <h1>ver13</h1>
      <h1>{{this.description}}</h1>
      <!-- <div id="player" /> -->
      <div v-if="isParams">
        <iframe
          src="https://player.vimeo.com/video/342787403?playsinline=1"
          width="640"
          height="360"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>

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
    console.log("created");
    //setInterval(console.log(" created setInterval"), 100);

    //const timeupdater = setInterval(console.log(" created setInterval!"), 100); //dame
    //const timeupdater = setInterval(function() {
    //  console.log("ほげもげタイマー起動！");
    //}, 1000);

    //setInterval(function() {
    //  console.log("ほげもげタイマー起動！");
    //}, 1000);

    //setInterval(console.log(" created setInterval!"), 100); //dame

    //console.log("timeupdater", timeupdater);

    //const params = location.pathname.split("/");
    this.videoId = getParam("v");
    this.start = toSecond(getParam("s"));
    this.end = toSecond(getParam("e"));
    this.word = getParam("w");
    this.player2();
    //console.log("xx this.word", this.word);
    //this.loadVideoById();
    //console.log(location.pathname.split("/"));
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },

  beforeMount() {
    console.log("beforeMount");
  },
  computed: {
    endPlus1(): number {
      return this.end + 1;
    },
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
      //console.log("xxxxx jjjjjjjj", this.$refs.j);
      //console.log("xxxxx videoData", this.$refs.videoData);
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
              console.log("player3", (this as any).player3);
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
              //setInterval("this.updateTime(player)", 100);
              //setInterval(console.log("setInterval"), 100);
            },
            onStateChange: e => {
              //this.onPlayerStateChange(YT, e);
              console.log("e.data", e.data);
              //let done = false;
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
                console.log("YT.PlayerState.END timeupdater", this.timeupdater);
                this.clearTimeInterval();
                //setTimeout(this.seekTo, 1000);
                //player.seekTo(this.start);

                //player.loadVideoById({
                //  videoId: this.videoId,
                //  startSeconds: this.start || 0,
                //  endSeconds: this.end || player.getDuration()
                //  //startSeconds: hmsToSecondsOnly(this.props.start_time) || 0,
                //  //endSeconds: hmsToSecondsOnly(this.props.end_time) || 100
                //});
                //} else if (e.data == YT.PlayerState.PLAYING && !done) {
              } else if (e.data == YT.PlayerState.PLAYING) {
                //debugger;
                console.log("YT.PlayerState.PLAYING", (this as any).player3);
                //setTimeout(this.seekTo2, 1000);
                //const player = (this as any).player3;
                //setInterval("this.updateTime", 100); //dame

                const updateTime = this.updateTime;
                (this as any).timeupdater = setInterval(function() {
                  //console.log("ほげもげタイマー起動！");
                  updateTime();
                }, 1000);

                //setInterval(console.log("setInterval"), 100);
                //setTimeout(this.seekTo, this.loopTrigerMilliSecond);
                //done = true;
              } else if (e.data == YT.PlayerState.PAUSED) {
                console.log(
                  "YT.PlayerState.PAUSED timeupdater",
                  this.timeupdater
                );
                this.clearTimeInterval();
              }
            }
          }
        });
      });
    },
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
    clearTimeInterval() {
      clearInterval((this as any).timeupdater);
    },
    updateTime() {
      const player = (this as any).player3;
      console.log("updateTime player", player);
      const oldTime = this.videotime;
      if (player && player.getCurrentTime) {
        this.videotime = player.getCurrentTime();
      }
      if (this.videotime !== oldTime) {
        this.onProgress(this.videotime);
      }
    },
    onProgress(currentTime) {
      console.log("onProgress", `${Math.floor(currentTime)} - ${this.end}`);
      if (Math.floor(currentTime) == this.end) {
        console.log(
          "match onProgress",
          `${Math.floor(currentTime)} - ${this.end}`
        );
        this.seekTo();
        this.clearTimeInterval();
        //timeupdater;
      }
      //if (currentTime > 20) {
      //  console.log("the video reached 20 seconds!");
      //}
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
    ready() {
      //console.log("ready this.player", this.player);
      //console.log("ready this.player getVideoData", this.player.getVideoData);
      //console.log(
      //  "ready this.player getDuration",
      //  await this.player.getDuration()
      //);
      //const playerDom = await this.player.getIframe();
      //console.log("playerDom", playerDom);
      //console.log(
      //  "ready this.player getIframe",
      //  playerDom.querySelector("iframe")
      //);
      //this.playVideo();
      //this.player.mute();
      //this.player.setVolume(0);
      //player.setSize(1920, 1080);
      //this.player.setLoop(true);
      //this.loadVideoById();
      //this.cueVideoById();
    },
    playing() {
      //setTimeout(this.seekTo, this.loopTrigerMilliSecond);
      //this.player.setVolume(100);
      //setTimeout(this.seekTo, 1000);
    },
    seekTo(): void {
      console.warn("seekTo");
      (this as any).player3.seekTo(this.start);
    },
    seekTo2() {
      console.log("seekTo2", this.playingTime);
      this.playingTime += 1;
    },
    ended() {
      this.seekTo();
      //this.player.seekTo(this.start);
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
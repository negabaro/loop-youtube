<template>
  <div>
    <div id="player2" />
    <vueSlider />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import YouTubeIframeLoader from "youtube-iframe";
import vueSlider from "@/components/vueSlider.vue";
import { toSecond, toHHMMSS, getParam } from "@/util/index";
import {
  SET_PLAYER,
  SET_END_TIME
  //SET_START_TIME,
} from "@/store/Video/mutations";
//import { toSecond, toHHMMSS, getParam } from "@/util/index";
export default Vue.extend({
  components: {
    vueSlider
  },
  //name: "youtube",
  //props: {
  //  videoId: String,
  //  start: Number,
  //  end: Number,
  //  word: String
  //},
  data() {
    return {
      title: "Loop Youtube",
      timeupdater: Object,
      //description: "sdsdsdsdsd",
      //videoId: "",
      //word: "",
      playingTime: 0,
      //start: 0,
      //end: 0,
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
  created() {
    console.log("xxx videoId:", this.videoId);
    this.player2();
    //const params = location.pathname.split("/");
    //(this as any).videoId = getParam("v");
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
              this.$store.commit(`video/${SET_PLAYER}`, player);
              let resultEnd;
              if (this.end) {
                console.log("this.end!", this.end);
                resultEnd = this.endPlus1;
                this.$store.commit(`video/${SET_END_TIME}`, this.end);
              } else {
                resultEnd = player.getDuration() - 1;
                //console.log("player.getDuration()!", player.getDuration());
                this.$store.commit(`video/${SET_END_TIME}`, resultEnd);
              }

              //this.$store.commit(`video/${SET_PLAYER}`, this.player);
              (this as any).player3 = player;
              this.playingTime = this.start;
              (this as any).player3.loadVideoById({
                videoId: this.videoId,
                //videoId: "Vw-tayLQLuQ",
                startSeconds: this.start || 0,
                //endSeconds: this.endPlus1 || player.getDuration(),
                endSeconds: resultEnd,
                playerVars: {
                  start: this.start,
                  end: resultEnd,
                  //end: this.endPlus1,
                  color: "white",
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
    //ended() {
    //  this.seekTo();
    //},
    error(e: any) {
      //console.log("error", e);
    },
    onPlayerStateChange(YT, evt) {
      console.log("onPlayerStateChange evt", evt);
    },
    //isParams(): boolean {
    //  return !!this.videoId && !!this.start && !!this.end;
    //},
    ready(): void {
      this.player.playVideo();
    },
    playing(): void {
      console.log("playing");
      //setTimeout(this.seekTo, this.loopTrigerMilliSecond);
    },
    ended() {
      console.log("ended");
      //this.seekTo();
    }
    //seekTo(): void {
    //  console.warn("seekTo");
    //  this.player.seekTo(this.start);
    //}
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
    },
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
    loopTrigerMilliSecond(): number {
      return (this.end - this.start) * 1000;
    }
  }
});
</script>
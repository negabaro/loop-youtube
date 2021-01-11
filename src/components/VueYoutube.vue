<template>
  <div class="youtube">
    <youtube
      :fitParent="fitParentStatus"
      :resize="resizeStatus"
      :video-id="videoId"
      :player-vars="playerVars"
      @ready="ready"
      @playing="playing"
      @ended="ended"
      ref="youtube"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueYoutube from "vue-youtube";
Vue.use(VueYoutube);
import { toHHMMSS } from "@/util/index";
import {
  SET_PLAYER,
  SET_VIDEO_ID,
  SET_END_TIME,
  SET_DURATION
  //SET_START_TIME,
} from "@/store/Video/mutations";
//import { toSecond, toHHMMSS, getParam } from "@/util/index";
export default Vue.extend({
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
      player3: Object,
      //description: "sdsdsdsdsd",
      //videoId: "",
      //word: "",
      playingTime: 0,
      //start: 0,
      //end: 0,
      videotime: 0,
      vueSliderStatus: false,
      timeupdater: Object,
      callbackId: Object,
      cancelStatus: false,
      fitParentStatus: true,
      resizeStatus: true
    };
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
        //player3: Object,
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
    player(): any {
      const youtube: any = this.$refs.youtube;
      return youtube.player;
    },
    videoId(): string {
      return this.$store.getters["video/getVideoId"];
    },
    fullMode(): string {
      return this.$store.getters["video/getFullMode"];
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
  },
  methods: {
    updateTime(timeStamp) {
      //console.log("updateTime");
      const player = (this as any).player3;
      const oldTime = this.videotime;
      if (player && player.getCurrentTime) {
        this.videotime = player.getCurrentTime();
      }
      if (this.videotime !== oldTime) {
        this.onProgress(this.videotime);
      }
      if (!this.cancelStatus) {
        (this as any).callbackId = requestAnimationFrame(this.updateTime);
      }
    },
    onProgress(currentTime) {
      if (Math.floor(currentTime) == this.end) {
        this.seekTo();
        //this.clearTimeInterval();
        this.cancelAnimationFrame();
      }
    },
    cancelAnimationFrame() {
      //console.log("cancelAnimationFrame", (this as any).callbackId);
      cancelAnimationFrame((this as any).callbackId);
    },
    isParams(): boolean {
      return !!this.videoId && !!this.start && !!this.end;
    },
    playVideo() {
      this.player.playVideo();
    },
    ready(): void {
      this.$store.commit(`video/${SET_VIDEO_ID}`, this.videoId);
      this.$store.commit(`video/${SET_PLAYER}`, this.player);
      this.$store.commit(`video/${SET_DURATION}`, this.player.getDuration());
      this.player.playVideo();
      this.player.addEventListener("onStateChange", this.youtubStateChange);
    },
    playing(): void {
      console.log("playing");
      //setTimeout(this.seekTo, this.loopTrigerMilliSecond);
      //this.seekTo();
    },
    ended(e: any) {
      console.log("ended", e);
      this.player.seekTo(21);
      //this.seekTo();
    },
    seekTo(): void {
      this.player.seekTo(this.start);
    },
    loadVideoById() {
      this.player.loadVideoById({
        videoId: this.videoId,
        startSeconds: this.start,
        endSeconds: this.end
      });
    },
    youtubStateChange(YT, e) {
      if (e.data == YT.PlayerState.ENDED) {
        //this.clearTimeInterval();
        this.cancelStatus = true;
        this.cancelAnimationFrame();
      } else if (e.data == YT.PlayerState.PLAYING) {
        this.cancelStatus = false;
        const updateTime = this.updateTime;
        requestAnimationFrame(updateTime);

        //(this as any).timeupdater = setInterval(function() {
        //  updateTime();
        //  console.log("updateTime!!!");
        //}, 1000);
      } else if (e.data == YT.PlayerState.PAUSED) {
        this.cancelStatus = true;
        //this.clearTimeInterval();
        this.cancelAnimationFrame();
      }
    }
  }
});
</script>

<template>
  <vue-slider
    ref="slider"
    @change="handleChange"
    class="vue-slider-custom"
    v-model="value"
    :min="0"
    :max="duration"
    :interval="interval"
    :tooltip="'always'"
    type="MinRange"
    :process="process"
    :tooltip-formatter="Tformatter"
  >
  </vue-slider>
</template>

<script lang="ts">
import Vue from "vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import { SET_END_TIME, SET_START_TIME } from "@/store/Video/mutations";
export default Vue.extend({
  components: {
    VueSlider
  },
  data() {
    return {
      status: false,
      interval: 1,
      value: null,
      //value: [0, 7],
      Tformatter: val => {
        const min = Math.floor(val / 60);
        const sec = val % 60 > 9 ? val % 60 : "0" + (val % 60);
        return min + ":" + sec;
      },
      process: dotsPos => [
        [dotsPos[0], dotsPos[1], { backgroundColor: "pink" }]
      ]
    };
  },
  //props: {
  //  msg: String
  //},
  created() {
    this.value = this.startEnd;

    //console.log("created this.start", this.start);
    //console.log("created this.end", this.end);
    //console.log(
    //  "created (this.end - this.start)% interval  ",
    //  (this.end - this.start) % this.interval
    //);
    //this.value = [this.start, this.end];
    //const params = location.pathname.split("/");
    //(this as any).videoId = getParam("v");
  },
  mounted() {
    //this.$store.watch(
    //  (state, getters) => getters["video/getEndTime"],
    //  (newValue, oldValue) => {
    //    console.log("getEndTime changed! %s => %s", oldValue, newValue);
    //  }
    //);
    //console.log("mounted this.start", this.start);
    //console.log("mounted this.end", this.end);
  },
  methods: {
    handleChange(e) {
      //console.log("handleChange", e[0]);
      this.$store.commit(`video/${SET_START_TIME}`, e[0]);
      this.$store.commit(`video/${SET_END_TIME}`, e[1]);
      this.loadVideoById();
    },
    seekTo(): void {
      (this as any).player.seekTo(this.start);
    },
    loadVideoById() {
      const player = (this as any).player;
      player.loadVideoById({
        videoId: this.videoId,
        width: player.getIframe().parentElement.offsetWidth,
        //videoId: "Vw-tayLQLuQ",
        startSeconds: this.start || 0,
        //endSeconds: this.endPlus1 || player.getDuration(),
        endSeconds: this.end,
        playerVars: {
          start: this.start,
          end: this.end,
          //end: this.endPlus1,
          color: "white",
          playsinline: 1,
          loop: 1, // ループの設定
          playlist: this.videoId // 再生する動画のリスト
        }
        //startSeconds: hmsToSecondsOnly(this.props.start_time) || 0,
        //endSeconds: hmsToSecondsOnly(this.props.end_time) || 100
      });
    }
  },
  computed: {
    startEnd(): any {
      const start = this.$store.getters["video/getStartTime"];
      const end = this.$store.getters["video/getEndTime"];
      if (!end) {
        const end = this.$store.getters["video/getDuration"];
      }
      return [start, end];
    },
    start(): number {
      return this.$store.getters["video/getStartTime"];
    },
    end(): number {
      //console.log("vueSlider:", this.$store.getters["video/getEndTime"]);
      return this.$store.getters["video/getEndTime"];
    },
    player(): any {
      return this.$store.getters["video/getPlayer"];
    },
    duration(): number {
      //console.log("vueSlider:", this.$store.getters["video/getDuration"]);
      return this.$store.getters["video/getDuration"];
    },
    videoId(): string {
      return this.$store.getters["video/getVideoId"];
    }
  }
});
</script>
<style scoped lang="scss">
.vue-slider-custom {
  padding: 10px 19vw !important;
}
</style>
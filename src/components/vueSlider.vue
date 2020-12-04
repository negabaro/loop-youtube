<template>
  <vue-slider
    ref="slider"
    class="vue-slider-custom"
    v-model="value"
    :min="start"
    :max="end"
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

export default Vue.extend({
  components: {
    VueSlider
  },
  data() {
    return {
      interval: 1,
      value: [0, 5],
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
    //console.log("mounted this.start", this.start);
    //console.log("mounted this.end", this.end);
  },
  computed: {
    start(): number {
      return this.$store.getters["video/getStartTime"];
    },
    end(): number {
      return this.$store.getters["video/getEndTime"];
    }
  }
});
</script>
<style scoped lang="scss">
.vue-slider-custom {
  padding: 10px 19vw !important;
}
</style>
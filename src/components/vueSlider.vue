<template>
  <vue-slider
    ref="slider"
    v-model="value"
    :min="15"
    :max="360"
    :interval="1"
    :tooltip="'always'"
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
    //const params = location.pathname.split("/");
    //(this as any).videoId = getParam("v");
  }
});
</script>
<style scoped lang="scss">
</style>
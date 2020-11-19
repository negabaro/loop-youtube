import Vue from "vue";
import Vuex from "vuex";
import { video } from "@/store/Video";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    version: "1.0.0"
  },
  modules: {
    video
  }
});

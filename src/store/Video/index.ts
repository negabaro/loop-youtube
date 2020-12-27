import { Module } from "vuex";
import { VideoState, RootState } from "@/store/types";
import getters from "@/store/Video/getters";
import mutations from "@/store/Video/mutations";
//import actions from "@/src/store/Video/actions";

const state: VideoState = {
  startTime: 0,
  endTime: 0,
  duration: 0,
  videoId: "",
  word: "",
  player: Object,
  loadingStatus: false,
  showVideoStatus: false
};

export const video: Module<VideoState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations
  //actions
};

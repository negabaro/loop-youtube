import { GetterTree } from "vuex";
import { VideoState, RootState } from "@/store/types";

const getters: GetterTree<VideoState, RootState> = {
  getVideoId: state => {
    return state.videoId;
  },
  getFullMode: state => {
    return state.fullMode;
  },
  getStartTime: state => {
    return state.startTime;
  },
  getEndTime: state => {
    return state.endTime;
  },
  getDuration: state => {
    return state.duration;
  },
  getWord: state => {
    return state.word;
  },
  getPlayer: state => {
    return state.player;
  },
  getLoadingStatus: state => {
    return state.loadingStatus;
  },
  getShowVideoStatus: state => {
    return state.showVideoStatus;
  }
  //getDuration: state => {
  //  //console.log("getitems", state.videoId);
  //  if (!!state.duration) {
  //    return state.duration;
  //  } else {
  //    return 0;
  //  }
  //},
  //getLoopCount: state => {
  //  //console.log("getitems", state.videoId);
  //  return state.loopCount;
  //}
};

export default getters;

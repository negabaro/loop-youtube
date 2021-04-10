import { MutationTree } from "vuex";
import { VideoState } from "@/store/types";
//import { YTDurationToSeconds } from "@/lib/util/youtube";
//import { toHHMMSS, toSecond } from "@/lib/util/index";

export const SET_PLAYER = "setPlayer";
export const SET_VIDEO_ID = "setVideoId";
export const SET_START_TIME = "setStartTime";
export const SET_END_TIME = "setEndTime";
export const SET_DURATION = "setDuration";
export const SET_WORD = "setWord";
export const SET_AUTO_PLAY_STATUS = "setAutoPlayStatus";
export const SET_SHOW_VIDEO_STATUS = "setShowVideoStatus";
export const SET_LOADING_STATUS = "setLoadingStatus";
export const SET_FULL_MODE = "setFullMode";
//export const SET_DURATION = "setDuration";
//export const SET_LOOP_COUNT = "setLoopCount";

const mutations: MutationTree<VideoState> = {
  //setQuestionType: (state, type: Number) => {
  //  state.questions[0].type = type;
  //},
  setVideoId: (state, videoId) => {
    state.videoId = videoId;
  },
  setFullMode: (state, fullMode) => {
    state.fullMode = fullMode;
  },
  setStartTime: (state, startTime) => {
    //state.startTime = toHHMMSS(startTime);
    if (startTime) {
      state.startTime = startTime;
    }
  },
  setEndTime: (state, endTime) => {
    //state.endTime = toHHMMSS(endTime);
    state.endTime = endTime;
  },
  setDuration: (state, duration) => {
    //state.endTime = toHHMMSS(endTime);
    state.duration = duration;
  },
  setWord: (state, word) => {
    //state.endTime = toHHMMSS(endTime);
    state.word = word;
  },
  setPlayer: (state, player) => {
    state.player = player;
  },
  setShowVideoStatus: (state, showVideoStatus) => {
    state.showVideoStatus = showVideoStatus;
  },
  setAutoPlayStatus: (state, autoPlayStatus) => {
    state.autoPlayStatus = autoPlayStatus;
  },
  setLoadingStatus: (state, loadingStatus) => {
    state.loadingStatus = loadingStatus;
  }
  //setLoopCount: (state, loopCount) => {
  //  state.loopCount = loopCount;
  //},
  //setDuration: (state, duration) => {
  //  console.log("setDuration", duration);
  //  //console.log("getitems", state.videoId);
  //  state.duration = YTDurationToSeconds(duration);
  //}
};

export default mutations;

export interface VideoState {
  startTime: Number;
  endTime: Number;
  duration: Number;
  videoId: String;
  word: String;
  player: Object;
  fullMode: boolean;
  loadingStatus: boolean;
  autoPlayStatus: boolean;
  showVideoStatus: boolean;
}

export interface RootState {
  version: string;
}

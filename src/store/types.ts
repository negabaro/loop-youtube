export interface VideoState {
  startTime: Number;
  endTime: Number;
  videoId: String;
  word: String;
  player: Object;
  loadingStatus: boolean;
  showVideoStatus: boolean;
}

export interface RootState {
  version: string;
}

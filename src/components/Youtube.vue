<template>
  <div class="youtube">
    <!-- <h1>{{this.description}}</h1> -->
    <!-- <div id="player2" /> -->
    <!-- <div id="player" /> -->
    <!-- <iframe
        src="https://player.vimeo.com/video/342787403?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1"
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
        width="1400"
        height="900"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      > 
      </iframe> 
    <iframe
      src="https://www.youtube.com/embed/-ePDPGXkvlw?autoplay=1"
      allow="autoplay; fullscreen"
    ></iframe>
    <iframe
      type="text/html"
      src="https://www.youtube.com/embed/-ePDPGXkvlw?autoplay=1"
      frameborder="0"
      allow="autoplay"
    ></iframe>-->
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
    <!-- 
        <iframe src="https://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1&rel=0"></iframe>
        <iframe
          src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
          allow='autoplay'
        ></iframe>
        <iframe
          src="http://www.youtube.com/embed/xzvScRnF6MU?autoplay=1"
          width="960"
          height="447"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <iframe
          width="420"
          height="345"
          src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <iframe
          frameborder="0"
          allowfullscreen="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="YouTube video player"
          width="563"
          height="316.6875"
          src="https://www.youtube.com/embed/ewGygwTgfh8?autoplay=1&amp;playlist=ewGygwTgfh8&amp;muted=1&amp;start=40&amp;end=57&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A8080&amp;widgetid=1"
          id="widget2"
        ></iframe>
        <button @click="onClick">play</button>
        -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueYoutube from "vue-youtube";
Vue.use(VueYoutube);

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
      fitParentStatus: true,
      resizeStatus: true
    };
  },

  created() {
    console.log("xxx videoId:", this.videoId);
    //const params = location.pathname.split("/");
    //(this as any).videoId = getParam("v");
  },
  computed: {
    videoId(): string {
      return this.$store.getters["video/getVideoId"];
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
    },
    player() {
      //return (this.$refs.youtube as any).player;
      const youtube: any = this.$refs.youtube;
      return youtube.player;
    },
    playerVars(): any {
      return {
        //controls: 0,
        //rel: 0,
        autoplay: 1,
        playlist: this.videoId,
        muted: 1,
        loop: 1,
        start: this.start,
        end: this.end
      };
    }
  },
  methods: {
    isParams(): boolean {
      return !!this.videoId && !!this.start && !!this.end;
    },
    ready(): void {
      this.player.playVideo();
    },
    playing(): void {
      //setTimeout(this.seekTo, this.loopTrigerMilliSecond);
    },
    ended() {
      this.seekTo();
    },
    seekTo(): void {
      this.player.seekTo(this.start);
    }
  }
});
</script>

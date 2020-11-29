<template>
  <div class="loaders">

    <div class="loftloader-wrapper pl-wave">
      <div class="loader">
        <span></span>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "loading",
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
$primary-color: #fff;

@mixin flexbox {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

@mixin flex-vertical {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-flow: column wrap;
  -ms-flex-flow: column wrap;
  flex-flow: column wrap;
  -webkit-justify-content: center;
  justify-content: center;
}

@mixin flex-horizontal {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
}

@mixin transform($transform) {
  -webkit-transform: $transform;
  -ms-transform: $transform;
  transform: $transform;
}

@mixin animation($animation) {
  -webkit-animation: $animation;
  animation: $animation;
}

body {
  font: 100% Helvetica, sans-serif;
  color: #333;
  padding: 0;
  margin: 0;
  background: #f6f6f6;
  text-align: center;
}

h1,
p.sub-title {
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.loaders {
  & {
    margin-top: 50px;
  }
  .loader {
    position: relative;
    margin: 0 auto;
  }

  /* Wave */
  .pl-wave .loader {
    width: 50px;
    height: 30px;

    span,
    &:before,
    &:after {
      position: absolute;
      display: block;
      width: 6px;
      height: 100%;
      background: $primary-color;
    }

    span {
      top: 50%;
      left: 50%;
      @include transform(translate(-50%, -50%));
      @include animation(wave 0.9s linear infinite 0.3s);
    }

    &:before,
    &:after {
      content: "";
    }

    &:before {
      top: 50%;
      left: 0;
      @include transform(translate(0, -50%));
      @include animation(wave 0.9s linear infinite);
    }

    &:after {
      top: 50%;
      right: 0;
      @include transform(translate(0, -50%));
      @include animation(wave 0.9s linear infinite 0.6s);
    }
  }
}

@-webkit-keyframes wave {
  0% {
    height: 100%;
  }
  40% {
    height: 10%;
  }
  80% {
    height: 100%;
  }
  100% {
    height: 100%;
  }
}

@keyframes wave {
  0% {
    height: 100%;
  }
  40% {
    height: 10%;
  }
  80% {
    height: 100%;
  }
  100% {
    height: 100%;
  }
}
</style>
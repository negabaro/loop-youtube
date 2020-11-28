<template>
  <div class="loaders">
    <ol>

      <li>
        <div class="loftloader-wrapper pl-wave">
          <div class="loader">
            <span></span>
          </div>
        </div>
      </li>

    </ol>
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
$primary-color: #248acc;

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

h1,
.loaders {
  margin-top: 50px;
}

.loaders {
  ol {
    padding: 0;
    margin-left: 2.5vw;
    list-style: none;
    @include flexbox;
    @include flex-horizontal;

    li {
      position: relative;
      width: 31vw;
      height: 31vw;
      margin: 0 1vw 1vw 0;
      background: #fff;
      transition: background 0.35s;

      @include flexbox;
      @include flex-vertical;

      &:nth-child(3n) {
        margin-right: 0;
      }

      @media screen and (max-width: 768px) {
        & {
          width: 46vw;
          height: 46vw;
          margin: 0 3vw 3vw 0;
        }

        &:nth-child(2n) {
          margin-right: 0;
        }

        &:nth-child(3) {
          margin-right: 3vw;
        }
      }

      &:before {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        display: block;
        width: 31vw;
        height: 28vw;
        content: "";
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);

        @media screen and (max-width: 768px) {
          & {
            width: 46vw;
            height: 43vw;
          }
        }
      }

      .loader {
        position: relative;
        margin: 0 auto;
      }

      /* Spinning Sun */
      .pl-sun .loader {
        width: 50px;
        height: 50px;

        span,
        span:before {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          background: $primary-color;
          opacity: 0.9;
          transform-origin: 50% 50%;
        }

        span {
          width: 50px;
          height: 50px;
          @include animation(spinReturn 4s ease infinite);

          &:before {
            width: 100%;
            height: 100%;
            content: "";
            @include transform(rotate(45deg));
          }
        }
      }

      /* Luminous Circles */
      .pl-circles .loader {
        width: 100px;
        height: 60px;

        span,
        &:before,
        &:after {
          position: absolute;
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          opacity: 0.2;
          background: $primary-color;
        }

        span {
          top: 50%;
          left: 50%;
          @include transform(translate(-50%, -50%));
          @include animation(lightUp 1.5s linear infinite 0.5s);
        }

        &:before,
        &:after {
          content: "";
        }

        &:before {
          top: 50%;
          left: 0;
          @include transform(translate(0, -50%));
          @include animation(lightUp 1.5s linear infinite);
        }

        &:after {
          top: 50%;
          right: 0;
          @include transform(translate(0, -50%));
          @include animation(lightUp 1.5s linear infinite 1s);
        }
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

      /* Spinning Square */
      .pl-square .loader {
        width: 50px;
        height: 50px;
        transform-origin: 50% 50%;
        @include animation(spinReturn 4s ease infinite);

        span {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 100%;
          border: 4px solid $primary-color;
          transform-origin: 50% 50%;
          @include transform(rotate(45deg));
        }
      }

      /* Drawing Frame */
      .pl-frame .loader {
        width: 60px;
        height: 60px;

        span {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 100%;

          &:before,
          &:after {
            position: absolute;
            width: 4px;
            height: 100%;
            background: $primary-color;
            content: "";
          }

          &:before {
            top: auto;
            right: 0;
            bottom: 0;
            @include animation(drawframeRight 4s linear infinite 0.5s);
          }

          &:after {
            top: 0;
            bottom: auto;
            left: 0;
            @include animation(drawframeLeft 4s linear infinite 1.5s);
          }
        }

        &:before,
        &:after {
          position: absolute;
          width: 100%;
          height: 4px;
          background: $primary-color;
          content: "";
        }

        &:before {
          top: 0;
          right: 0;
          left: auto;
          @include animation(drawframeTop 4s linear infinite);
        }

        &:after {
          right: auto;
          bottom: 0;
          left: 0;
          @include animation(drawframeBottom 4s linear infinite 1s);
        }
      }

      /* Image Loading */
      .pl-imgloading .loader {
        width: 76px;
        height: auto;

        span {
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 3;
          display: block;
          width: 100%;
          height: 0%;
          background: url(http://www.loftocean.com/wp-content/uploads/2016/06/loftloader-logo.png)
            center bottom;
          background-repeat: no-repeat;
          background-size: cover;
          @include animation(imgLoading 6s linear infinite);
          transition: 0s;
        }

        img {
          position: relative;
          z-index: 1;
          display: block;
          width: 100%;
          height: auto;
          opacity: 0.3;
        }
      }
    }

    &:after {
      display: block;
      clear: both;
      content: "";
      position: relative;
    }
  }
}

/* Animations */

@-webkit-keyframes spinReturn {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(225deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(405deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinReturn {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(225deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(405deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes lightUp {
  0% {
    opacity: 0.2;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.2;
  }
}

@keyframes lightUp {
  0% {
    opacity: 0.2;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.2;
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

@-webkit-keyframes drawframeTop {
  0% {
    right: 0;
    left: auto;
    width: 100%;
  }
  12.5% {
    right: 0;
    left: auto;
    width: 0%;
  }
  50% {
    right: auto;
    left: 0;
    width: 0%;
  }
  62.5% {
    right: auto;
    left: 0;
    width: 100%;
  }
  100% {
    right: auto;
    left: 0;
    width: 100%;
  }
}

@keyframes drawframeTop {
  0% {
    right: 0;
    left: auto;
    width: 100%;
  }
  12.5% {
    right: 0;
    left: auto;
    width: 0%;
  }
  50% {
    right: auto;
    left: 0;
    width: 0%;
  }
  62.5% {
    right: auto;
    left: 0;
    width: 100%;
  }
  100% {
    right: auto;
    left: 0;
    width: 100%;
  }
}

@-webkit-keyframes drawframeBottom {
  0% {
    right: auto;
    left: 0;
    width: 100%;
  }
  12.5% {
    right: auto;
    left: 0;
    width: 0%;
  }
  50% {
    right: 0;
    left: auto;
    width: 0%;
  }
  62.5% {
    right: 0;
    left: auto;
    width: 100%;
  }
  100% {
    right: 0;
    left: auto;
    width: 100%;
  }
}

@keyframes drawframeBottom {
  0% {
    right: auto;
    left: 0;
    width: 100%;
  }
  12.5% {
    right: auto;
    left: 0;
    width: 0%;
  }
  50% {
    right: 0;
    left: auto;
    width: 0%;
  }
  62.5% {
    right: 0;
    left: auto;
    width: 100%;
  }
  100% {
    right: 0;
    left: auto;
    width: 100%;
  }
}

@-webkit-keyframes drawframeRight {
  0% {
    top: auto;
    bottom: 0;
    height: 100%;
  }
  12.5% {
    top: auto;
    bottom: 0;
    height: 0%;
  }
  50% {
    top: 0;
    bottom: auto;
    height: 0%;
  }
  62.5% {
    top: 0;
    bottom: auto;
    height: 100%;
  }
  100% {
    top: 0;
    bottom: auto;
    height: 100%;
  }
}

@keyframes drawframeRight {
  0% {
    top: auto;
    bottom: 0;
    height: 100%;
  }
  12.5% {
    top: auto;
    bottom: 0;
    height: 0%;
  }
  50% {
    top: 0;
    bottom: auto;
    height: 0%;
  }
  62.5% {
    top: 0;
    bottom: auto;
    height: 100%;
  }
  100% {
    top: 0;
    bottom: auto;
    height: 100%;
  }
}

@-webkit-keyframes drawframeLeft {
  0% {
    top: 0;
    bottom: auto;
    height: 100%;
  }
  12.5% {
    top: 0;
    bottom: auto;
    height: 0%;
  }
  50% {
    top: auto;
    bottom: 0;
    height: 0%;
  }
  62.5% {
    top: auto;
    bottom: 0;
    height: 100%;
  }
  100% {
    top: auto;
    bottom: 0;
    height: 100%;
  }
}

@keyframes drawframeLeft {
  0% {
    top: 0;
    bottom: auto;
    height: 100%;
  }
  12.5% {
    top: 0;
    bottom: auto;
    height: 0%;
  }
  50% {
    top: auto;
    bottom: 0;
    height: 0%;
  }
  62.5% {
    top: auto;
    bottom: 0;
    height: 100%;
  }
  100% {
    top: auto;
    bottom: 0;
    height: 100%;
  }
}

@-webkit-keyframes imgLoading {
  0% {
    width: 100%;
    height: 0%;
    opacity: 1;
  }
  95% {
    width: 100%;
    height: 100%;
    opacity: 1;
  }

  100% {
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}

@keyframes imgLoading {
  0% {
    width: 100%;
    height: 0%;
    opacity: 1;
  }
  95% {
    width: 100%;
    height: 100%;
    opacity: 1;
  }

  100% {
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
</style>
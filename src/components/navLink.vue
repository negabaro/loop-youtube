<template>
  <section class="nav-link subtitle is-size-3">
    <!-- <a href="https://www.instagram.com/loop-youtube/">
      <span class="icon is-small">
        <i class="fab fa-instagram svg-inline--fa"></i>
      </span>
    </a> -->
    <!-- <a href="https://www.youtube.com/loop-youtube/">
      <span class="icon is-small">
        <i class="fab fa-youtube svg-inline--fa"></i>
      </span>
    </a> -->
    <!-- <a href="https://www.facebook.com/loop-youtube/">
      <span class="icon is-small">
        <i class="fab fa-facebook svg-inline--fa"></i>
      </span>
    </a> -->
    <a href="https://github.com/negabaro/loop-youtube">
      <span class="icon is-small">
        <i class="fab fa-github svg-inline--fa"></i>
      </span>
    </a>
    <a href="https://www.twitter.com/loop-youtube/">
      <span class="icon is-small">
        <i class="fab fa-twitter svg-inline--fa"></i>
      </span>
    </a>
    <!-- <a href="https://twitter.com/loop-youtube"><span class="icon"><svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="twitter"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="svg-inline--fa fa-twitter fa-w-16"
        >
          <path
            fill="currentColor"
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            class=""
          ></path>
        </svg></span></a>
    <a href="https://facebook.com/loop-youtube"><span class="icon">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="facebook"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          class="svg-inline--fa fa-facebook fa-w-12"
        >
          <path
            fill="currentColor"
            d="M381.9 388.2c-6.4 27.4-27.2 42.8-55.1 48-24.5 4.5-44.9 5.6-64.5-10.2-23.9-20.1-24.2-53.4-2.7-74.4 17-16.2 40.9-19.5 76.8-25.8 6-1.1 11.2-2.5 15.6-7.4 6.4-7.2 4.4-4.1 4.4-163.2 0-11.2-5.5-14.3-17-12.3-8.2 1.4-185.7 34.6-185.7 34.6-10.2 2.2-13.4 5.2-13.4 16.7 0 234.7 1.1 223.9-2.5 239.5-4.2 18.2-15.4 31.9-30.2 39.5-16.8 9.3-47.2 13.4-63.4 10.4-43.2-8.1-58.4-58-29.1-86.6 17-16.2 40.9-19.5 76.8-25.8 6-1.1 11.2-2.5 15.6-7.4 10.1-11.5 1.8-256.6 5.2-270.2.8-5.2 3-9.6 7.1-12.9 4.2-3.5 11.8-5.5 13.4-5.5 204-38.2 228.9-43.1 232.4-43.1 11.5-.8 18.1 6 18.1 17.6.2 344.5 1.1 326-1.8 338.5z"
            class=""
          ></path>
        </svg></span></a> <a href="https://www.youtube.com/channel/loop-youtube"><span class="icon"><svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="youtube"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          class="svg-inline--fa fa-youtube fa-w-18"
        >
          <path
            fill="currentColor"
            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            class=""
          ></path>
        </svg></span></a> -->
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "searchButton",
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
.nav-link {
  display: flex;
  flex-direction: row-reverse;
}
.is-size-3 {
  font-size: 2rem !important;
}
.icon {
  color: #fff;
  margin-right: 1rem;
  align-items: center;
  display: inline-flex;
  justify-content: center;
}
.svg-inline--fa {
  /* display: inline-block; */
  /* font-size: inherit; */
  height: 1em;
  vertical-align: -0.125em;
}
</style>
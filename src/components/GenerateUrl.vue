<template>
  <div class="generateUrl">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Loop Youtube
          </h1>

          <h2 class="subtitle">
            Paste a Youtube URL you want to loop below and click "Search button"
          </h2>
          <div class="search-group">
            <input
              class="search-form"
              type="text"
              placeholder="https://www.youtube.com/watch?v=9bZkp7q19f0"
            />
            <a
              href="#"
              class="button search-button"
            >Search</a>
          </div>
          <br>
          <br>
          <loading />
          <!-- <div class="line" /> -->
          <!-- <h2 class="subtitle">
            Hero subtitle
          </h2> -->

        </div>

      </div>
    </section>
    <!-- <h1>{{ msg }}</h1> -->

    <!--
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>

    <h3>Ecosystem</h3>
    <input
      type="button"
      value="Link Share"
    >
    <h3>Installed CLI Plugins</h3>

    <h3>Ecosystem</h3>
    -->

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import loading from "@/components/loading.vue";

export default Vue.extend({
  name: "generateUrl",
  components: {
    loading
    //VueYoutube
  },
  //props: {
  //  msg: String
  //},
  created() {
    //const params = location.pathname.split("/");
    //(this as any).videoId = getParam("v");
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-group {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-form {
  width: 530px;
  background: rgba(255, 255, 255, 0.5);
}
.search-button {
  margin-left: 5px;

  display: inline-block;
  position: relative;
  text-decoration: none;
  color: #f9a9ae;
  width: 120px;
  height: 58px;
  line-height: 58px;
  border-radius: 5px;
  text-align: center;
  overflow: hidden;
  font-weight: bold;
  background: linear-gradient(#fed6e3 0%, #ffaaaa 100%);
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.66);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.28);
}

.search-button:active {
  /*押したとき*/
  -webkit-transform: translateY(2px);
  transform: translateY(2px); /*沈むように*/
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
  background-image: linear-gradient(
    #fed6e3 0%,
    #ffbcbc 100%
  ); /*グラデーションを明るく*/
}
input {
  font-size: 20px;
  height: 54px;
  outline: 0;
  border: 0;
}
.title {
  font-size: 56px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

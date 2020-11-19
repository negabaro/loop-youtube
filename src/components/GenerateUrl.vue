<template>
  <div class="generateUrl">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            아이템을 추가해주세요!
          </h1>
          <h2 class="subtitle">
            Hero subtitle
          </h2>
        </div>
      </div>
    </section>
    <!-- <h1>{{ msg }}</h1> -->
    <input
      type="text"
      placeholder="https://www.youtube.com/watch?v=IQf1nTfgOCQ"
    />
    <input
      type="button"
      value="Search"
    >
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "generateUrl",
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
input {
  font-size: 20px;
  height: 54px;
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

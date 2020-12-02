import Vue from "vue";
import App from "./App.vue";
//import router from "./router";
import store from "./store";

//import { library } from "@fortawesome/fontawesome-svg-core";
//import { faCoffee } from "@fortawesome/free-solid-svg-icons";
//import { faYoutube } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

require("@/assets/sass/main.scss");

import "@fortawesome/fontawesome-free/js/fontawesome";
//import "@fortawesome/fontawesome-free/js/solid";
//import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

//library.add(faCoffee);

//Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  //router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { router } from "./router";
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = new VueRouter({ routes: router, mode: "history" });

new Vue({
  el: "#app",
  render: h => h(App),
  router: routes
});

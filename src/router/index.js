import Vue from "vue";
import VueRouter from "vue-router";
import Map from "../pages/MapPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "map",
    component: Map
  },
  {
    path: "*",
    component: Map
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;

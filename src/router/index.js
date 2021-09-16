import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Page1 from "../views/page1.vue";
import Page2 from "../views/page2.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page1",
    name: "Page1",
    component: Page1,
  },
  {
    path: "/page2",
    name: "Page2",
    component: Page2,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Counter from "@/pages/Counter.vue";
import VueUse from "@/pages/VueUse.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/counter",
    component: Counter,
  },
  {
    path: "/vue-use",
    component: VueUse,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

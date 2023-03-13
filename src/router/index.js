import { createWebHistory, createRouter } from "vue-router";

import Login from "../page/Login.vue";
import TotalDanaAsr from "../page/TotalDanaAsr.vue";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/total-dana-asr",
    component: TotalDanaAsr,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

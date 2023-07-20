import { createWebHashHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component() {
        return import("../pages/Home.vue");
      },
    },
  ],
});

export default router;

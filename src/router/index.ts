import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      title: "首页",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
    meta: {
      title: "关于",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

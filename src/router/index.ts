import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
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
    path: "/tech",
    name: "tech",
    component: () => import("@/views/TechStackView.vue"),
    meta: {
      title: "技术",
    },
  },
  {
    path: "/work",
    name: "work",
    component: () => import("@/views/WorkView.vue"),
    meta: {
      title: "工作",
    },
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("@/views/ProjectsView.vue"),
    meta: {
      title: "项目",
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

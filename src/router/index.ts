import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Users from "@/views/system/user/index.vue";
import Menu from "@/views/system/menu/index.vue";
import Role from "@/views/system/role/index.vue";
import Dept from "@/views/system/dept/index.vue";
import Dict from "@/views/system/dict/index.vue";
import Job from "@/views/system/job/index.vue";
import Timing from "@/views/system/timing/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "system/users",
        name: "users",
        component: Users,
      },
      {
        path: "system/menu",
        name: "menu",
        component: Menu,
      },
      {
        path: "system/role",
        name: "role",
        component: Role,
      },
      {
        path: "system/dept",
        name: "dept",
        component: Dept,
      },
      {
        path: "system/dict",
        name: "dict",
        component: Dict,
      },
      {
        path: "system/job",
        name: "job",
        component: Job,
      },
      {
        path: "system/timing",
        name: "timing",
        component: Timing,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Users from "@/views/system/user/index.vue";
import Menu from "@/views/system/menu/index.vue";
import Role from "@/views/system/role/index.vue";

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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

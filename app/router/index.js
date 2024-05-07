import Main from "../pages/Main.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Login",
    path: "/login",
    component: null,
  },
  {
    name: "Register",
    path: "/register",
    component: null,
  },
  {
    name: "Main",
    path: "/",
    component: Main,
    children: [
      {
        name: "Search",
        path: "/search",
        component: null,
      },
      {
        name: "Notification",
        path: "/notification",
        component: null
      },
      {
        name: "Calendar",
        path: "/calendar",
        component: null,
      },
      {
        name: "Settings",
        path: "/settings",
        component: null
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

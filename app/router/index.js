import Main from "../pages/Main.vue";
import Register from "../pages/Register.vue";
import Login from "../pages/Login.vue";
import Calendar from "../pages/Default/Calendar.vue";
import Notification from "../pages/Default/Notification.vue";
import Search from "../pages/Default/Search.vue";
import Settings from "../pages/Default/Settings.vue";
import UserPage from "../pages/UserPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "Register",
    path: "/register",
    component: Register,
  },
  {
    name: "Main",
    path: "/",
    component: Main,
    children: [
      {
        name: "Search",
        path: "/search",
        component: Search,
      },    
      {
        name: "Notification",
        path: "/notification",
        component: Notification,
      },
      {
        name: "Calendar",
        path: "/calendar",
        component: Calendar,
      },
      {
        name: "Settings",
        path: "/settings",
        component: Settings
      },
      {
        name: "Pages",
        path: "/user/:userId/pages/:pagesId",
        component: UserPage
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import Main from "../pages/Main.vue"
import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    name: "Login",
    path: "/login",
    component: null
  },
  {
    name: "Register",
    path: "/register",
    component: null
  },
  {
    name: "Main",
    path: "/",
    component: Main,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
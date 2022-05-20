import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Capture from "../views/Capture";
import Settings from "../views/Settings";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/capture",
    name: "Capture",
    component: Capture,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

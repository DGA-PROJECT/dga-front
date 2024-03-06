import { createWebHistory, createRouter } from "vue-router";
import Test from "./components/Test.vue";
import Signup from "./components/Signup.vue";
import Success from "./components/Success.vue";
import Leader from "./components/Leader.vue";
import Search from "./components/Search.vue";
import Logout from "./components/Logout.vue";

const routes = [
  {
    path: "/test",
    component: Test,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/success",
    component: Success,
  },
  {
    path: "/",
    component: Leader,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/logout",
    component: Logout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

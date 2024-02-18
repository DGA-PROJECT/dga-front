import { createWebHistory, createRouter } from "vue-router";
import Test from "./components/Test.vue";
import Signup from "./components/Signup.vue";
import Success from "./components/Success.vue";
import Leader from "./components/Leader.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

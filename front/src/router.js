import { createWebHistory, createRouter } from "vue-router";
import Test from "./components/Test.vue";
import Signup from "./components/Signup.vue";
import Success from "./components/Success.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

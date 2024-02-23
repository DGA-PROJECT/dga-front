import { createWebHistory, createRouter } from "vue-router";
import Test from "./components/Test.vue";
import Signup from "./components/Signup.vue";
import Success from "./components/Success.vue";
import Leader from "./components/Leader.vue";
import Board from "./components/Board.vue";

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
    path: "/board",
    redirect: "/board/0",
  },
  {
    path: "/board/:pageNum",
    component: Board,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

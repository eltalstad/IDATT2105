import { createRouter, createWebHistory } from "vue-router";
import CalculatorView from "../views/CalculatorView.vue";
import FormView from "../views/FormView.vue";
import process from "eslint-plugin-vue/lib/configs/base";

const routes = [
  {
    path: "/",
    name: "calculator",
    component: CalculatorView,
  },
  {
    path: "/form",
    name: "form",
    component: FormView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

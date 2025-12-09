import DashboardPage from "../pages/DashboardPage.vue";
import LoginPage from "../pages/LoginPage.vue";

export default [
  {
    path: "/",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardPage,
    // meta: { requiresAuth: true },
    children: [],
  },
];

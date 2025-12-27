import DetailCaseLayout from "../Layouts/DetailCaseLayout.vue";
import HomeLayout from "../Layouts/HomeLayout.vue";
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
          component: DashboardPage,
          // meta: { requiresAuth: true },
          children: [
               {
                    path: "",
                    name: "dashboard",
                    component: HomeLayout,
               },
               {
                    path: "details/:id",
                    name: "details",
                    component: DetailCaseLayout,
               },
          ],
     },
];

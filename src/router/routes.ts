import CalendarLayout from "../Layouts/CalendarLayout.vue";
import CaseEventLayout from "../Layouts/CaseEventLayout.vue";
import CaseLayout from "../Layouts/CaseLayout.vue";
import DetailCaseLayout from "../Layouts/DetailCaseLayout.vue";
import DetailCasesLayout from "../Layouts/DetailCasesLayout.vue";
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
               {
                    path: "cases",
                    name: "cases",
                    component: CaseLayout,
               },

               {
                    path: "cases/:id",
                    name: "case-detail",
                    component: DetailCasesLayout,
               },
               {
                    path: "cases/event",
                    name: "case-event",
                    component: CaseEventLayout,
               },
               {
                    path: "calendar",
                    name: "calendar",
                    component: CalendarLayout,
               },
          ],
     },
];

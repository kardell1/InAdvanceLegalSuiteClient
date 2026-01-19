import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
const app = createApp(App);
import VCalendar from "@angelblanco/v-calendar";
import "@angelblanco/v-calendar/style.css";

app.use(createPinia());
app.use(router);
app.use(VCalendar, {}); // puedes pasar opciones aquí

app.mount("#app");

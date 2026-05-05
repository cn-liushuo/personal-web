import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { NMessageProvider } from "naive-ui";

const app = createApp(App);

app.use(router);

app.component('NMessageProvider', NMessageProvider);

app.mount("#app");

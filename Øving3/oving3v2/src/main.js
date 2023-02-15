import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

const Pinia = createPinia();

createApp(App).use(router).use(Pinia).mount("#app");

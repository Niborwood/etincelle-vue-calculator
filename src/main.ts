import { createApp } from "vue";
import { createPinia } from "pinia";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import App from "./App.vue";

import "./assets/main.css";

const pinia = createPinia();
createApp(App).use(pinia).use(autoAnimatePlugin).mount("#app");

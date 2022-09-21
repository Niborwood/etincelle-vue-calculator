import { createApp } from "vue";
import { createPinia } from "pinia";
import "@formkit/themes/genesis";
import { fr } from "@formkit/i18n";
import { plugin, defaultConfig } from "@formkit/vue";
import App from "./App.vue";

import "./assets/main.css";

const pinia = createPinia();
createApp(App)
  .use(pinia)
  .use(
    plugin,
    defaultConfig({
      locales: { fr },
      locale: "fr",
    })
  )
  .mount("#app");

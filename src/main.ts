import { createApp } from "vue";
import { createPinia } from "pinia";
// import "@formkit/themes/genesis";
import { fr } from "@formkit/i18n";
import { plugin, defaultConfig } from "@formkit/vue";
import App from "./App.vue";
import formKitTheme from "./assets/formKit-theme";

import "./assets/main.css";
import { generateClasses } from "@formkit/themes";

const pinia = createPinia();
createApp(App)
  .use(pinia)
  .use(
    plugin,
    defaultConfig({
      locales: { fr },
      locale: "fr",
      config: {
        classes: generateClasses(formKitTheme),
      },
    })
  )
  .mount("#app");

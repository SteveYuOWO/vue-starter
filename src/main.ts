import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router.ts";
import FloatingVue from "floating-vue";
// css imports
import "floating-vue/dist/style.css";

// i18n
import * as VueI18n from "vue-i18n";
import en from "./locales/en.json";
import zh from "./locales/zh.json";

import { useLocalStorage } from "@vueuse/core";

type MessageSchema = typeof en;
type Locale = "en" | "zh";
// 2. Create i18n instance with options
const i18n = VueI18n.createI18n<[MessageSchema], Locale>({
  locale: useLocalStorage("vue-starter-language", "en").value,
  fallbackLocale: "en",
  messages: {
    en,
    zh,
  },
});

FloatingVue.options.themes.tooltip.delay = {
  show: 0, // default 200
  hide: 0,
};

FloatingVue.options.distance = 12;

const pinia = createPinia();

createApp(App).use(i18n).use(FloatingVue).use(router).use(pinia).mount("#app");

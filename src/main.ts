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

FloatingVue.options.themes.tooltip.delay = {
  show: 0, // default 200
  hide: 0,
};

FloatingVue.options.distance = 12;

const pinia = createPinia();

import { Locale, _languageStore } from "./stores/language.ts";

type MessageSchema = typeof en;

export const i18n = VueI18n.createI18n<[MessageSchema], Locale>({
  locale: _languageStore.value,
  fallbackLocale: "en",
  messages: {
    en,
    zh,
  },
});

createApp(App).use(FloatingVue).use(router).use(pinia).use(i18n).mount("#app");

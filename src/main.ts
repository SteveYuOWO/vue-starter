import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router.ts";
import FloatingVue from "floating-vue";

// css imports
import "floating-vue/dist/style.css";

FloatingVue.options.themes.tooltip.delay = {
  show: 0, // default 200
  hide: 0,
};

FloatingVue.options.distance = 12;

const pinia = createPinia();

createApp(App).use(FloatingVue).use(router).use(pinia).mount("#app");

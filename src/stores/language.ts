import { i18n } from "@/main";
import { useStorage } from "@vueuse/core";
import { defineStore, acceptHMRUpdate } from "pinia";

export const _languageStore = useStorage("vue-starter-language", "en");
export type Locale = "en" | "zh";

export const useLanguageStore = defineStore({
  id: "language",
  state: () => ({
    language: _languageStore.value,
  }),
  getters: {
    supportLanguagesList: (): Array<Locale> => {
      return ["en", "zh"];
    },
  },
  actions: {
    setLanguage(language: Locale) {
      this.language = language;
      _languageStore.value = language;

      i18n.global.locale = language;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLanguageStore, import.meta.hot));
}

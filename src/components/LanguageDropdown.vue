<script setup lang="ts">
import { useLanguageStore } from "@/stores/language";
import { useElementHover } from "@vueuse/core";
import { ref } from "vue";

const dropDownRef = ref();
const dropDownHovered = useElementHover(dropDownRef);

console.log({ dropDownHovered: dropDownHovered.value });
const { comingSoon } = defineProps<{
  comingSoon?: boolean;
}>();

const languageStore = useLanguageStore();
</script>
<template>
  <div
    v-show="comingSoon"
    :class="[
      'text-xs font-bold text-white',
      'border-2 rounded-full p-1',
      'cursor-not-allowed',
    ]"
    v-tooltip="'Coming soon'"
  >
    EN
  </div>
  <div class="relative overflow-visible" ref="dropDownRef">
    <div
      v-show="!comingSoon"
      :class="[
        'text-xs font-bold text-white',
        'border-2 rounded-full p-1',
        'cursor-pointer',
      ]"
    >
      {{ languageStore.language.toUpperCase() }}
    </div>
    <div class="dropdown-container" v-show="dropDownHovered">
      <button
        v-for="language in languageStore.supportLanguagesList"
        class="dropdown-btn"
        @click="languageStore.setLanguage(language)"
      >
        {{ language }}
      </button>
    </div>
  </div>
</template>
<style scoped>
.dropdown-container {
  @apply absolute top-4 -right-2 pt-6 z-10 overflow-hidden;
  @apply text-white text-sm font-bold;
}
.dropdown-btn {
  @apply w-12 py-1;
  @apply bg-slate-600;
}
.dropdown-btn:first-of-type {
  @apply rounded-t-md;
}
.dropdown-btn:last-of-type {
  @apply rounded-b-md;
}
.dropdown-btn:hover {
  @apply bg-slate-700;
}
.dropdown-btn:not(:first-of-type) {
  @apply border-t border-slate-200;
}
</style>

<script lang="ts" setup>
import LanguageDropdown from "@/components/LanguageDropdown.vue";
</script>
<template>
  <header
    :class="['px-8 py-4', 'bg-gray-800', 'flex justify-between items-center']"
  >
    <div class="flex items-center gap-8">
      <router-link
        to="/"
        :class="['flex items-center', 'text-xl text-white font-bold']"
      >
        <img class="w-10 h-10" src="@/assets/vue.svg" alt="vue logo" />
        <p class="ml-4">Vue Starter</p>
      </router-link>
      <div class="links">
        <router-link to="/counter">{{ $t("header.counter") }}</router-link>
        <router-link to="/vue-use">Vue-use</router-link>
      </div>
    </div>

    <div class="hidden md:block">
      <input
        :class="[
          'w-[400px] h-10',
          'rounded-full outline-green-700',
          'px-5',
          'text-green-700 text-base font-semibold',
        ]"
        :placeholder="$t('header.searching')"
      />
    </div>

    <LanguageDropdown />
  </header>
</template>
<style language="css" scoped>
.links {
  @apply text-gray-100 text-base font-semibold;
  @apply flex gap-4;
}
.links > a {
  @apply hover:text-gray-500 hover:underline duration-300;
}
</style>

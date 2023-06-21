<script setup lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>
<template>
  <div :class="['bg-gray-900 min-h-screen', 'flex flex-col']">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Tip from "@/components/Tip.vue";
</script>
<template>
  <main :class="['flex-1', 'grid place-items-center']">
    <Tip :tip="$t('homepage.tip')" />
  </main>
</template>

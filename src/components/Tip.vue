<script lang="ts" setup>
const { tip } = defineProps<{
  tip?: string;
}>();
</script>
<template>
  <p class="text-gray-400 font-semibold flash" v-if="tip">{{ tip }}</p>
</template>
<style>
.flash {
  animation: flash-animation 3s ease-in-out infinite;
}

@keyframes flash-animation {
  0% {
    @apply opacity-100;
  }
  50% {
    @apply text-2xl opacity-0;
  }
  100% {
    @apply opacity-100;
  }
}
</style>

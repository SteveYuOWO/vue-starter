<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
</script>
<template>
  <main :class="['h-full flex-1', 'grid place-content-center']">
    <p class="text-3xl text-white text-center font-bold">
      Counter: {{ counter.count }}
    </p>
    <p class="text-xl text-gray-400 text-center font-bold">
      (Double: {{ counter.double }})
    </p>
    <div class="mt-4 flex gap-4">
      <button class="counter-btn" @click="counter.decrement">Minus</button>
      <button class="counter-btn" @click="counter.increment">Plus</button>
    </div>
  </main>
</template>

<style scoped>
.counter-btn {
  @apply w-[100px] py-2;
  @apply text-white bg-gray-500 font-bold;
  @apply rounded-md;
  @apply hover:bg-slate-400 duration-300;
}
</style>

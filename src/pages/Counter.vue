<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { ref } from "vue";

const counter = useCounterStore();

const show = ref(false);
const toggleShow = () => (show.value = !show.value);
</script>
<template>
  <main :class="['h-full flex-1', 'grid place-content-center']">
    <p class="text-3xl text-white text-center font-bold">
      Counter: {{ counter.count }}
    </p>
    <Transition name="slide-fade">
      <p v-if="show" class="text-xl text-gray-400 text-center font-bold">
        (Double: {{ counter.double }})
      </p>
    </Transition>
    <div class="mt-4 flex gap-4">
      <button class="counter-btn w-[100px] py-2" @click="counter.decrement">
        Minus
      </button>
      <button class="counter-btn w-[100px] py-2" @click="counter.increment">
        Plus
      </button>
    </div>
    <div class="mt-4 flex justify-center">
      <button class="counter-btn px-4 py-2" @click="toggleShow">
        Toggle Double
      </button>
    </div>
  </main>
</template>

<style scoped>
.counter-btn {
  @apply text-white bg-gray-500 font-bold;
  @apply rounded-md;
  @apply hover:bg-slate-400 duration-300;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>

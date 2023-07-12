<template>
  <footer
    :class="[
      'absolute bottom-0 left-0 w-full',
      'px-8 py-4',
      'bg-gray-800',
      'flex justify-between items-center',
    ]"
  >
    <div :class="['flex items-center', 'text-xl text-white font-bold']">
      <img class="w-10 h-10" src="@/assets/vue.svg" alt="vue logo" />
      <p class="ml-4">Vue Starter</p>
    </div>

    <p class="text-sm text-white">Copyright © 2023 Steve Inc.</p>
  </footer>
</template>

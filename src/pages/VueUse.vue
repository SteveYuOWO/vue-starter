<script lang="ts" setup>
import { useLocalStorage, useMouse, usePreferredDark } from "@vueuse/core";

// tracks mouse position
const { x, y } = useMouse();

// is user prefers dark theme
const isDark = usePreferredDark();

// persist state in localStorage
const store = useLocalStorage("my-storage", {
  name: "Apple",
  color: "red",
});
</script>
<template>
  <main class="text-white p-8">
    <p>Mouse Position: {{ x }} {{ y }}</p>
    <p>Is Darkmode: {{ isDark }}</p>
    <p>Local Storage: {{ store }}</p>
  </main>
</template>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
 onMounted(() => {
  console.log(getComputedStyle(document.documentElement).getPropertyValue('--color-primary-500'));
  
 })
</script>

<style>
:root {
  --color-primary-50: 242 247 253;
  --color-primary-100: 229 237 249;
  --color-primary-200: 196 218 243;
  --color-primary-300: 144 187 233;
  --color-primary-400: 85 152 219;
  --color-primary-500: 27 57 95;
  --color-primary-600: 32 96 169;
  --color-primary-700: 27 77 137;
  --color-primary-800: 26 66 114;
  --color-primary-900: 27 57 95;
  --color-primary-950: 18 36 63;
}


</style>

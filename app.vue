<template>
  <NuxtLayout>
    <NuxtPage />
    
  </NuxtLayout>
</template>
<script setup lang="ts">
 import {useGeneralStore} from '@/stores/general';
 let store = useGeneralStore();
 store.fetchGeneral();

 import { useCookie } from "#app";

const i18n = useI18n();
const langCookie = useCookie("i18n_redirected");

  
watch(()=>i18n.locale.value, () => {
    store.fetchGeneral();
  });
onMounted(() => {
  
  if (!langCookie.value) {
    const userLang = navigator.language.startsWith("ar") ? "ar" : "en";
    i18n.locale.value = userLang;
    langCookie.value = userLang; 
  }
  useHead({
    htmlAttrs: {
      lang: i18n.locale.value == "en" ? "en" : "ar",
      dir: i18n.locale.value == "en" ? "ltr" : "rtl",
    },
  });
});
</script>

<style>

.dp__theme_light {
    --dp-background-color: #fff;
    --dp-text-color: #212121;
    --dp-hover-color: #f3f3f3;
    --dp-hover-text-color: #212121;
    --dp-hover-icon-color: #959595;
    --dp-primary-color: #1b395f !important;
    --dp-primary-disabled-color: #6bacea;
    --dp-primary-text-color: #f8f5f5;
    --dp-secondary-color: #c0c4cc;
    --dp-border-color: #ddd;
    --dp-menu-border-color: #ddd;
    --dp-border-color-hover: #aaaeb7;
    --dp-border-color-focus: #aaaeb7;
    --dp-disabled-color: #f6f6f6;
    --dp-scroll-bar-background: #f3f3f3;
    --dp-scroll-bar-color: #959595;
    --dp-success-color: #76d275;
    --dp-success-color-disabled: #a3d9b1;
    --dp-icon-color: #959595;
    --dp-danger-color: #ff6f60;
    --dp-marker-color: #ff6f60;
    --dp-tooltip-color: #fafafa;
    --dp-disabled-color-text: #8e8e8e;
    --dp-highlight-color: rgb(25 118 210 / 10%);
    --dp-range-between-dates-background-color: var(--dp-hover-color, #f3f3f3);
    --dp-range-between-dates-text-color: var(--dp-hover-text-color, #212121);
    --dp-range-between-border-color: var(--dp-hover-color, #f3f3f3);
}

html[dir="rtl"] .dp--arrow-btn-nav{
   transform: scaleX(-1);
}
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

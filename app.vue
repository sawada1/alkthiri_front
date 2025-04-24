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
  const delayTime = 3000; // 3 seconds delay

// Function to inject GTM script
const injectGTM = () => {
  // GTM script tag
  const scriptTag = document.createElement('script');
  scriptTag.async = true;
  scriptTag.innerHTML = `
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NQN2K7PF');
  `;
  document.head.appendChild(scriptTag);

  // GTM noscript tag
  const noscriptTag = document.createElement('noscript');
  noscriptTag.innerHTML = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQN2K7PF"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>
  `;
  document.body.appendChild(noscriptTag);
};

// Add a delay before injecting the GTM script
setTimeout(injectGTM, delayTime);
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

<template>
  <div class="min-height-screen">
   
    <lazy-HomeSlider />
    <lazy-HomeSearch />
    <lazy-HomeTypes />
    <lazy-HomeAbout />
    <lazy-HomeWhy />
    <lazy-HomeBrands />
    <lazy-HomeLatestCars />
    <lazy-HomeNews />
    <lazy-HomeSubscribe />

    <!-- page loader  -->
    <!-- <loader v-if="checkLoader"></loader> -->
  </div>
</template>
<script setup>
import { useHomeStore } from "@/stores/home";
let store = useHomeStore();
const { t } = useI18n();
let checkLoader = ref(true);
store.fetchBrands();
store.fetchCars();
store.fetchNews();

useHead({
      title: `${t('home')}`,
      meta: [
        { name: 'description', content: 'test' },
        { name: 'keywords', content: 'test , test , test'},
        { name: 'author', content: 'webstdy' },
        { property: 'og:title', content: `${t('home')}` },
        { property: 'og:description', content: 'test' },
      ],
    });

</script>
<style lang=""></style>

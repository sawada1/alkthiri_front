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
<script setup lang="ts">
import { useHomeStore } from "@/stores/home";
let store = useHomeStore();
const { t } = useI18n();
let checkLoader = ref(true);

onMounted(async() => {
  const offersRes = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json() as { id: string }[];
        // const blogsRes = await axios.get('https://yourapi.com/blogs');
        // const categoriesRes = await axios.get('https://yourapi.com/categories');
        console.log(offersRes);
        
        const offerRoutes = offersRes.map((offer) => `/offers/${offer.id}`);
        console.log(offerRoutes);
        
});

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

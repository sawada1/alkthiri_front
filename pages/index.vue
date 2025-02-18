<template >
    <div class="min-height-screen">
        <div v-if="sliderFetch">
            <iframe src="https://admin.alkathirimotors.com.sa/slide/alkathiri_ar" class="w-full h-[80vh]" frameborder="0"></iframe>
        </div>

        <HomeSearch></HomeSearch>
        <HomeTypes></HomeTypes>
        <HomeAbout></HomeAbout>
        <HomeWhy></HomeWhy>
        <HomeBrands></HomeBrands>
        <HomeLatestCars></HomeLatestCars>
        <HomeNews></HomeNews>
        <HomeSubscribe></HomeSubscribe>
    </div>
</template>
<script setup>
 import {useHomeStore} from '@/stores/home';
 let store = useHomeStore();
 let sliderFetch = ref(false);
 store.fetchBrands();
 store.fetchCars();
 store.fetchNews();

 onMounted(() => {
    setTimeout(() => {
        sliderFetch.value = true;
    }, 1000);
 });
</script>
<style lang="">
    
</style>
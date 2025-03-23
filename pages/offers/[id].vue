<template>
    <div class="container min-h-screen my-10">
    <div v-if="store.offer">
      <NuxtImg placeholder="/images/placeholder.png" :src="store.offer.offer?.image" class="w-full rounded-[16px] xl:h-[800px] lg:h-[800px] h-[350px]" loading="lazy" :alt="store.offer.offer?.title"></NuxtImg>
       <h1 class="text-primary my-10 font-bold xl:text-[32px] lg:text-[32px] text-[22px]"> {{ store.offer.offer?.title }} </h1>
       <p class="text-tw-grey" v-html="store.offer.offer?.description"></p>
       <div class="relative">
       <ClientOnly>
        <swiper-container class="latestSwiper" ref="containerRefOffer">
          <swiper-slide v-for="(slide, idx) in store.offer?.offer_cars" :key="idx">
          <carCard :car="slide"></carCard>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
      <button @click="swiper.next()"  aria-label="swiper" class="absolute z-10 top-[40%] left-2 hidden xl:block lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 -960 960 960"  fill="#1b395f"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>      </button>
      <button @click="swiper.prev()" id="swiperBtnOffer2" aria-label="swiper" class="absolute z-10 top-[40%] right-2 hidden xl:block lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 -960 960 960"  fill="#1b395f"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
      </button>
       </div>
    </div>
    <loader v-if="store.loadingOffer"></loader>
    </div>
</template>
<script setup>
import { useOffersStore } from "@/stores/offers";
let store = useOffersStore();
const localePath = useLocalePath();
let route = useRoute();
const containerRefOffer = ref(null);
let {locale , t} = useI18n();
useHead({
      title: `${t('SPATIAL OFFERS')}`,
      meta: [
        { name: 'description', content: 'test' },
        { name: 'keywords', content: 'test , test , test'},
        { name: 'author', content: 'webstdy' },
        { property: 'og:title', content: `${t('home')}` },
        { property: 'og:description', content: 'test' },
      ],
    });
const swiper = useSwiper(containerRefOffer, {
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
  },
  pagination: {
    clickable: true,
  },
});

watch(()=> locale.value , (val)=>{
  store.fetchOffer(route.params.id);
})
onMounted(()=>{
  store.fetchOffer(route.params.id);
});
</script>
<style lang="">
    
</style>
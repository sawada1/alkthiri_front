<template>
  <div class="xl:mt-[100px] lg:mt-[100px] mt-[70px] mb-[0px]">
    <div class="relative container">
      <div class="head flex items-center justify-between mb-10">
        <h4
          class="font-bold xl:text-[42px] lg:text-[42px] text-[32px] text-primary headText latest"
          :data-latest="$t('JUST PUBLISHED')"
        >
          {{ $t("latest vehicles") }}
        </h4>
        <div class="flex items-center gap-1">
          <nuxt-link :to="localePath('/cars')">
            <span class="text-primary text-[18px] font-semibold"
              >{{ $t("see all") }}
            </span>
          </nuxt-link>
          <Icon
            name="tabler:arrow-left"
            class="bg-primary ltr:scale-x-[-1] mt-1 w-[25px] h-[25px]"
            width="34"
            height="34"
          />
        </div>
      </div>
      <ClientOnly>
        <swiper-container class="latestSwiper" ref="containerRef">
          <swiper-slide v-for="(slide, idx) in storeHome.latestArray" :key="idx">
          <carCard :car="slide"></carCard>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
      <button @click="swiper.next()" id="swiperBtn1" aria-label="swiper" class="absolute top-[50%] left-5 hidden xl:block lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 -960 960 960"  fill="#1b395f"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>      </button>
      <button @click="swiper.prev()" id="swiperBtn2" aria-label="swiper" class="absolute top-[50%] right-5 hidden xl:block lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 -960 960 960"  fill="#1b395f"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
      </button>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
const localePath = useLocalePath();
import { useHomeStore } from "~/stores/home";
let storeHome = useHomeStore();
const containerRef = ref(null);
const slides = ref(Array.from({ length: 10 }));

const swiper = useSwiper(containerRef, {
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

const goToCarPage = (carid, modelcarid, carname) => {
  const queryParams = {
    id: carid,
    model_id: modelcarid,
    name: carname,
  };
  const url = "/car";

  const updatedRoute = {
    path: url,
    query: {
      ...queryParams,
    },
  };

  const fullLocalePath = localePath(updatedRoute);
  router.push(fullLocalePath);
};

onMounted(() => {
  if(storeHome.latestArray.length == 0){
    storeHome.fetchCars();
}
});
</script>
<style>
:host(.swiper) {
  background-color: red !important;
}
</style>

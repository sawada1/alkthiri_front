<template >
      <div class="relative">
      <ClientOnly>
        <swiper-container class="newsSwiper car" ref="containerRef2">
          <swiper-slide
            v-for="item in store.images"
            class="flex items-center justify-center"
          >
            <a
              :data-src="item"
              href="javascript:;"
              data-fancybox="gallery"
              data-caption=""
            >
              <NuxtImg
                :src="item"
                alt="dsd"
                placeholder="/images/placeholder.png"
                class="w-[500px] h-[400px] object-contain"
              ></NuxtImg>
            </a>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
      <button
        @click="swiper.next()"
        id="swiperBtnCar1"
        aria-label="swiper"
        class="absolute z-20 bg-primary rounded-lg p-1 top-[50%] left-5 hidden xl:block lg:block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          width="40px"
          viewBox="0 -960 960 960"
          fill="#fff"
        >
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
        </svg>
      </button>
      <button
        @click="swiper.prev()"
        id="swiperBtnCar2"
        aria-label="swiper"
        class="absolute z-20 bg-primary rounded-lg p-1 top-[50%] right-5 hidden xl:block lg:block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          width="40px"
          viewBox="0 -960 960 960"
          fill="#fff"
        >
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </button>
    </div>
</template>
<script setup>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import {useCarStore} from '@/stores/car';
let store = useCarStore();
const containerRef2 = ref(null);
const swiper = useSwiper(containerRef2, {
  //   grabCursor: true,
  centeredSlides: true,
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    clickable: true,
  },
  breakpoints: {
    340: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
  },
});
onMounted(() => {
    Fancybox.bind("[data-fancybox]", {
    // Custom options for all galleries
  }); 
});
</script>
<style lang="">
    
</style>
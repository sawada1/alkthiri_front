<template>
  <div class="px-[20px]">
    <h4
      class="font-bold headText news text-center xl:text-[42px] lg:text-[42px] text-[32px] text-primary "
      :data-news="$t('BE AWARE OF OUR')"
    >
      {{ $t("latest news") }}
    </h4>
    <ClientOnly>
      <swiper-container class="newsSwiper" ref="containerRef2">
        <swiper-slide
        v-for="i in 6"
        class="bg-white shadow-shadow1 p-[12px] rounded-[16px]">
        <NuxtImg src="https://swiperjs.com/demos/images/nature-1.jpg" class="xl:h-[302px] lg:h-[302px] h-[200px] object-cover w-full rounded-[8px]"></NuxtImg>
        <h5 class="text-primary font-bold text-[25px] my-2"> title one </h5>
        <p class="text-[#6F6F6E] line-clamp-3 text-[14px]"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem. </p>
        <div class="flex items-center justify-between px-2 mt-2">
         <div class="flex items-center gap-2">
          <div class="flex items-center gap-1">
           <NuxtImg src="/images/icons/tag.svg" class="w-3 h-3"></NuxtImg>
           <span class="text-[#C0C0C0] text-[10px]"> Tag name </span>
          </div>
          <div class="flex items-center gap-1">
           <NuxtImg src="/images/icons/time.svg" class="w-3 h-3"></NuxtImg>
           <span class="text-[#C0C0C0] text-[10px]"> 2 days ago </span>
          </div>
         </div>
         <button class="flex items-center gap-1"> 
            <span class="font-bold text-primary">{{ $t("read more") }}</span>
            <Icon name="tabler:arrow-narrow-left" class="bg-primary ltr:scale-x-[-1] mt-1" width="24" height="24" />
         </button>
        </div>        
            </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>
<script setup>
const containerRef2 = ref(null);
const slides = ref(Array.from({ length: 10 }));

const swiper = useSwiper(containerRef2, {
//   grabCursor: true,
  centeredSlides: true,
  loop:true,
  spaceBetween: 40,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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
</script>
<style lang="scss">


</style>

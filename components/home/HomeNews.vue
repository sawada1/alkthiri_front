<template>
  <div class="px-[20px] xl:mt-[100px] lg:mt-[100px] mt-[70px]">
    <h4
      class="font-bold headText news text-center xl:text-[42px] lg:text-[42px] text-[32px] text-primary "
      :data-news="$t('BE AWARE OF OUR')"
    >
      {{ $t("latest news") }}
    </h4>
    <ClientOnly>
      <swiper-container class="newsSwiper" ref="containerRef2">
        <swiper-slide
        v-for="item in storeHome.newsArray"
        class="bg-white shadow-shadow1 p-[12px] rounded-[16px]">
        <NuxtImg :src="item.main_image" :alt="item.title" placeholder="/images/placeholder.png" class="xl:h-[302px] lg:h-[302px] h-[200px] object-contain w-full rounded-[8px]"></NuxtImg>
        <h5 class="text-primary font-bold text-[25px] my-2"> {{ item.title }} </h5>
        <p class="text-[#6F6F6E] line-clamp-3 text-[14px]" v-html="item.description"></p>
        <div class="flex items-center justify-between px-2 mt-2">
         <div class="flex items-center gap-2">
          <div class="flex items-center gap-1">
           <NuxtImg src="/images/icons/tag.svg" alt="tag" class="w-3 h-3"></NuxtImg>
           <span class="text-[#C0C0C0] text-[10px]"> {{ item.tags }} </span>
          </div>
          <div class="flex items-center gap-1">
           <NuxtImg src="/images/icons/time.svg" alt="time" class="w-3 h-3"></NuxtImg>
           <span class="text-[#C0C0C0] text-[10px]"> {{ item.created_at }} </span>
          </div>
         </div>
         <button id="latestNews1" aria-label="news" class="flex items-center gap-1"> 
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
import { useHomeStore } from "~/stores/home";
let storeHome = useHomeStore();
const router = useRouter();
const {locale } = useI18n();
const localePath = useLocalePath();
const goToNewsPage = (name, id) => {
  const queryParams = {
    name: name,
    id: id,
  };

  const url = "/new";

  const updatedRoute = {
    path: url,
    query: {
      ...queryParams,
    },
  };

  const fullLocalePath = localePath(updatedRoute);
  router.push(fullLocalePath);
};
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

onMounted(() => {
  if(storeHome.newsArray.length == 0){
    storeHome.fetchNews();
}
});
</script>
<style lang="scss">


</style>

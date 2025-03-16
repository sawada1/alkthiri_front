<template>
  <div class="min-h-screen mt-10 mb-10">
    <swiper-container ref="containerRef">
      <swiper-slide v-for="(slide, idx) in store.brandArray" :key="slide.id" @click="store.brandStored = slide.id , getCarByBrands()" class=" rtl:border-l-[2px] rtl:pl-4 ltr:border-r-[2px] ltr:pr-4 border-l-[#f2f2f2] last:border-none">
        <div
           
          class="flex items-center cursor-pointer justify-center gap-3 h-[65px] rounded-full px-2 py-4 bg-white"
          :class="{ '!bg-[#f2f2f2]': slide.id == store.brandStored }"
        >
          <NuxtImg
            :src="slide.image"
            class="w-[50px] h-[50px]"
            placeholder="/images/placeholder.png"
            loading="lazy"
          ></NuxtImg>
          <span
            class="text-[#989898] text-[14px]"
            :class="{
              'text-primary text-[14px] font-bold':
                slide.id == store.brandStored,
            }"
          >
            {{ slide.name }}
          </span>
        </div>
      </swiper-slide>
    </swiper-container>
    <swiper-container  ref="containerRef2" class="mt-0 xl:mt-8 lg:mt-8 md:mt-8">
      <swiper-slide v-if="checkTypes" class="rtl:border-l-[2px] rtl:pl-4 ltr:border-r-[2px] ltr:pr-4 border-l-[#f2f2f2]">
        <div
        @click="store.TypeBrand = 'sedan' , getCarByBrands()"
          class="flex items-center cursor-pointer justify-center gap-3 h-[65px] rounded-full px-2 py-4 bg-white"
          :class="{ '!bg-[#f2f2f2]': store.TypeBrand == 'sedan' }"
        >
          <span
            class="text-[#989898] text-[14px]"
            :class="{
              'text-primary text-[14px] font-bold':
              store.TypeBrand == 'sedan',
            }"
          >
            {{ $t("sedan")}}
          </span>
        </div>
      </swiper-slide>
      <swiper-slide v-if="checkTypes" class="rtl:border-l-[2px] rtl:pl-4 ltr:border-r-[2px] ltr:pr-4 border-l-[#f2f2f2]">
        <div
        @click="store.TypeBrand = 'commercial' , getCarByBrands()"
          class="flex items-center cursor-pointer justify-center gap-3 h-[65px] rounded-full px-2 py-4 bg-white"
          :class="{ '!bg-[#f2f2f2]': store.TypeBrand == 'commercial' }"
        >
          <span
            class="text-[#989898] text-[14px]"
            :class="{
              'text-primary text-[14px] font-bold':
              store.TypeBrand == 'commercial',
            }"
          >
            {{ $t("commercial")}}
          </span>
        </div>
      </swiper-slide>
      <swiper-slide v-if="checkTypes">
        <div
        @click="store.TypeBrand = 'multi' , getCarByBrands()"
          class="flex items-center cursor-pointer justify-center gap-3 h-[65px] rounded-full px-2 py-4 bg-white"
          :class="{ '!bg-[#f2f2f2]': store.TypeBrand == 'multi' }"
        >
          <span
            class="text-[#989898] text-[14px]"
            :class="{
              'text-primary text-[14px] font-bold':
              store.TypeBrand == 'multi',
            }"
          >
            {{ $t("multi")}}
          </span>
        </div>
      </swiper-slide>
    </swiper-container>
    <div class="container ">
      <div
      v-if="!store.loaderCars"
        class="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-8"
      >
        <carCard
          v-for="i in store.cars"
          :car="i"
          type="model"
        ></carCard>
      </div>
      <div v-if="store.loaderCars" class="flex min-h-[60vh] items-center justify-center">
        <loaderImage></loaderImage>
      </div>
      <div v-if="store.emptyCars" class="flex items-center justify-center h-[40vh]">
       <h1 class="font-bold text-[32px] text-primary"> {{ $t("There are no cars") }} </h1>
      </div>
      <div v-if="!store.emptyCars && !store.loaderCars" class="flex justify-center mt-16">
        <button
        @click="goToBrandPageById()"
          class="bg-primary px-7 py-3 text-white gap-3 font-semibold rounded-lg flex items-center justify-between shadow-shadow1"
        >
          {{ $t("explore more") }}
          <Icon
            name="tabler:chevron-left"
            class="bg-white ltr:scale-x-[-1] w-6 h-6"
            width="24"
            height="24"
          />
        </button>
      </div>
    </div>
    <Loader v-if="store.spinner_brands"></Loader>
  </div>
</template>
<script setup>
import { useBrandsStore } from "@/stores/brands";
let store = useBrandsStore();
const { t } = useI18n();
const containerRef = ref(null);
const containerRef2 = ref(null);
const localePath = useLocalePath();
let router = useRouter();
const i18n = useI18n();
const swiper = useSwiper(containerRef, {
  spaceBetween: 10,
  slidesPerView: 3,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    1250: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
  },
});
const swiper2 = useSwiper(containerRef2, {
  spaceBetween: 10,
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    1250: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
  },
});
const checkTypes = ref(false);
const getCarByBrands = async () => {
store.fetchCars();
};

const goToBrandPageById = () => {
    const queryParams = {
    type: store.TypeBrand,
    id: store.brandStored,
  };
  const url = "/cars";
  const updatedRoute = {
    path: url,
    query: {
      ...queryParams,
    },
  };
  const fullLocalePath = localePath(updatedRoute);
  router.push(fullLocalePath);
    };

    watch(()=>i18n.locale.value, () => {
    store.fetchBrands();
  });
onMounted(() => {
  if (store.brandArray.length == 0) {
    store.fetchBrands(); 
  }

   setTimeout(() => {
    checkTypes.value = true
   }, 500);

});
</script>
<style lang=""></style>

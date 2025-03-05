<template>
  <div class="min-h-screen mb-16">
    <div class="container">
      <div class="rounded-b-[12px] w-full pt-8 bg-white shadow-shadow1">
        <h1
          class="text-primary text-center mb-8 text-[26px] xl:text-[32px] lg:text-[32px] font-bold"
        >
          dsdsds
        </h1>

        <div class="flex items-end justify-between xl:flex-row lg:flex-row flex-col">
            <CarPrice></CarPrice>
            <div class="w-full xl:w-fit lg:w-fit px-4 xl:px-0 lg:px-0 mt-4 xl:mt-0 lg:mt-0">
          <div
            class="border flex items-center flex-col xl:flex-row lg:flex-row w-full xl:w-fit lg:w-fit gap-5 mb-1 border-grey px-2 py-1 rounded-[8px]"
          >
            <span class="text-tw-grey"> {{ $t("Colors Available") }} </span>
            <div class="flex items-center flex-wrap gap-3">
              <button
                class="w-[20px] h-[20px] border border-black rounded-full bg-white shadow-shadow3"
              ></button>
              <button
                class="w-[27px] h-[27px] border border-black rounded-full bg-black shadow-shadow3"
              ></button>
              <button
                class="w-[20px] h-[20px] border border-black rounded-full bg-primary shadow-shadow3"
              ></button>
              <button
                class="w-[20px] h-[20px] border border-black rounded-full bg-red-600 shadow-shadow3"
              ></button>
              <button
                class="w-[20px] h-[20px] border border-black rounded-full bg-grey shadow-shadow3"
              ></button>
            </div>
            <div
              class="w-[45px] h-[45px] bg-black text-white rounded-[8px] flex items-center justify-center"
            >
              dsds
            </div>
          </div>
            </div>
          <div class="px-4 xl:px-0 lg:px-0 xl:w-fit lg:w-fit w-full mt-5 xl:mt-0 lg:mt-0 mb-2 xl:mx-2 lg:mx-2 mx-0">
          <UButton
            class="px-16 py-3   mt-3 xl:w-fit  lg:w-fit w-full flex items-center justify-center text-[18px] rounded-[10px] font-bold text-white"
          >
            {{ $t("order") }}
          </UButton>
          
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <ClientOnly>
        <swiper-container class="newsSwiper car" ref="containerRef2">
          <swiper-slide
            v-for="item in 10"
            class="flex items-center justify-center"
          >
            <a
              data-src="https://admin.alkathirimotors.com.sa/storage/Images/CarModelImages/webstdy_17146923381.png"
              href="javascript:;"
              data-fancybox="gallery"
              data-caption="Gallery A #1"
            >
              <NuxtImg
                src="https://admin.alkathirimotors.com.sa/storage/Images/CarModelImages/webstdy_17146923381.png"
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
    <div class="container">
      <div class="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
      <div class="flex flex-col gap-10">
         <CarDetails></CarDetails>
         <div>
         <ClientOnly>
        <swiper-container dir="rtl" class="priceSwiper" ref="containerRef3">
          <swiper-slide
            v-for="item in 6"
            @click="checkCar = item"
            class="flex items-center text-[#767676] p-2 cursor-pointer rounded-t-lg justify-center"
            :class="{'bg-[#dadfe6] text-primary font-bold': checkCar == item}"
          >
           <span> dsdsd </span>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
       <div class="w-full h-[1px] bg-[#767676]"></div>
         </div>
      </div>
        <div class="bg-white h-fit shadow-shadow1 rounded-xl pt-4">
          <div class="px-8 mb-5">
            <h3 class="text-primary text-[26px] font-bold mb-4">
              dsdsdsd vcvc
            </h3>
            <p class="text-tw-grey mb-4">fdfdfd vcv</p>
            <div
              class="border flex items-center flex-col xl:flex-row lg:flex-row w-full xl:w-fit lg:w-fit gap-5 mb-1 border-grey px-2 py-1 rounded-[8px]"
            >
              <span class="text-tw-grey"> {{ $t("Colors Available") }} </span>
              <div class="flex items-center flex-wrap gap-3">
                <button
                  class="w-[20px] h-[20px] border border-black rounded-full bg-white shadow-shadow3"
                ></button>
                <button
                  class="w-[27px] h-[27px] border border-black rounded-full bg-black shadow-shadow3"
                ></button>
                <button
                  class="w-[20px] h-[20px] border border-black rounded-full bg-primary shadow-shadow3"
                ></button>
                <button
                  class="w-[20px] h-[20px] border border-black rounded-full bg-red-600 shadow-shadow3"
                ></button>
                <button
                  class="w-[20px] h-[20px] border border-black rounded-full bg-grey shadow-shadow3"
                ></button>
              </div>
              <div
                class="w-[45px] h-[45px] bg-black text-white rounded-[8px] flex items-center justify-center"
              >
                dsds
              </div>
            </div>
            <p class="text-center text-red-600 mt-4"> {{ $t("warning") }} </p>
            
          </div>
           <CarPrice></CarPrice>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
const containerRef2 = ref(null);
const containerRef3 = ref(null);
let checkCar = ref(1);
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
const swiper2 = useSwiper(containerRef3, {
  //   grabCursor: true,
//   centeredSlides: true,
//   loop: true,
  spaceBetween: 0,
  breakpoints: {
    340: {
      slidesPerView: 2.2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
  },
});

onMounted(() => {
  Fancybox.bind("[data-fancybox]", {
    // Custom options for all galleries
  });
});
</script>
<style lang=""></style>

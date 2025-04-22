<template>
  <div class="min-h-screen mb-16">
    <div class="container">
      <div class="rounded-b-[12px] w-full relative pt-8 bg-white shadow-shadow1">
        <h1
          class="text-primary text-center mb-8 text-[26px] xl:text-[32px] lg:text-[32px] font-bold"
        >
          {{ store.CarDetails?.name }}
        </h1>

        <button class="absolute top-5 left-5" @click="sharePage()">
          <UIcon name="heroicons-solid:share" class="text-primary bg-primary w-7 h-7"></UIcon>

        </button>

        <div
          class="flex items-end justify-between xl:flex-row lg:flex-row flex-col"
        >
          <CarPrice></CarPrice>
          <div
            class="w-full xl:w-fit lg:w-fit px-4 xl:px-0 lg:px-0 mt-4 xl:mt-0 lg:mt-0"
          >
            <CarColors></CarColors>
          </div>
          <div
            class="px-4 xl:px-0 lg:px-0 xl:w-fit lg:w-fit w-full mt-5 xl:mt-0 lg:mt-0 mb-2 xl:mx-2 lg:mx-2 mx-0"
          >
            <nuxt-link
              v-if="store.CarDetails.price_field_status != 'unavailable'"
              :to="
                $localePath({
                  path: '/purchase',
                  query: {
                    id: store.CarId,
                    model_id: route.params.id,
                    color_id: store.ColorId,
                  },
                })
              "
            >
              <UButton
                class="px-16 py-3 mt-3 xl:w-fit lg:w-fit w-full flex items-center justify-center text-[18px] rounded-[10px] font-bold text-white"
              >
                {{ $t("order") }}
              </UButton>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <CarImages></CarImages>

    <div class="container">
      <div class="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
        <div class="flex flex-col gap-10">
          <CarDetails></CarDetails>
          <div class="relative">
            <ClientOnly>
              <swiper-container class="priceSwiper" ref="containerRef3">
                <swiper-slide
                  v-for="(item, index) in store.cars"
                  @click="
                    (checkCar = index),
                      (store.CarDetails = item),
                      (store.CarId = item.id)
                  "
                  class="flex items-center text-[#767676] p-2 cursor-pointer text-nowrap rounded-t-lg justify-center"
                  :class="{
                    'bg-[#dadfe6] text-primary font-bold': checkCar == index,
                  }"
                >
                  <span> {{ item.name }} </span>
                </swiper-slide>
              </swiper-container>
            </ClientOnly>
            <button
              v-if="store.cars.length >= 3"
              @click="swiper2.next()"
              class="bg-primary absolute top-[15%] rtl:left-[-15px] ltr:right-[-15px] rounded-full z-20"
            >
              <svg
                class="rtl:scale-x-[-1]"
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                width="30px"
                viewBox="0 -960 960 960"
                fill="#fff"
              >
                <path
                  d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
                />
              </svg>
            </button>
            <div class="w-full h-[1px] bg-[#767676]"></div>
          </div>
          <p class="text-tw-grey text-[18px]">
            {{ store.CarDetails?.description }}
          </p>
        </div>
        <div>
          <div class="bg-white h-fit shadow-shadow1 rounded-xl pt-4">
            <div class="px-8 mb-5">
              <h3 class="text-primary text-[26px] font-bold mb-4">
                {{ store.CarDetails?.name }}
              </h3>
              <!-- <p class="text-tw-grey mb-4">fdfdfd vcv</p> -->
              <CarColors></CarColors>
              <p class="text-center text-red-600 mt-4">{{ $t("warning") }}</p>
            </div>
            <CarPrice></CarPrice>
          </div>
          <nuxt-link
            v-if="store.CarDetails.price_field_status != 'unavailable'"
            :to="
              $localePath({
                path: '/purchase',
                query: {
                  id: store.CarId,
                  model_id: route.params.id,
                  color_id: store.ColorId,
                },
              })
            "
          >
            <UButton
              class="px-16 py-3 mt-3 w-full flex items-center justify-center text-[18px] rounded-[10px] font-bold text-white"
            >
              {{ $t("order") }}
            </UButton>
          </nuxt-link>
        </div>
      </div>
    </div>
    <Loader v-if="store.pendingCar"></Loader>
  </div>
</template>
<script setup>
import { useCarStore } from "@/stores/car";
let store = useCarStore();
const containerRef3 = ref(null);
const { locale, t } = useI18n();
let checkCar = ref(0);


const sharePage = async () => {
    if(process.client){
        const url = window.location.href // full current URL
      
        if (navigator.share) {
          try {
            await navigator.share({
              title: document.title,
              text: 'مشاركه هذع السيارة',
              url
            })
            console.log('تمت المشاركة بنجاح')
          } catch (err) {
            console.error('حدث خطأ أثناء المشاركة:', err)
          }
        } else {
          // fallback: copy to clipboard
          try {
            await navigator.clipboard.writeText(url)
            alert('تم نسخ الرابط إلى الحافظة!')
          } catch (err) {
            alert('لم نتمكن من نسخ الرابط، يرجى نسخه يدويًا.')
          }
        }
    }
}
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
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

let route = useRoute();
let car_id = route.query.car_id;
let year = route.query.year;

let title = computed(() => {
  return;
});
// watch(()=> locale.value , ()=>{
//   store.fetchCarDetails(route.params.id , year);
// })
watch(
  () => store.CarDetails,
  (val) => {
    useHead({
      title: val?.name,
      meta: [
        { name: "description", content: val?.description },
        { name: "keywords", content: "test , test , test" },
        { name: "author", content: "webstdy" },
        { property: "og:title", content: val?.name },
        { property: "og:description", content: val?.description },
      ],
    });
  }
);
onMounted(() => {
  store.fetchCarDetails(route.params.id, year);
});
</script>
<style lang=""></style>

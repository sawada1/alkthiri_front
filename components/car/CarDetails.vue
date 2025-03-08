<template>
   <div class="grid xl:grid-cols-4 lg:grid-cols-4 gap-5">
          <div
            class="bg-[#F2F2F2] rounded-[8px] h-[135px] flex items-center justify-center"
          >
            <div class="setting-box flex flex-col gap-1 items-center">
              <NuxtImg
                src="/images/icon1.svg"
                class="w-[30px]"
                alt="settings"
                loading="lazy"
              />
              <span class="text-[#6F6F6E]">{{ $t("Model Year") }}</span>
              <p class="font-bold text-[14px]"> {{ store.CarDetails?.year }} </p>
            </div>
          </div>
          <div
            class="bg-[#F2F2F2] rounded-[8px] h-[135px] flex items-center justify-center"
          >
            <div class="setting-box flex flex-col gap-1 items-center">
              <NuxtImg
                src="/images/icon5.svg"
                class="w-[30px]"
                alt="settings"
                loading="lazy"
              />
              <span class="text-[#6F6F6E]">{{ $t("Engine") }}</span>
              <p class="font-bold text-[14px]"> {{ store.CarDetails?.engine_type }} </p>
            </div>
          </div>
          <div
            class="bg-[#F2F2F2] rounded-[8px] h-[135px] flex items-center justify-center"
          >
            <div class="setting-box flex flex-col gap-1 items-center">
              <NuxtImg
                src="/images/noun-speed-3341122.svg"
                class="w-[30px]"
                alt="settings"
                loading="lazy"
              />
              <span class="text-[#6F6F6E]">{{ $t("Kilometers") }}</span>
              <p class="font-bold text-[14px]"> {{ store.CarDetails?.maximum_force }} </p>
            </div>
          </div>
          <div
            class="bg-[#F2F2F2] rounded-[8px] h-[135px] flex items-center justify-center"
          >
            <div class="setting-box flex flex-col gap-1 items-center">
              <NuxtImg
                src="/images/noun-transmission-1325127.svg"
                class="w-[30px]"
                alt="settings"
                loading="lazy"
              />
              <span class="text-[#6F6F6E]">{{ $t("Transmission") }}</span>
              <p class="font-bold text-[14px]"> {{ store.CarDetails?.motion_vector }} </p>
            </div>
          </div>
          <div
            class="bg-[#F2F2F2] rounded-[8px] h-[135px] flex items-center justify-center"
          >
            <div class="setting-box flex flex-col gap-1 items-center">
              <NuxtImg
                src="/images/icon6.svg"
                class="w-[30px]"
                alt="settings"
                loading="lazy"
              />
              <span class="text-[#6F6F6E]">{{ $t("Number Of Doors") }}</span>
              <p class="font-bold"> {{ store.CarDetails?.seats_number }} </p>
            </div>
          </div>
          <div
            class="bg-[#F2F2F2] rounded-[8px] h-[135px] flex items-center justify-center"
          >
            <div class="setting-box flex flex-col gap-1 items-center">
              <NuxtImg
                src="/images/icon6.svg"
                class="w-[30px]"
                alt="settings"
                loading="lazy"
              />
              <span class="text-[#6F6F6E]">{{ $t("Seats") }}</span>
              <p class="font-bold text-[14px]"> {{ store.CarDetails?.upholstered_seats }} </p>
            </div>
          </div>
          <div
            class="bg-[#F2F2F2] rounded-[8px] h-[135px] flex items-center justify-center"
          >
            <div class="setting-box flex flex-col gap-1 items-center">
              <NuxtImg
                src="/images/icon7.svg"
                class="w-[30px]"
                alt="settings"
                loading="lazy"
              />
              <span class="text-[#6F6F6E]">{{ $t("Transmission") }}</span>
              <p class="font-bold text-[14px]"> {{ store.CarDetails?.traction_type }} </p>
            </div>
          </div>
          <div
            class="bg-[#F2F2F2] rounded-[8px] h-[135px] flex items-center justify-center"
          >
            <div class="setting-box flex flex-col gap-1 items-center">
              <NuxtImg
                src="/images/icon8.svg"
                class="w-[30px]"
                alt="settings"
                loading="lazy"
              />
              <span class="text-[#6F6F6E]">{{ $t("Fuel Type") }}</span>
              <p class="font-bold text-[14px]"> {{ store.CarDetails?.fuel_consumption }} </p>
            </div>
          </div>
        </div>
</template>
<script setup>
import {useCarStore} from '@/stores/car';
let store = useCarStore();
</script>
<style lang="">
    
</style>
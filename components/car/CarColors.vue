<template>
     <div
            class="border flex items-center flex-col xl:flex-row lg:flex-row w-full xl:w-fit lg:w-fit gap-5 mb-1 border-grey px-2 py-1 rounded-[8px]"
          >
            <span class="text-tw-grey"> {{ $t("Colors Available") }} </span>
            <div class="flex items-center flex-wrap gap-3">
              <button
              v-for="i in store.CarDetails.colors"
              :class="{'w-[27px] h-[27px]':store.ColorId == i.id }"
              @click="store.ColorId = i.id , store.ColorHexCode = i.hex_code , store.ColorName = i.name"
                class="w-[20px] h-[20px] border border-black rounded-full bg-black shadow-shadow3"
                :style="{backgroundColor: i.hex_code}"
              ></button>
            </div>
            <div
              class="w px-2 h-[45px] text-center shadow-shadow3 text- rounded-[8px] flex items-center justify-center"
              :style="{backgroundColor: store.ColorHexCode , color: isLightColor(store.ColorHexCode) ? 'black' : 'white'}"
            >
              {{ store.ColorName }}
            </div>
          </div>
</template>
<script setup>
import {useCarStore} from '@/stores/car';
let store = useCarStore();
const hexToRgb = (hex) => {
  // Remove '#' from hex string
  hex = hex.replace(/^#/, "");
  // Parse the hex string to get RGB values
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;
  return { r, g, b };
};
const isLightColor = (hex) => {
  // Convert hex color to RGB
  let rgb = hexToRgb(hex);
  // Calculate the luminance of the color
  let luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  // If luminance is greater than 0.5, color is considered light
  return luminance > 0.5;
};
</script>
<style>
    
</style>
import { defineNuxtPlugin } from '#app';
import Vue3Slider from 'vue-3-slider-component';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Vue3Slider', Vue3Slider);
});
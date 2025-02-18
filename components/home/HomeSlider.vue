<template>
    <div
      v-if="sliderFetch"
      class="full h-[80vh] flex items-center justify-center"
    >
      <NuxtImg
        class="animated-image"
        src="/images/icons/loaderLogo.svg"
        alt="loader img"
      />
    </div>
    <div v-else>
      <iframe
        id="sliderIframe"
        src="https://admin.alkathirimotors.com.sa/slide/alkathiri_ar"
        class="w-full xl:h-[80vh] lg:h-[80vh] h-screen"
        frameborder="0"
      ></iframe>
    </div>
</template>
<script setup>
import axios from "axios";
let sliderFetch = ref(true);
const getSlider = async () => {
  let result = await axios.get(
    "https://admin.alkathirimotors.com.sa/slide/alkathiri_ar"
  );
  if (result.status == 200) {
    sliderFetch.value = false;
  }
};
onMounted(() => {
  setTimeout(() => {
    getSlider();
  }, 1000);
});
</script>
<style lang="">
    
</style>
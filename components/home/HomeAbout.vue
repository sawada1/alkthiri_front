<template>
    <div class="bg-primary w-full  xl:py-[100px] lg:py-[100px] py-[50px] xl:mt-[100px] lg:mt-[100px] mt-[70px]">
        <div class="container">
            <div class="flex  items-center xl:text-start lg:text-start text-center flex-col xl:justify-start lg:justify-start justify-center xl:flex-row lg:flex-row  gap-[60px]">
                <NuxtImg src="/images/about.png"  loading="lazy" width="300" alt="about image"  class=" xl:w-[400px] lg:w-[400px] w-[300px] object-cover rtl:scale-x-[-1]"></NuxtImg>
                <div class="">
                    <p class="text-white text-[18px] mb-4"> {{ $t('AL KATHIRI MOTORS') }} </p>
                    <h1 class="font-bold text-white xl:text-[70px] lg:text-[70px] text-[50px] headText about" :data-about="$t('about us')">
                   {{ $t("how we are") }}
                  </h1>
                 <USkeleton v-if="store.pendingGeneral" class="h-4 w-full" /> 
                  <p
                  v-else
                  class="text-white text-[18px] mt-4"
                  v-html="store.generalData?.why_alkathiri_cars"
                ></p>
                  <div class="flex justify-center xl:justify-start lg:justify-start mt-10">
                  <nuxt-link id="about-link" class="about-link" :to="localePath('/about-us')">
                    <button id="readMoreNews" aria-label="read more" class="bg-primary border-[1px] flex items-center gap-2 px-10 py-2 text-white font-bold border-white rounded-lg">
                        {{ $t("read more") }}
                        <Icon name="tabler:arrow-left" class="bg-white w-[30px] h-[30px] ltr:scale-x-[-1]" width="24" height="24" />
                    </button>
                  </nuxt-link>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {useGeneralStore} from "@/stores/general";
let store = useGeneralStore();
const localePath = useLocalePath();
let pending = ref(false);
</script>
<style lang="">
    
</style>
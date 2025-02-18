<template>
    <div class="relative xl:mt-[100px] lg:mt-[100px] mt-[70px] ">
        <div class="line w-full h-1 border-t-[1px] hidden xl:block lg:block absolute top-[70%] z-[-1] border-primary border-dashed"></div>
         <div class="head text-center">
            <h2 class="font-bold mb-10 headText why xl:text-[42px] lg:text-[42px] text-[32px] text-primary" :data-why="$t('AL KATHIRI MOTORS')">
          {{ $t("why choose us") }}
        </h2>
    </div>
    <div class="container">
        <div class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-10">
            <div class="box bg-white shadow-shadow1 flex flex-col py-10 px-3 text-center items-center gap-3 rounded-xl">
                <NuxtImg src="/images/box1.svg" loading="lazy" alt="box1"></NuxtImg>
                <USkeleton v-if="store.pendingGeneral" class="h-5 w-full" /> 
                <p v-else class="text-primary text-[18px] font-semibold" v-html="store.generalData?.why_alkathiri_cars_card_1"></p>
            </div>
            <div class="box bg-white shadow-shadow1 flex flex-col py-10 px-3 text-center items-center gap-3 rounded-xl">
                <NuxtImg src="/images/box2.svg" loading="lazy" alt="box2"></NuxtImg>
                <USkeleton v-if="store.pendingGeneral" class="h-5 w-full" />
                <p v-else class="text-primary text-[18px] font-semibold" v-html="store.generalData?.why_alkathiri_cars_card_2"></p>
            </div>
            <div class="box bg-white shadow-shadow1 flex flex-col py-10 px-3 text-center items-center gap-3 rounded-xl">
                <NuxtImg src="/images/box3.svg" loading="lazy" alt="box3"></NuxtImg>
                <USkeleton v-if="store.pendingGeneral" class="h-5 w-full" />
                <p v-else class="text-primary text-[18px] font-semibold" v-html="store.generalData?.why_alkathiri_cars_card_3"></p>
            </div>
        </div>
    </div>
    </div>
</template>
<script setup>
import { useGeneralStore } from "~/stores/general";
let store = useGeneralStore();
</script>
<style lang="">
    
</style>
<template>
    <div class="min-h-screen container mt-10">
      <h1 class="headText offers text-primary font-bold xl:text-[42px] lg:text-[42px] text-[32px]" :data-offers="$t('GET our')">{{ $t("SPATIAL OFFERS") }}</h1>
       <div class="mt-8 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-8">
        <nuxt-link v-for="item in store.offers" :to="localePath(`/offers/${item.id}`)" class="shadow-shadow1 flex flex-col gap-3 rounded-[12px] p-3">
          <NuxtImg :src="item.image" class="h-[290px] w-full rounded-[12px]" loading="lazy" alt="offer"></NuxtImg>
           <h4 class="text-primary line-clamp-2 text-[18px] font-bold"> {{ item.title }} </h4>
        </nuxt-link>
       </div>

       <loader v-if="store.loading"></loader>
    </div>
</template>
<script setup>
import { useOffersStore } from "@/stores/offers";
let store = useOffersStore();
const localePath = useLocalePath();
let route = useRoute(); 

onMounted(()=>{
  if(store.offers.length == 0){
     store.fetchOffers();
  }
});
</script>
<style lang="">
    
</style>
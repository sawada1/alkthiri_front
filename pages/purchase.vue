<template>
    <div class="min-h-screen">
        <div class="container my-16">

            <h1 class="headText font-bold purchase mb-10 text-primary xl:text-[42px] lg:text-[42px] text-[32px]" :data-purchase="$t('FIND WHAT YOU NEED')"> {{ $t('PURCHASE ORDER') }} </h1>
            <div class="grid xl:grid-cols-2 lg:grid-cols-2 gap-8">
               <div>dsdsd</div>
               <div class="bg-white shadow-shadow1 rounded-[16px] p-4">
                  <div class="flex items-center justify-center gap-9">
                     <button @click="store.checkStatus = 1" class="text-[#b0b0b0] text-[22px] border-b-[1px] relative " :class="{'activePurchaseBtn': store.checkStatus == 1}"> {{ $t('individuals') }} </button>
                     <div class="w-[12px] h-[12px] bg-tw-grey rounded-full"></div>
                     <button @click="store.checkStatus = 2" class="text-[#b0b0b0] text-[22px] relative" :class="{'activePurchaseBtn': store.checkStatus == 2}"> {{ $t('corporate') }} </button>
                  </div>
                  <div class="bg-tw-grey w-full h-[1px]"></div>
                   <OrderIndOrder v-if="store.checkStatus == 1" class="mt-10"></OrderIndOrder>
                   <OrderCorparate v-if="store.checkStatus == 2" class="mt-10"></OrderCorparate>
               </div>
            </div>
            
        </div>
    </div>
</template>
<script setup>
import {useOrderStore} from '@/stores/order'
let store = useOrderStore();
let route = useRoute();
let model_id = route.query.model_id;
let color_id = route.query.color_id;
let car_id = route.query.id;

onMounted(() => {
   store.getPurchaseData(); 
});
</script>
<style lang="scss">
 .activePurchaseBtn{
    font-weight: 700;
    color: #1b395f;
    &::before{
        content: '';
        position: absolute;
        top: 101%;
        background-color: #1b395f;
        width: 100%;
        height: 1px;
    }
 }
</style>
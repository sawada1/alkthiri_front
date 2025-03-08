<template>
    <div>
        <div class="flex items-center flex-col xl:flex-row lg:flex-row  gap-4">
         <h3 class="text-primary text-[18px] font-bold"> {{ $t('payment method') }} </h3>
         <div class="bg-[#F2F2F2] flex items-center rounded-[10px] xl:min-w-[352px] lg:min-w-[352px] w-full">
            <button @click="store.checkTypeCorp = 'finance'" class="xl:w-[176px] lg:-[176px] w-[50%] h-[50px] rounded-[10px] text-[#6F6F6E] flex items-center justify-center" :class="{'bg-primary text-white':store.checkTypeCorp == 'finance'}">
                {{ $t('finance') }}
            </button>
            <button @click="store.checkTypeCorp = 'cash'" class="xl:w-[176px] lg:-[176px] w-[50%] h-[50px] rounded-[10px]  text-[#6F6F6E] flex items-center justify-center" :class="{'bg-primary text-white':store.checkTypeCorp == 'cash'}">
                {{ $t('cash') }}
            </button>
         </div>
        </div> 
</div>
</template>
<script setup>
import {useOrderStore} from '@/stores/order'
let store = useOrderStore();
</script>
<style lang="">
    
</style>
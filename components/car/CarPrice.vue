<template>
    <div class="flex items-center w-full xl:w-fit lg:w-fit gap-8">
            <div
              class="rtl:rounded-br-[8px] rtl:rounded-tl-[8px] w-[50%] ltr:rounded-tr-[8px] ltr:rounded-bl-[8px] font-bold flex items-center justify-center bg-primary xl:py-4 lg:py-4 py-1 w-full lg:min-w-[180px] xl:min-w-[180px] text-white"
            >
              <div  v-if="checkStatus == 'show'" class="flex flex-col gap-2">
                <span class="font-medium"> {{ $t("pricee") }} </span>
                <div  class="flex items-center gap-3">
                  <span class="" > {{ store.CarDetails?.selling_price }} </span>
                  <SvgRiyal color="#fff"></SvgRiyal>
                </div>
              </div>
              <div v-else>
                <span  v-if="checkStatus == 'other'"> {{ store.CarDetails?.field_other_status }} </span>
                <span v-else> {{ $t(checkStatus) }} </span>
              </div>
            </div>
            <div v-if="checkStatus == 'show'" class="flex flex-col items-center gap-2">
              <span class="text-primary"> {{ $t("after vat") }} </span>
              <div class="flex items-center gap-3">
                <span class="text-primary"> {{ store.CarDetails?.selling_price_after_vat }} </span>
                <SvgRiyal color="#1B395F"></SvgRiyal>
              </div>
            </div>
          </div>
</template>
<script setup>
import {useCarStore} from '@/stores/car';
let store = useCarStore();

const checkStatus = computed(() => store.CarDetails.price_field_status || '');


</script>
<style lang="">
    
</style>
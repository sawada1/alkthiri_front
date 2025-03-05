<template>
    <div class="flex items-center w-full xl:w-fit lg:w-fit gap-8">
            <div
              class="rtl:rounded-br-[8px] rtl:rounded-tl-[8px] w-[50%] ltr:rounded-tr-[8px] ltr:rounded-bl-[8px] font-bold flex items-center justify-center bg-primary xl:py-4 lg:py-4 py-1 lg:px-[60px] xl:px-[60px] text-white"
            >
              <div class="flex flex-col gap-2">
                <span class="font-medium"> {{ $t("pricee") }} </span>
                <div class="flex items-center gap-3">
                  <span class=""> 15000</span>
                  <SvgRiyal color="#fff"></SvgRiyal>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center gap-2">
              <span class="text-primary"> {{ $t("after vat") }} </span>
              <div class="flex items-center gap-3">
                <span class="text-primary"> 15000</span>
                <SvgRiyal color="#1B395F"></SvgRiyal>
              </div>
            </div>
          </div>
</template>
<script setup>

</script>
<style lang="">
    
</style>
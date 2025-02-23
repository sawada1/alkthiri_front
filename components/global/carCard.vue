<template>
    <div class="flex flex-col xl:gap-4 lg:gap-4 gap-2 items-center">
              <NuxtImg
                :src="car.main_image ||car?.model_image"
                placeholder="/images/placeholder.png"
                class="w-full xl:h-[200px] lg:h-[200px] h-[150px] object-contain"
                :alt="car.name"
                loading="lazy"
              ></NuxtImg>
              <span class="text-[16px] text-center text-primary font-semibold">
                {{ car.name || car?.model_name }}
              </span>
            </div>
</template>
<script setup>
let props = defineProps({
    car:{
        required: true,
        default:{
            main_image:'',
            name:''
        }
    }
})
</script>
<style lang="">
    
</style>
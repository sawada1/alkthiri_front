<template>
    <nuxt-link :to="localePath(`/cars/${car?.id}`)" class="flex flex-col xl:gap-4 lg:gap-4 gap-2 items-center">
              <NuxtImg
                :src="car.main_image ||car?.model_image"
                placeholder="/images/placeholder.png"
                class="w-full xl:h-[200px] lg:h-[200px] h-[150px] object-contain"
                :alt="car.name"
                loading="lazy"
              ></NuxtImg>
              <span class="xl:text-[16px] lg:text-[16px] text-[14px] line-clamp-2 text-center text-primary font-semibold">
                {{ car.name || car?.model_name }}
              </span>
            </nuxt-link>
</template>
<script setup>
const localePath = useLocalePath();

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
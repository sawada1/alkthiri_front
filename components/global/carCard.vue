<template>
    <nuxt-link :to="localePath({path:`/cars/${car?.model_id}`, query:{car_id: car?.id , year:car?.year}})" class="flex flex-col xl:gap-4 lg:gap-4 gap-2 items-center">
              <NuxtImg
                :src="carImage"
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
let router = useRouter();
let props = defineProps({
    car:{
        required: true,
        default:{
            main_image:'',
            name:''
        }
    }
});

const carImage = computed(() => props.car?.main_image || props.car?.model_image || "/images/placeholder.png");


const goToCarPage = (id, model_id) => {
  const queryParams = {
    model_id: model_id,
    // name: name,
  }
  let url = `/cars/${id}`
  
  const updatedRoute = {
    path: url,
    query: {
      ...queryParams,
    },
  };

  const fullLocalePath = localePath(updatedRoute);
  router.push(fullLocalePath);
}
</script>
<style lang="">
    
</style>
<template>
  <div class="min-h-screen">
    <div class="my-10 container">
      <div class="grid xl:grid-cols-4 lg:grid-cols-4 gap-8">
        <div class="col-span-1 sticky tp[]">
          <div>
            <div class="flex items-center justify-between">
              <p class="text-[#6F6F6E] text-[18px] font-bold">
                {{ $t("filter") }}
              </p>
              <button class="text-primary underline">{{ $t("reset") }}</button>
            </div>
            <h3 class="text-primary text-[20px] font-bold my-3">
              {{ $t("pricee") }}
            </h3>
            <div>
              <ClientOnly>
                <Vue3Slider v-model="valuePrice" :min="minPrice" :max="maxPrice" :step="1" />
              </ClientOnly>
              <div class="flex items-center justify-between mt-2 mb-8">
                <p class="text-[#767676] flex items-center gap-2"> {{ valuePrice[1] }} <SvgRiyal></SvgRiyal></p>
                <p class="text-[#767676] flex items-center gap-2"> {{ valuePrice[0] }} <SvgRiyal></SvgRiyal></p>
              </div>

              <UAccordion :items="filterData">
          <template #default="{ item, index, open }">
            <UButton color="gray" variant="ghost" class="bg-grey py-4 mb-3 dark:border-gray-700">
              <!-- <template #leading>
                <div
                  class="w-[37px] h-[37px] rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center">
                  <UIcon name="material-symbols:location-on" class="w-6 h-6 text-white dark:text-gray-900" />
                </div>
              </template> -->

              <span class="truncate text-primary text-lg font-bold"> {{ item.name }}</span>

              <template #trailing>
                <UIcon :name="open ? 'i-heroicons-minus' : 'i-heroicons-plus'"
                  class="w-5 h-5 ms-auto transform transition-transform duration-200" />
              </template>
            </UButton>
          </template>
          <template #item="{ item, index }">
            <div class="bg-grey rounded-[8px] p-3">
             <div class="flex flex-col gap-4">
             <div  v-for="i in item.brands" class="flex items-center gap-2">
                <UCheckbox color="primary" :id="`checkInp-${i?.id}`" :value="i?.id" v-model="brands" />
                <label :for="`checkInp-${i?.id}`" class="flex items-center gap-1">
                <NuxtImg :src="i?.image" loading="lazy" width="40" height="40"></NuxtImg>
                <span class="text-[18px] text-primary font-bold"> {{ i?.name }}  </span>
               
                </label>
             </div>
             <div v-if="item.type == 'models'">
             <div v-if="modelsData?.length >= 1" class="flex flex-col gap-4 h-[350px] overflow-y-auto">
             <div  v-for="i in modelsData" class="flex items-center gap-2">
                <UCheckbox color="primary" :id="`checkInpModel-${i?.id}`" :value="i?.id" v-model="models" />
                <label :for="`checkInpModel-${i?.id}`" class="flex items-center gap-1">
                <!-- <NuxtImg :src="i?.image" loading="lazy" width="30" height="30"></NuxtImg> -->
                <span class="text-[18px] text-primary font-bold"> {{ i?.name }}  </span>
               
                </label>
             </div>
             </div>
             <div v-else class="text-[18px]"> {{ $t('you have to choose a brand') }} </div>
             </div>
             <div  v-for="i in item.types" class="flex items-center gap-2">
                <URadio  color="primary" :key="i.value" :id="`checkInptype-${i?.value}`" :value="i?.value" v-model="checkType" />
                <label :for="`checkInptype-${i?.value}`" class="flex items-center gap-1">
                <!-- <NuxtImg :src="i?.image" loading="lazy" width="30" height="30"></NuxtImg> -->
                <span class="text-[18px] text-primary font-bold"> {{ i?.name }}  </span>
               
                </label>
             </div>
             </div>
            
            </div>
          </template>
        </UAccordion>
            </div>
            {{ filterModels }}
          </div>
        </div>
        <div class="col-span-3">
          <div class="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1">
           <CarCard v-for="i in cars" :car="i"></CarCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
let {t}  = useI18n();
const valuePrice = ref([0, 0]);
let maxPrice = ref();
let minPrice = ref();
let brands = ref([]);
let models = ref([]);
let brandsData = ref([]);
let checkType = ref('sedan');
let route = useRoute();
const getFilterData = async()=>{
    let result = await useApi().get('cars-filter-data');
    if(result.status == 200){
        filterData.value[0].brands = result.data.brands;
        brandsData.value = result.data.brands;
        maxPrice.value = result.data?.maxPrice;
        minPrice.value = result.data?.minPrice;
        valuePrice.value[0] = result.data?.minPrice;
        valuePrice.value[1] = result.data?.maxPrice;
    }
}
let modelsData = ref([]);
let filterData = ref([
    {
        name:t('cars'),
        brands:[],
        type:"brands"
    },
    {
        name:t('mark & model'),
        models:[],
        type:"models"
    },
    {
        name:t('car type'),
        types:[
            {
                name:t('sedan'),
                value:"sedan"
            },
            {
                name:t('multi'),
                value:"multi"
            },
            {
                name:t('commercial'),
                value:"commercial"
            },
        ],
       type: "types"
    },
]);
let cars = ref([]);
const getCars = async()=> {
 let result = await useApi().get('cars' , {
    params: {
      brands: brands.value,
      min_price: valuePrice.value[0],
      max_price: valuePrice.value[1],
      models: models.value,
    //   name: mainName.value,
      type: checkType.value 
    }
 });
 if(result.status == 200){
  cars.value = result.data.data
 }
}
watch(()=> brands.value , (val)=>{
    if(val){
        modelsData = brandsData.value.filter((ele=> brands.value.includes(ele?.id))).map((ele)=> ele.parent_models).flat()
    }
})
onMounted(() => {
    getFilterData(); 
    checkType.value = route.query?.type || 'sedan';
    brands.value = route.query?.id ? [route.query?.id] : brands.value;
    models.value = route.query?.model ? [route.query?.model] : models.value;
    getCars();
    
});
</script>
<style lang="scss">
.vue-slider-process {
  background-color: #1b395f;
}
.vue-slider-dot-tooltip {
  display: none;
}
</style>

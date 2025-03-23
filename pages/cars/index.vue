<template>
    <div class="min-h-screen">
      <div class="my-10 container h-full">
        <div class="grid h-full xl:grid-cols-3 lg:grid-cols-3 gap-8">
          <div class="xl:col-span-1 lg:col-span-1 col-span-3 h-full relative">
            <div class="sticky top-10 ">
              <div class="flex items-center justify-between">
                <p class="text-[#6F6F6E] text-[18px] font-bold">
                  {{ $t("filter") }}
                </p>
                <button @click="resetFunc()" class="text-primary underline">{{ $t("reset") }}</button>
              </div>
              <h3 class="text-primary text-[20px] font-bold my-3">
                {{ $t("pricee") }}
              </h3>
              <div>
                <ClientOnly>
                  <Vue3Slider v-model="valuePrice" :direction="locale == 'ar' ? 'rtl' : 'ltr'" :min="minPrice" :max="maxPrice" :step="1" />
                </ClientOnly>
                <div class="flex items-center justify-between mt-2 mb-8">
                  <p class="text-[#767676] flex items-center gap-2"> {{ valuePrice[0] }} <SvgRiyal></SvgRiyal></p>
                  <p class="text-[#767676] flex items-center gap-2"> {{ valuePrice[1] }} <SvgRiyal></SvgRiyal></p>
                </div>
                <UAccordion :items="filterData" multiple>
            <template #default="{ item, index, open }">
              <UButton color="gray" variant="ghost" class="bg-grey py-4 mb-3 dark:border-gray-700">
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
                  <NuxtImg :src="i?.image" loading="lazy" placeholder="/images/placeholder.png" width="40" height="40"></NuxtImg>
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
          <UButton @click="getCars()" class="w-full flex items-center justify-center font-bold  py-3"> {{ $t('apply') }} </UButton>
              </div>
            </div>
          </div>
          <div class="xl:col-span-2 lg:col-span-2 col-span-3 h-full ">
          <div v-if="pendingCars" class="flex items-center justify-center h-[60vh]">
          <loaderImage></loaderImage>
          </div>
            <div v-else class="grid xl:grid-cols-3 bg-primar lg:grid-cols-3 grid-cols-2 gap-5">
             <CarCard v-for="i in cars" :car="i"></CarCard>
            </div>
            <UnavailableCar v-if="checkNotFound"></UnavailableCar>
          </div>
        </div>
      </div>
      <Loader v-if="loaderPage"></Loader>
  
    </div>
  </template>
  <script setup>
  let {t , locale}  = useI18n();
  const valuePrice = ref([]);
  let maxPrice = ref();
  let minPrice = ref();
  let brands = ref([]);
  let models = ref([]);
  let brandsData = ref([]);
  let loaderPage = ref(false);
  let pendingCars = ref(false);
  let checkType = ref('sedan');
  let checkNotFound = ref(false);
  let route = useRoute();
  let mainName = ref(route.query?.name ? route.query?.name : '')
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
  const getFilterData = async()=>{
    loaderPage.value = true;
    let result = await useApi().get('cars-filter-data');
    if(result.status == 200){
         loaderPage.value = false;
          filterData.value[0].brands = result.data.brands;
          brandsData.value = result.data.brands;
          maxPrice.value = result.data?.maxPrice;
          minPrice.value = result.data?.minPrice;
          valuePrice.value[0] = result.data?.minPrice;
          valuePrice.value[1] = result.data?.maxPrice;
      }
  }

  const resetFunc = ()=>{
    brands.value = [];
    models.value = [];
    valuePrice.value[0] =  minPrice.value;
    valuePrice.value[1] =  maxPrice.value;
    checkType.value = 'sedan'
  }
  let cars = ref([]);
  const getCars = async()=> {
    pendingCars.value = true;
    checkNotFound.value = false;
    let result = await useApi().get('cars' , {
      params: {
        brands: brands.value,
        min_price: valuePrice.value[0],
        max_price: valuePrice.value[1],
        models: models.value,
         name: mainName.value,
        type: checkType.value 
      }
    });
    if(result.status == 200){
     pendingCars.value = false;
    cars.value = result.data.data;
    if(cars.value.length == 0){
        checkNotFound.value = true;
    }
   }
  }

  watch(()=> brands.value , (val)=>{
    if(val){
        modelsData.value = brandsData.value.filter((ele)=> val.includes(ele.id)).map((ele)=> ele.parent_models).flat();
    }
  });

  watch(()=> route.query?.name , (val)=>{
    if(val){
      mainName.value = val;
      getCars();
    }
  });

  watch([()=> brands.value , ()=> models.value , ()=> checkType.value], ([val1 , val2 , val3])=>{
    if(val1 || val2 || val3){
      mainName.value = '';
    }
  });

useHead({
      title: `${t('cars')}`,
      meta: [
        { name: 'description', content: 'test' },
        { name: 'keywords', content: 'test , test , test'},
        { name: 'author', content: 'webstdy' },
        { property: 'og:title', content: `${t('home')}` },
        { property: 'og:description', content: 'test' },
      ],
    });

  onMounted(() => {
      getFilterData(); 
      checkType.value = route.query?.type || 'sedan';
      brands.value = route.query?.id ? [Number(route.query?.id)] : brands.value;
      models.value = route.query?.model ? [Number(route.query?.model)] : models.value;
      getCars();
      setTimeout(()=>{
      modelsData.value = brandsData.value.filter((ele)=> brands.value.includes(ele.id)).map((ele)=> ele.parent_models).flat();
      }, 1000)
      
  });
  </script>
  <style lang="scss"></style>
  
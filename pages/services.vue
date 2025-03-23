<template>
    <div class="min-h-screen">
        <div  class="xl:h-[80vh] lg:h-[80vh] h-[50vh] bg-primary xl:bg-transparent lg:bg-transparent relative">
        <div class="z-20 container pt-20">
        <div class="flex flex-col items-center xl:items-start lg:items-start text-center xl:text-start lg:text-start">
           <h1 class="xl:text-primary lg:text-primary text-white font-bold text-[28px] xl:text-[40px] lg:text-[40px]"> {{ $t('accessories') }} </h1>
           <p class="font-bold xl:w-[700px] xl:text-black lg:text-black text-white  lg:w-[700px] mt-4"> {{ $t('services text') }} </p>
        </div> 
         </div>
         <NuxtImg src="/images/mainServices.png" placeholder="/images/placeholder.png"  class="absolute hidden xl:block lg:block top-0 -z-20 w-full object-cover h-full scale-x-[-1]"></NuxtImg>
        </div>

        <div class="flex flex-col xl:gap-0 lg:gap-0 gap- services-container">
         <div v-for="item , index in store.servicesData" class="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2  xl:gap-0 lg:gap-0 gap-5" :class="{'active':index % 2 == 0 ? true : false}">
          <div class="w-full">
           <NuxtImg :src="item.image"  placeholder="/images/placeholder.png" class="w-full object-cover xl:h-[500px] lg:h-[500px] h-[200px]"></NuxtImg>
          </div>

          <div class="flex flex-col gap-3 xl:pt-10 lg:pt-10 pt-5 pb-5 px-10 text-container">
           <h3 class="font-bold text-[22px]"> {{ item.name }} </h3>
           <p v-html="item.description" class=""> </p>
          </div>

         </div>
        </div>
        <Loader v-if="store.pendingServices"></Loader>
    </div>
</template>
<script setup>
import {useGeneralStore} from '@/stores/general';
let store = useGeneralStore();
const { t, locale } = useI18n();

useHead({
      title: `${t('accessories')}`,
      meta: [
        { name: 'description', content: 'test' },
        { name: 'keywords', content: 'test , test , test'},
        { name: 'author', content: 'webstdy' },
        { property: 'og:title', content: `${t('home')}` },
        { property: 'og:description', content: 'test' },
      ],
    });
onMounted(() => {
   store.fetchServices(); 
});

</script>
<style lang="scss">
html[dir="rtl"]{
    .services-container{
        .active{
            background-color: #f2f2f2;
            direction: ltr;
            .text-container , p{
                align-items: end;
            }
        }
    }
}
html[dir="ltr"]{
    .services-container{
        .active{
            background-color: #f2f2f2;
            direction: rtl;
            .text-container , p{
                align-items: start;
            }
        }
    }
}
</style>
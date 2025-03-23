<template>
    <div class="min-h-screen  my-16 ">
    <div v-if="store.generalData" class="">
        
        <div class="flex flex-col xl:flex-row lg:flex-row gap-10">
            <NuxtImg v-if="locale == 'ar'" src="/images/aboutUs2.png" placeholder="/images/placeholder.png" class="w-[600px]" loading="lazy" alt="about image"></NuxtImg>
            <NuxtImg v-if="locale == 'en'" src="/images/aboutUs.png" placeholder="/images/placeholder.png" class="w-[600px]" loading="lazy" alt="about image"></NuxtImg>

            <div class="flex flex-col gap-3 xl:px-0 lg:px-0 px-5">
             <h1 class="font-bold headText about-us text-primary  xl:text-[42px] lg:text-[42px] text-[32px]" :data-about-us="$t('NOW MORE ABOUT US')"> {{ $t('WELCOME TO AL KATIRI MOTORS') }} </h1>
             <p class="text-base/8" v-html="store.generalData?.about_us">
            </p>
            </div>

        </div>
       <div class="flex justify-center items-center mt-16 xl:px-0 lg:px-0 px-5">
        <div class="xl:w-[900px] xl:h-[500px] lg:w-[900px] lg:h-[500px] w-full h-[300px] shadow-shadow1 p-3 rounded-[16px]">
            <iframe
            class="w-full h-full rounded-[16px]" 
     :src="`https://www.youtube.com/embed/${store.generalData?.about_us_video_url}`"
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
       </div>

        <HomeWhy></HomeWhy>

       <loader v-if="loadingAbout"></loader>
    </div>
    
    </div>
</template>
<script setup>
import { useGeneralStore } from "@/stores/general";
let store = useGeneralStore();
const localePath = useLocalePath();
const { locales, locale, setLocale , t } = useI18n();
let loadingAbout = ref(true);

onMounted(()=>{
    setTimeout(()=>{
        loadingAbout.value = false;
    }, 1000)
})

useHead({
      title: `${t('about us')}`,
      meta: [
        { name: 'description', content: 'test' },
        { name: 'keywords', content: 'test , test , test'},
        { name: 'author', content: 'webstdy' },
        { property: 'og:title', content: `${t('home')}` },
        { property: 'og:description', content: 'test' },
      ],
    });

</script>
<style lang="">
    
</style>
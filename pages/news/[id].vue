<template>
    <div class="min-h-screen">
         <div class="container my-16">
             <NuxtImg :src="newDetails?.cover_image" placeholder="/images/placeholder.png" class="w-full xl:h-[400px] lg:h-[400px] h-[250px] object-contain" alt="new image" loading="lazy"/>

             <div class="flex items-center xl:justify-between lg:justify-between flex-col xl:flex-row lg:flex-row gap-5 xl:gap-0 lg:gap-0 text-center xl:text-start lg:text-start mt-8">
                <h1 class="text-primary font-semibold text-[28px]"> {{newDetails?.title}} </h1>
                <div class="flex items-center gap-3">
                    <div class="flex items-center gap-2">
                        <UIcon name="material-symbols-light:bookmark-sharp" class="w-5 h-5 text-tw-grey" />
                        <span class="text-tw-grey text-[14px]"> {{newDetails?.tags}} </span>
                    </div>
                    <div class="flex items-center gap-2">
                        <UIcon name="material-symbols:timer-outline-rounded" class="w-5 h-5 text-tw-grey" />
                        <span class="text-tw-grey text-[14px]"> {{newDetails?.created_at}} </span>
                    </div>
                </div>
            </div>
            <div class="mt-8" v-html="newDetails?.description">  </div>
         </div>
    </div>
    <Loader v-if="pending"></Loader>
</template>
<script setup>
let route = useRoute();
let newDetails = ref();
let pending = ref(true);
const getNew = async()=>{
 let result = await useApi().get(`/news/${route.params.id}`);
 if(result.status == 200){
    newDetails.value = result.data.data;
    pending.value = false;
 }
}

onMounted(()=>{
    getNew();
})
</script>
<style lang="">
    
</style>
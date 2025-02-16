<template>
    <div class="relative mt-[100px] ">
        <div class="line w-full h-1 border-t-[1px] hidden xl:block lg:block absolute top-[70%] z-[-1] border-primary border-dashed"></div>
         <div class="head text-center">
            <h2 class="font-bold mb-10 headText why xl:text-[42px] lg:text-[42px] text-[32px] text-primary" :data-why="$t('AL KATHIRI MOTORS')">
          {{ $t("why choose us") }}
        </h2>
    </div>
    <div class="container">
        <div class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-10">
            <div class="box bg-white shadow-shadow1 flex flex-col py-10 px-3 text-center items-center gap-3 rounded-xl">
                <NuxtImg src="/images/box1.svg" loading="lazy"></NuxtImg>
                <span class="text-primary text-[18px] font-semibold"> سعرنا هو الأفضل </span>
            </div>
            <div class="box bg-white shadow-shadow1 flex flex-col py-10 px-3 text-center items-center gap-3 rounded-xl">
                <NuxtImg src="/images/box2.svg" loading="lazy"></NuxtImg>
                <span class="text-primary text-[18px] font-semibold"> سعرنا هو الأفضل </span>
            </div>
            <div class="box bg-white shadow-shadow1 flex flex-col py-10 px-3 text-center items-center gap-3 rounded-xl">
                <NuxtImg src="/images/box3.svg" loading="lazy"></NuxtImg>
                <span class="text-primary text-[18px] font-semibold"> سعرنا هو الأفضل </span>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>
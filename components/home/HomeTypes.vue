<template>
    <div class="container">
        <div class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-8 xl:gap-0 lg:gap-0 xl:mt-[100px] lg:mt-[100px] mt-[70px]">
            <div @click="goToBrandPageByType('sedan')" class="bg-[#F2F2F2] cursor-pointer px-1 xl:w-[320px] lg:w-[320px] md:w-[270px] w-full h-[121px] rounded-[20px] flex items-center justify-center gap-3">
                <span class="text-primary text-[16px] font-bold"> {{ $t("sedan") }} </span>
                <NuxtImg src="/images/sedan.png" loading="lazy" width="140" height="100" alt="sedan"></NuxtImg>
            </div>
            <div @click="goToBrandPageByType('multi')" class="bg-[#F2F2F2] cursor-pointer px-1 xl:w-[320px] lg:w-[320px] md:w-[270px] w-full h-[121px] rounded-[20px] flex items-center justify-center gap-3">
                <span class="text-primary text-[16px] font-bold"> {{ $t("multi") }} </span>
                <NuxtImg src="/images/suv.png" loading="lazy" width="140" height="100" alt="multi"></NuxtImg>
            </div>
            <div @click="goToBrandPageByType('commercial')" class="bg-[#F2F2F2] cursor-pointer px-1 xl:w-[320px] lg:w-[320px] md:w-[270px] w-full h-[121px] rounded-[20px] flex items-center justify-center gap-3">
                <span class="text-primary text-[16px] font-bold"> {{ $t("commercial") }} </span>
                <NuxtImg src="/images/commercial.png" loading="lazy" width="140" height="100" alt="commercial"></NuxtImg>
            </div>
        </div>
    </div>
</template>
<script setup>
 const localePath = useLocalePath();
const router = useRouter();
 const goToBrandPageByType = (type) => {
  const queryParams = {
    type: type,
  };
  const url = "/cars";

  const updatedRoute = {
    path: url,
    query: {
      ...queryParams,
    },
  };

  const fullLocalePath = localePath(updatedRoute);
  router.push(fullLocalePath);
};
</script>
<style lang="">
    
</style>
<template>
    <div class="xl:mt-[100px] lg:mt-[100px] mt-[70px] xl:mb-[100px] lg:mb-[100px] mb-[70px]">
        <div class="container">
         <div class="relative w-full p-8  bg-primary rounded-[20px]">
         <div class="flex flex-col items-center text-center gap-3 xl:w-fit lg:w-fit w-full">
            <h2 class="text-white text-[22px] font-bold">
          {{ $t(`Book Your`) }} <br />
          {{ $t("Maintenance Appointment") }} <br />
          {{ $t("now") }}
        </h2>
        <button id="bookNow2" aria-label="book" class="bg-white text-primary rounded-xl font-bold w-fit px-8 py-2">
            {{ $t("book now") }}
        </button>
         </div>
         <NuxtImg class="absolute top-[0%] w-full left-0 rtl:scale-x-[-1] hidden xl:block lg:block" loading="lazy" src="/images/sub.png" alt="sub1"></NuxtImg>
         <NuxtImg class="absolute top-[-50%] w-[720px] h-[375px]  rtl:left-0 ltr:right-0 ltr:scale-x-[-1] hidden xl:block lg:block" loading="lazy" alt="sub2" src="/images/sub2ar.png"></NuxtImg>
         </div>
        </div>
    </div>
</template>
<script>


</script>
<style lang="">
    
</style>
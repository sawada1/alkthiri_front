<template>
    <div class="py-[70px] bg-[#f2f2f2] mt-[100px]">
        <div class="container">
            <h3 class="headText mb-10 text-center brands font-bold xl:text-[42px] lg:text-[42px] text-[32px] text-primary" :data-brands="$t('AUTHORIZED DISTRIBUTOR')">  {{ $t("car brands") }} </h3>
            <div class="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 gap-7">
                <div v-for="i in 6" class="shadow- transition-shadow hover:shadow-lg cursor-pointer bg-white rounded-[10px] flex items-center justify-center flex-col h-[170px]">
                    <NuxtImg src="https://admin.alkathirimotors.com.sa/storage/Images/Brands/webstdy_17134137161.png" class="object-cover " width="100" height="70" loading="lazy"></NuxtImg>
                    <span class="text-primary text-[18px]"> تويتا </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const router = useRouter();
const localePath = useLocalePath();
const goToBrandPageByIdAndName = (id, name) => {
  const queryParams = {
    id: id,
    name: name,
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
<template>
  <div class="xl:py-[70px] lg:py-[70px] py-[40px] bg-[#f2f2f2] xl:mt-[100px] lg:mt-[100px] mt-[70px]">
    <div class="container">
      <h3
        class="headText mb-10 text-center brands font-bold xl:text-[42px] lg:text-[42px] text-[32px] text-primary"
        :data-brands="$t('AUTHORIZED DISTRIBUTOR')"
      >
        {{ $t("car brands") }}
      </h3>
      <div
        class="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 gap-7"
      >
        <div v-if="store.spinner_brands" v-for="i in 5">
          <USkeleton
            class="h-[170px] w-full"
            :ui="{ rounded: 'rounded-[10px]', background: 'bg-white' }"
          />
        </div>
        <div
        v-else
          v-for="item in store.brandArray"
          @click="goToBrandPageByIdAndName(item.id)"
          class="shadow- transition-shadow hover:shadow-lg cursor-pointer bg-white rounded-[10px] flex items-center justify-center flex-col h-[170px]"
        >
          <NuxtImg
            :src="item.image"
            class="object-cover"
            placeholder="/images/placeholder.png"
            width="100"
            height="70"
            :alt="item.name"
            loading="lazy"
          ></NuxtImg>
          <span class="text-primary text-[18px]"> {{ item.name }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useHomeStore } from "~/stores/home";
let store = useHomeStore();
const router = useRouter();
const localePath = useLocalePath();
const goToBrandPageByIdAndName = (id) => {
  const queryParams = {
    id: id,
    // name: name,
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
<style lang=""></style>

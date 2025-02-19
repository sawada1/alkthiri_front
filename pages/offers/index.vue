<template>
    <div class="min-h-screen container mt-10">
    <div class="flex items-center flex-col gap-5" v-if="arr.length >= 1">
        <nuxt-link v-for="i in arr" :to="`/offers/${i?.id}`">  {{ i?.name }}</nuxt-link>
    </div>
    </div>
</template>
<script setup>
import axios from 'axios';

  let arr = ref([]);
  const getArr = async()=>{
   let result = await axios.get("https://admin.qitaf.webstdy.com/api/list/cars");
    if(result.status == 200){
        arr.value = result.data.data;
    }
  };

  onMounted(() => {
    getArr();
  });
</script>
<style lang="">
    
</style>
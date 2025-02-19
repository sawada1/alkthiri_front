<template>
    <div class="min-h-screen">
    <div v-if="data">
      <div>
        {{ data?.id }}
      </div>
      <div>
        {{ data?.name }}
      </div>
    </div>
    </div>
</template>
<script setup>
definePageMeta({
  validate: async (route) => {
    try {
      const response = await fetch(`https://admin.qitaf.webstdy.com/api/list/car/${route.params.id}`);
      return response.ok;
    } catch {
      return false;
    }
  }
});
import axios from 'axios'
let route = useRoute();
let arr = ref();
  const getArr = async()=>{
   let result = await axios.get(`https://admin.qitaf.webstdy.com/api/list/car/${route.params?.id}`);
    if(result.status == 200){
        arr.value = result.data;
    }
  };
  const { data } = await useAsyncData(`offer-${route.params.id}`, async () => {
  const response = await axios.get(`https://admin.qitaf.webstdy.com/api/list/car/${route.params.id}`);
  return response.data.data;
}, {
  initialCache: false, // Forces data refresh when revisiting the page
  revalidate: 60, // Regenerate after 60 seconds
});
  onMounted(() => {
    // getArr();
  });
</script>
<style lang="">
    
</style>
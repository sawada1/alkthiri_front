<template>
    <div class="min-h-screen container mt-10">
    <div class="flex items-center gap-5">
        <nuxt-link v-for="i in arr" :to="`/offers/${i}`"> test {{ i }}</nuxt-link>
    </div>
    </div>
</template>
<script setup>
  let arr = ref([1 , 2 , 3 , 4 , 5]);
</script>
<style lang="">
    
</style>
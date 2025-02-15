<template >
    <div class="container xl:mt-[100px] lg:mt-[100px] mt-[70px]">
        <div class="bg-white px-[16px] py-[24px] rounded-[16px] flex items-center justify-between shadow-shadow1">
            <UInputMenu v-model="selected1" :options="people" />
            <UInputMenu v-model="selected2" :options="people" />
            <UInputMenu v-model="selected3" :options="people" />
          <button class="bg-tw-primary rounded-xl text-white font-bold  w-[120px] h-[40px] shadow-shadow2"> بحث </button>
        </div>
        
    </div>
</template>
<script setup lang="ts">
import { useHomeStore } from "@/stores/home";

const people = ['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']

const selected1 = ref()
const selected2 = ref()
const selected3 = ref()

</script>
<style lang="">
    
</style>
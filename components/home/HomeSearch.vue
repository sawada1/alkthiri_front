<template>
    <div class="container xl:mt-[100px] lg:mt-[100px] mt-[70px]">
        <div class="bg-white px-[16px] py-[24px] rounded-[16px] flex xl:flex-row lg:flex-row md:flex-row flex-col items-center gap-5 justify-between shadow-shadow1">
            <USelectMenu v-model="selected1" :options="options" placeholder="Select a person" class="xl:w-[300px] lg:w-[250x] md:w-[200px] w-full" searchable
                searchable-placeholder="Search by name or color" option-attribute="name" by="id"
                :search-attributes="['name' , 'id']">
                <template #option="{ option: person }">
                    <span class="truncate">{{ person.name }}</span>
                </template>
            </USelectMenu>
            <USelectMenu v-model="selected2" :options="options" placeholder="Select a person" class="xl:w-[300px] lg:w-[250x] md:w-[200px] w-full" searchable
                searchable-placeholder="Search by name or color" option-attribute="name" by="id"
                :search-attributes="['name' , 'id']">
                <template #option="{ option: person }">
                    <span class="truncate">{{ person.name }}</span>
                </template>
            </USelectMenu>
            <USelectMenu v-model="selected3" :options="options" placeholder="Select a person" class="xl:w-[300px] lg:w-[250x] md:w-[200px] w-full" searchable
                searchable-placeholder="Search by name or color" option-attribute="name" by="id"
                :search-attributes="['name' , 'id']">
                <template #option="{ option: person }">
                    <span class="truncate">{{ person.name }}</span>
                </template>
            </USelectMenu>
     
            <button class="bg-tw-primary rounded-xl text-white font-bold  xl:w-[120px] lg:w-[120px] md:w-[120px] w-full h-[40px] shadow-shadow2"> 
                {{ $t('search') }}
            </button>

        </div>

    </div>
</template>
<script setup lang="ts">
import { useHomeStore } from "@/stores/home";

const people = ['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']
const options = [
    { id: 1, name: 'Wade Cooper', colors: ['red', 'yellow'] },
    { id: 2, name: 'Arlene Mccoy', colors: ['blue', 'yellow'] },
    { id: 3, name: 'Devon Webb', colors: ['green', 'blue'] },
    { id: 4, name: 'Tom Cook', colors: ['blue', 'red'] },
    { id: 5, name: 'Tanya Fox', colors: ['green', 'red'] },
    { id: 5, name: 'Hellen Schmidt', colors: ['green', 'yellow'] }
]

const selected1 = ref()
const selected2 = ref()
const selected3 = ref()

</script>
<style lang="">

</style>
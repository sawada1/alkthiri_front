<template>
    <div class="min-h-screen">
       <div class="container mt-[100px] mb-[120px]">
        <div class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3">
         <div class="col-span-1">
          <h1 :data-faq="$t('FIND YOUR ANSWER')" class="headText font-bold faq  text-primary xl:text-[42px] lg:text-[42px] text-[32px]"> {{ $t('FREQUENTLY ASK QUESTION') }} </h1>
         </div>
         <div class="col-span-2">
         <UAccordion :items="store.faqsData">
          <template #default="{ item, index, open }">
            <UButton
              color="gray"
              variant="ghost"
              class="bg-grey py-4 mb-3 dark:border-gray-700"
            >
             

              <span class="truncate text-lg font-bold"
                >{{ index + 1 }} . {{ item.question }}</span
              >

              <template #trailing>
                <UIcon
                  :name="open ? 'i-heroicons-minus' : 'i-heroicons-plus'"
                  class="w-5 h-5 ms-auto transform transition-transform duration-200"
                />
              </template>
            </UButton>
          </template>
          <template #item="{ item, index }">
            <div class="bg-grey rounded-[8px] p-4">
              <div v-html="item.answer"></div>
            </div>
          </template>
        </UAccordion>
         </div>
        </div>
       </div>
       <Loader v-if="store.pendingFaqs"></Loader>
    </div>
</template>
<script setup>
const { t, locale } = useI18n();

import {useGeneralStore} from '@/stores/general';
let store = useGeneralStore();

useHead({
      title: `${t('FREQUENTLY ASK QUESTION')}`,
      meta: [
        { name: 'description', content: 'test' },
        { name: 'keywords', content: 'test , test , test'},
        { name: 'author', content: 'webstdy' },
        { property: 'og:title', content: `${t('home')}` },
        { property: 'og:description', content: 'test' },
      ],
    });

onMounted(() => {
   store.fetchFaqs(); 
});
</script>
<style lang="">
    
</style>
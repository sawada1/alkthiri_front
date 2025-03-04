<template>
    <div class="container min-h-screen my-[100px]">
        <h1 class="text-primary font-bold text-[28px] xl:text-start lg:text-start text-center xl:text-[40px] lg:text-[40px]"> {{ $t('accounts') }} </h1>
        <div class="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-10 gap-5">
         <div v-for="item in store.banksData" class="shadow-shadow1 rounded-[16px] p-4">
           <h4 class="text-primary text-[18px] text-center mb-3 font-bold"> {{ item.name }} </h4>
           <div class="px-2 h-[150px]  w-full border-grey border-[2px] rounded-[8px]">
           <NuxtImg :src="item.image" placeholder="/images/placeholder.png" class="h-full object-contain"></NuxtImg>
           </div>
           <div class="details-accounts bg-grey p-2 rounded-[8px] flex flex-col gap-3 mt-4">
             <div class="flex items-center justify-between">
               <span class="text-[13px] font-semibold"> {{ $t('accountN') }}  </span>
               <span class="text-[13px]"> {{ item.owner_name }} </span>
             </div>
             <div class="flex flex-col gap-1">
             <div class="flex items-center justify-between">
             <div class="flex flex-col gap-1">
                <span class="text-[13px] font-semibold"> {{ $t('account number') }} : </span>
             </div>
             
             </div>
             <div class="flex items-center justify-between">
               <span class="text-[13px] "> {{ item.account_no }} </span>
                <button @click="copyToClipboard()" class="flex items-center gap- underline copy-word">
                 <span>{{ $t('copy') }}</span>
                <UIcon name="material-symbols:content-copy" class="text-primary bg-primary w-4 h-4"></UIcon>
                </button>
             </div>
             </div>
             <div class="flex flex-col gap-1">
             <div class="flex items-center justify-between">
             <div class="flex flex-col gap-1">
                <span class="text-[13px] font-semibold"> {{ $t('iBan') }} : </span>
             </div>
             
             </div>
             <div class="flex items-center justify-between">
               <span class="text-[13px] "> {{ item.iban }} </span>
                <button @click="copyToClipboard()" class="flex items-center gap- underline copy-word">
                 <span>{{ $t('copy') }}</span>
                <UIcon name="material-symbols:content-copy" class="text-primary bg-primary w-4 h-4"></UIcon>
                </button>
             </div>
             </div>
           
           </div>
         </div>
        </div>
        <Loader v-if="store.pendingBanks"></Loader>
    </div>
</template>
<script setup>
const {locale , t} = useI18n();
import {useGeneralStore} from '@/stores/general';
let store = useGeneralStore();

onMounted(() => {
   store.fetchBanks(); 
});
function copyToClipboard() {
      /* Copy the text */
      if (process.client) {
        let copy = document.querySelectorAll('.copy-word');
        copy.forEach((e)=>{
            e.addEventListener("click",function(ele){
              let word = this.previousElementSibling.innerHTML;
              const clipBoard = navigator.clipboard;
              clipBoard.writeText(word).then(() => {
                if(locale.value == 'en'){
                  e.innerHTML = 'done'; 
                } else{
                  e.innerHTML = 'تم النسخ'; 
                }
                 setTimeout(() => {
                 e.innerHTML = ` 
                  <span> ${ t('copy') } </span>
               <span class="iconify i-material-symbols:content-copy text-primary bg-primary w-4 h-4" aria-hidden="true" style="" data-v-inspector="pages/accounts.vue:26:17"></span>                 `; 
                 }, 1000);
              });
            })
        })

      }
    }
</script>
<style lang="">
    
</style>
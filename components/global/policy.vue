<template>
    <div>
        <UModal v-model="open" class="z-[99999999]">
      <div class="p-4 relative">
      <button @click="open = false" class="absolute top-3 ltr:right-4 rtl:left-4 text-primary font-bold text-[18px]"> x </button>
        <div v-html="store.generalData?.privacy_policy"></div>
      </div>
    </UModal>
    </div>
</template>
<script setup>
import { useGeneralStore } from "~/stores/general";
let store = useGeneralStore();
let props= defineProps({
    isOpen:{
        default: false,
    }
});

let open = ref(props.isOpen);
watch(()=> props.isOpen , (val)=>{
open.value = val;
})
</script>
<style lang="">
    
</style>
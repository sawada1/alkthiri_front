<template>
    <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <LayoutNav />

    <!-- Main Content -->
    <main class="flex-grow">
      <NuxtPage />

      
    </main>
    <a id="fixedIconId" class="fixedIcon fixed bottom-10 z-50 left-10 xl:w-[75px] xl:h-[75px] lg:w-[75px] lg:h-[75px] w-[50px] h-[50px] flex items-center justify-center rounded-full" target="_blank" :href="`https://wa.me/${store.generalData?.whatsapp}`">
          <img class="fixedIconImg" aria-label="whatsAppIcon" src="/images/Icon-awesome-whatsapp.svg" alt="whatsapp" />
        </a>
    <!-- Footer -->
    <LayoutFooter />
  </div>
</template>
<script setup lang="ts">
 import {useGeneralStore} from '@/stores/general';
 let store = useGeneralStore()
</script>
<style lang="scss">
.fixedIcon {
    background: #50b75d 0 0 no-repeat padding-box;
    box-shadow: 0 10px 44px rgba(80, 183, 93, .451);
    color: #25d366;
    cursor: pointer;
}
</style>
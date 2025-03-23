<template>
    <div class="min-h-screen my-16">
        <div class="container">
           <UnavailableCar></UnavailableCar>
        </div>
    </div>
</template>
<script setup>
const { t, locale } = useI18n();

useHead({
      title: `${t('unavailable car')}`,
      meta: [
        { name: 'description', content: 'test' },
        { name: 'keywords', content: 'test , test , test'},
        { name: 'author', content: 'webstdy' },
        { property: 'og:title', content: `${t('home')}` },
        { property: 'og:description', content: 'test' },
      ],
    });
</script>
<style lang="">
    
</style>
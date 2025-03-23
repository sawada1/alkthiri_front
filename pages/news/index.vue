<template>
    <div>
        <lazy-HomeNews />
    </div>
</template>
<script setup>
let {locale , t} = useI18n();
useHead({
      title: `${t('news')}`,
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
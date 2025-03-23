<template>
    <div class="container min-h-screen flex items-center justify-center">
        <div class="flex flex-col items-center justify-center gap-8">
            <NuxtImg width="300" height="307" src="/images/thank.png" loading="lazy" alt="thank image" placeholder="/images/placeholder.png"></NuxtImg>
            <h1 class="text-primary font-bold text-[32px]"> شكراً لك لقد تم ارسال طلبك بنجاح! </h1>
            <p class="text-[#5A7184] text-[20px]"> سيتم التواصل معك من قبل احد موظفين خدمه العملاء في اقرب وقت ممكن </p>
            <nuxt-link :to="$localePath('/')">
                <UButton class="xl:w-[350px] lg:w-[350px] flex items-center justify-center xl:h-[45px] lg:h-[45px] text-white font-bold w-full"> {{ $t('home') }} </UButton>
            </nuxt-link>
        </div>
    </div>
</template>
<script setup>
const { t, locale } = useI18n();

useHead({
      title: `${t('thank page')}`,
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
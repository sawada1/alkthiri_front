<template>
    <div class="bg-white shadow-shadow1 py-7">
        <div class="container navbar-container flex items-center justify-between">
            <div class="flex items-center gap-10">
                <NuxtImg src="/images/logo.svg" width="140" alt="logo" loading="lazy"/>
                <div class="links xl:flex lg:flex hidden  items-center gap-4">
                    <div class="nav-item">
                        <nuxt-link :to="localePath('/')" class="nav-link relative text-tw-grey" >{{ $t("home")
                            }}</nuxt-link>
                    </div>
                    <div class="nav-item">
                        <nuxt-link :to="localePath('/brands')" class="nav-link relative text-tw-grey">{{
                            $t("cars")
                            }}</nuxt-link>
                    </div>
                    <div class="nav-item">
                        <nuxt-link :to="localePath('/offers')" class="nav-link relative text-tw-grey">
                            {{ $t("offers") }}</nuxt-link>
                    </div>
                    <div class="nav-item">
                        <nuxt-link :to="localePath('/contact-us')" class="nav-link relative text-tw-grey">
                            {{ $t("contact us") }}</nuxt-link>
                    </div>
                    <div class="nav-item">
                        <nuxt-link :to="localePath('/about-us')" class="nav-link relative text-tw-grey">
                            {{ $t("about us") }}</nuxt-link>
                    </div>
                    <div class="nav-item">
                        <nuxt-link :to="localePath('/careers')" class="nav-link relative text-tw-grey">
                            {{ $t("careers") }}
                        </nuxt-link>
                    </div>
                    <div class="nav-item">
                        <nuxt-link :to="localePath('/services')" class="nav-link relative" text-tw-grey>
                            {{ $t("accessories") }}</nuxt-link>
                    </div>
                    <div class="nav-item relative">
                        <span class="absolute top-[-20px] px-2 rounded-full bg-tw-primary text-white">{{ $t("new") }}</span>
                        <nuxt-link :to="localePath('/unavailable-car')" class="nav-link relative text-tw-grey">
                            {{ $t("unavailable car") }}
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div class="actions xl:flex lg:flex hidden items-center gap-10">
                <div class="flex items-center gap-5">
                    <div>
                        <nuxt-link v-if="locale == 'en'" :to="switchLocalePath('ar')">
                           <NuxtImg src="/images/ar.svg" alt="ar" loading="lazy" width="30" /> 
                        </nuxt-link>
                        <nuxt-link v-if="locale == 'ar'" :to="switchLocalePath('en')">
                           <NuxtImg src="/images/en.svg" alt="en" loading="lazy" width="30" /> 
           
                        </nuxt-link>
                    </div>
                    <button id="searchLabelIcon3" aria-label="search">
                    <SvgSearch></SvgSearch>
                    </button>
                </div>
                <button id="bookButton" class="bg-tw-primary text-white rounded-lg px-4 py-2 shadow-shadow2"> {{ $t("book For Maintenance") }} </button>
            </div>
            <button id="toggleLabelIcon" aria-label="toggle" @click="isOpen = true" class="xl:hidden lg:hidden block">
                <Icon name="flowbite:align-left-outline" color="" class="bg-tw-primary w-[35px] h-[35px]" width="40" height="40" />
            </button>
        </div>
        <USlideover side="top" v-model="isOpen" class="!max-height-fit">
      <div class="p-4 bg-white shadow-shadow1">
        <UButton
          color="gray"
          variant="ghost"
          size="sm"
          icon="i-heroicons-x-mark-20-solid"
          class="flex sm:hidden absolute end-5 top-5 z-10"
          square
          
          padded
          @click="isOpen = false"
        />
        <div class="flex flex-col items-cente gap-8">
            <div class="nav-item">
                        <nuxt-link :to="localePath('/')" class="nav-link relative text-tw-grey" >{{ $t("home")
                            }}</nuxt-link>
                    </div>
                    <div class="nav-item">
                        <nuxt-link :to="localePath('/brands')" class="nav-link relative text-tw-grey">{{
                            $t("cars")
                            }}</nuxt-link>
                    </div>
                    <div class="nav-item">
                        <nuxt-link :to="localePath('/offers')" class="nav-link relative text-tw-grey">
                            {{ $t("offers") }}</nuxt-link>
                    </div>
                    <div class="nav-item">
                        <nuxt-link :to="localePath('/contact-us')" class="nav-link relative text-tw-grey">
                            {{ $t("contact us") }}</nuxt-link>
                    </div>
                    <div class="nav-item">
                        <nuxt-link :to="localePath('/about-us')" class="nav-link relative text-tw-grey">
                            {{ $t("about us") }}</nuxt-link>
                    </div>
                    <div class="nav-item">
                        <nuxt-link :to="localePath('/careers')" class="nav-link relative text-tw-grey">
                            {{ $t("careers") }}
                        </nuxt-link>
                    </div>
                    <div class="nav-item">
                        <nuxt-link :to="localePath('/services')" class="nav-link relative" text-tw-grey>
                            {{ $t("accessories") }}</nuxt-link>
                    </div>
                    <div class="nav-item relative">
                        <span class="absolute top-[-20px] px-2 rounded-full bg-tw-primary text-white">{{ $t("new") }}</span>
                        <nuxt-link :to="localePath('/unavailable-car')" class="nav-link relative text-tw-grey">
                            {{ $t("unavailable car") }}
                        </nuxt-link>
                    </div>
        </div>
        <div class="actions flex  justify-center mt-3 items-center gap-10">
                <div class="flex items-center gap-5">
                    <div>
                        <nuxt-link v-if="locale == 'en'" :to="switchLocalePath('ar')">
                           <NuxtImg src="/images/ar.svg" alt="ar" width="30" loading="lazy" /> 
                        </nuxt-link>
                        <nuxt-link v-if="locale == 'ar'" :to="switchLocalePath('en')">
                           <NuxtImg src="/images/en.svg" alt="en" width="30" loading="lazy" /> 
           
                        </nuxt-link>
                    </div>
                    <button id="searchLabelIcon2" aria-label="search">
                    <SvgSearch></SvgSearch>
                    </button>
                </div>
                <button id="bookLabel2" aria-label="book" class="bg-tw-primary text-white rounded-lg px-4 py-2 shadow-shadow2"> {{ $t("book For Maintenance") }} </button>
            </div>
        <Placeholder class="h-full" />
      </div>
    </USlideover>
    </div>
</template>
<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const isOpen = ref(false)

watch(()=>locale.value , (val)=>{
 if(val){
  useHead({
      htmlAttrs: {
        lang: locale.value == 'en' ? "en" : 'ar',
        dir: locale.value == 'en' ? "ltr" : 'rtl',
      },
    });
 }
})
</script>
<style lang="">

</style>
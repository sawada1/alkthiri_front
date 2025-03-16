<template>
    <div class="bg-white shadow-shadow1 py-7 sticky top-0 z-[9999999]">
        <div class="container navbar-container relative flex items-center justify-between">
            <div class="flex items-center gap-10">
              <nuxt-link :to="localePath('/')">
                <NuxtImg src="/images/logo.svg" width="140" alt="logo" loading="lazy"/>
              </nuxt-link>
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
                           <NuxtImg src="/images/ar.svg" alt="ar" width="30" loading="lazy" /> 
                        </nuxt-link>
                        <nuxt-link v-if="locale == 'ar'" :to="switchLocalePath('en')">
                           <NuxtImg src="/images/en.svg" alt="en" width="30" loading="lazy" /> 
           
                        </nuxt-link>
                    </div>
                    <button @click="clickSearch = !clickSearch" id="searchLabelIcon3" aria-label="search">
                    <SvgSearch></SvgSearch>
                    </button>
                </div>
                <nuxt-link :to="localePath('/maintenance')">
                    <button id="bookButton" class="bg-tw-primary text-white rounded-lg px-4 py-2 shadow-shadow2"> {{ $t("book For Maintenance") }} </button>
                </nuxt-link>
            </div>
            <button id="toggleLabelIcon" aria-label="toggle" @click="isOpen = true" class="xl:hidden lg:hidden block">
                <Icon name="flowbite:align-left-outline" color="" class="bg-tw-primary w-[35px] h-[35px]" width="40" height="40" />
            </button>
            <div class="w-[400px] xl:block lg:block hidden absolute top-[170%] rtl:left-[240px] ltr:right-[240px] z-[55] rtl:translate-x-[-300%] transition-all duration-300 ltr:translate-x-[300%]" :class="{'!translate-x-0':clickSearch}">
       <UInput size="xl" icon="i-lucide-search" v-model="searchWord"  @keyup.enter="goToBrandPageByName"></UInput>
      </div>
        </div>
        <USlideover side="top" v-model="isOpen" class="!max-height-fit ">
      <div class="p-4 bg-white relative shadow-shadow1">
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
                <nuxt-link :to="localePath('/maintenance')">
                    <button id="bookLabel2" aria-label="book" class="bg-tw-primary text-white rounded-lg px-4 py-2 shadow-shadow2"> {{ $t("book For Maintenance") }} </button>
                </nuxt-link>
            </div>
        <Placeholder class="h-full" />
      <div class="w-full absolute top-[100%] rtl:left-[0px]">
       <UInput></UInput>
      </div>
      </div>
    </USlideover>
    </div>
    <div v-if="clickSearch" @click="clickSearch = false" class="overlaySearch fixed  top-0 right-0 left-0 w-screen h-screen z-[45]"></div>

</template>
<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const clickSearch = ref(false);

const isOpen = ref(false)

let searchWord = ref("");
const router = useRouter();
const goToBrandPageByName = () => {
  if (searchWord.value) {
    const queryParams = {
      name: searchWord.value,
    };
    const url = locale.value + "/cars";
    router.push({ path: `/${url}`, query: queryParams });
    searchWord.value = "";
    clickSearch.value = false;
  }
};
// const changeLang = async () => {
//   locale.value = locale.value === "en" ? "ar" : "en";
//   useHead({
//       htmlAttrs: {
//         lang: locale.value == 'en' ? "en" : 'ar',
//         dir: locale.value == 'en' ? "ltr" : 'rtl',
//       },
//     });
//     setLocale(locale.value == 'en' ? 'en' : 'ar');
//   const query = useRoute().query;
//   await navigateTo(localePath({ path: useRoute().path, query: query }));

// };
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
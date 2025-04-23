<template>
  <div
    class="bg-primary relative py-[30px] bg-[url('/images/footer-back.png')] bg-center bg-no-repeat bg-cover"
  >
    <div class="container">
      <div class="grid gap-10 grid-cols-1 xl:grid-cols-4 lg:grid-cols-4">
        <div class="flex items-center justify-center xl:justify-start lg:justify-start">
          <NuxtImg
            src="/images/footer2.png"
            class="xl:w-[272px] lg:w-[272px] xl:h-[78px] lg:h-[78px] w-[200px] h-[57px] object-contain"
            alt="logo"
            loading="lazy"
          ></NuxtImg>
        </div>
        <div class="flex items-center text-center xl:text-start lg:text-start justify-center flex-col">
          <div>
            <span class="mb-5 block text-tw-grey">
              {{ $t("Important Links") }}
            </span>
            <div class="flex ite-center justify-center">
              <div class="links flex flex-col gap-3">
                <nuxt-link :to="localePath('/')" class="text-white">
                  <span>{{ $t("home") }}</span>
                </nuxt-link>
                <nuxt-link :to="localePath('/brands')" class="text-white">
                  <span>{{ $t("cars") }}</span>
                </nuxt-link>

                <nuxt-link :to="localePath('/offers')" class="text-white">
                  <span>{{ $t("offers") }}</span>
                </nuxt-link>
                <nuxt-link :to="localePath('/brands')" class="text-white">
                  <span>{{ $t("purchase") }}</span>
                </nuxt-link>
                <nuxt-link :to="localePath('/faQ')" class="text-white">
                  <span>{{ $t("faq") }}</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center text-center xl:text-start lg:text-start justify-center">
          <div class="links flex flex-col gap-3">
            <nuxt-link :to="localePath('/services')" class="text-white">
              <span>{{ $t("accessories") }}</span>
            </nuxt-link>
            <nuxt-link :to="localePath('/accounts')" class="text-white">
              <span>{{ $t("accounts") }}</span>
            </nuxt-link>
            <nuxt-link :to="localePath('/contact-us')" class="text-white">
              <span>{{ $t("contact us") }}</span>
            </nuxt-link>

            <nuxt-link :to="localePath('/news')" class="text-white">
              <span>{{ $t("news") }}</span>
            </nuxt-link>
            <nuxt-link :to="localePath('/careers')" class="text-white">
              <span>{{ $t("careers") }}</span>
            </nuxt-link>
            <button @click="isOpen = !isOpen">
              <span
              type="button"
              data-bs-toggle="modal"
              class="text-white"
              data-bs-target="#termsModal"
              >{{ $t("Term And Conditions") }}</span
              >
              
            </button>
            <button @click="isOpen2 = !isOpen2">
              <span
                type="button"
                data-bs-toggle="modal"
                class="text-white"
                data-bs-target="#privacyModal"
                >{{ $t("Privacy Policy") }}</span
              >
            </button>
          </div>
        </div>

        <div class="flex items-center justify-center">
          <div>
            <div class="flex flex-col items-center mb-4 gap-2">
              <span class="text-white"> {{ $t("Unifiednumber") }} </span>
              <a
                class="text-white"
                v-if="store.generalData?.phone"
                :href="`tel:${store.generalData?.phone}`"
              >
                {{ store.generalData?.phone }}
              </a>
            </div>
            <div class="flex items-center gap-5">
              <a
              v-if="store.generalData?.facebook_url"
                target="_blank"
                class="iconHref"
                aria-label="iconHref"
                :href="store.generalData?.facebook_url"
              >
                <NuxtImg
                  src="/images/icons/facebook.svg"
                  alt="facebook"
                  loading="lazy"
                  class="w-6 h-6"
                ></NuxtImg>
              </a>
              <a
              v-if="store.generalData?.snapchat"
                target="_blank"
                class="iconHref"
                aria-label="iconHref"
                :href="store.generalData?.snapchat"
              >
                <SvgSnap></SvgSnap>
              </a>
              <a
              v-if="store.generalData?.instagram_url"
                target="_blank"
                class="iconHref"
                aria-label="iconHref"
                :href="store.generalData?.instagram_url"
              >
                <NuxtImg
                  src="/images/icons/instagram.svg"
                  alt="instagram"
                  loading="lazy"
                  class="w-6 h-6"
                ></NuxtImg>
              </a>
              <a
              v-if="store.generalData?.twitter_url"
                target="_blank"
                class="iconHref"
                aria-label="iconHref"
                :href="store.generalData?.twitter_url"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  height="27"
                  width="27"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
              </a>
            </div>
            <nuxt-link :to="localePath('/maintenance')" class="mt-2">
              <button
              id="maintenance3" aria-label="search"
                class="bg-white px-8 py-3 rounded-[8px] font-bold mt-5 text-primary"
              >
                <span class="">{{ $t("book For Maintenance") }}</span>
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="w-full h-1 bg-white mt-6 mb-4"></div>
      <div class="flex flex-col items-center gap-3 text-white">
        <span
          >&copy; {{ $t("AL KATHIRI MOTORS") }},
          {{ $t("All Rights Reserved") }}</span
        >
        <p class="flex items-center gap-3">
          <span>{{ $t("Developed By") }}</span>
          <a
            target="_blank"
            href="https://webstdy.com/ar?utm_source=alkathiri-foorter&utm_medium=referral"
          >
            <NuxtImg src="/images/logo-footer.svg" width="60" height="60" loading="lazy" alt="webstdy" />
          </a>
        </p>
      </div>
    </div>
    <button id="upBtnn" aria-label="upBtn" @click="scrollUp()" class="w-[40px] absolute bottom-5 right-10 h-[40px] flex items-center justify-center rounded-lg border-[1px] border-white">
        <Icon name="meteor-icons:arrow-up" class="bg-white w-[27px] h-[27px]" width="24" height="24" />
    </button>
  </div>

  <Terms :isOpen="isOpen"></Terms>
  <Policy :isOpen="isOpen2"></Policy>
</template>
<script setup lang="ts">
import { useGeneralStore } from "~/stores/general";
let store = useGeneralStore();
const localePath = useLocalePath();
const isOpen = ref(false);
const isOpen2 = ref(false);
const scrollUp = () => {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};
</script>
<style lang=""></style>

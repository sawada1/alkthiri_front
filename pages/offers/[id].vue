<template>
  <div class="container min-h-screen my-10">
    <div v-if="store.offer">
      <NuxtImg
        :src="store.offer.offer?.image"
        class="w-full rounded-[16px] xl:h-[800px] lg:h-[800px] h-[350px]"
        loading="lazy"
        :alt="store.offer.offer?.title"
      ></NuxtImg>

      <div class="flex justify-between">
        <div>
          <h1
            class="text-primary my-10 font-bold xl:text-[32px] lg:text-[32px] text-[22px]"
          >
            {{ store.offer.offer?.title }}
          </h1>
          <p class="text-tw-grey" v-html="store.offer.offer?.description"></p>
        </div>
        <a href="#offerPurchase">
          <UButton class="h-fit px-10 py-2 mt-10 font-bold">
            {{ $t("purchaseOrder") }}
          </UButton>
        </a>
      </div>
      <div class="relative">
        <ClientOnly>
          <swiper-container class="latestSwiper" ref="containerRefOffer">
            <swiper-slide
              v-for="(slide, idx) in store.offer?.offer_cars"
              :key="idx"
            >
              <carCard :car="slide"></carCard>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
        <button
          @click="swiper.next()"
          aria-label="swiper"
          class="absolute z-10 top-[40%] left-2 hidden xl:block lg:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            width="40px"
            viewBox="0 -960 960 960"
            fill="#1b395f"
          >
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        </button>
        <button
          @click="swiper.prev()"
          id="swiperBtnOffer2"
          aria-label="swiper"
          class="absolute z-10 top-[40%] right-2 hidden xl:block lg:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            width="40px"
            viewBox="0 -960 960 960"
            fill="#1b395f"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </button>
      </div>

      <div
        id="offerPurchase"
        class="shadow-shadow1 xl:p-[32px] lg:p-[32px] p-[16px] rounded-[24px] mt-10"
      >
        <h6
          class="text-primary font-bold xl:text-[40px] lg:text-[40px] text-[30px] mb-5"
        >
          {{ $t("purchaseOrderFromOffer") }}
        </h6>
        <UForm
          ref="form"
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
          @error="onError"
        >
          <div class="grid xl:grid-cols-2 lg:grid-cols-2 gap-5">
            <UFormGroup name="name">
              <div class="flex flex-col gap-2">
                <span class="text-primary text-[16px] font-bold">
                  {{ $t("full name") }}
                </span>

                <UInput
                  v-model="state.name"
                  :placeholder="$t('write your name..')"
                />
              </div>
            </UFormGroup>
            <UFormGroup name="email">
              <div class="flex flex-col gap-2">
                <span class="text-primary text-[16px] font-bold">
                  {{ $t("email") }}
                </span>
                <UInput
                  v-model="state.email"
                  placeholder="example@mail.com.."
                />
              </div>
            </UFormGroup>
            <UFormGroup name="phone">
              <div class="flex flex-col gap-2">
                <span class="text-primary text-[16px] font-bold">
                  {{ $t("phone number") }}
                </span>

                <UInput v-model="state.phone" placeholder="05xxxxxxxx" />
              </div>
            </UFormGroup>
            <UFormGroup name="city_id">
              <div class="flex flex-col gap-2">
                <span class="text-primary text-[16px] font-bold">
                  {{ $t("city") }}
                </span>
                <USelectMenu
                  v-model="selectedCity"
                  :options="store2.purchaseData?.cities"
                  class="w-full"
                  searchable
                  :searchable-placeholder="$t('search')"
                  option-attribute="name"
                  by="id"
                  :search-attributes="['name', 'id']"
                >
                  <template #option="{ option: person }">
                    <span class="truncate">{{ person.name }}</span>
                  </template>
                </USelectMenu>
              </div>
            </UFormGroup>
            <UFormGroup name="car_id">
              <div class="flex flex-col gap-2">
                <span class="text-primary text-[16px] font-bold">
                  {{ $t("car") }}
                </span>
                <USelectMenu
                  v-model="selectedCar"
                  :options="cars"
                  class="w-full"
                  searchable
                  :searchable-placeholder="$t('search')"
                  option-attribute="name"
                  by="id"
                  :search-attributes="['name', 'id']"
                >
                  <template #option="{ option: person }">
                    <span class="truncate">{{ person.name }}</span>
                  </template>
                </USelectMenu>
              </div>
            </UFormGroup>

            <UFormGroup name="terms_and_privacy">
              <div class="flex items-center gap-2 xl:mt-8 lg:mt-5">
                <UCheckbox
                  color="primary"
                  id="checkInp"
                  v-model="state.terms_and_privacy"
                />
                <label for="checkInp">
                  {{ $t("I have read and unconditionally agree to the") }}
                  <span
                    @click="isOpen = !isOpen"
                    class="text-primary cursor-pointer underline"
                  >
                    {{ $t("Term And Conditions") }}
                  </span>

                  {{ $t("and") }}
                  <span
                    @click="isOpen2 = !isOpen2"
                    class="text-primary cursor-pointer underline"
                  >
                    {{ $t("Privacy Policy") }}
                  </span>
                </label>
              </div>
            </UFormGroup>
          </div>

          <UButton
            :disabled="pendingBtn"
            class="w-fit px-10 flex disabled:cursor-not-allowed disabled:opacity-50 items-center justify-center py-2"
            type="submit"
          >
            {{ $t("send") }}
          </UButton>
        </UForm>
      </div>
    </div>
    <Terms :isOpen="isOpen"></Terms>
    <Policy :isOpen="isOpen2"></Policy>
    <loader v-if="store.loadingOffer"></loader>
  </div>
</template>
<script lang="ts" setup>
interface CarDetails {
  id: number;
  name: string;
}
import { useOrderStore } from "@/stores/order";
let store2 = useOrderStore();
import { number, object, string, type InferType } from "yup";
import type { FormSubmitEvent, Form, FormErrorEvent } from "#ui/types";
const { t, locale } = useI18n();
let router = useRouter();
const localePath = useLocalePath();
import { useOffersStore } from "@/stores/offers";
let store = useOffersStore();
let route = useRoute();
let isOpen = ref(false);
let isOpen2 = ref(false);
const containerRefOffer = ref(null);
const cars = ref<CarDetails[]>([]);
useHead({
  title: `${t("SPATIAL OFFERS")}`,
  meta: [
    { name: "description", content: "test" },
    { name: "keywords", content: "test , test , test" },
    { name: "author", content: "webstdy" },
    { property: "og:title", content: `${t("home")}` },
    { property: "og:description", content: "test" },
  ],
});
const swiper = useSwiper(containerRefOffer, {
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
  },
  pagination: {
    clickable: true,
  },
});

const schema = object({
  email: string().email(t("Invalidemail")).required(t("Required")),
  name: string().required(t("Required")),
  phone: string().required(t("Required")),
  terms_and_privacy: string().required(t("Required")),

  city_id: number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required(t("Required")),
  car_id: number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required(t("Required")),
});

type Schema = InferType<typeof schema>;
let pendingBtn = ref(false);
const state = reactive({
  email: "",
  name: "",
  phone: "",
  terms_and_privacy: undefined,
  city_id: "" as string | number,
  car_id: "" as string | number,
});

const selectedCity = computed({
  get: () =>
    store2.purchaseData?.cities?.find(
      (city: any) => city.id === state.city_id
    ) || undefined,
  set: (selected) => {
    state.city_id = selected?.id ?? "";
  },
});
const selectedCar = computed({
  get: () =>
    cars.value?.find((car: any) => car.id === state.car_id) || undefined,
  set: (selected) => {
    state.car_id = selected?.id ?? "";
  },
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  form.value!.clear();

  try {
    pendingBtn.value = true;
    let formData = new FormData();
    formData.append("name", state.name);
    formData.append("phone", state.phone);
    formData.append("email", state.email);
    formData.append("city_id", String(state.city_id ?? ""));
    formData.append("car_id", String(state.car_id ?? ""));
    formData.append("terms_and_privacy", String(state.terms_and_privacy ?? ""));
    const response = await useApi().post(
      `offer-order/${route.params.id}`,
      formData
    );
    if (response.status === 201 || response.status === 200) {
      pendingBtn.value = false;
      if(process.client) {
        localStorage.setItem("formSubmitted", "true");
        
      }
      router.push(localePath("/thank-you"));
     
    }
  } catch (err: any) {
    pendingBtn.value = false;
    const errors = Object.entries(err.response.data.errors).map(
      ([key, val]) => {
        return {
          path: key,
          message: Array.isArray(val) ? val[0] : val,
        };
      }
    );
    form.value!.setErrors(errors);
  }
}

const getCars = async () => {
  const response = await useApi().get<CarDetails[]>("all_cars");
  if (response.status === 200) {
    cars.value = response.data;
  }
};
const form = ref<Form<Schema>>();

async function onError(event: FormErrorEvent) {
  const element = document.getElementById(event.errors[0].id);
  element?.focus();
  element?.scrollIntoView({ behavior: "smooth", block: "center" });
}

watch(
  () => locale.value,
  (val) => {
    store.fetchOffer(route.params.id);
  }
);
onMounted(() => {
  store.fetchOffer(route.params.id);
  store2.getPurchaseData();
  getCars();
});
</script>
<style lang=""></style>

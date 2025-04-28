<template>
  <UForm
    ref="form"
    :schema="schema"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
    @error="onError"
  >
    <UFormGroup name="name">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("full name") }}
        </span>

        <UInput v-model="state.name" :placeholder="$t('write your name..')" />
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
          :options="store.purchaseData?.cities"
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
    
    <UFormGroup name="services">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("services") }}
        </span>
        <div
          v-for="(i, index) in store.purchaseData?.services"
          class="flex items-center gap-3"
        >
          <UCheckbox
            color="primary"
            :id="`checkInpService${index}`"
            label=""
            :value="i?.id"
            v-model="state.services"
          />
          <label :for="`checkInpService${index}`">
            <span class="text-primary font-bold"> {{ i?.name }} </span>
          </label>
        </div>
      </div>
    </UFormGroup>
    <nuxt-link :to="localePath('/accounts')" class="text-primary block mt-4 font-bold underline">
     {{ $t('click accounts') }}
    </nuxt-link>

    <UFormGroup name="terms_and_privacy">
      <div class="flex items-center gap-2">
        <UCheckbox
          color="primary"
          id="checkInp"
          v-model="state.terms_and_privacy"
        />
        <label for="checkInp">
          {{ $t("I have read and unconditionally agree to the") }}
          <span @click="isOpen = !isOpen"  class="text-primary cursor-pointer underline">
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
 
    <UButton
      :disabled="pendingBtn"
      class="w-full flex disabled:cursor-not-allowed disabled:opacity-50 items-center justify-center py-2"
      type="submit"
    >
      {{ $t("send") }}
    </UButton>
  </UForm>

  <Terms :isOpen="isOpen"></Terms>
  <Policy :isOpen="isOpen2"></Policy>
</template>
<script setup lang="ts">
import { useOrderStore } from "@/stores/order";
let store = useOrderStore();
import { number, object, string, type InferType } from "yup";
import type { FormSubmitEvent, Form, FormErrorEvent } from "#ui/types";
const { t, locale } = useI18n();
let router = useRouter();
const localePath = useLocalePath();
const schema = object({
  name: string().required(t("Required")),
  city_id: number().transform((value) => (isNaN(value) ? undefined : value)).required(t("Required")),
  terms_and_privacy: string().required(t("Required")),
  phone: string().required(t("Required")),
});

type Schema = InferType<typeof schema>;
let pendingBtn = ref(false);
const state = reactive({
  phone: "",
  name: "",
  city_id: "" as string | number,
  services: [] as any[],
  terms_and_privacy: undefined as undefined | boolean,
});

const selectedCity = computed({
  get: () => store.purchaseData?.cities?.find((city:any) => city.id === state.city_id) || undefined,
  set: (selected) => {
    state.city_id = selected?.id ?? ""; // ✅ Store only the id
  },
});
const route = useRoute();
let id = ref<any>(route.query.id);
let color_id = ref<any>(route.query.color_id);
const isOpen = ref(false);
const isOpen2 = ref(false);
async function onSubmit(event: FormSubmitEvent<Schema>) {
  form.value!.clear();
  let formData = new FormData();
  formData.append("payment_type", "cash");
  formData.append("car_id", id.value);
  formData.append("color_id", color_id.value);
  formData.append("name", state.name);
  formData.append("phone", state.phone);
  formData.append("city_id", String(state.city_id ?? ""));
  formData.append("terms_and_privacy", String(state.terms_and_privacy ?? ""));

  for (var i = 0; i < state.services.length; i++) {
    formData.append("services[]", state.services[i]);
  }

  try {
    pendingBtn.value = true;
    const response = await useApi().post("individuals-orders", formData);
    if (response.status === 201 || response.status === 200) {
      pendingBtn.value = false;
      if(process.client) {
        localStorage.setItem("formSubmitted", "true");
        
      }
      router.push(localePath("/thank-you"));
      Object.assign(state, {
        name: "",
        phone: "",
        city_id: "",
        services: [],
        terms_and_privacy: undefined,
      });
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
const form = ref<Form<Schema>>();

async function onError(event: FormErrorEvent) {
  const element = document.getElementById(event.errors[0].id);
  element?.focus();
  element?.scrollIntoView({ behavior: "smooth", block: "center" });
}
</script>
<style lang=""></style>

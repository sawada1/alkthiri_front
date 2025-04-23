<template>
    <div>
        <div class="flex items-center flex-col xl:flex-row lg:flex-row  gap-4">
         <h3 class="text-primary text-[18px] font-bold"> {{ $t('payment method') }} </h3>
         <div class="bg-[#F2F2F2] flex items-center rounded-[10px] xl:min-w-[352px] lg:min-w-[352px] min-w-full">
            <button @click="store.checkTypeCorp = 'finance'" class="xl:w-[176px] lg:-[176px] w-[50%] h-[50px] rounded-[10px] text-[#6F6F6E] flex items-center justify-center" :class="{'bg-primary text-white':store.checkTypeCorp == 'finance'}">
                {{ $t('finance') }}
            </button>
            <button @click="store.checkTypeCorp = 'cash'" class="xl:w-[176px] lg:-[176px] w-[50%] h-[50px] rounded-[10px]  text-[#6F6F6E] flex items-center justify-center" :class="{'bg-primary text-white':store.checkTypeCorp == 'cash'}">
                {{ $t('cash') }}
            </button>
         </div>

        </div> 
         <UForm
    ref="form"
    :schema="schema"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
    @error="onError"
  >

  <div v-for="(car, index) in state.formCar" :key="index" class="flex justify-betwee w-full  gap-4 items-center mt-8">
    <!-- Car Name Input -->
    <UFormGroup :name="`formCar[${index}].car_name`" class="w-[50%]" >
      <UInput v-model="car.car_name" />
    </UFormGroup>

    <!-- Count Input -->
    <UFormGroup :name="`formCar[${index}].count`" class="w-[50%]" >
      <UInput
        v-model.number="car.count"
        type="number"
        :min="1"
        @input="validateCount(index)"
        :placeholder="$t('Count')"
      />
    </UFormGroup>

    <div class="flex items-center gap-5">  
    <span
    class="cursor-pointer text-white rounded-md bg-primary w-[30px] h-[30px] flex items-center justify-center text-[18px]"
      v-if="state.formCar.length > 1"
      color="red"
      @click="removeRow(index)"
    >
       -
    </span>
  <span
  class="cursor-pointer text-white rounded-md bg-primary w-[30px] h-[30px] flex items-center justify-center text-[18px]" color="primary" @click="addRow"> + </span>
    
    </div>
  </div>

    <UFormGroup name="organization_name">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("Company Name") }}
        </span>

        <UInput v-model="state.organization_name" :placeholder="$t('Company Name')" />
      </div>
    </UFormGroup>
    <UFormGroup name="organization_ceo">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("employee") }}
        </span>

        <UInput v-model="state.organization_ceo" :placeholder="$t('The Chief Executive Officer (CEO)')" />
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

    <UFormGroup name="organization_email">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("Official email") }}
        </span>

        <UInput v-model="state.organization_email" :placeholder="$t('example@mail.com')" />
      </div>
    </UFormGroup>
    <UFormGroup name="organization_location">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("The company's headquarter") }}
        </span>

        <UInput v-model="state.organization_location" :placeholder="$t('city')" />
      </div>
    </UFormGroup>
    <UFormGroup name="organization_activity">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("Company activity (According to the record)") }}
        </span>

        <UInput v-model="state.organization_activity" :placeholder="$t('Company activity (According to the record)')" />
      </div>
    </UFormGroup>
    <UFormGroup name="organization_age">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("Company age") }}
        </span>

        <UInput v-model="state.organization_age" :placeholder="$t('Company age...')" />
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

    <nuxt-link v-if="store.checkTypeCorp == 'cash'" :to="localePath('/accounts')" class="text-primary block mt-4 font-bold underline">
     {{ $t('click accounts') }}
    </nuxt-link>
 
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
</div>
</template>
<script lang="ts" setup>
import {useOrderStore} from '@/stores/order'
let store = useOrderStore();

import { array , number, object, string, type InferType } from "yup";
import type { FormSubmitEvent, Form, FormErrorEvent } from "#ui/types";
const { t, locale } = useI18n();
let router = useRouter();
const localePath = useLocalePath();
const schema = object({
  city_id: number().transform((value) => (isNaN(value) ? undefined : value)).required(t("Required")),
  terms_and_privacy: string().required(t("Required")),
  organization_name: string().required(t("Required")),
  organization_ceo: string().required(t("Required")),
  organization_location: string().required(t("Required")),
  organization_activity: string().required(t("Required")),
  organization_age: string().required(t("Required")),
  organization_email: string().email(t('Invalidemail')).required(t("Required")),
  formCar: array().of(
    object({
      car_name: string().required(t("Required")),
      count: number()
        .typeError(t("Must be a number"))
        .positive(t("Must be greater than 0"))
        .integer(t("Must be a whole number"))
        .required(t("Required")),
    })
  ).min(1, t("At least one car is required")),
  phone: string().required(t("Required")),
});


const validateCount = (index: number) => {
  if (state.formCar[index].count < 1) {
    state.formCar[index].count = 1;
  }
};
type Schema = InferType<typeof schema>;
let pendingBtn = ref(false);
const state = reactive({
  phone: "",
  organization_ceo:"",
  organization_name:"",
  organization_email:"",
  organization_location:"",
  organization_activity:"",
  organization_age:"",
  formCar:[{car_name:"", count:1}],
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


const addRow = () => {
    state.formCar.push({ car_name: "", count: 1 });
};

const removeRow = (index:any) => {
  if (state.formCar.length > 1) {
    state.formCar.splice(index, 1);
  }
};
async function onSubmit(event: FormSubmitEvent<Schema>) {
  form.value!.clear();
  let formData = new FormData();
  formData.append("payment_type", store.checkTypeCorp);
  formData.append("car_id", id.value);
  formData.append("color_id", color_id.value);
  formData.append("phone", state.phone);
  formData.append("organization_name", state.organization_name);
  formData.append("organization_ceo", state.organization_ceo);
  formData.append("organization_email", state.organization_email);
  formData.append("organization_location", state.organization_location);
  formData.append("organization_activity", state.organization_activity);
  formData.append("organization_age", state.organization_age);
  formData.append("city_id", String(state.city_id ?? ""));
  formData.append("terms_and_privacy", String(state.terms_and_privacy ?? ""));
 
  for (var i = 0; i < state.services.length; i++) {
    formData.append("services[]", state.services[i]);
  }
  if (process.client) {
    state.formCar.forEach((obj, index) => {
      Object.entries(obj).forEach(([key, value]) => {
        formData.append(`cars[${index}][${key}]`, String(value ?? ""));
      });
    });
  }

  try {
    pendingBtn.value = true;
    const response = await useApi().post("corporates-orders", formData);
    if (response.status === 201 || response.status === 200) {
      pendingBtn.value = false;
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
const form = ref<Form<Schema>>();

async function onError(event: FormErrorEvent) {
  const element = document.getElementById(event.errors[0].id);
  element?.focus();
  element?.scrollIntoView({ behavior: "smooth", block: "center" });
}
</script>
<style lang="">
    
</style>
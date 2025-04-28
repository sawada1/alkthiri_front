<template>
  <div>
    <div class="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1">
      <div class="flex items-center text-center xl:items-start lg:items-start xl:text-start lg:text-start mb-6 xl:mb-0 lg:mb-0 flex-col justify-center gap-4">
        <h3
          class="font-bold text-primary xl:text-[28px] lg:text-[28px] text-[22px]"
        >
          {{ $t("Didn't Find Your Car?") }}
        </h3>
        <h3
          class="font-bold text-primary xl:text-[28px] lg:text-[28px] text-[22px]"
        >
          {{ $t("We Can Provide It For You.") }}
        </h3>
        <p class="text-tw-grey">
          {{ $t("fill the info") }}
        </p>
      </div>
      <NuxtImg
        src="/images/notfound.svg"
        loading="lazy"
        placeholder="/images/placeholder.png"
        alt="not found"
        class="xl:w-[600px] lg:w-[600px] w-full"
      ></NuxtImg>
    </div>

    <UForm
      ref="form"
      :schema="schema"
      :state="state"
      class="space-y-4 mt-10"
      @submit="onSubmit"
      @error="onError"
    >
    <div class="grid gap-8 xl:grid-cols-2 lg:grid-cols-2">
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
            {{ $t("mobile number") }}
          </span>
          <UInput v-model="state.phone" placeholder="05xxxxxxxx" />
        </div>
      </UFormGroup>
      <UFormGroup name="city_name">
        <div class="flex flex-col gap-2">
          <span class="text-primary text-[16px] font-bold">
            {{ $t("city") }}
          </span>

          <UInput v-model="state.city_name" :placeholder="$t('city')" />
        </div>
      </UFormGroup>
      <UFormGroup name="car_name">
        <div class="flex flex-col gap-2">
          <span class="text-primary text-[16px] font-bold">
            {{ $t("Car you want") }}
          </span>
          <UInput
            v-model="state.car_name"
            :placeholder="$t('Write the car name...')"
          />
        </div>
      </UFormGroup>
    </div>

      <UFormGroup name="terms_and_privacy">
        <div class="flex items-center gap-2">
          <UCheckbox
            color="primary"
            id="checkInp"
            v-model="state.terms_and_privacy"
          />
          <label for="checkInp">
            {{ $t("I have read and unconditionally agree to the") }}
            <span
            @click="isOpen = !isOpen"
              :to="$localePath('/terms')"
              class="text-primary underline cursor-pointer"
            >
              {{ $t("Term And Conditions") }}
            </span>

            {{ $t("and") }}
            <span
            @click="isOpen2 = !isOpen2"
              :to="$localePath('/policy')"
              class="text-primary underline cursor-pointer"
            >
              {{ $t("Privacy Policy") }}
            </span>
          </label>
        </div>
      </UFormGroup>

      <UButton
        :disabled="pendingBtn"
        class=" w-fit px-[60px] flex disabled:cursor-not-allowed disabled:opacity-50 items-center justify-center py-2"
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
import { number, object, string, type InferType } from "yup";
import type { FormSubmitEvent, Form, FormErrorEvent } from "#ui/types";
const { t, locale } = useI18n();
let router = useRouter();
const isOpen = ref(false)
const isOpen2 = ref(false)
const localePath = useLocalePath();
const schema = object({
  city_name: string().required(t("Required")),
  name: string().required(t("Required")),
  phone: string().required(t("Required")),
  terms_and_privacy: string().required(t("Required")),
  car_name: string().required(t("Required")),
});

type Schema = InferType<typeof schema>;
let pendingBtn = ref(false);
const state = reactive({
  name: "",
  car_name: "",
  city_name: "",
  phone: "",
  terms_and_privacy: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  form.value!.clear();

  try {
    pendingBtn.value = true;
    const response = await useApi().post("unavailable-car", state);
    if (response.status === 201 || response.status === 200) {
      pendingBtn.value = false;
      if(process.client) {
        localStorage.setItem("formSubmitted", "true");
        
      }
      router.push(localePath("/thank-you"));
      Object.assign(state, {
        name: "",
        car_name: "",
        city_name: "",
        phone: "",
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

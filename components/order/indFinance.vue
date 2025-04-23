<template>
  <UForm
    ref="form"
    :schema="schema"
    :state="store.stateIndFinance"
    class="space-y-4"
    @submit="onSubmit"
    @error="onError"
  >
 
 <FormIndFinance></FormIndFinance>

    <UButton
      :disabled="pendingBtn"
      class="w-full flex disabled:cursor-not-allowed disabled:opacity-50 items-center justify-center py-2"
      type="submit"
    >
      {{ $t("send") }}
    </UButton>
  </UForm>

</template>
<script setup lang="ts">
import { useOrderStore } from "@/stores/order";
let store = useOrderStore();
import {array, boolean, number, object, string, type InferType } from "yup";
import type { FormSubmitEvent, Form, FormErrorEvent } from "#ui/types";
const { t, locale } = useI18n();
let router = useRouter();
const localePath = useLocalePath();
const route = useRoute();
let id = ref<any>(route.query.id);
let color_id = ref<any>(route.query.color_id);

const schema = object({
  name: string().required(t("Required")),
  age: string().required(t("Required")),
  having_personal_loan: number().transform((value) => (isNaN(value) ? undefined : value)).required(t("Required")),
  finance_duration: string().required(t("Required")),
  salary: string().required(t("Required")),
  commitments: string().required(t("Required")),
  having_loan: number().transform((value) => (isNaN(value) ? undefined : value)).required(t("Required")),
  city_id: number().transform((value) => (isNaN(value) ? undefined : value)).required(t("Required")),
  bank_id: number().transform((value) => (isNaN(value) ? undefined : value)).required(t("Required")),
  work: string().required(t("Required")),
  sector: string().required(t("Required")),
  funding_organization_type: string().required(t("Required")),
  // services: array().of(string()).min(1, t("Required")),
  terms_and_privacy: boolean().required(t("Required")),
  phone: string().required(t("Required")),
});

type Schema = InferType<typeof schema>;
let pendingBtn = ref(false);


async function onSubmit(event: FormSubmitEvent<Schema>) {
  form.value!.clear();
  let formData = new FormData();
  formData.append("payment_type", "finance");
  formData.append("car_id", id.value);
  formData.append("color_id", color_id.value);
  formData.append("name", store.stateIndFinance.name);
  formData.append("phone", store.stateIndFinance.phone);
  formData.append("having_personal_loan", store.stateIndFinance.having_personal_loan);
  formData.append("finance_duration", store.stateIndFinance.finance_duration);
  formData.append("salary", store.stateIndFinance.salary);
  formData.append("commitments", store.stateIndFinance.commitments);
  formData.append("having_loan", store.stateIndFinance.having_loan);
  formData.append("city_id", String(store.stateIndFinance.city_id ?? ""));
  formData.append("age", store.stateIndFinance.age);
  formData.append("work", store.stateIndFinance.work);
  formData.append("bank_id",  String(store.stateIndFinance.bank_id ?? ""));
  formData.append("sector", store.stateIndFinance.sector);
  formData.append("terms_and_privacy", String(store.stateIndFinance.terms_and_privacy ?? ""));
  formData.append("id_and_driving_license",store.stateIndFinance.id_and_driving_license);
  formData.append("salary_identification",store.stateIndFinance.salary_identification);
  formData.append("insurance_print", store.stateIndFinance.insurance_print);
  formData.append("account_statement", store.stateIndFinance.account_statement);

  formData.append(
    "funding_organization_type",
    store.stateIndFinance.funding_organization_type
  );
  if (store.stateIndFinance.funding_organization_type == "company") {
    formData.append(
      "funding_organization_id",
      store.stateIndFinance.funding_organization_id?.id
    );
  }
  if (store.stateIndFinance.funding_organization_type == "bank") {
    formData.append("funding_bank_id", store.stateIndFinance.funding_bank_id?.id);
  }
  for (var i = 0; i < store.stateIndFinance.services.length; i++) {
    formData.append("services[]", store.stateIndFinance.services[i]);
  }

  try {
    pendingBtn.value = true;
    const response = await useApi().post("individuals-orders", formData);
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
<style lang=""></style>

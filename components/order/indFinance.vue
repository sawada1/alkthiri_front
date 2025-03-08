<template>
  <UForm ref="form" :schema="schema" :state="state" class="space-y-4" @submit="onSubmit" @error="onError">
    <UFormGroup name="name">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold"> {{ $t('full name') }} </span>

        <UInput v-model="state.name" :placeholder="$t('write your name..')" />

      </div>

    </UFormGroup>
    <UFormGroup name="phone">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold"> {{ $t('mobile number') }} </span>
        <UInput v-model="state.phone" :placeholder="$t('mobile number')" />
      </div>
    </UFormGroup>
    <UFormGroup name="age">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold"> {{ $t('age') }} </span>

        <UInput v-model="state.age" :placeholder="$t('age')" />

      </div>
    </UFormGroup>
    <UFormGroup name="city">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold"> {{ $t('city') }} </span>
        <USelectMenu v-model="state.city_id" :options="purchaseData?.cities" class="w-full" searchable
          :searchable-placeholder="$t('search')" option-attribute="name" by="id" :search-attributes="['name', 'id']">
          <template #option="{ option: person }">
            <span class="truncate">{{ person.name }}</span>
          </template>
        </USelectMenu>

      </div>
    </UFormGroup>

    <UFormGroup name="work">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold"> {{ $t('employer') }} </span>

        <UInput v-model="state.work" :placeholder="$t('employer')" />

      </div>
    </UFormGroup>
    <UFormGroup name="salary">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold"> {{ $t('Total salary in ATM') }} </span>

        <UInput v-model="state.salary" :placeholder="$t('Salary and allowances...')" />

      </div>
    </UFormGroup>
    <UFormGroup name="bank_id">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold"> {{ $t('Bank account') }} </span>

        <USelectMenu v-model="state.bank_id" :placeholder="$t('Select bank...')" :options="purchaseData?.banks"
          class="w-full" searchable :searchable-placeholder="$t('search')" option-attribute="name" by="id"
          :search-attributes="['name', 'id']">
          <template #option="{ option: person }">
            <span class="truncate">{{ person.name }}</span>
          </template>
        </USelectMenu>

      </div>
    </UFormGroup>
    <UFormGroup name="commitments">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold"> {{ $t('Total commitments') }} </span>

        <UInput v-model="state.commitments" :placeholder="$t('Commitment amount...')" />

      </div>
    </UFormGroup>
    <UFormGroup name="having_loan">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold"> {{ $t('Is there a mortgage loan ?') }} </span>

        <URadioGroup v-model="state.having_loan" :options="options" />


      </div>
    </UFormGroup>
    <UFormGroup name="having_personal_loan">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold"> {{ $t('loan') }} </span>

        <URadioGroup v-model="state.having_personal_loan" :options="options" />


      </div>
    </UFormGroup>
    <UFormGroup name="finance_duration">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold"> {{ $t('finance2') }} </span>

        <UInput v-model="state.finance_duration" :placeholder="$t('finance2')" />

      </div>
    </UFormGroup>
    <UFormGroup name="funding_organization_type">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold"> {{ $t('funding') }} </span>

        <URadioGroup v-model="state.funding_organization_type" :options="options2" />

      </div>
    </UFormGroup>
    <UFormGroup name="funding_organization_id" v-if="state.funding_organization_type == 'company'">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold"> {{ $t('finance3') }} </span>

        <USelectMenu v-model="state.funding_organization_id" :placeholder="$t('Select bank...')"
          :options="purchaseData?.funding_organizations" class="w-full" searchable
          :searchable-placeholder="$t('search')" option-attribute="name" by="id" :search-attributes="['name', 'id']">
          <template #option="{ option: person }">
            <span class="truncate">{{ person.name }}</span>
          </template>
        </USelectMenu>

      </div>
    </UFormGroup>
    <UFormGroup name="funding_bank_id" v-if="state.funding_organization_type == 'bank'">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold"> {{ $t('finance3') }} </span>

        <USelectMenu v-model="state.funding_bank_id" :placeholder="$t('Select bank...')"
          :options="purchaseData?.banks" class="w-full" searchable
          :searchable-placeholder="$t('search')" option-attribute="name" by="id" :search-attributes="['name', 'id']">
          <template #option="{ option: person }">
            <span class="truncate">{{ person.name }}</span>
          </template>
        </USelectMenu>

      </div>
    </UFormGroup>
    <UFormGroup name="services">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold"> {{ $t('services') }} </span>
        <div v-for="i, index in purchaseData?.services">
          <UCheckbox color="primary" :id='`checkInpService${index}`' :value="i?.id" v-model="state.services" />
          <label :for="`checkInpService${index}`">
            <span class="text-primary font-bold"> {{ i?.name }} </span>
          </label>
        </div>
        
        <UInput v-model="state.age" :placeholder="$t('age')" />

      </div>
    </UFormGroup>
    <UFormGroup name="age">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold"> {{ $t('age') }} </span>

        <UInput v-model="state.age" :placeholder="$t('age')" />

      </div>
    </UFormGroup>
    <UFormGroup name="age">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold"> {{ $t('age') }} </span>

        <UInput v-model="state.age" :placeholder="$t('age')" />

      </div>
    </UFormGroup>
    <UFormGroup name="message">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold"> {{ $t('your message') }} </span>
        <UTextarea v-model="state.message" :placeholder="$t('write your message here')" />
      </div>

    </UFormGroup>

    <UFormGroup name="terms_and_privacy">
      <div class="flex items-center gap-2">
        <UCheckbox color="primary" id="checkInp" v-model="state.terms_and_privacy" />
        <label for="checkInp">
          {{ $t("I have read and unconditionally agree to the") }}
          <nuxt-link :to="$localePath('/terms')" class="text-primary underline">
            {{ $t("Term And Conditions") }}

          </nuxt-link>

          {{ $t("and") }}
          <nuxt-link :to="$localePath('/policy')" class="text-primary underline">
            {{ $t("Privacy Policy") }}

          </nuxt-link>

        </label>
      </div>
    </UFormGroup>


    <UButton :disabled="pendingBtn"
      class="w-full flex  disabled:cursor-not-allowed disabled:opacity-50 items-center justify-center py-2"
      type="submit">
      {{ $t('send') }}
    </UButton>
  </UForm>
</template>
<script setup lang="ts">
import { useOrderStore } from '@/stores/order'
let store = useOrderStore();
import { number, object, string, type InferType } from 'yup'
import type { FormSubmitEvent, Form, FormErrorEvent } from '#ui/types'
const { t, locale } = useI18n();
let router = useRouter();
const localePath = useLocalePath();
const schema = object({
  email: string().email(t('Invalidemail')).required(t('Required')),
  message: string().required(t('Required')),
  title: string().required(t('Required')),
  name: string().required(t('Required')),
  terms_and_privacy: string().required(t('Required')),
  phone: string().required(t('Required')),
});

const options = [{
  label: t('yes'),
  value: 1
},
{
  label: t('no'),
  value: 0
}
]
const options2 = [{
  label: t('on bank'),
  value: 'same_bank'
},
{
  label: t('financing2'),
  value: 'company'
},
{
  label: t('financing3'),
  value: 'bank'
},
]

type Schema = InferType<typeof schema>
let pendingBtn = ref(false);
const state = reactive({
  phone: "",
  name: "",
  age: "",
  having_personal_loan: "",
  finance_duration: "",
  financing_community: "",
  salary: "",
  commitments: "",
  having_loan: "",
  city_id: "",
  work: "",
  bank_id: "",
  sector: "",
  id_and_driving_license: "",
  salary_identification: "",
  insurance_print: "",
  account_statement: "",
  funding_organization_id: "",
  funding_organization_type: "",
  funding_bank_id: "",
  services: [],
  terms_and_privacy: undefined,
});

let purchaseData = ref();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  form.value!.clear();

  let formData = new FormData();
  formData.append("payment_type", "finance");
  formData.append("name", state.name);
  formData.append("phone", state.phone);
  formData.append("having_personal_loan", state.having_personal_loan);
  formData.append("finance_duration", state.finance_duration);
  formData.append("financing_community", state.financing_community);
  formData.append("salary", state.salary);
  formData.append("commitments", state.commitments);
  formData.append("having_loan", state.having_loan);
  formData.append("city_id", state.city_id);
  formData.append("work", state.work);

  try {
    pendingBtn.value = true;
    const response = await useApi().post('contact-us', formData)
    if (response.status === 201 || response.status === 200) {
      pendingBtn.value = false;
      router.push(localePath('/thank-you'));
      Object.assign(state, {
        message: "",
        email: "",
        title: "",
        name: "",
        phone: "",
        terms_and_privacy: undefined
      });
    }
  } catch (err: any) {
    pendingBtn.value = false;
    const errors = Object.entries(err.response.data.errors).map(([key, val]) => {
      return {
        path: key,
        message: Array.isArray(val) ? val[0] : val
      }
    })
    form.value!.setErrors(errors);
  }
}
async function getDate() {
  let result = await useApi().get(`purchase-form-info`);
  if (result.status === 200) {
    purchaseData.value = result.data;
  }
}
const form = ref<Form<Schema>>()

async function onError(event: FormErrorEvent) {
  const element = document.getElementById(event.errors[0].id)
  element?.focus()
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}



onMounted(() => {
  getDate();
});
</script>
<style lang="">

</style>
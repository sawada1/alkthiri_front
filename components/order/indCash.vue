<template>
      <UForm ref="form" :schema="schema" :state="state" class="space-y-4" @submit="onSubmit" @error="onError">
            <UFormGroup  name="name">
              <div class="flex flex-col gap-2">
                <span class="text-primary text-[16px] font-bold"> {{ $t('full name') }} </span>
  
                <UInput v-model="state.name" :placeholder="$t('write your name..')" />

              </div>

            </UFormGroup>
            <UFormGroup name="email">
              <div class="flex flex-col gap-2">
                <span class="text-primary text-[16px] font-bold"> {{ $t('email') }} </span>
                <UInput v-model="state.email" placeholder="example@mail.com.." />
              </div>
            </UFormGroup>
            <UFormGroup  name="phone">
              <div class="flex flex-col gap-2">
                <span class="text-primary text-[16px] font-bold"> {{ $t('phone number') }} </span>
  
                <UInput v-model="state.phone" placeholder="05xxxxxxxx" />

              </div>
            </UFormGroup>
            <UFormGroup  name="title">
              <div class="flex flex-col gap-2">
                <span class="text-primary text-[16px] font-bold"> {{ $t('message title') }} </span>
                <UInput v-model="state.title" :placeholder="$t('write your message title...')" />

              </div>
            </UFormGroup>
            <UFormGroup  name="message">
              <div class="flex flex-col gap-2">
                <span class="text-primary text-[16px] font-bold"> {{ $t('your message') }} </span>
                <UTextarea v-model="state.message" :placeholder="$t('write your message here')" />
              </div>

            </UFormGroup>

            <UFormGroup  name="terms_and_privacy">
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


            <UButton :disabled="pendingBtn" class="w-full flex  disabled:cursor-not-allowed disabled:opacity-50 items-center justify-center py-2" type="submit">
              {{ $t('send') }}
            </UButton>
          </UForm>
</template>
<script setup lang="ts">
import {useOrderStore} from '@/stores/order'
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
})

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
    funding_organization_type: "",
    services:[],
  terms_and_privacy: undefined,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  form.value!.clear()

  try {
    pendingBtn.value = true;
    const response = await useApi().post('contact-us' , state)
    if(response.status === 201 || response.status === 200){
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
  } catch (err:any) {
    pendingBtn.value = false;
    const errors = Object.entries(err.response.data.errors).map(([key , val])=>{
      return{
        path: key,
        message: Array.isArray(val) ? val[0] : val
      }
    })
      form.value!.setErrors(errors);  
  }
}
const form = ref<Form<Schema>>()

async function onError(event: FormErrorEvent) {
  const element = document.getElementById(event.errors[0].id)
  element?.focus()
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>
<style lang="">
    
</style>
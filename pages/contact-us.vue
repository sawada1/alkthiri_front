<template>
  <div class="container min-h-[140vh] mt-10 mb-[150px]">
    <h1 class="headText font-bold contact mb-10 text-primary xl:text-[42px] lg:text-[42px] text-[32px]"
      :data-contact="$t('KEEP IN TOUCH')">
      {{ $t("CONTACT US NOW") }}
    </h1>

    <div class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-8">
      <div class="col-span-2">
        <UAccordion :items="filterd">
          <template #default="{ item, index, open }">
            <UButton color="gray" variant="ghost" class="bg-grey py-4 mb-3 dark:border-gray-700">
              <template #leading>
                <div
                  class="w-[37px] h-[37px] rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center">
                  <!-- <Icon name="material-symbols:location-on-outline" class="w-7 h-7 text-white dark:text-gray-900" /> -->
                  <UIcon name="material-symbols:location-on" class="w-6 h-6 text-white dark:text-gray-900" />
                </div>
              </template>

              <span class="truncate text-lg font-bold">{{ index + 1 }} . {{ item.name }}</span>

              <template #trailing>
                <UIcon :name="open ? 'i-heroicons-minus' : 'i-heroicons-plus'"
                  class="w-5 h-5 ms-auto transform transition-transform duration-200" />
              </template>
            </UButton>
          </template>
          <template #item="{ item, index }">
            <div class="bg-grey rounded-[8px] p-3">
              <!-- {{ activeBranch }} -->
              <div class="flex items-center flex-wrap gap-4 mb-8">
                <UButton v-for="i, indexBranch in item.types" @click="
                  (activeBranchIndex[index] = indexBranch),
                  (checkBranch = i.id)
                  "
                  class="px-8 py-2 font-bold rounded-[18px] active bg-transparent text-primary shadow-none hover:bg-primary hover:text-white"
                  :class="{
                    'bg-primary text-white shadow-shadow1':
                      activeBranchIndex[index] == indexBranch,
                  }">
                  {{ indexBranch }} {{ i.name }}
                </UButton>
              </div>
              {{ index }}
              <div v-for="(model, mindex) in item.types" :key="mindex">
                <div v-for="branch in model?.branches" class="flex flex-col gap-[30px]">
                  <div
                    class="flex xl:gap-[100px] lg:gap-[100px] gap-[30px] flex-col border-b border-b-tw-grey pb-4  xl:flex-row lg:flex-row">
                    <div class="flex flex-col gap-4 xl:w-[289px] lg:w-[289px] w-full">
                      <h3 class="text-[22px] font-bold text-primary">
                        {{ branch.name }}
                      </h3>
                      <div class="h-[333px] iframeBranch bg-primary w-full border-[2px] border-white rounded-[22px]"
                        v-html="branch.frame"></div>
                    </div>
                    <div class="">
                      <h4
                        class="border-b border-b-primary border-t border-t-primary py-4 text-primary text-[22px] font-bold">
                        {{ $t("contact data") }}
                      </h4>
                      <div class="flex flex-col my-5 gap-4">
                        <div class="flex items-center gap-2">
                          <UIcon name="material-symbols:location-on" class="w-6 h-6 text-primary dark:text-gray-900" />
                          <p> {{ branch.address }} </p>
                        </div>
                        <div class="flex items-center gap-2">
                          <UIcon name="material-symbols:call" class="w-6 h-6 text-primary dark:text-gray-900" />
                          <p>{{ branch.phone }}</p>
                        </div>
                        <div class="flex items-center gap-2">
                          <UIcon name="ion:logo-whatsapp" class="w-6 h-6 text-primary dark:text-gray-900" />
                          <p> {{ branch.whatsapp }} </p>
                        </div>
                        <div class="flex items-center gap-2">
                          <UIcon name="material-symbols-light:mail" class="w-6 h-6 text-primary dark:text-gray-900" />
                          <p> {{ branch.email }} </p>
                        </div>
                      </div>
                      <h4
                        class="border-b border-b-primary border-t border-t-primary py-4 text-primary text-[22px] font-bold">
                        {{ $t("working hours") }}
                      </h4>
                      <h5 class="my-5 text-[#6F6F6E] text-center font-bold text-[18px]">
                        {{ $t("everyday") }}
                      </h5>
                      <div class="htmlTextBranch" v-html="branch.time_of_work"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </template>
        </UAccordion>
      </div>
      <div class="relative h-full">
        <div class="bg-white p-4 rounded-[16px] shadow-shadow1 sticky top-10">
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
        </div>
      </div>
    </div>
  </div>
  <!-- <Loader v-if="store.loadingPage"></Loader> -->
</template>
<script setup lang="ts">
import { useContactStore } from "@/stores/contact";
import { BranchTypes, Branches } from "@/types/general";
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
  message: "",
  email: "",
  title: "",
  name: "",
  phone: "",
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
let store = useContactStore();
const activeBranch = ref();
let subBranches = ref([]);
let checkBranch = ref(1);

let types = ref([
  {
    name: "city 1",
    types: [
      {
        id: 1,
        name: "test1",
        branches: [
          {
            name: "testt1",
            address: "بريدة",
            phone: "8003044442",
            whatsapp: "8003044442",
            email: "info@alkathirimotors.com",
            time_of_work:
              '<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;"><span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة الصباحية :-&nbsp;</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس&nbsp;</span>من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;9:00 صباحا</span>&nbsp;حتى<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;12:00 مساء<br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /><br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /></span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة المسائية :-</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">يوم&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">السبت&nbsp;</span>من الساعة&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس</span>&nbsp;من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>',
            frame:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5190689712012!2d43.88214073178612!3d26.40672096929907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57be11f71c25%3A0x4c5c1f0c66596612!2z2KfZhNmD2KvZitix2Yog2YTZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sen!2seg!4v1713656038261!5m2!1sen!2seg' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
          },
        ],
      },
      {
        id: 2,
        name: "test2",
        branches: [
          {
            name: "testt2",
            address: "بريدة",
            phone: "8003044442",
            whatsapp: "8003044442",
            email: "info@alkathirimotors.com",
            time_of_work:
              '<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;"><span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة الصباحية :-&nbsp;</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس&nbsp;</span>من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;9:00 صباحا</span>&nbsp;حتى<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;12:00 مساء<br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /><br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /></span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة المسائية :-</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">يوم&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">السبت&nbsp;</span>من الساعة&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس</span>&nbsp;من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>',
            frame:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5190689712012!2d43.88214073178612!3d26.40672096929907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57be11f71c25%3A0x4c5c1f0c66596612!2z2KfZhNmD2KvZitix2Yog2YTZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sen!2seg!4v1713656038261!5m2!1sen!2seg' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
          },
          {
            name: "texxxxxxxstt",
            address: "بريدة",
            phone: "8003044442",
            whatsapp: "8003044442",
            email: "info@alkathirimotors.com",
            time_of_work:
              '<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;"><span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة الصباحية :-&nbsp;</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس&nbsp;</span>من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;9:00 صباحا</span>&nbsp;حتى<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;12:00 مساء<br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /><br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /></span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة المسائية :-</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">يوم&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">السبت&nbsp;</span>من الساعة&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس</span>&nbsp;من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>',
            frame:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5190689712012!2d43.88214073178612!3d26.40672096929907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57be11f71c25%3A0x4c5c1f0c66596612!2z2KfZhNmD2KvZitix2Yog2YTZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sen!2seg!4v1713656038261!5m2!1sen!2seg' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
          },
        ],
      },
      {
        name: "test3",
        branches: [],
      },
      {
        name: "test4",
        id: 3,
        branches: [
          {
            name: "dsds",
            address: "بريدة",
            phone: "8003044442",
            whatsapp: "8003044442",
            email: "info@alkathirimotors.com",
            time_of_work:
              '<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;"><span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة الصباحية :-&nbsp;</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس&nbsp;</span>من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;9:00 صباحا</span>&nbsp;حتى<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;12:00 مساء<br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /><br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /></span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة المسائية :-</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">يوم&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">السبت&nbsp;</span>من الساعة&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس</span>&nbsp;من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>',
            frame:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5190689712012!2d43.88214073178612!3d26.40672096929907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57be11f71c25%3A0x4c5c1f0c66596612!2z2KfZhNmD2KvZitix2Yog2YTZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sen!2seg!4v1713656038261!5m2!1sen!2seg' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
          },
        ],
      },
    ],
  },
  {
    name: "city 2",
    types: [
      {
        name: "test11",
        id: 4,
        branches: [
          {
            name: "testt22",
            address: "بريدة",
            phone: "8003044442",
            whatsapp: "8003044442",
            email: "info@alkathirimotors.com",
            time_of_work:
              '<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;"><span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة الصباحية :-&nbsp;</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس&nbsp;</span>من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;9:00 صباحا</span>&nbsp;حتى<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;12:00 مساء<br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /><br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /></span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة المسائية :-</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">يوم&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">السبت&nbsp;</span>من الساعة&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس</span>&nbsp;من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>',
            frame:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5190689712012!2d43.88214073178612!3d26.40672096929907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57be11f71c25%3A0x4c5c1f0c66596612!2z2KfZhNmD2KvZitix2Yog2YTZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sen!2seg!4v1713656038261!5m2!1sen!2seg' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
          },
        ],
      },
      {
        name: "test2",
        id: 5,
        branches: [
          {
            name: "testt222",
            address: "بريدة",
            phone: "8003044442",
            whatsapp: "8003044442",
            email: "info@alkathirimotors.com",
            time_of_work:
              '<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;"><span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة الصباحية :-&nbsp;</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس&nbsp;</span>من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;9:00 صباحا</span>&nbsp;حتى<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;12:00 مساء<br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /><br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /></span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة المسائية :-</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">يوم&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">السبت&nbsp;</span>من الساعة&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس</span>&nbsp;من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>',
            frame:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5190689712012!2d43.88214073178612!3d26.40672096929907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57be11f71c25%3A0x4c5c1f0c66596612!2z2KfZhNmD2KvZitix2Yog2YTZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sen!2seg!4v1713656038261!5m2!1sen!2seg' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
          },
        ],
      },
      {
        name: "test3",
        branches: [],
      },
      {
        name: "test4",
        branches: [],
      },
      {
        name: "test5",
        id: 6,
        branches: [
          {
            name: "dsds22222222",
            address: "بريدة",
            phone: "8003044442",
            whatsapp: "8003044442",
            email: "info@alkathirimotors.com",
            time_of_work:
              '<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;"><span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة الصباحية :-&nbsp;</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس&nbsp;</span>من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;9:00 صباحا</span>&nbsp;حتى<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;12:00 مساء<br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /><br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /></span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة المسائية :-</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">يوم&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">السبت&nbsp;</span>من الساعة&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس</span>&nbsp;من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>',
            frame:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5190689712012!2d43.88214073178612!3d26.40672096929907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57be11f71c25%3A0x4c5c1f0c66596612!2z2KfZhNmD2KvZitix2Yog2YTZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sen!2seg!4v1713656038261!5m2!1sen!2seg' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
          },
        ],
      },
    ],
  },
  {
    name: "القصيم",
    types: [
      {
        name: "2صالة عرض",
        id: 7,
        branches: [
          {
            name: "testtt3",
            address: "بريدة",
            phone: "8003044442",
            whatsapp: "8003044442",
            email: "info@alkathirimotors.com",
            time_of_work:
              '<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;"><span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة الصباحية :-&nbsp;</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس&nbsp;</span>من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;9:00 صباحا</span>&nbsp;حتى<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;12:00 مساء<br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /><br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /></span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة المسائية :-</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">يوم&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">السبت&nbsp;</span>من الساعة&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس</span>&nbsp;من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>',
            frame:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5190689712012!2d43.88214073178612!3d26.40672096929907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57be11f71c25%3A0x4c5c1f0c66596612!2z2KfZhNmD2KvZitix2Yog2YTZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sen!2seg!4v1713656038261!5m2!1sen!2seg' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
          },
          {
            name: "fdfdf33",
            address: "بريدة",
            phone: "8003044442",
            whatsapp: "8003044442",
            email: "info@alkathirimotors.com",
            time_of_work:
              '<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;"><span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة الصباحية :-&nbsp;</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس&nbsp;</span>من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;9:00 صباحا</span>&nbsp;حتى<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;12:00 مساء<br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /><br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /></span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة المسائية :-</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">يوم&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">السبت&nbsp;</span>من الساعة&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس</span>&nbsp;من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>',
            frame:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5190689712012!2d43.88214073178612!3d26.40672096929907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57be11f71c25%3A0x4c5c1f0c66596612!2z2KfZhNmD2KvZitix2Yog2YTZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sen!2seg!4v1713656038261!5m2!1sen!2seg' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
          },
          {
            name: "32323",
            address: "بريدة",
            phone: "8003044442",
            whatsapp: "8003044442",
            email: "info@alkathirimotors.com",
            time_of_work:
              '<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;"><span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة الصباحية :-&nbsp;</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس&nbsp;</span>من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;9:00 صباحا</span>&nbsp;حتى<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;12:00 مساء<br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /><br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /></span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة المسائية :-</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">يوم&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">السبت&nbsp;</span>من الساعة&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس</span>&nbsp;من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>',
            frame:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5190689712012!2d43.88214073178612!3d26.40672096929907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57be11f71c25%3A0x4c5c1f0c66596612!2z2KfZhNmD2KvZitix2Yog2YTZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sen!2seg!4v1713656038261!5m2!1sen!2seg' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
          },
        ],
      },
      {
        name: "2مركز صيانة",
        id: 8,
        branches: [
          {
            name: "2222",
            address: "بريدة",
            phone: "8003044442",
            whatsapp: "8003044442",
            email: "info@alkathirimotors.com",
            time_of_work:
              '<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;"><span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة الصباحية :-&nbsp;</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس&nbsp;</span>من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;9:00 صباحا</span>&nbsp;حتى<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;12:00 مساء<br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /><br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /></span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة المسائية :-</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">يوم&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">السبت&nbsp;</span>من الساعة&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس</span>&nbsp;من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>',
            frame:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5190689712012!2d43.88214073178612!3d26.40672096929907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57be11f71c25%3A0x4c5c1f0c66596612!2z2KfZhNmD2KvZitix2Yog2YTZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sen!2seg!4v1713656038261!5m2!1sen!2seg' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
          },
          {
            name: "444444",
            address: "بريدة",
            phone: "8003044442",
            whatsapp: "8003044442",
            email: "info@alkathirimotors.com",
            time_of_work:
              '<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;"><span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة الصباحية :-&nbsp;</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس&nbsp;</span>من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;9:00 صباحا</span>&nbsp;حتى<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;12:00 مساء<br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /><br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /></span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة المسائية :-</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">يوم&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">السبت&nbsp;</span>من الساعة&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس</span>&nbsp;من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>',
            frame:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5190689712012!2d43.88214073178612!3d26.40672096929907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57be11f71c25%3A0x4c5c1f0c66596612!2z2KfZhNmD2KvZitix2Yog2YTZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sen!2seg!4v1713656038261!5m2!1sen!2seg' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
          },
        ],
      },
      {
        name: "مركز 3 إس",
        branches: [],
      },
    ],
  },
  {
    name: "city 3",
    types: [
      {
        name: "3صالة عرض",
        id: 9,
        branches: [
          {
            name: "testtt44",
            address: "بريدة",
            phone: "8003044442",
            whatsapp: "8003044442",
            email: "info@alkathirimotors.com",
            time_of_work:
              '<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;"><span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة الصباحية :-&nbsp;</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس&nbsp;</span>من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;9:00 صباحا</span>&nbsp;حتى<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;12:00 مساء<br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /><br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /></span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة المسائية :-</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">يوم&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">السبت&nbsp;</span>من الساعة&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس</span>&nbsp;من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>',
            frame:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5190689712012!2d43.88214073178612!3d26.40672096929907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57be11f71c25%3A0x4c5c1f0c66596612!2z2KfZhNmD2KvZitix2Yog2YTZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sen!2seg!4v1713656038261!5m2!1sen!2seg' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
          },
          {
            name: "fdfdf3",
            address: "بريدة",
            phone: "8003044442",
            whatsapp: "8003044442",
            email: "info@alkathirimotors.com",
            time_of_work:
              '<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;"><span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة الصباحية :-&nbsp;</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس&nbsp;</span>من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;9:00 صباحا</span>&nbsp;حتى<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;12:00 مساء<br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /><br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /></span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة المسائية :-</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">يوم&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">السبت&nbsp;</span>من الساعة&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس</span>&nbsp;من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>',
            frame:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5190689712012!2d43.88214073178612!3d26.40672096929907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57be11f71c25%3A0x4c5c1f0c66596612!2z2KfZhNmD2KvZitix2Yog2YTZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sen!2seg!4v1713656038261!5m2!1sen!2seg' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
          },
          {
            name: "32323  3",
            address: "بريدة",
            phone: "8003044442",
            whatsapp: "8003044442",
            email: "info@alkathirimotors.com",
            time_of_work:
              '<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;"><span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة الصباحية :-&nbsp;</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس&nbsp;</span>من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;9:00 صباحا</span>&nbsp;حتى<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;12:00 مساء<br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /><br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /></span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة المسائية :-</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">يوم&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">السبت&nbsp;</span>من الساعة&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس</span>&nbsp;من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>',
            frame:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5190689712012!2d43.88214073178612!3d26.40672096929907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57be11f71c25%3A0x4c5c1f0c66596612!2z2KfZhNmD2KvZitix2Yog2YTZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sen!2seg!4v1713656038261!5m2!1sen!2seg' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
          },
        ],
      },
      {
        name: "3مركز صيانة",
        id: 10,
        branches: [
          {
            name: "2222  3",
            address: "بريدة",
            phone: "8003044442",
            whatsapp: "8003044442",
            email: "info@alkathirimotors.com",
            time_of_work:
              '<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;"><span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة الصباحية :-&nbsp;</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس&nbsp;</span>من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;9:00 صباحا</span>&nbsp;حتى<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;12:00 مساء<br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /><br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /></span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة المسائية :-</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">يوم&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">السبت&nbsp;</span>من الساعة&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس</span>&nbsp;من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>',
            frame:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5190689712012!2d43.88214073178612!3d26.40672096929907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57be11f71c25%3A0x4c5c1f0c66596612!2z2KfZhNmD2KvZitix2Yog2YTZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sen!2seg!4v1713656038261!5m2!1sen!2seg' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
          },
          {
            name: "444444  3",
            address: "بريدة",
            phone: "8003044442",
            whatsapp: "8003044442",
            email: "info@alkathirimotors.com",
            time_of_work:
              '<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;"><span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة الصباحية :-&nbsp;</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس&nbsp;</span>من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;9:00 صباحا</span>&nbsp;حتى<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;12:00 مساء<br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /><br style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none;" /></span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الفترة المسائية :-</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">يوم&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">السبت&nbsp;</span>من الساعة&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>\r\n<p style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; list-style: none; color: #212529; font-family: Janna-lt, sans-serif; font-size: 16px; background-color: #f2f2f2; direction: rtl; text-align: right;">من&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الأحد للخميس</span>&nbsp;من الساعة<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">&nbsp;4:00 مساء</span>&nbsp;حتى&nbsp;<span style="background-repeat: no-repeat; box-sizing: border-box; margin: 0px; padding: 0px; list-style: none; font-weight: bolder;">الساعة 9:00 مساء</span></p>',
            frame:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5190689712012!2d43.88214073178612!3d26.40672096929907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57be11f71c25%3A0x4c5c1f0c66596612!2z2KfZhNmD2KvZitix2Yog2YTZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sen!2seg!4v1713656038261!5m2!1sen!2seg' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
          },
        ],
      },
      {
        name: "مركز 4 إس",
        branches: [],
      },
    ],
  },
]);

const filterd = ref(types.value.map((item) => ({
  ...item,
  types: item.types.filter((type) => type.branches.length > 0),
})))
const removeEmptyArrays = (arr: any[]): any[] => {
  return arr
    .map(item => Array.isArray(item) ? removeEmptyArrays(item) : item) // Recursively clean nested arrays
    .filter(item => !(Array.isArray(item) && item.length === 0)); // Remove empty arrays
}
const filteredBranches = computed(() => {
  return removeEmptyArrays(types.value.map((city) => city.types.map((type) => type.branches)))

});


console.log(filterd.value);
let indexBranc = ref(filterd.value.flatMap(group => group.types.map(item => 0)));

let branches = ref(types.value.filter((ele) => ele.types.filter((e) => e.branches.length > 0)))
let activeSubBranch = ref<Branches[]>([]);
let activeBranchIndex = ref(Array(4).fill(0));
const getSubData = (data: BranchTypes[]) => {
  const filteredTypes = data.filter(
    (item) => (item.branches && item.branches.length > 0) || []
  );
  activeSubBranch.value = filteredTypes[0].branches;
  return filteredTypes || [];
};

// Function to set the active branch
const setActiveBranch = (cityName: string, branchName: string) => {
  activeBranch.value[cityName] = branchName;
};

onMounted(() => {
  store.fetchBranches();
  // Initialize with the first available branch per city
  store.branches.forEach((city) => {
    const firstBranch = city.types.find((t) => t.branches.length > 0);
    if (firstBranch) {
      activeBranch.value[city.name] = firstBranch.name;
    }
  });
});
</script>
<style lang="scss">
.iframeBranch {
  iframe {
    width: 100% !important;
    height: 100% !important;
    border: 2px solid #fff;
    border-radius: 16px;
  }
}

.htmlTextBranch {
  p {
    text-align: center !important;
  }
}
</style>

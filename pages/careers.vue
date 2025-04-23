<template>
  <div class="min-h-screen">
    <div v-if="checkLength" class="flex items-center justify-center h-screen">
     <h1 class="text-[38px] text-primary font-bold"> {{ $t("thers are no careers for now") }} </h1>
    </div>

    <div v-if="jobs.length >= 1" class="container my-16">
      <h1
        :data-find="$t('JOIN OUR TEAM')"
        class="headText find mb-8 text-primary font-bold text-[32px]"
      >
        {{ $t("find your career") }}
      </h1>
      <div class="grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-4">
        <div class="xl:col-span-1 lg:col-span-1">
          <div
            class="bg-[#1b395f54] flex items-center justify-center rounded-[16px] p-2"
          >
            <span class="text-primary">
              {{ jobs.length }} {{ $t("open Opportunities") }}
            </span>
          </div>
          <div class="flex flex-col gap-4 mt-4">
            <div
              v-for="job in jobs"
              @click="mainJob = job"
              class="bg-[#F2F2F2] cursor-pointer p-3 rounded-[9px] flex items-center justify-between hover:bg-primary transition-colors group"
              :class="{ 'bg-primary': mainJob?.id == job?.id }"
            >
              <div class="flex flex-col gap-2">
                <h4
                  class="text-[16px] text-primary font-bold group-hover:text-white"
                  :class="{ 'text-white': mainJob?.id == job?.id }"
                >
                  {{ job?.title }}
                </h4>
                <span
                  class="text-[14px] text-[#6F6F6E] group-hover:text-white"
                  :class="{ 'text-white': mainJob?.id == job?.id }"
                >
                  {{ job?.address }} | {{ job?.created_at }}
                </span>
              </div>
              <UIcon
                name="fe:arrow-left"
                class="w-5 h-5 text-primary ltr:scale-x-[-1] group-hover:text-white"
                :class="{ 'text-white': mainJob?.id == job.id }"
              ></UIcon>
            </div>
          </div>
        </div>
        <div class="xl:col-span-3 lg:col-span-3 w-full m-h-screen bg-white shadow-shadow1 rounded-[18px] p-4">
          <div v-if="!openForm">
            <div class="flex items-center justify-between flex-col xl:flex-row lg:flex-row gap-5 xl:gap-0 lg:gap-0 mb-5">
              <h5 class="text-primary text-[18px] font-bold">
                {{ mainJob?.title }}
              </h5>
              <div class="flex items-center gap-3">
                <span class="text-[#767676] text-[14px]">
                  {{ mainJob?.address }} | {{ mainJob?.created_at }}
                </span>
                <UButton
                  @click="openForm = true"
                  class="shadow-shadow2 bg-primary font-bold px-8 py-3"
                >
                  {{ $t("apply now") }}
                </UButton>
              </div>
            </div>
            <p class="desc" v-html="mainJob?.long_description"></p>
          </div>
          <div v-else>
            <div class="flex items-center justify-between">
              <button @click="openForm = false" class="flex items-center gap-3">
                <UIcon
                  name="fe:arrow-right"
                  class="w-5 h-5 text-primary ltr:scale-x-[-1] group-hover:text-white"
                ></UIcon>
                <h5 class="text-primary text-[18px] font-bold">
                  {{ mainJob?.title }}
                </h5>
              </button>
            </div>
            <UForm
              ref="form"
              :schema="schema"
              :state="state"
              class="space-y-4 mt-7"
              @submit="onSubmit"
              @error="onError"
            >
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
                    v-model="city_id"
                    :options="cities"
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

              <UFormGroup name="cv">
                <div class="flex flex-col gap-2">
                  <span class="text-primary text-[16px] font-bold">
                    {{ $t("resume") }}
                  </span>
                  <input
                    type="file"
                    class="outline:primary ring-inset shadow-sm rounded-md text-gray-900 p-1 ring-1 ring-gray-300"
                    @change="onFileChange1"
                    name=""
                  />
                </div>
              </UFormGroup>

              <UFormGroup  name="terms_and_privacy">
              <div class="flex items-center gap-2">
                <UCheckbox color="primary" id="checkInp" v-model="state.terms_and_privacy" />
                <label for="checkInp">
                  {{ $t("I have read and unconditionally agree to the") }}
                  <span @click="isOpen = !isOpen"  class="text-primary cursor-pointer underline">
                    {{ $t("Term And Conditions") }}

                  </span>
                
                    {{ $t("and") }}
                    <span @click="isOpen2 = !isOpen2" class="text-primary cursor-pointer underline">
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
                {{ $t("apply now") }}
              </UButton>
            </UForm>
          </div>
        </div>
      </div>
    </div>
    <Terms :isOpen="isOpen"></Terms>
    <Policy :isOpen="isOpen2"></Policy>
    <Loader v-if="pending"></Loader>
  </div>
</template>
<script lang="ts" setup>
interface JobsDetails{
    created_at: string;   
    title: string;   
    address: string;   
    id: number;   
}
let jobs = ref<JobsDetails[]>([]);
let cities = ref([]);
let mainJob = ref();
const openForm = ref(false);
import { mixed, number, object, string, type InferType } from "yup";
import type { FormSubmitEvent, Form, FormErrorEvent } from "#ui/types";
const { t, locale } = useI18n();
let router = useRouter();
const localePath = useLocalePath();
let checkLength = ref(false);
const schema = object({
  email: string().email(t("Invalidemail")).required(t("Required")),
  name: string().required(t("Required")),
  city_id: string().required(t("Required")),
  phone: string().required(t("Required")),
  terms_and_privacy: string().required(t("Required")),
  cv:  mixed().required(t("Required"))
  
});
useHead({
      title: `${t('find your career')}`,
      meta: [
        { name: 'description', content: 'test' },
        { name: 'keywords', content: 'test , test , test'},
        { name: 'author', content: 'webstdy' },
        { property: 'og:title', content: `${t('home')}` },
        { property: 'og:description', content: 'test' },
      ],
    });

let pending = ref(true);
let isOpen = ref(false);
let isOpen2 = ref(false);
let pendingBtn = ref(false);
let city_id = ref();

watch(()=> city_id.value , (val)=>{
    if(val){
        state.city_id = city_id.value?.id
    }
})
type Schema = InferType<typeof schema>;
     

const state = reactive({
  email: "",
  city_id: "",
  cv: "",
  name: "",
  terms_and_privacy: undefined,
  phone: "",
});

const onFileChange1 = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (!target || !target.files || target.files.length === 0) return;
  state.cv = target.files[0] as any;;
};

async function onSubmit(event: FormSubmitEvent<Schema>) {
  form.value!.clear();
  let formData = new FormData();
  formData.append("name", state.name);
  formData.append("email", state.email);
  formData.append("phone", state.phone);
  formData.append("terms_and_privacy", String(state.terms_and_privacy ?? ""));
  formData.append("city_id", String(state.city_id)); 

  if (state.cv) {
    formData.append("cv", state.cv);
  }
  try {
    pendingBtn.value = true;
    const response = await useApi().post(
      `careers/${mainJob.value?.id}/apply`,
      formData
    );
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
const getJobs = async () => {
    checkLength.value = false;
  let result = await useApi().get("careers");
  if (result.status === 200) {
    jobs.value = result.data.data;
    pending.value = false;
    mainJob.value = jobs.value[0];
    if(jobs.value.length == 0){
        checkLength.value = true;
    }
  }
};
const getCiteis = async () => {
  let result = await useApi().get("cities");
  if (result.status === 200) {
    cities.value = result.data.data;
  }
};
getJobs();
getCiteis();
</script>
<style lang=""></style>

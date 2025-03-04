<template>
  <div class="container min-h-screen my-16">
    <div class="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-8">
      <div
        class="xl:col-span-2 lg:col-span-2 bg-white p-4 rounded-[16px] shadow-shadow1"
      >
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
                {{ $t("namee") }}
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
              <UInput v-model="state.email" placeholder="example@mail.com.." />
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
          <UFormGroup name="brand_id">
            <div class="flex flex-col gap-2">
              <span class="text-primary text-[16px] font-bold">
                {{ $t("What is your car’s Brand?") }}
              </span>
              <!-- <UInput v-model="state.brand_id" :placeholder="$t('Select Brand...')" /> -->
              <USelectMenu
                v-model="brand"
                :options="brands"
                @update:model-value="fetchModels"
                :placeholder="$t('choose brand')"
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
          <UFormGroup name="model_id">
            <div class="flex flex-col gap-2">
              <span class="text-primary text-[16px] font-bold">
                {{ $t("Which car model are you booking for?") }}
              </span>
              <USelectMenu
                v-model="model"
                :options="brands_models"
                :placeholder="$t('Select Model...')"
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
          <UFormGroup name="model_year">
            <div class="flex flex-col gap-2">
              <span class="text-primary text-[16px] font-bold">
                {{ $t("What is your car’s model year?") }}
              </span>
              <UInput v-model="state.model_year" />
            </div>
          </UFormGroup>
          <UFormGroup name="maintenance_type">
            <div class="flex flex-col gap-2">
              <span class="text-primary text-[16px] font-bold">
                {{ $t("maintHead") }}
              </span>
              <USelectMenu
                v-model="maintenance_type"
                :options="maintenance_types"
                @update:model-value="fetchModels"
                :placeholder="$t('maintHead')"
                class="w-full"
                searchable
                :searchable-placeholder="$t('search')"
                option-attribute="name"
                by="value"
                :search-attributes="['name', 'value']"
              >
                <template #option="{ option: person }">
                  <span class="truncate">{{ person.name }}</span>
                </template>
              </USelectMenu>
            </div>
          </UFormGroup>
          <div class="">
            <span class="text-primary text-[16px] font-bold">
              {{ $t("Choose a city and branch for your service") }}
            </span>
            <div class="flex items-center gap-4 mt-4">
              <div class="w-[50%]">
                <UFormGroup name="city_id">
                  <div class="flex flex-col gap-2">
                    <USelectMenu
                      v-model="city"
                      :options="cities"
                      @update:model-value="fetchCities"
                      :placeholder="$t('Select city...')"
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
              </div>
              <div class="w-[50%]">
                <UFormGroup name="branch_id">
                  <div class="flex flex-col gap-2">
                    <USelectMenu
                      v-model="branch"
                      :options="branches"
                      @update:model-value="getTimeSlots"
                      :placeholder="$t('Select branch...')"
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
              </div>
            </div>
          </div>

          <UFormGroup name="description">
            <div class="flex flex-col gap-2">
              <span class="text-primary text-[16px] font-bold">
                {{
                  $t(
                    "Please add any extra information about your appointment request"
                  )
                }}
              </span>
              <UTextarea
                v-model="state.description"
                :placeholder="$t('write your message here')"
              />
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
                <button
                   @click.stop="isOpen = true"
                  class="text-primary underline"
                >
                  {{ $t("Term And Conditions") }}
                </button>

                {{ $t("and") }}
                <button
                @click.stop="isOpen2 = true"
                  class="text-primary underline"
                >
                  {{ $t("Privacy Policy") }}
                </button>
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
      </div>
      <div class="flex flex-col gap-10">
        <VueDatePicker
          inline
          ref="datepicker"
          v-model="selectedDate"
          :disabled="checkTime"
          :min-date="min"
          :max-date="max"
          prevent-min-max-navigation
          :auto-apply="true"
          trim-weeks
          :first-day-of-week="1"
          :locale="locale"
          :show="['month', 'day']"
          :enable-time-picker="false"
          :day-names="locale === 'en' ? dayNamesEN : dayNamesAR"
          @update:model-value="getTimeSlots"
        />
        <div v-if="timeSlots.length >= 1" class="p-4 shadow-shadow1 rounded-xl">
          <h5 class="text-[18px] text-primary font-bold mb-4">
            {{ $t("time") }}
          </h5>
          <div class="flex flex-wrap items-center gap-5">
            <button
            v-for="i in timeSlots"
            @click="state.time = i?.value"
            :class="{'!bg-primary !text-white':state.time == i?.value }"
              class="border border-primary text-primary px-8 py-2 rounded-[30px]"
            >
              {{ i?.time }}
            </button>
          </div>
        </div>
      </div>
    </div>

   <Terms :isOpen="isOpen"></Terms>
   <Policy :isOpen="isOpen2"></Policy>
  </div>
</template>
<script setup lang="ts">
import { format, addDays, differenceInCalendarDays, getDay } from "date-fns";
import { number, object, string, type InferType } from "yup";
import { useGeneralStore } from "~/stores/general";
import { Models, Brands } from "@/types/general";
import type { FormSubmitEvent, Form, FormErrorEvent } from "#ui/types";
const { t, locale } = useI18n();
let router = useRouter();
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useDateUtilities } from "~/composables/utilities/useDateUtilities";
const { datAfter14Days, dayNamesAR, dayNamesEN, differenceInDays } =
  useDateUtilities();
const localePath = useLocalePath();
let min = ref("");
let max = ref("");
const cities = ref([]);
const isOpen = ref(false)
const isOpen2 = ref(false)
let maintenance_types = ref([
{
  value:"Periodic Maintenance",
  name: t('maint1')
},
{
  value:"Guarantee",
  name: t('maint2')
},
{
  value:"Plumbing And Painting",
  name: t('maint3')
},
{
  value:"Other",
  name: t('other')
},
]);
let city = ref();
const branches = ref([]);
let branch = ref();
let maintenance_type = ref();
let selectedDate = ref(new Date());
let store = useGeneralStore();
const schema = object({
  email: string().email(t("Invalidemail")).required(t("Required")),
  name: string().required(t("Required")),
  terms_and_privacy: string().required(t("Required")),
  phone: string().required(t("Required")),
  branch_id: string().required(t("Required")),
  brand_id: string().required(t("Required")),
  city_id: string().required(t("Required")),
  model_id: string().required(t("Required")),
  model_year: string().required(t("Required")),
  description: string().required(t("Required")),
  maintenance_type: string().required(t("Required")),
});


const checkTime = ref(true);
const timeSlots = ref<any[]>([]);
const brands_models = ref<Models[]>([]);
const fetchModels = (selected: { id: number }) => {
  let filter = store.brandsWithModles.find((ele) => ele.id === selected.id);
  brands_models.value = filter?.parent_models ?? [];
};
const fetchCities = (selected: { id: number }) => {
  branches.value = [];
  branch.value = undefined;
  let filter = cities.value.find((ele) => ele?.id === selected.id);
  branches.value = filter?.branches ?? [];
};

const brand = ref();
const model = ref();
type Schema = InferType<typeof schema>;
const state = ref({
  name: "",
  phone: "",
  branch_id: "",
  brand_id: "",
  city_id: "",
  model_name: "",
  model_id: "",
  model_year: "",
  date: "",
  description: "",
  email: "",
  time: "",
  terms_and_privacy: undefined,
  maintenance_type: "",
});

let brands = ref<Brands[]>([]);
watch(
  () => brand.value,
  (val) => {
    if (val) {
      state.value.brand_id = val?.id;
    }
  }
);
watch([() => city.value, () => branch.value , ()=> model.value , ()=> maintenance_type.value], ([val, val2 , val3 , val4]) => {
  if (val) {
    state.value.city_id = val?.id;
  }
  if (val2) {
    state.value.branch_id = val2?.id;
  }
  if(val3){
    state.value.model_id = val3?.id;
  }
  if(val4){
    state.value.maintenance_type = val4?.value 
  }
});
watch(
  () => store.brandsWithModles,
  (val) => {
    if (val) {
      brands.value = store.brandsWithModles;
      brands.value.push({ id: "another", name: t("another") });
    }
  }
);

const getAppointment = async () => {
  const response = await useApi().get("make-appointment-form-data");
  if (response.status === 200) {
    min.value = response.data?.start_date;
    max.value = response.data?.end_date;
    cities.value = response.data?.cities;
  }
};
const getTimeSlots = async () => {
  checkTime.value = false;
  state.value.date = format(selectedDate.value, "yyyy-MM-dd");
  let response = await useApi().get<any[]>(`time-slots`, {
    params: {
      date: format(selectedDate.value, "yyyy-MM-dd") ,
      branch_id: branch.value?.id,
    },
  });
if(response.status === 200){
  timeSlots.value = response.data;
  if(timeSlots.value.length >= 1){
    state.value.time = timeSlots.value[0]?.value
  }
}
};
async function onSubmit(event: FormSubmitEvent<Schema>) {
  form.value!.clear();

  try {
    pendingBtn.value = true;
    let formData = new FormData();
    formData.append("name", state.value.name);
    formData.append("branch_id", state.value.branch_id);
    formData.append("brand_id", state.value.brand_id);
    formData.append("city_id", state.value.city_id);
    formData.append("date", state.value.date);
    formData.append("description", state.value.description);
    formData.append("email", state.value.email);
    formData.append("maintenance_type", state.value.maintenance_type);
    formData.append("model_id", state.value.model_id);
    if (state.value.brand_id == "another") {
      formData.append("model_name", state.value.model_name);
    }
    formData.append("model_year", state.value.model_year);
    formData.append("phone", state.value.phone);
    formData.append("terms_and_privacy", state.value.terms_and_privacy || "");
    formData.append("time", state.value.time);
    const response = await useApi().post("make-appointment", formData);
    if (response.status === 200) {
      pendingBtn.value = false;

      router.push(localePath("/thank-you"));
      //   Object.assign(state.value, {
      //     message: "",
      //     email: "",
      //     title: "",
      //     name: "",
      //     phone: "",
      //     terms_and_privacy: undefined
      //   });
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
let pendingBtn = ref(false);
onMounted(() => {
  getAppointment();
  brands.value = store.brandsWithModles;
  brands.value.push({ id: "another", name: t("another") });
});
</script>
<style lang="scss">

</style>

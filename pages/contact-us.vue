<template>
  <div class="container  mt-10 mb-[150px]">
    <h1
      class="headText font-bold contact mb-10 text-primary xl:text-[42px] lg:text-[42px] text-[32px]"
      :data-contact="$t('KEEP IN TOUCH')"
    >
      {{ $t("CONTACT US NOW") }}
    </h1>

    <div class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-8">
      <div class="col-span-2">
        <UAccordion :items="filterd">
          <template #default="{ item, index, open }">
            <UButton
              color="gray"
              variant="ghost"
              class="bg-grey py-4 mb-3 dark:border-gray-700"
            >
              <template #leading>
                <div
                  class="w-[37px] h-[37px] rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center"
                >
                  <!-- <Icon name="material-symbols:location-on-outline" class="w-7 h-7 text-white dark:text-gray-900" /> -->
                  <UIcon
                    name="material-symbols:location-on"
                    class="w-6 h-6 text-white dark:text-gray-900"
                  />
                </div>
              </template>

              <span class="truncate text-lg font-bold"
                > {{ item.name }}</span
              >

              <template #trailing>
                <UIcon
                  :name="open ? 'i-heroicons-minus' : 'i-heroicons-plus'"
                  class="w-5 h-5 ms-auto transform transition-transform duration-200"
                />
              </template>
            </UButton>
          </template>
          <template #item="{ item, index }">
            <div class="bg-grey rounded-[8px] p-3">
              <!-- {{ activeBranch }} -->
              <div class="flex items-center flex-wrap gap-4 mb-8">
                <UButton
                  v-for="(i, indexBranch) in item.types"
                  @click="
                    (activeBranchIndex[index] = indexBranch),
                      (checkBranch = i.id)
                  "
                  class="px-8 py-2 font-bold rounded-[18px] active bg-transparent text-primary shadow-none hover:bg-primary hover:text-white"
                  :class="{
                    'bg-primary text-white shadow-shadow1':
                      activeBranchIndex[index] == indexBranch,
                  }"
                >
                   {{ i.name }}
                </UButton>
              </div>
              <div v-for="(model, mindex) in item.types" :key="mindex">
                <div
                  v-for="branch , branchIndex in model?.branches"
                  class="flex flex-col gap-[30px]"
                >
                  <div
                    v-if="activeBranchIndex[index] == mindex"
                    class="flex xl:gap-[100px] lg:gap-[100px] gap-[30px] flex-col border-b border-b-tw-grey pb-4 xl:flex-row lg:flex-row"
                  >
                    <div
                      class="flex flex-col gap-4 xl:w-[289px] lg:w-[289px] w-full"
                    >
                      <h3 class="text-[22px] font-bold text-primary">
                        {{ branch.name }}
                      </h3>
                      <div
                        class="h-[333px] iframeBranch bg-primary w-full border-[2px] border-white rounded-[22px]"
                        v-html="branch.frame"
                      ></div>
                    </div>
                    <div class="">
                      <h4
                        class="border-b border-b-primary border-t border-t-primary py-4 text-primary text-[22px] font-bold"
                      >
                        {{ $t("contact data") }}
                      </h4>
                      <div class="flex flex-col my-5 gap-4">
                        <div class="flex items-center gap-2">
                          <UIcon
                            name="material-symbols:location-on"
                            class="w-6 h-6 text-primary dark:text-gray-900"
                          />
                          <p>{{ branch.address }}</p>
                        </div>
                        <div class="flex items-center gap-2">
                          <UIcon
                            name="material-symbols:call"
                            class="w-6 h-6 text-primary dark:text-gray-900"
                          />
                          <p>{{ branch.phone }}</p>
                        </div>
                        <div class="flex items-center gap-2">
                          <UIcon
                            name="ion:logo-whatsapp"
                            class="w-6 h-6 text-primary dark:text-gray-900"
                          />
                          <p>{{ branch.whatsapp }}</p>
                        </div>
                        <div class="flex items-center gap-2">
                          <UIcon
                            name="material-symbols-light:mail"
                            class="w-6 h-6 text-primary dark:text-gray-900"
                          />
                          <p>{{ branch.email }}</p>
                        </div>
                      </div>
                      <h4
                        class="border-b border-b-primary border-t border-t-primary py-4 text-primary text-[22px] font-bold"
                      >
                        {{ $t("working hours") }}
                      </h4>
                      <h5
                        class="my-5 text-[#6F6F6E] text-center font-bold text-[18px]"
                      >
                        {{ $t("everyday") }}
                      </h5>
                      <div
                        class="htmlTextBranch"
                        v-html="branch.time_of_work"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </UAccordion>
      </div>
      <div class="relative h-full">
        <div class="bg-white p-4 rounded-[16px] shadow-shadow1 sticky top-[100px]">
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
            <UFormGroup name="title">
              <div class="flex flex-col gap-2">
                <span class="text-primary text-[16px] font-bold">
                  {{ $t("message title") }}
                </span>
                <UInput
                  v-model="state.title"
                  :placeholder="$t('write your message title...')"
                />
              </div>
            </UFormGroup>
            <UFormGroup name="message">
              <div class="flex flex-col gap-2">
                <span class="text-primary text-[16px] font-bold">
                  {{ $t("your message") }}
                </span>
                <UTextarea
                  v-model="state.message"
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

            <UButton
              :disabled="pendingBtn"
              class="w-full flex disabled:cursor-not-allowed disabled:opacity-50 items-center justify-center py-2"
              type="submit"
            >
              {{ $t("send") }}
            </UButton>
          </UForm>
        </div>
      </div>
    </div>
  </div>
  <Terms :isOpen="isOpen"></Terms>
  <Policy :isOpen="isOpen2"></Policy>
  <Loader v-if="loadingPage"></Loader>
</template>
<script setup lang="ts">
import { useContactStore } from "@/stores/contact";
import {
  ApiResponse,
  BranchTypes,
  Branches,
  BranchesData,
} from "@/types/general";
import { number, object, string, type InferType } from "yup";
import type { FormSubmitEvent, Form, FormErrorEvent } from "#ui/types";
const { t, locale } = useI18n();
let router = useRouter();
const localePath = useLocalePath();
const schema = object({
  email: string().email(t("Invalidemail")).required(t("Required")),
  message: string().required(t("Required")),
  title: string().required(t("Required")),
  name: string().required(t("Required")),
  terms_and_privacy: string().required(t("Required")),
  phone: string().required(t("Required")),
});

let isOpen = ref(false);
let isOpen2 = ref(false);
type Schema = InferType<typeof schema>;
let pendingBtn = ref(false);
const state = reactive({
  message: "",
  email: "",
  title: "",
  name: "",
  phone: "",
  terms_and_privacy: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  form.value!.clear();
  if(process.client) {

    try {
      pendingBtn.value = true;
      const response = await useApi().post("contact-us", {...state});
      if (response.status === 201 || response.status === 200) {
        pendingBtn.value = false;
        localStorage.setItem("formSubmitted", "true");
        if(process.client) {
        
      }
        router.push(localePath("/thank-you"));
        Object.assign(state, {
          message: "",
          email: "",
          title: "",
          name: "",
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
}
const form = ref<Form<Schema>>();

async function onError(event: FormErrorEvent) {
  const element = document.getElementById(event.errors[0].id);
  element?.focus();
  element?.scrollIntoView({ behavior: "smooth", block: "center" });
}
let store = useContactStore();
const activeBranch = ref();
let subBranches = ref([]);
let checkBranch = ref(1);



const filterd = ref<BranchesData[]>([]);
const removeEmptyArrays = (arr: any[]): any[] => {
  return arr
    .map((item) => (Array.isArray(item) ? removeEmptyArrays(item) : item)) // Recursively clean nested arrays
    .filter((item) => !(Array.isArray(item) && item.length === 0)); // Remove empty arrays
};

let activeSubBranch = ref<Branches[]>([]);
let activeBranchIndex = ref(Array(9).fill(0));
const branches = ref<BranchesData[]>([]);
let loadingPage = ref(false);
const fetchBranches = async () => {
  loadingPage.value = true;
  try {
    let result = await useApi().get<ApiResponse<BranchesData[]>>("branches");
    if (result.status == 200) {
      loadingPage.value = false;
      // branches.value = result.data.data;
      filterd.value =  result.data.data.map((item) => ({
    ...item,
    types: item.types.filter((type) => type.branches.length > 0),
  }))
    }
  } catch (error) {
  } finally {
  }
};

onMounted(() => {
  fetchBranches();
  // Initialize with the first available branch per city
  store.branches.forEach((city) => {
    const firstBranch = city.types.find((t) => t.branches.length > 0);
    if (firstBranch) {
      activeBranch.value[city.name] = firstBranch.name;
    }
  });
});

useHead({
      title: `${t('ourBranches')}`,
      meta: [
        { name: 'description', content: 'test' },
        { name: 'keywords', content: 'test , test , test'},
        { name: 'author', content: 'webstdy' },
        { property: 'og:title', content: `${t('home')}` },
        { property: 'og:description', content: 'test' },
      ],
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

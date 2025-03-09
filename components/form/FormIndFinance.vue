<template>
     <UFormGroup name="name">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("full name") }}
        </span>

        <UInput v-model="store.stateIndFinance.name" :placeholder="$t('write your name..')" />
      </div>
    </UFormGroup>
    <UFormGroup name="phone">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("mobile number") }}
        </span>
        <UInput v-model="store.stateIndFinance.phone" :placeholder="$t('mobile number')" />
      </div>
    </UFormGroup>
    <UFormGroup name="age">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("age") }}
        </span>

        <UInput v-model="store.stateIndFinance.age" :placeholder="$t('age')" />
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

    <UFormGroup name="work">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("employer") }}
        </span>

        <UInput v-model="store.stateIndFinance.work" :placeholder="$t('employer')" />
      </div>
    </UFormGroup>
    <UFormGroup name="salary">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("Total salary in ATM") }}
        </span>

        <UInput
          v-model="store.stateIndFinance.salary"
          :placeholder="$t('Salary and allowances...')"
        />
      </div>
    </UFormGroup>
    <UFormGroup name="bank_id">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("Bank account") }}
        </span>

        <USelectMenu
          v-model="selectedBank"
          :placeholder="$t('Select bank...')"
          :options="store.purchaseData?.banks"
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
    <UFormGroup name="commitments">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("Total commitments") }}
        </span>

        <UInput
          v-model="store.stateIndFinance.commitments"
          :placeholder="$t('Commitment amount...')"
        />
      </div>
    </UFormGroup>
    <UFormGroup name="having_loan">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("Is there a mortgage loan ?") }}
        </span>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-3">
            <URadio
              id="radioLoan1"
              label=""
              v-model="store.stateIndFinance.having_loan"
              :value="1"
            />
            <label for="radioLoan1" class="text-primary font-bold">
              {{ $t("yes") }}
            </label>
          </div>
          <div class="flex items-center gap-3">
            <URadio
              id="radioLoan2"
              label=""
              v-model="store.stateIndFinance.having_loan"
              :value="0"
            />
            <label for="radioLoan2" class="text-primary font-bold">
              {{ $t("no") }}
            </label>
          </div>
        </div>
      </div>
    </UFormGroup>
    <UFormGroup name="having_personal_loan">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("loan") }}
        </span>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-3">
            <URadio
              id="radioPersonLoan1"
              label=""
              v-model="store.stateIndFinance.having_personal_loan"
              :value="1"
            />
            <label for="radioPersonLoan1" class="text-primary font-bold">
              {{ $t("yes") }}
            </label>
          </div>
          <div class="flex items-center gap-3">
            <URadio
              id="radioPersonLoan2"
              label=""
              v-model="store.stateIndFinance.having_personal_loan"
              :value="0"
            />
            <label for="radioPersonLoan2" class="text-primary font-bold">
              {{ $t("no") }}
            </label>
          </div>
        </div>
      </div>
    </UFormGroup>
    <UFormGroup name="finance_duration">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("finance2") }}
        </span>

        <UInput
          v-model="store.stateIndFinance.finance_duration"
          :placeholder="$t('finance2')"
        />
      </div>
    </UFormGroup>
    <UFormGroup name="funding_organization_type">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("funding") }}
        </span>
        <div class="flex items-center gap-3">
          <URadio
            id="radioType1"
            label=""
            v-model="store.stateIndFinance.funding_organization_type"
            value="same_bank"
          />
          <label for="radioType1" class="text-primary font-bold">
            {{ $t("on bank") }}
          </label>
        </div>
        <div class="flex items-center gap-3">
          <URadio
            id="radioType2"
            label=""
            v-model="store.stateIndFinance.funding_organization_type"
            value="company"
          />
          <label for="radioType2" class="text-primary font-bold">
            {{ $t("financing2") }}
          </label>
        </div>
        <div class="flex items-center gap-3">
          <URadio
            id="radioType3"
            label=""
            v-model="store.stateIndFinance.funding_organization_type"
            value="bank"
          />
          <label for="radioType3" class="text-primary font-bold">
            {{ $t("financing3") }}
          </label>
        </div>
        <!-- <URadioGroup class="flex flex-row" v-model="store.stateIndFinance.funding_organization_type" :options="options2" /> -->
      </div>
    </UFormGroup>
    <UFormGroup
      name="funding_organization_id"
      v-if="store.stateIndFinance.funding_organization_type == 'company'"
    >
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("finance3") }}
        </span>

        <USelectMenu
          v-model="store.stateIndFinance.funding_organization_id"
          :placeholder="$t('Select bank...')"
          :options="store.purchaseData?.funding_organizations"
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
    <UFormGroup
      name="funding_bank_id"
      v-if="store.stateIndFinance.funding_organization_type == 'bank'"
    >
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("financing3") }}
        </span>

        <USelectMenu
          v-model="store.stateIndFinance.funding_bank_id"
          :placeholder="$t('Select bank...')"
          :options="store.purchaseData?.banks"
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
            v-model="store.stateIndFinance.services"
          />
          <label :for="`checkInpService${index}`">
            <span class="text-primary font-bold"> {{ i?.name }} </span>
          </label>
        </div>
      </div>
    </UFormGroup>
    <UFormGroup name="sector">
      <div class="flex flex-col gap-2">
        <span class="text-primary text-[16px] font-bold">
          {{ $t("sector") }}
        </span>

        <div class="flex items-center gap-4">
          <div class="flex items-center gap-3">
            <URadio
              id="radioSector1"
              label=""
              v-model="store.stateIndFinance.sector"
              value="governmental"
            />
            <label for="radioSector1" class="text-primary font-bold">
              {{ $t("governmental") }}
            </label>
          </div>
          <div class="flex items-center gap-3">
            <URadio
              id="radioSector2"
              label=""
              v-model="store.stateIndFinance.sector"
              value="private"
            />
            <label for="radioSector2" class="text-primary font-bold">
              {{ $t("private") }}
            </label>
          </div>
        </div>
      </div>
    </UFormGroup>
    
    <div v-if="store.stateIndFinance.sector" class="flex flex-col gap-4">
      <UFormGroup name="id_and_driving_license">
        <div class="flex flex-col gap-2">
          <span class="text-primary text-[16px] font-bold">
            {{ $t("id_driving") }}
          </span>
          <input type="file" class="outline:primary  ring-inset shadow-sm rounded-md text-gray-900  p-1 ring-1 ring-gray-300" @change="onFileChange1($event, 'id_and_driving_license')"  name="">
        </div>
      </UFormGroup>
      <UFormGroup name="salary_identification">
        <div class="flex flex-col gap-2">
          <span class="text-primary text-[16px] font-bold">
            {{
              store.stateIndFinance.sector == "governmental"
                ? `${$t("salary")}`
                : `${$t("salary_def")}`
            }}
          </span>
          <input type="file" class="outline:primary  ring-inset shadow-sm rounded-md text-gray-900  p-1 ring-1 ring-gray-300" @change="onFileChange1($event, 'salary_identification')"  name="" id="">

        </div>
      </UFormGroup>
      <UFormGroup v-if="store.stateIndFinance.sector == 'private'" name="insurance_print">
        <div class="flex flex-col gap-2">
          <span class="text-primary text-[16px] font-bold">
            {{ $t("print") }}
          </span>
       
        <input type="file" class="outline:primary  ring-inset shadow-sm rounded-md text-gray-900  p-1 ring-1 ring-gray-300" @change="onFileChange1($event, 'insurance_print')"  name="" id="">
        </div>

      </UFormGroup>
      <UFormGroup v-if="store.stateIndFinance.sector == 'private'" name="account_statement">
        <div class="flex flex-col gap-2">
          <span class="text-primary text-[16px] font-bold">
            {{ $t("months") }}
          </span>

          <input type="file" class="outline:primary  ring-inset shadow-sm rounded-md text-gray-900  p-1 ring-1 ring-gray-300" @change="onFileChange1($event, 'account_statement')"  name="" id="">

        </div>
      </UFormGroup>
    </div>

    <UFormGroup name="terms_and_privacy">
      <div class="flex items-center gap-2">
        <UCheckbox
          color="primary"
          id="checkInp"
          v-model="store.stateIndFinance.terms_and_privacy"
        />
        <label for="checkInp">
          {{ $t("I have read and unconditionally agree to the") }}
          <span @click="isOpen = !isOpen" :to="$localePath('/terms')" class="text-primary cursor-pointer underline">
            {{ $t("Term And Conditions") }}
          </span>

          {{ $t("and") }}
          <span
          @click="isOpen2 = !isOpen2"
            :to="$localePath('/policy')"
            class="text-primary cursor-pointer underline"
          >
            {{ $t("Privacy Policy") }}
          </span>
        </label>
      </div>
    </UFormGroup>

    <Terms :isOpen="isOpen"></Terms>
    <Policy :isOpen="isOpen2"></Policy>
</template>
<script lang="ts" setup>
import { useOrderStore } from "@/stores/order";
let store = useOrderStore();

const isOpen = ref(false);
const isOpen2 = ref(false);

const selectedCity = computed({
  get: () => store.purchaseData?.cities?.find((city:any) => city.id === store.stateIndFinance.city_id) || undefined,
  set: (selected) => {
    store.stateIndFinance.city_id = selected?.id ?? ""; // ✅ Store only the id
  },
});
const selectedBank = computed({
  get: () => store.purchaseData?.banks?.find((bank:any) => bank.id === store.stateIndFinance.bank_id) || undefined,
  set: (selected) => {
    store.stateIndFinance.bank_id = selected?.id ?? ""; // ✅ Store only the id
  },
});
const onFileChange1 = (event: Event , field: keyof typeof store.stateIndFinance) => {
  const target = event.target as HTMLInputElement;
  if (!target || !target.files || target.files.length === 0) return;
  store.stateIndFinance[field] = target.files[0] as any;
};
</script>
<style lang="">
    
</style>
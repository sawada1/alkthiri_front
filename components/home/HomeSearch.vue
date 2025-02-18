<template>
  <div class="container xl:mt-[100px] lg:mt-[100px] mt-[0px]">
    <div
      class="bg-white px-[16px] py-[24px] rounded-[16px] flex xl:flex-row lg:flex-row md:flex-row flex-col items-center gap-5 justify-between shadow-shadow1"
    >
      <USelectMenu
        v-model="selectedType"
        :options="types"
        :placeholder="$t('select the vehicle type')"
        class="xl:w-[300px] lg:w-[250x] md:w-[200px] w-full"
        searchable
        :searchable-placeholder="$t('search')"
        option-attribute="name"
        :search-attributes="['name']"
      >
        <template #option="{ option: person }">
          <span class="truncate">{{ person.name }}</span>
        </template>
      </USelectMenu>
      
      <USelectMenu
        v-model="selectedBrand"
        :options="store.brandsWithModles"
        @update:model-value="fetchModels"
        :placeholder="$t('choose brand')"
        class="xl:w-[300px] lg:w-[250x] md:w-[200px] w-full"
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
      <USelectMenu
        v-model="selectedModel"
        :options="brands_models"
        :placeholder="$t('chooseModel')"
        class="xl:w-[300px] lg:w-[250x] md:w-[200px] w-full"
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

      <button
      id="seachBtnContainer" aria-label="search"
        class="bg-tw-primary rounded-xl text-white font-bold xl:w-[120px] lg:w-[120px] md:w-[120px] w-full h-[40px] shadow-shadow2"
      >
        {{ $t("search") }}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useGeneralStore } from "~/stores/general";
import {Models} from "@/types/general"
let store = useGeneralStore();
const router = useRouter();
const localePath = useLocalePath();
let { locale, t } = useI18n();
let types = ref([
  {
    name: t("sedan"),
    value: "sedan",
  },
  {
    name: t("commercial"),
    value: "commercial",
  },
  {
    name: t("multi"),
    value: "multi",
  },
]);
const selectedType = ref();
const selectedBrand = ref();
const selectedModel = ref();

const goToBrandPageSearch = () => {
  const queryParams = {
    id: selectedBrand.value.id,
    type: selectedType.value.value,
    model: selectedModel.value.id,
  };
  const url = "/cars";
  const updatedRoute = {
    path: url,
    query: {
      ...queryParams,
    },
  };

  const fullLocalePath = localePath(updatedRoute);
  router.push(fullLocalePath);
};

const brands_models = ref<Models[]>([]);
const fetchModels = (selected: { id: number })=>{
    let filter = store.brandsWithModles.find((ele) => ele.id === selected.id);
    brands_models.value = filter?.parent_models ?? [];
}
</script>
<style lang=""></style>

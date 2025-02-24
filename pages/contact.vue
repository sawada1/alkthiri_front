<template>
  <div class="container min-h-[140vh] mt-10 mb-[150px]">
    <h1
      class="headText font-bold contact mb-10 text-primary xl:text-[42px] lg:text-[42px] text-[32px]"
      :data-contact="$t('KEEP IN TOUCH')"
    >
      {{ $t("CONTACT US NOW") }}
    </h1>


    <div class="grid grid-cols-2">
       <div>
        <UAccordion :items="items">
            <template #default="{ item, index, open }">
      <UButton color="gray" variant="ghost" class=" bg-grey py-4 mb-3 dark:border-gray-700">
        <template #leading>
          <div class="w-[35px] h-[35px] rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center">
            <Icon name="material-symbols:location-on-outline" class="w-7 h-7 text-white dark:text-gray-900" />
          </div>
        </template>

        <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>

        <template #trailing>
          <UIcon
            :name="open ? 'i-heroicons-minus' : 'i-heroicons-plus'"
            class="w-5 h-5 ms-auto transform transition-transform duration-200"
          />
        </template>
      </UButton>
    </template>
    <template #item="{ item }">
         <div class="bg-grey rounded-[8px] p-3">
          <div class="flex items-center gap-4">
           <UButton class="px-8 py-2"> dssd </UButton>
           <UButton class="px-8 py-2"> dssd </UButton>
          </div>
         </div>
    </template>
  </UAccordion>
       </div>
    </div>
  
  </div>
  <!-- <Loader v-if="store.loadingPage"></Loader> -->
</template>
<script setup lang="ts">
import { useContactStore } from "@/stores/contact";
import { BranchTypes, Branches } from "@/types/general";

let store = useContactStore();
const items = [{
  label: 'Getting Started',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'Installation',
  icon: 'i-heroicons-arrow-down-tray',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'Theming',
  icon: 'i-heroicons-eye-dropper',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'Layouts',
  icon: 'i-heroicons-rectangle-group',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'Components',
  icon: 'i-heroicons-square-3-stack-3d',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'Utilities',
  icon: 'i-heroicons-wrench-screwdriver',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}]

// let subBranches = ref([]);
// let types = ref([
//   {
//     name: "test1",
//     branches: [{ name: "testt" }],
//   },
//   {
//     name: "test2",
//     branches: [{ name: "testt" }],
//   },
//   {
//     name: "test3",
//     branches: [],
//   },
//   {
//     name: "test4",
//     branches: [{ name: "dsds" }],
//   },
// ]);

let activeSubBranch = ref<Branches[]>([]);
// const getSubData = (data: BranchTypes[]) => {
//   const filteredTypes = data.filter(
//     (item) => item.branches && item.branches.length > 0
//   );
//   activeSubBranch.value = filteredTypes[0].branches;
//   return filteredTypes;
// };

onMounted(() => {
  store.fetchBranches();
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
.htmlTextBranch{
    p{
        text-align: center !important;
    }
}
</style>

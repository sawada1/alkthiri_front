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
          <UAccordion :items="store.branches">
              <template #default="{ item, index, open }">
        <UButton color="gray" variant="ghost" class=" bg-grey py-4 mb-3 dark:border-gray-700">
          <template #leading>
            <div class="w-[37px] h-[37px] rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center">
              <!-- <Icon name="material-symbols:location-on-outline" class="w-7 h-7 text-white dark:text-gray-900" /> -->
              <UIcon name="material-symbols:location-on" class="w-6 h-6 text-white dark:text-gray-900" />
            </div>
          </template>
  
          <!-- <span class="truncate text-lg font-bold">{{ index + 1 }}. {{ item }}</span> -->
  
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
            <div class="flex items-center flex-wrap gap-4 mb-8">
             <UButton class="px-8 py-2 font-bold rounded-[18px] hover:bg-primary hover:text-white"> dsd </UButton>
             <UButton class="px-8 py-2 font-bold bg-transparent shadow-none text-primary hover:bg-primary hover:text-white transition-colors rounded-[18px]"> dssd </UButton>
            </div>
            <div class="flex flex-col  gap-5">
             <div class="flex xl:gap-[100px] lg:gap-[100px] gap-[30px] flex-col xl:flex-row lg:flex-row ">
              <div class="flex flex-col  gap-4 xl:w-[289px] lg:w-[289px] w-full">
               <h3 class="text-[22px] font-bold text-primary"> branch name  </h3>
               <div class="h-[333px] bg-primary w-full border-[2px] border-white rounded-[22px]"></div>
              </div>
              <div class="">
                <h4 class="border-b border-b-primary border-t border-t-primary py-4 text-primary text-[22px] font-bold"> {{ $t("contact data") }} </h4>
                <div class="flex flex-col my-5 gap-4">
                 <div class="flex items-center gap-2">
                  <UIcon name="material-symbols:location-on" class="w-6 h-6 text-primary dark:text-gray-900" />
                   <p> Address</p>
                 </div>
                 <div class="flex items-center gap-2">
                  <UIcon name="material-symbols:call" class="w-6 h-6 text-primary dark:text-gray-900" />
                   <p> Address</p>
                 </div>
                 <div class="flex items-center gap-2">
                  <UIcon name="ion:logo-whatsapp" class="w-6 h-6 text-primary dark:text-gray-900" />
                   <p> Address</p>
                 </div>
                 <div class="flex items-center gap-2">
                  <UIcon name="material-symbols-light:mail" class="w-6 h-6 text-primary dark:text-gray-900" />
                   <p> Address</p>
                 </div>
                </div>
                <h4 class="border-b border-b-primary border-t border-t-primary py-4 text-primary text-[22px] font-bold"> {{ $t("working hours") }} </h4>
                 <h5 class="my-5 text-[#6F6F6E] text-center font-bold text-[18px]"> {{ $t('everyday') }} </h5>
              </div>
             </div>
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
   const getSubData = (data: BranchTypes[] ) => {
    
    const filteredTypes = data.filter(
       (item) => item.branches && item.branches.length > 0
     );
     activeSubBranch.value = filteredTypes[0].branches;
    return filteredTypes || [];
   };
  
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
  
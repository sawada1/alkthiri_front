<template>
  <div class="container min-h-screen mt-10 mb-[150px]">
    <h1
      class="headText font-bold contact mb-10 text-primary xl:text-[42px] lg:text-[42px] text-[32px]"
      :data-contact="$t('KEEP IN TOUCH')"
    >
      {{ $t("CONTACT US NOW") }}
    </h1>
  
  </div>
  <!-- <Loader v-if="store.loadingPage"></Loader> -->
</template>
<script setup lang="ts">
import { useContactStore } from "@/stores/contact";
import { BranchTypes, Branches } from "@/types/general";

let store = useContactStore();
const items = [
  {
    label: "test",
    desc: "ssasa",
  },
  {
    label: "test",
    desc: "ssasa",
  },
  {
    label: "test",
    desc: "ssasa",
  },
  {
    label: "test",
    desc: "ssasa",
  },
  {
    label: "test",
    desc: "ssasa",
  },
];

let subBranches = ref([]);
let types = ref([
  {
    name: "test1",
    branches: [{ name: "testt" }],
  },
  {
    name: "test2",
    branches: [{ name: "testt" }],
  },
  {
    name: "test3",
    branches: [],
  },
  {
    name: "test4",
    branches: [{ name: "dsds" }],
  },
]);

let activeSubBranch = ref<Branches[]>([]);
const getSubData = (data: BranchTypes[]) => {
  const filteredTypes = data.filter(
    (item) => item.branches && item.branches.length > 0
  );
  activeSubBranch.value = filteredTypes[0].branches;
  return filteredTypes;
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

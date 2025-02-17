import { defineStore } from "pinia";
export const useGeneralStore = defineStore("generalStore", () => {
     let generalData = ref();
    return {
        generalData
    };
},

);
// stores/exampleStore.ts
import { defineStore } from 'pinia';
import { useApi } from '@/composables/api';
import { ApiResponse } from "@/types/general";
import { carDetails , Cars } from "@/types/car";

  export const useOrderStore = defineStore('order', {
      state: () => ({
        checkStatus: 1,
        checkTypeInd: 'finance',
        checkTypeCorp: 'finance',

      }),
      getters: {
     
      },
      actions: {
    
      
      },
    })
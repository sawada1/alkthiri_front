// stores/exampleStore.ts
import { defineStore } from 'pinia';
import { useApi } from '@/composables/api';
import { ApiResponse ,  PurchaseDataType} from "@/types/general";
import { carDetails , Cars } from "@/types/car";

  export const useOrderStore = defineStore('order', {
      state: () => ({
        checkStatus: 1,
        checkTypeInd: 'finance',
        checkTypeCorp: 'finance',
        purchaseData: {} as PurchaseDataType,
         stateIndFinance:{
          phone: "",
          name: "",
          age: "",
          having_personal_loan: "",
          finance_duration: "",
          financing_community: "",
          salary: "",
          commitments: "",
          having_loan: "",
          city_id: "" as string | number,
          work: "",
          bank_id: "" as string | number,
          sector: "",
          id_and_driving_license: "",
          salary_identification: "",
          insurance_print: "",
          account_statement: "",
          funding_organization_id: "",
          funding_organization_type: "",
          funding_bank_id: "",
          services: [] as any[],
          terms_and_privacy: undefined as undefined | boolean,
        }

      }),
      getters: {
     
      },
      actions: {
       async getPurchaseData(){
        let result = await useApi().get<PurchaseDataType>(`purchase-form-info`);
        if (result.status === 200) {
          this.purchaseData = result.data;
        }
       }
      
      },
    })
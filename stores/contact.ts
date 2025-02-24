// stores/exampleStore.ts
import { defineStore } from 'pinia';
import { useApi } from '@/composables/api';
import { ApiResponse , BranchesData } from "@/types/general";

  export const useContactStore = defineStore('contact', {
      state: () => ({
        branches: [] as BranchesData[],
        loadingPage: false
      }),
      getters: {
     
      },
      actions: {
        async fetchBranches() {
          this.loadingPage = true;
          try {
              let result = await  useApi().get<ApiResponse<BranchesData[]>>('branches');
              if(result.status == 200){
                this.loadingPage = false;
              this.branches = result.data.data;
            }
          } catch (error) {
          } finally {
          }
        },
     
      },
    });

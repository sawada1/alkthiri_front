// stores/exampleStore.ts
import { defineStore } from 'pinia';
import { useApi } from '@/composables/api';
import { ApiResponse , BranchesData } from "@/types/general";

  export const useContactStore = defineStore('contact', {
      state: () => ({
        branches: [] as BranchesData[],
        loadingPage: false,
        activeBranch:{}
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
              this.branches.forEach((city) => {
                const firstBranch = city.types.find((t) => t.branches.length > 0);
                // console.log(firstBranch);
                
                if (firstBranch) {
                  this.activeBranch = firstBranch;
                }
              });
            }
          } catch (error) {
          } finally {
          }
        },
     
      },
    });

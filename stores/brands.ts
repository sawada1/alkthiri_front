// stores/exampleStore.ts
import { defineStore } from 'pinia';
import { useApi } from '@/composables/api';
import { ApiResponse } from "@/types/general";
import { Brands , Latest , News } from "@/types/home";
  interface Cars{
    model_image: string;
    model_name: string;
    id:number;
  }
  export const useBrandsStore = defineStore('brands', {
      state: () => ({
        brandArray:[] as Brands[],
        cars:[] as Cars[],
        TypeBrand:"sedan",
        brandStored: undefined as number | undefined,
        spinner_brands:false,
        loaderCars:false,
        emptyCars: false
      }),
      getters: {
     
      },
      actions: {
        async fetchBrands() {
          this.spinner_brands = true;
          try {
            let result = await  useApi().get<ApiResponse<Brands[]>>('brands');
            if(result.status == 200){
              this.spinner_brands = false;
              this.brandArray = result.data.data;
              this.brandStored = result.data.data[0]?.id
              this.fetchCars();
            }
          } catch (error) {
          } finally {
          }
        },
        async fetchCars(){
                this.loaderCars = true;
                this.emptyCars = false;
                this.cars = [];
                try{
                    let result = await useApi().get<Cars[]>(`cars-basedOn-model`, {
                        params: {
                            brands: [this.brandStored],
                            type: this.TypeBrand,
                        },
                    });
                    if (result.status == 200) {
                        this.loaderCars = false;
                        if(result.data.length == 0){
                            this.emptyCars = true;
                        }
                      this.cars = result.data;
                    }

                }catch(e){}
              
        }
      },
    });

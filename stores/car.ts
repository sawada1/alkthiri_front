// stores/exampleStore.ts
import { defineStore } from 'pinia';
import { useApi } from '@/composables/api';
import { ApiResponse } from "@/types/general";
import { carDetails , Cars } from "@/types/car";

  export const useCarStore = defineStore('car', {
      state: () => ({
        CarDetails: {} as Cars,
        cars: [] as Cars[],
        images:[] as string[],
        CarId: undefined as number | undefined,
        ColorId: undefined as number | undefined,
        ColorName:'',
        ColorHexCode:'',
        pendingCar:false,
      }),
      getters: {
     
      },
      actions: {
        async fetchCarDetails(model_id:any , year:any) {
          this.pendingCar = true;
          try {
            let result = await  useApi().get<carDetails>(`models/${model_id}`,{
                params:{
                    year: year ? year : "",
                }
            });
            if(result.status == 200){
              
              this.CarDetails = result.data.cars[0];
              this.CarId = result.data.cars[0].id;
              this.ColorId = result.data.cars[0].colors[0].id;
              this.ColorName = result.data.cars[0].colors[0].name;
              this.ColorHexCode = result.data.cars[0].colors[0].hex_code;
              this.cars = result.data.cars;
              this.images = result.data.images
              this.pendingCar = false;       
            }
          } catch (error) {
          } finally {
          }
        },
      
      },
    })
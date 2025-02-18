// stores/exampleStore.ts
import { defineStore } from 'pinia';
import { useApi } from '@/composables/api';
import { ApiResponse } from "@/types/general";
import { Brands , Latest , News } from "@/types/home";

  export const useHomeStore = defineStore('home', {
      state: () => ({
        brandArray:[] as Brands[],
        latestArray:[] as Latest[],
        newsArray:[] as News[],
        spinner_brands:false,
        spinner_latest:false,
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
            }
          } catch (error) {
          } finally {
          }
        },
        async fetchNews() {
          try {
            let result = await useApi().get<ApiResponse<News[]>>('news/highlighted');
            if(result.status == 200){
              this.newsArray = result.data.data;
            }
          } catch (error) {
          } finally {
          }
        },
        async fetchCars() {
          this.spinner_latest = true;
          try {
            let result = await useApi().get<ApiResponse<Latest[]>>('cars/latest');
            if(result.status == 200){
              this.spinner_latest = false;
              this.latestArray = result.data.data;
            }
          } catch (error) {
          } finally {
          }
        },
      },
    })
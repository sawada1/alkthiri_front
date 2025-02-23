
import { defineStore } from 'pinia'
import { ApiResponse , BrandsWithModels } from "@/types/general";
import { Brands , Latest , News } from "@/types/home";
export const useGeneralStore = defineStore('general', () => {
    let generalData = ref();
    let pendingGeneral = ref(false);  
    let generalSpinner = ref(false);  
    let generalAbout = ref(false);  
    let brandsWithModles = ref<BrandsWithModels[]>([]);
    const fetchGeneral = async() =>{
        pendingGeneral.value = true;
        generalSpinner.value = true;
        generalAbout.value = true;
        try {
            let result = await useApi().get('general');            
            if(result.status == 200){
                generalData.value = result?.data;
                brandsWithModles.value = generalData.value?.brands_with_models;
                pendingGeneral.value = false;
                generalSpinner.value = false;
                generalAbout.value = false;
            }
        } catch (error) {
            // console.log(error.message || 'An error occurred while fetching items.');            
        } finally {
            console.log('error');
            
        }
    }
    return { fetchGeneral , generalData , pendingGeneral , brandsWithModles , generalSpinner , generalAbout }
  })
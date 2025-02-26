
import { defineStore } from 'pinia'
import { ApiResponse , BrandsWithModels , Faqs , Services , Banks } from "@/types/general";
import { Brands , Latest , News } from "@/types/home";
export const useGeneralStore = defineStore('general', () => {
    let generalData = ref();
    let pendingGeneral = ref(false);  
    let generalSpinner = ref(false);  
    let generalAbout = ref(false);  
    let pendingServices = ref(false);
    let pendingBanks = ref(false);
    let pendingFaqs = ref(false);
    let brandsWithModles = ref<BrandsWithModels[]>([]);
    let faqsData = ref<Faqs[]>([]);
    let servicesData = ref<Services[]>([]);
    let banksData = ref<Banks[]>([]);
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
    const fetchFaqs = async ()=>{
        try {
            pendingFaqs.value = true;
            let result = await useApi().get<ApiResponse<Faqs[]>>('faqs');            
            if(result.status == 200){
                pendingFaqs.value = false;
                faqsData.value = result.data.data
            }
        } catch (error) {
        } finally {
            
        }
    }
    const fetchServices = async ()=>{
        pendingServices.value = true;
        try {
            let result = await useApi().get<ApiResponse<Services[]>>('services');            
            if(result.status == 200){
                pendingServices.value = false;
                servicesData.value = result.data.data
                
            }
        } catch (error) {
        } finally {
            
        }
    }
    const fetchBanks = async ()=>{
        try {
            pendingBanks.value = true;
            let result = await useApi().get<ApiResponse<Banks[]>>('banks');            
            if(result.status == 200){
                pendingBanks.value = false;
                banksData.value = result.data.data
                
            }
        } catch (error) {
        } finally {
            
        }
    }
    return { fetchGeneral , generalData , pendingGeneral , brandsWithModles , generalSpinner , pendingServices , pendingBanks , pendingFaqs , generalAbout , fetchFaqs , fetchServices , fetchBanks , faqsData , servicesData , banksData }
  })
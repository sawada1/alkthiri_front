import { defineStore } from "pinia";
import {
  ApiResponse,
  BrandsWithModels,
  Faqs,
  Services,
  Banks,
} from "@/types/general";
import { Brands, Latest, News } from "@/types/home";
export const useGeneralStore = defineStore("general", () => {
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
  const fetchGeneral = async () => {
    pendingGeneral.value = true;
    generalSpinner.value = true;
    generalAbout.value = true;
    try {
      let result = await useApi().get("general");
      if (result.status == 200) {
        generalData.value = result?.data;
        brandsWithModles.value = generalData.value?.brands_with_models;
        pendingGeneral.value = false;
        generalSpinner.value = false;
        generalAbout.value = false;
      }
    } catch (error) {
      // console.log(error.message || 'An error occurred while fetching items.');
    } finally {
      console.log("error");
    }
  };
  const fetchFaqs = async () => {
    try {
      pendingFaqs.value = true;
      let result = await useApi().get<ApiResponse<Faqs[]>>("faqs");
      if (result.status == 200) {
        pendingFaqs.value = false;
        faqsData.value = result.data.data;
      }
    } catch (error) {
    } finally {
    }
  };
  const fetchServices = async () => {
    pendingServices.value = true;
    try {
      let result = await useApi().get<ApiResponse<Services[]>>("services");
      if (result.status == 200) {
        pendingServices.value = false;
        servicesData.value = result.data.data;
      }
    } catch (error) {
    } finally {
    }
  };
  const fetchBanks = async () => {
    try {
      pendingBanks.value = true;
      let result = await useApi().get<ApiResponse<Banks[]>>("banks");
      if (result.status == 200) {
        pendingBanks.value = false;
        banksData.value = result.data.data;
      }
    } catch (error) {
    } finally {
    }
  };

  //     const CACHE_DURATION_MS = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds

  // // Save to localStorage with timestamp
  //  const setCache = (key: string, value: any) => {
  //   const data = {
  //     value,
  //     timestamp: Date.now()
  //   };
  //   localStorage.setItem(key, JSON.stringify(data));
  // };

  // // Get from localStorage if not expired
  //  const getCache = (key: string) => {
  //   const cached = localStorage.getItem(key);
  //   if (!cached) return null;

  //   try {
  //     const parsed = JSON.parse(cached);
  //     const isExpired = Date.now() - parsed.timestamp > CACHE_DURATION_MS;

  //     if (isExpired) {
  //       localStorage.removeItem(key);
  //       return null;
  //     }

  //     return parsed.value;
  //   } catch (e) {
  //     // If something goes wrong (e.g. malformed JSON), remove the item
  //     localStorage.removeItem(key);
  //     return null;
  //   }
  // };
  return {
    fetchGeneral,
    generalData,
    pendingGeneral,
    brandsWithModles,
    generalSpinner,
    pendingServices,
    pendingBanks,
    pendingFaqs,
    generalAbout,
    fetchFaqs,
    fetchServices,
    fetchBanks,
    faqsData,
    servicesData,
    banksData,
  };
});

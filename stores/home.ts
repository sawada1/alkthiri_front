// stores/exampleStore.ts
import { defineStore } from 'pinia';
import { useApi } from '@/composables/api';
interface Brand {
    id: number;
    name: string;
    image: string;
    cars_count: number
  }
  
  interface ApiResponse<T> {
    data: T;
  }
  interface bankPartner{
    logo: string;
    name: string;
    id: number;
  }

export const useHomeStore = defineStore('home', {
  state: () => ({
    loading: false,
    test:'sasas',
    brands:[] as Brand[],
    banksPartner: [] as bankPartner[],
    error: null,
  }),
  actions: {
    async fetchBrands() {
      this.loading = true;
      this.error = null;
      try {
        let result = await useApi().get<ApiResponse<Brand[]>>('brands');
        this.brands = result.data.data;
      } catch (error: any) {
        this.error = error.message || 'An error occurred while fetching items.';
      } finally {
        this.loading = false;
      }
    },
    async fetchBanksPartner() {
      this.loading = true;
      this.error = null;
      try {
        let result = await useApi().get<ApiResponse<bankPartner[]>>('banks');
        this.banksPartner = result.data.data;
      } catch (error: any) {
        this.error = error.message || 'An error occurred while fetching items.';
      } finally {
        this.loading = false;
      }
    },
  },
});
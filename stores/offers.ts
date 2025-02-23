// stores/exampleStore.ts
import { defineStore } from 'pinia';
import { useApi } from '@/composables/api';
import { ApiResponse , Offers , OfferDetails } from "@/types/general";
import { Brands , Latest , News } from "@/types/home";

  export const useOffersStore = defineStore('offers', {
      state: () => ({
        offers:[] as Offers[],
        offer:{} as OfferDetails,
        loading: false,
        loadingOffer: false
      }),
      getters: {
     
      },
      actions: {
        async fetchOffers() {
          this.loading = true;
          try {
            let result = await  useApi().get<ApiResponse<Offers[]>>('offers');
            if(result.status == 200){
              this.loading = false;
              this.offers = result.data.data;
            }
          } catch (error) {
          } finally {
          }
        },
        async fetchOffer(id:any) {
          this.loadingOffer = true;
          try {
            let result = await  useApi().get<OfferDetails>(`offers/${id}`);
            if(result.status == 200){
              this.loadingOffer = false;
              this.offer = result.data;
            }
          } catch (error) {
          } finally {
          }
        }
      },
    });

export interface ApiResponse<T> {
    data: T;
  }

  export interface Models{
   id:number;
   name:string;
  }
  export interface BrandsWithModels{
    id: number;
    name:string;
    image:string;
    parent_models:Models[]
  }

  export interface Offers {
    id: number;
    image: string;
    description: string;
    title: string;
  }
  interface Offer{
    id: number;
    image: string;
    description: string;
    title: string;
  }
  interface OffersCars{
    id:number;
    name:string;
  }
  export interface OfferDetails {
   offer:Offer;
   offer_cars: OffersCars[];
  }
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

  export interface Faqs{
    answer: string;
    question: string;
    id: number;
  }
  export interface Services{
    description: string;
    image: string;
    name: string;
    id: number;
  }
  export interface Banks{
    account_no: string;
    iban: string;
    name: string;
    image: string;
    owner_name: string;
    id: string | number;
  }
  export interface GeneralIdName{
    name: string;
    id: string | number;
  }

  export interface PurchaseDataType{
    banks: Banks[];
    cities: GeneralIdName[];
    services: Services[];
    funding_organizations: GeneralIdName[];
  }

  export interface Branches{
    address: string;
    email: string;
    frame: string;
    name: string;
    phone: string;
    time_of_work: string;
    whatsapp: string;
  }
  export interface BranchTypes {
    name: string;
    branches: Branches[]
  }

  export interface BranchesData{
    name: string;
    types: BranchTypes[]
  }
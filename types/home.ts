export interface Brands {
    id: number;
    name: string;
    image: string;
  }
  export interface News {
    id: number;
    cover_image: string;
    created_at: string;
    description: string;
    main_image: string;
    tags: string;
    title: string;
  }

  export interface Latest {
    id: number;
    model_id: number;
    selling_price: number;
    selling_price_after_vat: number;
    is_in_favorite: boolean;
    main_image: string;
    meta_tag_description: string;
    meta_tag_keywords: string;
    name: string;
  }
  
  
  export interface bankPartner{
    logo: string;
    name: string;
    id: number;
  }
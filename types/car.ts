 
 
export interface Colors{
    id: number;
    hex_code: string;
    name: string;
}
 export interface Cars{
    colors: Colors[]
    description:string;
    engine_type:string;
    field_other_status:string | null;
    fuel_consumption:string;
    id:number;
    maximum_force:string;
    meta_tag_description:string | null;
    meta_tag_keywords:string | null;
    model_id: number;
    motion_vector: string;
    name: string;
    price_field_status: string;
    seats_number: number;
    selling_price: number;
    selling_price_after_vat: number;
    year: number;
    traction_type: string;
    upholstered_seats: string;
 }
 export interface carDetails{
    cars: Cars[];
    images: string[];
    name:string;
  }
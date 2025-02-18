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
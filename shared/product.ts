export type Product = {
  id: number;
  name: string;
  discount: number;
  img: string;
  base_price: number;
  price: number;
  stock: number;
  created_at: string;
  updated_at: string;
  category1_id: number;
  category2_id: number;
};

export type CreateProductBody = {
  name: string;
  image: string;
  price: number;
  basePrice?: number;
  discount?: number;
  createdAt?: string;
  updatedAt?: string;
  category2Id: number;
  stock: number;
};

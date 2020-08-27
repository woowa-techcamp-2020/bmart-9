export type Cart = {
  id: number;
  userId: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  productId: number;
  name: string;
  image: string;
  basePrice: number;
  discount: number;
  price: number;
  stock: number;
};

export type CartDB = {
  id: number;
  userId: number;
  quantity: number;
  productId: number;
}

export type ClientCart ={
  id: number;
  userId: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  productId: number;
  check: number;
  name: string;
  image: string;
  basePrice: number;
  discount: number;
  price: number;
  stock: number;
}

export type CartQuantity = {
  id: number;
  quantity: number;
};

export type CreateCartBody = {
  productId: number;
  quantity: number;
};

export type Cart = {
  id: number;
  userId: number;
  quantity: number;
  isCheck: number;
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

export type CartQuantity = {
  id: number;
  quantity: number;
};

export type CartCheck = {
  id: number;
  isCheck: number;
};

export type CreateCartBody = {
  userId: number;
  productId: number;
  quantity: number;
  isCheck: number;
  createdAt: string;
  updatedAt: string;
};

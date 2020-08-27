import { Cart } from "./cart";
export type Order = {
  id: number;
  userId: number;
  userName: string;
  orderName: string;
  totalPrice: number;
  status: "requested" | "dispatched" | "delivered";
  createdAt: string;
  longitude: number;
  latitude: number;
};

export type OrderProduct = {
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
};

export type OrderDetail = {
  id: number;
  userId: number;
  userName: string;
  orderId: number;
  orderName: string;
  orderProducts: OrderProduct[];
  totalPrice: number;
  status: "requested" | "dispatched" | "delivered";
  createdAt: string;
  longitude: number;
  latitude: number;
};

export type CreateOrderBody = {
  createdAt: string;
  latitude: number;
  longitude: number;
  cartList: Cart[];
};

export type CreateOrderDB = {
  createdAt: string;
  longitude: number;
  latitude: number;
  userId: number;
  name: string;
  totalPrice: number;
};

export type UpdateOrderStatus = {
  id: number;
  status: "requested" | "dispatched" | "delivered";
};

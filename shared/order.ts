export type Order = {
  id: number;
  userId: number;
  userName: string;
  orderId: number;
  orderName: string;
  totalPrice: number;
  status: "requested" | "dispatched" | "delivered";
  createdAt: string;
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
  userId: number;
  latitude: number;
  longitude: number;
};

export type UpdateOrderStatusBody = {
  id: number;
  status: "requested" | "dispatched" | "delivered";
};

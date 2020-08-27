import { bmartAuth, bmart } from './bmart';
import {
  Order,
  CreateOrderBody,
  Cart,
  UpdateOrderStatus,
  OrderProduct,
} from '../../../shared';

const getAllByAdmin = async () => {
  const { data } = await bmart.get<Order[]>(`/order/admin`);
  return data;
};

const getAll = async (token: string) => {
  const { data } = await bmartAuth(token).get<Order[]>(`/order`);
  return data;
};

// order 하나 생성,
// order Products를 그 order로 넣어야함.
const create = async (token: string, orderParams: CreateOrderBody) => {
  const { data } = await bmartAuth(token).post<Order>(`/order`, orderParams);
  return data;
};

const updateStatus = async (token: string, orderParams: UpdateOrderStatus) => {
  const { data } = await bmartAuth(token).put<Order>(
    `/order/status`,
    orderParams
  );
  return data;
};

const getOne = async (orderId: number) => {
  const { data } = await bmart.get<Order>(`/order/one/${orderId}`);
  return data;
};

const getOrderProductByOrderId = async (orderId: number) => {
  const { data } = await bmart.get<OrderProduct[]>(
    `/order/orderProduct/${orderId}`
  );
  return data;
};

export default {
  getOne,
  getAll,
  getAllByAdmin,
  create,
  updateStatus,
  getOrderProductByOrderId,
};

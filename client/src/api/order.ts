import { bmartAuth } from './bmart';
import { Order, CreateOrderBody, Cart, UpdateOrderStatus } from '../../../shared';

const getAll = async (token: string) => {
    const { data } = await bmartAuth(token).get<Order[]>(`/order`);
    return data;
};

// order 하나 생성,
// order Products를 그 order로 넣어야함. 
const create = async (token: string, orderParams: CreateOrderBody) => {
    const { data } = await bmartAuth(token).post<Order>(`/order`, orderParams);
    return data;
}

const updateStatus = async (token: string, orderParams: UpdateOrderStatus) => {
    const { data } = await bmartAuth(token).put<Order>(`/order`, orderParams);
    return data;
}

const getOrderProductByOrderId = async (token: string, orderId: number) => {
    const { data } = await bmartAuth(token).get<Order>(`/order/orderProduct/${orderId}`);
    return data;
}



export default {
    getAll,
    create,
    updateStatus,
    getOrderProductByOrderId
}
import { bmartAuth } from './bmart';
import { Cart, CartQuantity, CreateCartBody, CartDB } from '../../../shared';

const getAll = async (token: string) => {
    const { data } = await bmartAuth(token).get<Cart[]>(`/cart`);
    return data;
};

const getByProductId = async (token: string, productId: number) => {
    const { data } = await bmartAuth(token).get<CartDB[]>(`/cart/one/${productId}`);
    return data;
}

const update = async (token: string, updatedCart: Cart) => {
    const { data } = await bmartAuth(token).put<Cart>(`/cart`, updatedCart);

    return data;
}

const createTestCart = async (token: string) => {
    const result = await bmartAuth(token).get<Cart>(`/cart/test`);
    return result;
}

const updateQuantity = async (token: string, params: CartQuantity) => {
    const { data } = await bmartAuth(token).put<Cart>(`/cart/quantity`, params);
    return data;
}

const deleteCart = async (token: string, id: number) => {
    const { data } = await bmartAuth(token).delete<Cart>(`/cart/${id}`);

    return data;
}

const create = async (token: string, cartParams: CreateCartBody) => {
    const { data } = await bmartAuth(token).post<Cart>(`/cart`, cartParams);
    return data;
}


export default {
    getAll,
    update,
    deleteCart,
    create,
    updateQuantity,
    createTestCart,
    getByProductId
}
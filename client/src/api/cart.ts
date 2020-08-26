import { bmart } from './bmart';
import { Cart, CartQuantity, CreateCartBody, CartDB } from '../../../shared';

const getAll = async () => {
    const { data } = await bmart.get<Cart[]>(`/cart`);
    return data;
};

const getByProductId = async (productId: number) => {
    const { data } = await bmart.get<CartDB[]>(`/cart/one/${productId}`);
    return data;
}

const update = async (updatedCart: Cart) => {
    const { data } = await bmart.put<Cart>(`/cart`, updatedCart);

    return data;
}

const createTestCart = async (id: number) => {
    const result = await bmart.get<Cart>(`/cart/test/${id}`);
    return result;
}

const updateQuantity = async (params: CartQuantity) => {
    const { data } = await bmart.put<Cart>(`/cart/quantity`, params);
    return data;
}

const deleteCart = async (id: number) => {
    const { data } = await bmart.delete<Cart>(`/cart/${id}`);

    return data;
}

const create = async (cartParams: CreateCartBody) => {
    const { data } = await bmart.post<Cart>(`/cart`, cartParams);
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
import { bmart } from './bmart';
import { Cart, CartQuantity, CartCheck } from '../../../shared';

const getAll = async () => {
    const { data } = await bmart.get<Cart[]>(`/cart`);
    return data;
};

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

const setCheckAll = async (params: CartCheck) => {
    const { data } = await bmart.put<Cart[]>(`/cart/checkAll`, params);
    return data;
}

const updateCheck = async (params: CartCheck) => {
    const { data } = await bmart.put<Cart>(`/cart/check`, params);
    return data;
}


const deleteCart = async (id: number) => {
    const { data } = await bmart.delete<Cart>(`/cart/${id}`);

    return data;
}
const deleteAllChecked = async (userId: number) => {
    const { data } = await bmart.delete<Cart>(`/cart/CheckAll/${userId}`);
    return data;
}

const create = async () => {
    const { data } = await bmart.post<Cart[]>(`/cart`);

    return data;
}

export default {
    getAll,
    update,
    deleteCart,
    deleteAllChecked,
    create,
    updateQuantity,
    updateCheck,
    createTestCart,
    setCheckAll,
}
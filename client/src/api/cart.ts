import { bmart } from './bmart';
import { Cart } from '../../../shared';

const getAll = async () => {
    const { data } = await bmart.get<Cart[]>(`/cart`);

    return data;
};

const update = async () => {
    const { data } = await bmart.put<Cart[]>(`/cart`);

    return data;
}

const deleteCart = async () => {
    const { data } = await bmart.delete<Cart[]>(`/cart`);

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
    create
}
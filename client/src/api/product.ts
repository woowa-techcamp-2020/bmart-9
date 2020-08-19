import { bmart } from './bmart';
import { Product } from '../../../shared';

export const fetchProductByCategory2Id = async (category2_id: number) => {
    const { data } = await bmart.get<Product[]>(`/product/category/${category2_id}`);

    return data;
};

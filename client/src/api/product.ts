import { bmart } from './bmart';
import { Product } from '../../../shared';

const getByCategory2Id = async (category2Id: number) => {
    const { data } = await bmart.get<Product[]>(`/product/category/${category2Id}`);

    return data;
};

export default {
    getByCategory2Id
}
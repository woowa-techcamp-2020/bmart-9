import { bmart } from './bmart';
import { Product } from '../../../shared';

const getByCategory2Id = async (category2Id: number) => {
  const { data } = await bmart.get<Product[]>(
    `/product/category/${category2Id}`
  );

  return data;
};

const getByCategory1Id = async (category1Id: number) => {
  const { data } = await bmart.get<Product[]>(
    `/product/category/${category1Id}`
  );

  return data;
};

const getAllProduct = async () => {
  const { data } = await bmart.get<Product[]>('/product');

  return data;
};

export default {
  getByCategory2Id,
  getAllProduct,
};

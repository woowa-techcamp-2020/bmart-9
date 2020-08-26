import { bmart } from './bmart';
import { Product } from '../../../shared';

const getByCategory2Id = async (category2Id: number) => {
  const { data } = await bmart.get<Product[]>(
    `/product/category/${category2Id}`
  );

  return data;
};

const getByCategory = async () => {
  const { data } = await bmart.get<Product[]>(`/product/category`);

  return data;
};

const getAllProduct = async () => {
  const { data } = await bmart.get<Product[]>('/product');

  return data;
};

const getOne = async (id: number) => {
  const { data } = await bmart.get<Product>(`/product/one/${id}`);

  return data;
};

const getByKeyword = async (keyword: string) => {
  const { data } = await bmart.get<Product[]>(`/product/keyword/${keyword}`);

  return data;
};

export default {
  getByCategory2Id,
  getAllProduct,
  getByCategory,
  getByKeyword,
  getOne,
};

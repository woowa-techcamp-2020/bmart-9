import { bmart } from './bmart';
import { Category } from '../../../shared';

const getAll = async () => {
  const { data } = await bmart.get<Category[]>('/category');

  return data;
};

const getOneByCategory2Id = async (category2Id: number) => {
  const { data } = await bmart.get<Category>(`/category/${category2Id}`);

  return data;
};

export default {
  getAll,
  getOneByCategory2Id,
};

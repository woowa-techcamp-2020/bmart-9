import { bmart } from './bmart';
import { Category } from '../../../shared';

const getAll = async () => {
  const { data } = await bmart.get<Category[]>('/category');

  return data;
};

export default {
  getAll,
};

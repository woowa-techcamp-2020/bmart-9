import { bmart } from './bmart';
import { Category } from '../../../shared';

export const fetchCategory = async () => {
  const { data } = await bmart.get<Category[]>('/category');

  return data;
};

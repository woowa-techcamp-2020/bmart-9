import { bmartAuth } from './bmart';
import { Favorite, FavoriteProductId } from '../../../shared';

const getAll = async (token: string) => {
  const { data } = await bmartAuth(token).get<FavoriteProductId[]>('/favorite');

  return data;
};

const removeOne = async (token: string, productId: number) => {
  const { data } = await bmartAuth(token).delete(`/favorite/${productId}`);

  return data;
};

const addNewFavorite = async (token: string, productId: number) => {
  const { data } = await bmartAuth(token).post<Favorite>(`/favorite`, {
    productId,
  });

  return data;
};

export default {
  getAll,
  removeOne,
  addNewFavorite,
};

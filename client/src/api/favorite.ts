import { bmartAuth } from './bmart';
import { Favorite, FavoriteProductId, Product } from '../../../shared';

const getFavoriteProductId = async (token: string) => {
  const { data } = await bmartAuth(token).get<FavoriteProductId[]>('/favorite');

  return data;
};

const getFavoriteProduct = async (token: string) => {
  const { data } = await bmartAuth(token).get<Product[]>('/favorite/products');

  return data;
};

const removeOne = async (token: string, productId: number) => {
  const { data } = await bmartAuth(token).delete<FavoriteProductId>(
    `/favorite/${productId}`
  );

  return data;
};

const addNewFavorite = async (token: string, productId: number) => {
  const { data } = await bmartAuth(token).post<FavoriteProductId>(`/favorite`, {
    productId,
  });

  return data;
};

export default {
  getFavoriteProductId,
  getFavoriteProduct,
  removeOne,
  addNewFavorite,
};

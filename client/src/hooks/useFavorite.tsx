import { useCreator } from '../utils/createContext';
import { FavoriteContexts } from '../context/FavoriteContext';
import API from '../api';

export const useFavorite = () => {
  const [favorite, dispatch] = useCreator(FavoriteContexts);

  const fetchFavorite = async (token: string) => {
    const favoriteProductsId = token
      ? await API.Favorite.getFavoriteProductId(token)
      : [];
    dispatch({ type: 'FETCH_FAVORITE', favoriteProductsId });
  };

  const emptyFavorite = () => {
    dispatch({ type: 'FETCH_FAVORITE', favoriteProductsId: [] });
  };

  const onClickFavoriteHandler = async (productId: number, token: string) => {
    if (favorite.has(productId)) {
      return await removeFavorite(productId, token);
    }
    await createFavorite(productId, token);
  };

  const createFavorite = async (productId: number, token: string) => {
    const createdProductId = await API.Favorite.addNewFavorite(
      token,
      productId
    );
    dispatch({ type: 'CREATE_FAVORITE', productId: createdProductId });
  };

  const removeFavorite = async (productId: number, token: string) => {
    const removedProductId = await API.Favorite.removeOne(token, productId);
    dispatch({ type: 'REMOVE_FAVORITE', productId: removedProductId });
  };

  const isFavorite = (productId: number) => {
    return favorite.has(productId);
  };

  return {
    favorite,
    fetchFavorite,
    isFavorite,
    onClickFavoriteHandler,
    emptyFavorite,
  };
};

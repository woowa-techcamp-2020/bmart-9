import { contextCreator } from '../utils/createContext';
import { FavoriteProductId } from '../../../shared';

export type FavoriteState = Set<FavoriteProductId>;

export type FavoriteAction =
  | { type: 'FETCH_FAVORITE'; favoriteProductsId: FavoriteProductId[] }
  | { type: 'CREATE_FAVORITE'; productId: number }
  | { type: 'REMOVE_FAVORITE'; productId: number };

const FavoriteReducer = (
  state: FavoriteState,
  action: FavoriteAction
): FavoriteState => {
  switch (action.type) {
    case 'FETCH_FAVORITE':
      return new Set(action.favoriteProductsId);
    case 'CREATE_FAVORITE':
      state.add(action.productId);
      return new Set(state);
    case 'REMOVE_FAVORITE':
      state.delete(action.productId);
      return new Set(state);
    default:
      throw new Error('존재하지 않는 액션입니다.');
  }
};

const initialFavorite: FavoriteState = new Set();

export const {
  ContextProvider: FavoriteProvider,
  Contexts: FavoriteContexts,
} = contextCreator<FavoriteState, FavoriteAction>(
  FavoriteReducer,
  initialFavorite
);

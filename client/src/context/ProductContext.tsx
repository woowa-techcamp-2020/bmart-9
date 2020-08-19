import { contextCreator } from '../utils/createContext';
import { Product } from '../../../shared';

export type ProductState = Product[];

export type ProductAction = {
  type: 'FETCH_PRODUCT_BY_CATEGORY2_ID';
  payload: Product[];
};

const ProductReducer = (
  product: ProductState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case 'FETCH_PRODUCT_BY_CATEGORY2_ID':
      return action.payload;
    default:
      throw new Error('Unhandled action');
  }
};

const initialProduct: ProductState = [];

export const {
  ContextProvider: ProductProvider,
  Contexts: ProductContexts,
} = contextCreator<ProductState, ProductAction>(ProductReducer, initialProduct);

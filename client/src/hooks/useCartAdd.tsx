import { useCreator } from '../utils/createContext';
import { CartAddContexts } from '../context/CartAddContext';
import { Product } from "../../../shared";

export const useCartAdd = () => {
  const [addState, dispatch] = useCreator(CartAddContexts);

  const openCartAdd = (product: Product) => {
    dispatch({ type: 'OPEN_CART_ADD', currProduct: product });
  }

  const closeCartAdd = () => {
    dispatch({ type: 'CLOSE_CART_ADD' });
  }

  return { addState, openCartAdd, closeCartAdd };
};



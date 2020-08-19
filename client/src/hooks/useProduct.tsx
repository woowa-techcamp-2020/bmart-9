import { useEffect } from 'react';
import { useCreator } from '../utils/createContext';
import { ProductContexts } from '../context/ProductContext';
import { fetchProductByCategory2Id } from '../api';


export const useProduct = () => {
  const [product, dispatch] = useCreator(ProductContexts);

  const getProductByCategory2Id = async (category2Id: number) => {
    const products = await fetchProductByCategory2Id(category2Id);
    dispatch({ type: 'FETCH_PRODUCT_BY_CATEGORY2_ID', products });
  };

  return { product, getProductByCategory2Id };
};

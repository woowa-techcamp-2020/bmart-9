import React, { useEffect } from 'react';
import { useCreator } from '../utils/createContext';
import API from '../api';
import { ProductContexts } from '../context/ProductContext';
import { Product } from '../../../shared';

export const useProduct = (initialData?: Product[]) => {
  const [products, dispatch] = useCreator(ProductContexts);

  useEffect(() => {
    if (initialData) {
      dispatch({ type: 'SET_PRODUCT_LIST', productList: initialData });
    }
  }, [initialData]);

  const setProductByCategory2_id = async (category2Id: number) => {
    const productList = await API.Product.getByCategory2Id(category2Id);
    dispatch({ type: 'SET_PRODUCT_LIST', productList });
  };

  // const fetchAllProducts = async () => {
  //   const products  = await API.Product.getAllProduct();
  //   dispatch({ type: 'SET_PRODUCT_LIST', productList });

  // }

  // or make custom action creator
  // const doSomething = () => dispatch({type : 'DO_SOMETHING'})

  return { products, setProductByCategory2_id };
};

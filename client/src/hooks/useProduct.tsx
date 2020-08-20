import React, { useEffect } from 'react';
import { useCreator } from '../utils/createContext';
import API from '../api';
import { ProductContexts } from '../context/ProductContext'

export const useProduct = () => {
  const [products, dispatch] = useCreator(ProductContexts);

  const setProductByCategory2_id = async (category2Id: number) => {
    const productList = await API.Product.getByCategory2Id(category2Id);
    dispatch({ type: 'SET_PRODUCT_LIST', productList });
  };

  // or make custom action creator
  // const doSomething = () => dispatch({type : 'DO_SOMETHING'})

  return { products, setProductByCategory2_id };
};

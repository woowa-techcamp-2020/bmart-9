import React, { useEffect } from 'react';
import { useCreator } from '../utils/createContext';
import API from '../api';
import { CartContexts } from '../context/CartContext'

export const useCart = () => {
  const [cartList, dispatch] = useCreator(CartContexts);

  const setCartList = async () => {
    const payloadCartList = await API.Cart().getAll();
    dispatch({ type: 'SET_CART_LIST', cartList: payloadCartList });
  };

  return { cartList, setCartList };
};



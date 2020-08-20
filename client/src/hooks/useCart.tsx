import React, { useEffect } from 'react';
import { useCreator } from '../utils/createContext';
import API from '../api';
import { CartContexts } from '../context/CartContext'
import { Cart, CartQuantity } from '../../../shared';

export const useCart = () => {
  const [cartList, dispatch] = useCreator(CartContexts);

  const setCartList = async () => {
    const payloadCartList = await API.Cart.getAll();
    dispatch({ type: 'SET_CART_LIST', cartList: payloadCartList });
  };

  const updateCartQuantity = async (id: number, quantity: number) => {
    const cartPrams: CartQuantity = { id, quantity };
    const payloadCart = await API.Cart.updateQuantity(cartPrams);
    dispatch({ type: 'UPDATE_CART_ITEM', udpatedCart: payloadCart });
  };

  const createTestCart = async (id: number) => {
    console.log(id, "이거다!");
    const result = await API.Cart.createTestCart(id);

    const payloadCartList = await API.Cart.getAll();
    dispatch({ type: 'SET_CART_LIST', cartList: payloadCartList });
  };

  const deleteCart = async (id: number) => {
    const payloadCart = await API.Cart.deleteCart(id);

    dispatch({ type: 'DELETE_CART_ITEM', id });
  }

  return { cartList, setCartList, updateCartQuantity, deleteCart, createTestCart };
};



import React, { useEffect } from 'react';
import { useCreator } from '../utils/createContext';
import API from '../api';
import { CartContexts } from '../context/CartContext'
import { Cart, CartQuantity, CartCheck } from '../../../shared';

export const useCart = () => {
  const [cartList, dispatch] = useCreator(CartContexts);

  const cartCount = (from: string) => {
    let tempCount = 0;
    if (cartList.length > 0) {
      cartList.forEach((item: Cart) => {
        if (item.isCheck === 1) {
          tempCount += item.quantity;
        }
      });
    }
    if (from === "cartButton" && tempCount > 99) {
      return "99+";
    }

    return tempCount;
  };

  const cartCost = () => {
    let tempCost = 0;
    if (cartList.length > 0) {
      cartList.forEach((item: Cart) => {
        if (item.isCheck === 1) {
          tempCost += item.price * item.quantity;
        }
      });
    }
    return tempCost;
  }

  const setCartList = async () => {
    const payloadCartList = await API.Cart.getAll();
    dispatch({ type: 'SET_CART_LIST', cartList: payloadCartList });
  };

  const setCheckAll = async (userId: number, isCheck: number) => {
    const cartParams: CartCheck = { id: userId, isCheck };
    const payloadCartList = await API.Cart.setCheckAll(cartParams);
    dispatch({ type: 'SET_CART_LIST', cartList: payloadCartList });
  };

  const updateCartQuantity = async (id: number, quantity: number) => {
    const cartParams: CartQuantity = { id, quantity };
    const payloadCart = await API.Cart.updateQuantity(cartParams);
    dispatch({ type: 'UPDATE_CART_ITEM', udpatedCart: payloadCart });
  };

  const updateCartCheck = async (id: number, isCheck: number) => {
    const cartParams: CartCheck = { id, isCheck };
    const payloadCart = await API.Cart.updateCheck(cartParams);
    dispatch({ type: 'UPDATE_CART_ITEM', udpatedCart: payloadCart });
  };

  const createTestCart = async (id: number) => {
    const result = await API.Cart.createTestCart(id);
    setCartList();
  };

  const deleteCart = async (id: number) => {
    const payloadCart = await API.Cart.deleteCart(id);
    dispatch({ type: 'DELETE_CART_ITEM', id });
  }

  const deleteAllChecked = async (userId: number) => {
    const result = await API.Cart.deleteAllChecked(userId);
    setCartList();
  }

  return { cartList, updateCartCheck, cartCount, setCheckAll, cartCost, setCartList, updateCartQuantity, deleteCart, deleteAllChecked, createTestCart };
};



import React, { useEffect } from 'react';
import { useCreator } from '../utils/createContext';
import API from '../api';
import { CartContexts } from '../context/CartContext'
import { CartQuantity, ClientCart, Cart } from '../../../shared';
import { useSnackbar } from './useSnackbar'
const TRUE = 1;
const FALSE = 0;

export const useCart = () => {
  const [cartList, dispatch] = useCreator(CartContexts);
  const { openSnackbar } = useSnackbar();

  const allCheckValue = (): number => {
    const falseCart = cartList.find((cart) => cart.check === FALSE);
    if (falseCart === undefined)
      return TRUE;
    else
      return FALSE;
  }

  const cartCount = (from: string) => {
    let tempCount = 0;
    if (cartList.length > 0) {
      cartList.forEach((item: ClientCart) => {
        if (item.check === TRUE) {
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
      cartList.forEach((item: ClientCart) => {
        if (item.check === TRUE) {
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

  const updateCartQuantity = async (id: number, quantity: number) => {
    const cartParams: CartQuantity = { id, quantity };
    const payloadCart = await API.Cart.updateQuantity(cartParams);
    dispatch({ type: 'UPDATE_CART_ITEM', udpatedCart: { ...payloadCart, check: TRUE } });
  };

  const createTestCart = async (id: number) => {
    const result = await API.Cart.createTestCart(id);
    setCartList();
  };

  const deleteCart = async (id: number) => {
    const payloadCart = await API.Cart.deleteCart(id);
    dispatch({ type: 'DELETE_CART_ITEM', id });
  }

  const deleteAllCheck = async () => {
    const newCartList: ClientCart[] = [];
    const promiseList: Promise<Cart>[] = [];

    cartList.forEach(async (cart) => {
      if (cart.check === TRUE) {
        promiseList.push(API.Cart.deleteCart(cart.id));
      } else {
        cart.check = TRUE;
        newCartList.push(cart);
      }
    });
    const result = await Promise.all(promiseList);

    openSnackbar("success", `선택된 상품 ${promiseList.length}개를 삭제했습니다.`);
    dispatch({ type: 'SET_CLIENT_CART_LIST', cartList: newCartList });
  }

  const updateCartCheck = async (id: number, check: number) => {
    let cart = cartList.find((cart) => cart.id === id);
    if (cart === undefined) return;
    cart.check = check;
    dispatch({ type: 'UPDATE_CART_ITEM', udpatedCart: cart });
  }

  const updateAllCheck = async (check: number) => {
    const newCartList = cartList.map((cart) => {
      cart.check = check;
      return cart;
    });
    dispatch({ type: 'SET_CLIENT_CART_LIST', cartList: newCartList });
  }

  return { cartList, allCheckValue, deleteAllCheck, updateAllCheck, updateCartCheck, cartCount, cartCost, setCartList, updateCartQuantity, deleteCart, createTestCart };
};



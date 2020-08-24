import React, { useEffect } from 'react';
import { useCreator } from '../utils/createContext';
import API from '../api';
import { CartContexts } from '../context/CartContext'
import { CartQuantity, ClientCart } from '../../../shared';
import { useSnackbar } from './useSnackbar'
const TRUE = 1;
const FALSE = 0;

export const useCart = () => {
  const [cartList, dispatch] = useCreator(CartContexts);
  const { openSnackbar } = useSnackbar();

  const allCheckValue = (): number => {
    let value = 1;
    cartList.forEach((cart: ClientCart) => {
      if (cart.check === 0) {
        value = 0;
      }
    })
    return value;
  }

  const cartCount = (from: string) => {
    let tempCount = 0;
    if (cartList.length > 0) {
      cartList.forEach((item: ClientCart) => {
        if (item.check === 1) {
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
        if (item.check === 1) {
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
    dispatch({ type: 'UPDATE_CART_ITEM', udpatedCart: { ...payloadCart, check: 1 } });
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
    let count = 0;
    const newCartList: ClientCart[] = [];
    cartList.forEach(async (cart) => {
      if (cart.check === TRUE) {
        count++;
        await API.Cart.deleteCart(cart.id);
      } else {
        cart.check = TRUE;
        newCartList.push(cart);
      }
    })
    openSnackbar("success", `선택된 상품 ${count}개를 삭제했습니다.`);
    dispatch({ type: 'SET_CLIENT_CART_LIST', cartList: newCartList });
  }

  const updateCartCheck = async (id: number, check: number) => {
    const cart = cartList.filter((cart) => cart.id === id);
    cart[0].check = check;
    dispatch({ type: 'UPDATE_CART_ITEM', udpatedCart: cart[0] });
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



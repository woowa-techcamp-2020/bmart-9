import React, { useEffect } from 'react';
import { useCreator } from '../utils/createContext';
import API from '../api';
import { CartContexts } from '../context/CartContext'
import { CartQuantity, ClientCart, Cart, CreateCartBody } from '../../../shared';
import { useSnackbar } from './useSnackbar'
import { useUser } from './useUser'
const TRUE = 1;
const FALSE = 0;

export const useCart = () => {
  const [cartList, dispatch] = useCreator(CartContexts);
  const { openSnackbar } = useSnackbar();
  const { user } = useUser();
  const allCheckValue = (): number => {
    const falseCart = cartList.find((cart) => cart.check === FALSE);
    if (falseCart === undefined)
      return TRUE;
    else
      return FALSE;
  }

  const cartCheckedCount = () => {
    let tempCount = 0;
    if (cartList.length > 0) {
      cartList.forEach((item: ClientCart) => {
        if (item.check === TRUE) {
          tempCount += item.quantity;
        }
      });
    }
    return tempCount;
  };

  const cartTotalCount = () => {
    let tempCount = 0;
    if (cartList.length > 0) {
      cartList.forEach((item: ClientCart) => {
        tempCount += item.quantity;
      });
    }
    if (tempCount > 99) {
      return "99+";
    } else {
      return tempCount;
    }
  };

  const cartCheckedCost = () => {
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

  const setCartList = async (cartList: Cart[]) => {
    dispatch({ type: 'SET_CART_LIST', cartList: cartList });
  };

  const fetchCartList = async (token: string) => {
    const payloadCartList = await API.Cart.getAll(token);
    dispatch({ type: 'SET_CART_LIST', cartList: payloadCartList });
  };


  // 추가
  const createCart = async (token: string, productId: number, quantity: number) => {
    const result = await API.Cart.getByProductId(token, productId);
    if (result.length === 0) {
      const payloadCart = await API.Cart.create(token, { productId, quantity });
      dispatch({ type: 'ADD_CART_TO_LIST', newCart: payloadCart });
    }
    if (result.length > 0) {
      const id = result[0].id;
      const cartParams: CartQuantity = { id, quantity };
      const payloadCart = await API.Cart.updateQuantity(token, cartParams);
      dispatch({ type: 'UPDATE_CART_QUANTITY', udpatedCart: { ...payloadCart, check: TRUE } });
    }
  };

  const createTestCart = async (token: string) => {
    const result = await API.Cart.createTestCart(token);
    fetchCartList(token);
  };

  // 삭제
  const deleteCart = async (token: string, cartId: number) => {
    const payloadCart = await API.Cart.deleteCart(token, cartId);
    dispatch({ type: 'DELETE_CART_ITEM', id: cartId });
  }

  const deleteAllCheck = async (token: string) => {
    const newCartList: ClientCart[] = [];
    const promiseList: Promise<Cart>[] = [];

    cartList.forEach(async (cart) => {
      if (cart.check === TRUE) {
        promiseList.push(API.Cart.deleteCart(token, cart.id));
      } else {
        cart.check = TRUE;
        newCartList.push(cart);
      }
    });
    const result = await Promise.all(promiseList);

    openSnackbar("success", `선택된 상품 ${promiseList.length}개를 삭제했습니다.`);
    dispatch({ type: 'SET_CLIENT_CART_LIST', cartList: newCartList });
  }

  // 수정
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

  const updateCartQuantity = async (token: string, id: number, quantity: number) => {
    const cartParams: CartQuantity = { id, quantity };
    const payloadCart = await API.Cart.updateQuantity(token, cartParams);
    dispatch({ type: 'UPDATE_CART_ITEM', udpatedCart: { ...payloadCart, check: TRUE } });
  };


  return { cartList, createCart, fetchCartList, cartTotalCount, allCheckValue, deleteAllCheck, updateAllCheck, updateCartCheck, cartCheckedCount, cartCheckedCost, setCartList, updateCartQuantity, deleteCart, createTestCart };
};



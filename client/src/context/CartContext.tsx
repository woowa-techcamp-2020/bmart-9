import React from 'react';
import { contextCreator } from '../utils/createContext';
import { Cart } from '../../../shared'
import cart from '../api/cart';

export type clientType = Cart & { checked: boolean };

export type CartState = Array<clientType>;

export type CartAction =
	| { type: 'SET_CART_LIST'; cartList: clientType[] }
	| { type: 'UPDATE_CART_ITEM'; udpatedCart: Cart; }
	| { type: 'DELETE_CART_ITEM'; id: number }

const CartReducer = (
	state: CartState,
	action: CartAction
): CartState => {
	switch (action.type) {
		case 'SET_CART_LIST':
			return action.cartList.map((cart) => ({ ...cart, checked: true })); // new state
		case 'UPDATE_CART_ITEM':
			return state.map((cart) => cart.id === action.udpatedCart.id ? { ...action.udpatedCart, checked: true } : cart);
		case 'DELETE_CART_ITEM':
			return state.filter((cart) => cart.id !== action.id);
		default:
			throw new Error('Unhandled action');
	}
};

const initialCart: CartState = [];

export const {
	ContextProvider: CartProvider,
	Contexts: CartContexts,
} = contextCreator<CartState, CartAction>(CartReducer, initialCart);



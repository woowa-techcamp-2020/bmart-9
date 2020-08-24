import React from 'react';
import { contextCreator } from '../utils/createContext';
import { Cart, ClientCart } from '../../../shared'

export type CartState = ClientCart[];

export type CartAction =
	| { type: 'SET_CART_LIST'; cartList: Cart[] }
	| { type: 'SET_CLIENT_CART_LIST'; cartList: ClientCart[] }
	| { type: 'UPDATE_CART_ITEM'; udpatedCart: ClientCart; }
	| { type: 'UPDATE_CART_CHECK'; id: number, check: number }
	| { type: 'DELETE_CART_ITEM'; id: number }

const CartReducer = (
	state: CartState,
	action: CartAction
): CartState => {
	switch (action.type) {
		case 'SET_CART_LIST':
			return action.cartList.map((cart) => ({ ...cart, check: 1 })); // new state
		case 'SET_CLIENT_CART_LIST':
			return [...action.cartList];
		case 'UPDATE_CART_ITEM':
			return state.map((clientCart) => clientCart.id === action.udpatedCart.id ? action.udpatedCart : clientCart);
		case 'DELETE_CART_ITEM':
			return state.filter((clientCart) => clientCart.id !== action.id);
		// case 'UPDATE_CART_CHECK':
		// 	return state.map((clientCart) => clientCart.id === action.id && clientCart.check = action.check);
		default:
			throw new Error('Unhandled action');
	}
};

const initialCart: CartState = [];

export const {
	ContextProvider: CartProvider,
	Contexts: CartContexts,
} = contextCreator<CartState, CartAction>(CartReducer, initialCart);



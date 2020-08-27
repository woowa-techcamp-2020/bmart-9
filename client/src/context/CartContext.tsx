import React from 'react';
import { contextCreator } from '../utils/createContext';
import { Cart, ClientCart } from '../../../shared'

const TRUE = 1;
const FALSE = 0;

export type CartState = ClientCart[];

export type CartAction =
	| { type: 'SET_CART_LIST'; cartList: Cart[] }
	| { type: 'SET_CLIENT_CART_LIST'; cartList: ClientCart[] }
	| { type: 'UPDATE_CART_ITEM'; udpatedCart: ClientCart; }
	| { type: 'UPDATE_CART_CHECK'; id: number, check: number }
	| { type: 'DELETE_CART_ITEM'; id: number }
	| { type: 'ADD_CART_TO_LIST'; newCart: Cart }
	| { type: 'UPDATE_CART_QUANTITY'; udpatedCart: ClientCart; }

const CartReducer = (
	state: CartState,
	action: CartAction
): CartState => {
	switch (action.type) {
		case 'SET_CART_LIST':
			return action.cartList.map((cart) => ({ ...cart, check: TRUE })); // new state
		case 'SET_CLIENT_CART_LIST':
			return [...action.cartList];
		case 'UPDATE_CART_ITEM':
			return state.map((clientCart) => clientCart.id === action.udpatedCart.id ? action.udpatedCart : clientCart);
		case 'DELETE_CART_ITEM':
			return state.filter((clientCart) => clientCart.id !== action.id);
		case 'ADD_CART_TO_LIST':
			return [...state, { ...action.newCart, check: TRUE }];
		case 'UPDATE_CART_QUANTITY':
			return state.map((clientCart) => {
				if (clientCart.id === action.udpatedCart.id) {
					action.udpatedCart.quantity += clientCart.quantity;
					return action.udpatedCart;
				} else {
					return clientCart;
				}
			});
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



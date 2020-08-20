import React from 'react';
import { contextCreator } from '../utils/createContext';
import { Cart } from '../../../shared'

export type CartState = Cart[] | null;

export type CartAction =
	| { type: 'SET_CART_LIST'; cartList: Cart[] }
	| { type: 'UPDATE_CART_ITEM'; udpatedCart: Cart; }
	| { type: 'DELETE_CART_ITEM'; id: number }

const CartReducer = (
	state: CartState,
	action: CartAction
): CartState => {
	switch (action.type) {
		case 'SET_CART_LIST':
			return [...action.cartList]; // new state
		case 'UPDATE_CART_ITEM':
			return state!.map((cart) => cart.id === action.udpatedCart.id ? action.udpatedCart : cart);
		case 'DELETE_CART_ITEM':
			return state!.filter((cart) => cart.id !== action.id);
		default:
			throw new Error('Unhandled action');
	}
};

const initialCart: CartState = null;

export const {
	ContextProvider: CartProvider,
	Contexts: CartContexts,
} = contextCreator<CartState, CartAction>(CartReducer, initialCart);



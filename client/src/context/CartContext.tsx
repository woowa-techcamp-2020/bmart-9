import React from 'react';
import { contextCreator } from '../utils/createContext';
import { Cart } from '../../../shared'

export type CartState = Cart[] | null;

export type CartAction =
	{ type: 'SET_CART_LIST'; cartList: Cart[] };

const CartReducer = (
	state: CartState,
	action: CartAction
): CartState => {
	switch (action.type) {
		case 'SET_CART_LIST':
			return [...action.cartList]; // new state
		default:
			throw new Error('Unhandled action');
	}
};

const initialCart: CartState = null;

export const {
	ContextProvider: CartProvider,
	Contexts: CartContexts,
} = contextCreator<CartState, CartAction>(CartReducer, initialCart);



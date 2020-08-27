import React from 'react';
import { contextCreator } from '../utils/createContext';
import { Product } from "../../../shared";

export type CartAddState = {
	product: Product,
	isOpen: boolean
};

const emptyProduct: Product = {
	id: -1,
	name: '',
	price: 0,
	discount: 0,
	base_price: 0,
	category1: '',
	category2: '',
	category1_id: 0,
	category2_id: 0,
	updated_at: '',
	created_at: '',
	img: '',
	stock: 0
}
export type CartAddAction =
	{ type: 'OPEN_CART_ADD', currProduct: Product } |
	{ type: 'CLOSE_CART_ADD' }

const CartAddReducer = (
	state: CartAddState,
	action: CartAddAction
): CartAddState => {
	switch (action.type) {
		case 'OPEN_CART_ADD':
			return { product: action.currProduct, isOpen: true };
		case 'CLOSE_CART_ADD':
			return { product: emptyProduct, isOpen: false };
		default:
			throw new Error('존재하지 않는 액션입니다.');
	}
};

const initialCartAdd: CartAddState = {
	product: emptyProduct,
	isOpen: false
};

export const {
	ContextProvider: CartAddProvider,
	Contexts: CartAddContexts,
} = contextCreator<CartAddState, CartAddAction>(CartAddReducer, initialCartAdd);



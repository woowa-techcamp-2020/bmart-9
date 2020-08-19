import React from 'react';
import { contextCreator } from '../utils/createContext';
import { Product } from '../../../shared/product';

export type ProductState = Product[];

export type ProductAction =
	{ type: 'ACTION_NAME' } |
	{ type: 'SET_PRODUCT_LIST'; productList: Product[] };

const ProductReducer = (
	state: ProductState,
	action: ProductAction
): ProductState => {
	switch (action.type) {
		case 'SET_PRODUCT_LIST':
			return state = action.productList; // new state
		default:
			throw new Error('Unhandled action');
	}
};

const initialProduct: ProductState = [];

export const {
	ContextProvider: ProductProvider,
	Contexts: ProductContexts,
} = contextCreator<ProductState, ProductAction>(ProductReducer, initialProduct);



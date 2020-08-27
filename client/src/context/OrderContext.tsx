import React from 'react';
import { contextCreator } from '../utils/createContext';
import { Order, OrderProduct } from '../../../shared';

export type OrderState = Order[];

export type OrderAction =
	{ type: 'SET_ORDER_LIST'; newOrderList: Order[] } |
	{ type: 'ADD_ORDER_TO_LIST'; newOrder: Order }
	;

const OrderReducer = (
	state: OrderState,
	action: OrderAction
): OrderState => {
	switch (action.type) {
		case 'SET_ORDER_LIST':
			return [...action.newOrderList];
		case 'ADD_ORDER_TO_LIST':
			return [...state, { ...action.newOrder }];
		default:
			throw new Error('존재하지 않는 액션입니다.');
	}
};

const initialOrder: OrderState = [];

export const {
	ContextProvider: OrderProvider,
	Contexts: OrderContexts,
} = contextCreator<OrderState, OrderAction>(OrderReducer, initialOrder);



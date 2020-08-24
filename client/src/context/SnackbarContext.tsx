import React from 'react';
import { contextCreator } from '../utils/createContext';
import { SnackbarType } from "../../../shared";
export type SnackbarState = SnackbarType;

export type SnackbarAction =
	{ type: 'OPEN_SNACKBAR'; snackbarClass: string; message: string } |
	{ type: 'CLEAR_SNACKBAR' }

const SnackbarReducer = (
	state: SnackbarState,
	action: SnackbarAction
): SnackbarState => {
	switch (action.type) {
		case 'OPEN_SNACKBAR':
			return {
				open: true,
				snackbarClass: action.snackbarClass,
				message: action.message,
			};
		case 'CLEAR_SNACKBAR':
			return {
				...state,
				open: false,
			}
		default:
			throw new Error('존재하지 않는 액션입니다.');
	}
};

const initialSnackbar: SnackbarState = {
	open: false,
	snackbarClass: 'error',
	message: '에러당'
};

export const {
	ContextProvider: SnackbarProvider,
	Contexts: SnackbarContexts,
} = contextCreator<SnackbarState, SnackbarAction>(SnackbarReducer, initialSnackbar);



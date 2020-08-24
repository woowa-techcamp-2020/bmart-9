import React from 'react';
import { contextCreator } from '../utils/createContext';
import { Search, Product } from '../../../shared';

export type SearchState = {
  isSearched: boolean;
  history: Search[];
  searchedProducts: Product[];
};

export type SearchAction =
  | { type: 'GET_SEARCH'; search: Search[] }
  | { type: 'ADD_SEARCH'; newSearch: Search | null; products: Product[] }
  | { type: 'REMOVE_SEARCH'; id: number }
  | { type: 'SET_DEFAULT' };

const SearchReducer = (
  state: SearchState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case 'GET_SEARCH':
      return {
        ...state,
        history: [...action.search],
      };
    case 'ADD_SEARCH':
      return {
        isSearched: true,
        history: action.newSearch
          ? [action.newSearch, ...state.history]
          : [...state.history],
        searchedProducts: [...action.products],
      };
    case 'REMOVE_SEARCH':
      return {
        ...state,
        history: state.history.filter((search) => search.id !== action.id),
      };
    case 'SET_DEFAULT':
      return {
        ...state,
        isSearched: false,
        searchedProducts: [],
      };
    default:
      throw new Error('존재하지 않는 액션입니다.');
  }
};

const initialSearch: SearchState = {
  isSearched: false,
  history: [],
  searchedProducts: [],
};

export const {
  ContextProvider: SearchProvider,
  Contexts: SearchContexts,
} = contextCreator<SearchState, SearchAction>(SearchReducer, initialSearch);

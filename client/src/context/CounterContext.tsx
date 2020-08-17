import React from 'react';
import { contextCreator } from '../utils/createContext';

export type CounterState = number;

export type CounterAction = { type: 'ADD' } | { type: 'MINUS' };

const CounterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
};

const initialCounter: CounterState = 0;

export const {
  ContextProvider: CounterProvider,
  Contexts: CounterContexts,
} = contextCreator<CounterState, CounterAction>(CounterReducer, initialCounter);

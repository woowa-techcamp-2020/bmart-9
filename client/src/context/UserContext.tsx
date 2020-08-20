import { contextCreator } from '../utils/createContext';

import { User } from '../../../shared';

export type UserState = User | null;

export type UserAction = { type: 'SET_USER'; user: User | null };

const UserReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
    default:
      throw new Error('존재하지 않는 액션입니다.');
  }
};

const initialUser: UserState = null;

export const {
  ContextProvider: UserProvider,
  Contexts: UserContexts,
} = contextCreator<UserState, UserAction>(UserReducer, initialUser);

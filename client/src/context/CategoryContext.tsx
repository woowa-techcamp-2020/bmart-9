import { contextCreator } from '../utils/createContext';
// import { Category } from '../../../shared';
export type Category = {
  id: number;
  name: string;
  subCategory?: Category[];
};

export type CategoryState = Category[];

export type CategoryAction = { type: 'FETCH_CATEGORY'; categories: Category[] };

const CategoryReducer = (
  state: CategoryState,
  action: CategoryAction
): CategoryState => {
  switch (action.type) {
    case 'FETCH_CATEGORY':
      return [...action.categories];
    default:
      throw new Error('Unhandled action');
  }
};

const initialCategory: CategoryState = [];

export const {
  ContextProvider: CategoryProvider,
  Contexts: CategoryContexts,
} = contextCreator<CategoryState, CategoryAction>(
  CategoryReducer,
  initialCategory
);

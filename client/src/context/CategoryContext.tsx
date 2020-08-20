import { contextCreator } from '../utils/createContext';
// import { Category } from '../../../shared';
export type Category = {
  id: number;
  name: string;
  subCategory?: Category[];
};

export type CategoryState = Category[] | null;

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

const initialCategory: CategoryState = null;

export const {
  ContextProvider: CategoryProvider,
  Contexts: CategoryContexts,
} = contextCreator<CategoryState, CategoryAction>(
  CategoryReducer,
  initialCategory
);

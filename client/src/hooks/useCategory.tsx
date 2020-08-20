import { useEffect } from 'react';
import { useCreator } from '../utils/createContext';
import { CategoryContexts } from '../context/CategoryContext';
import { Category } from '../../../shared';

export const useCategory = (categories?: Category[]) => {
  const [category, dispatch] = useCreator(CategoryContexts);

  useEffect(() => {
    if (categories) {
      dispatch({ type: 'FETCH_CATEGORY', categories });
    }
  }, [categories, dispatch]);

  // const setCategory = async (categories: Category[]) => {
  //   dispatch({ type: 'FETCH_CATEGORY', categories });
  // };

  return { category };

  // or make custom action creator
  // const doSomething = () => dispatch({type : 'DO_SOMETHING'})

  // return { category, doSomething };
};

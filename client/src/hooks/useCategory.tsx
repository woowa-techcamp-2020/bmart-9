import { useEffect } from 'react';
import { useCreator } from '../utils/createContext';
import { CategoryContexts } from '../context/CategoryContext';
import { Category } from '../../../shared';
import API from '../api';

export const useCategory = (categories?: Category[]) => {
  const [category, dispatch] = useCreator(CategoryContexts);

  useEffect(() => {
    if (categories && category.length !== categories.length) {
      dispatch({ type: 'FETCH_CATEGORY', categories });
    }
  }, [categories, dispatch]);

  const getCategory = async () => {
    const categories = await API.Category.getAll();
    dispatch({ type: 'FETCH_CATEGORY', categories });
  };

  return { category };

  // or make custom action creator
  // const doSomething = () => dispatch({type : 'DO_SOMETHING'})

  // return { category, doSomething };
};

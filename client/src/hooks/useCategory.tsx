import React, { useEffect } from 'react';
import { useCreator } from '../utils/createContext';
import { CategoryContexts } from '../context/CategoryContext';
import { Category } from '../../../shared';
import { fetchCategory } from '../api';

export const useCategory = (categories?: Category[]) => {
  const [category, dispatch] = useCreator(CategoryContexts);

  useEffect(() => {
    if (categories) {
      setCategory(categories);
    }
  }, [categories]);

  const setCategory = async (categories: Category[]) => {
    dispatch({ type: 'FETCH_CATEGORY', categories });
  };

  return { category };

  // or make custom action creator
  // const doSomething = () => dispatch({type : 'DO_SOMETHING'})

  // return { category, doSomething };
};

import React, { useEffect } from 'react';
import { useCreator } from '../utils/createContext';
import { CategoryContexts } from '../context/CategoryContext';
import { Category } from '../../../shared';
import { fetchCategory } from '../api';

export const useCategory = (init = false) => {
  const [category, dispatch] = useCreator(CategoryContexts);

  useEffect(() => {
    init && getCategory();
  }, [init]);

  const getCategory = async () => {
    const categories = await fetchCategory();
    dispatch({ type: 'FETCH_CATEGORY', categories });
  };

  return { category, getCategory };

  // or make custom action creator
  // const doSomething = () => dispatch({type : 'DO_SOMETHING'})

  // return { category, doSomething };
};

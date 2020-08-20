import React, { useEffect } from 'react';
import { useCreator } from '../utils/createContext';
import { CategoryContexts } from '../context/CategoryContext';
import { Category } from '../../../shared';
import API from '../api';

export const useCategory = (init = false) => {
  const [category, dispatch] = useCreator(CategoryContexts);

  useEffect(() => {
    init && getCategory();
  }, [init]);

  const getCategory = async () => {
    const categories = await API.Category().getAll();
    dispatch({ type: 'FETCH_CATEGORY', categories });
  };

  return { category, getCategory };

  // or make custom action creator
  // const doSomething = () => dispatch({type : 'DO_SOMETHING'})

  // return { category, doSomething };
};

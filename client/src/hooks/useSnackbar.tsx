import React, { useEffect } from 'react';
import { useCreator } from '../utils/createContext';
import { SnackbarContexts } from '../context/SnackbarContext';

export const useSnackbar = () => {
  const [state, dispatch] = useCreator(SnackbarContexts);

  const openSnackbar = (snackbarClass: "success" | "warning" | "error", message: string) => {
    if (state.open === false) {
      setTimeout(() => {
        dispatch({ type: 'CLEAR_SNACKBAR' })
      }, 3200);
      dispatch({ type: 'OPEN_SNACKBAR', snackbarClass, message });
    }
  }

  const clearSnackbar = () => {
    dispatch({ type: 'CLEAR_SNACKBAR' })
  }

  return { state, dispatch, openSnackbar, clearSnackbar };
};



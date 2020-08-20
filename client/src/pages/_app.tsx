import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { CombineProviderApp } from '../utils/createContext';
import { CounterProvider } from '../context/CounterContext';
import { CategoryProvider } from '../context/CategoryContext';
import { ProductProvider } from "../context/ProductContext";
import { CartProvider } from "../context/CartContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {CombineProviderApp(
        CounterProvider,
        CategoryProvider,
        ProductProvider,
        CartProvider,
      )(
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      )}
    </>
  );
};

export default App;

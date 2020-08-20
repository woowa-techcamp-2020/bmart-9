import React from 'react';
import App, { AppProps, AppContext } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { CombinedProviders } from '../context';
import { fetchCategory, getAllProduct } from '../api';
import { Category, Product } from '../../../shared';
import { useCategory } from '../hooks/useCategory';

type InitialProps = {
  category: Category[];
  products: Product[];
};

const InitializeStore: React.FC<InitialProps> = ({
  children,
  category,
  products,
}) => {
  useCategory(category);
  return <>{children}</>;
};

const MyApp = ({
  Component,
  pageProps,
  category,
  products,
}: AppProps & InitialProps) => {
  return (
    <>
      {CombinedProviders(
        <InitializeStore category={category} products={products}>
          <GlobalStyle />
          <Component {...pageProps} />
        </InitializeStore>
      )}
    </>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  const category = await fetchCategory();
  const products = await getAllProduct();
  return { ...appProps, category, products };
};

export default MyApp;

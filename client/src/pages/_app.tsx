import React, { useState } from 'react';
import App, { AppProps, AppContext } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { CombinedProviders } from '../context';
import { fetchCategory } from '../api';
import { Category } from '../../../shared';
import { useCategory } from '../hooks/useCategory';

type InitialProps = {
  category: Category[];
};
let IS_INITIALIZED = false;

const InitializeStore: React.FC<InitialProps> = ({ children, category }) => {
  if (!IS_INITIALIZED) {
    useCategory(category);

    IS_INITIALIZED = true;
  }
  return <>{children}</>;
};

const MyApp = ({ Component, pageProps, category }: AppProps & InitialProps) => {
  return (
    <>
      {CombinedProviders(
        <InitializeStore category={category}>
          <GlobalStyle />
          <Component {...pageProps} />
        </InitializeStore>
      )}
    </>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  if (IS_INITIALIZED) {
    return { ...appProps };
  }

  const category = await fetchCategory();
  return { ...appProps, category };
};

export default MyApp;

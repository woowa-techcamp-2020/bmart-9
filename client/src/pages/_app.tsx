import React, { useEffect } from 'react';
import App, { AppProps, AppContext } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { CombinedProviders } from '../context';
import API, { TOKEN_KEY } from '../api';
import { Category, Product } from '../../../shared';
import { useCategory } from '../hooks/useCategory';
import { useProduct } from '../hooks/useProduct';
import { useUser } from '../hooks/useUser';

type InitialProps = {
  category: Category[];
  products: Product[];
};

const InitializeStore: React.FC<InitialProps> = ({
  children,
  category,
  products,
}) => {
  const { signIn } = useUser();
  useCategory(category);
  useProduct(products);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      signIn(token);
    }
  }, []);

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

  const category = await API.Category.getAll();
  const products = await API.Product.getByCategory();
  return { ...appProps, category, products };
};

export default MyApp;

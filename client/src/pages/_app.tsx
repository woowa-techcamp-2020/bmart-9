import React, { useEffect } from 'react';
import App, { AppProps, AppContext } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { CombinedProviders } from '../context';
import API, { TOKEN_KEY } from '../api';
import { Category, Product } from '../../../shared';

import { useCategory } from '../hooks/useCategory';
import { useProduct } from '../hooks/useProduct';
import { useSnackbar } from '../hooks/useSnackbar';
import { useUser } from '../hooks/useUser';
import { useCart } from '../hooks/useCart';

import { useCartAdd } from '../hooks/useCartAdd';
import { Snackbar } from '../components/Snackbar';
import { CartAdd } from '../components/CartAdd';
import { CartButton } from '../components/CartButton';

type InitialProps = {
  category: Category[];
  products: Product[];
};

const InitializeStore: React.FC<InitialProps> = ({
  children,
  category,
  products,
}) => {
  const { user, signIn } = useUser();
  useCategory(category);
  useProduct(products);
  useSnackbar();
  useCartAdd();

  const { fetchCartList } = useCart();
  const { openSnackbar } = useSnackbar();

  user && onReceiveHandler(user.id, openSnackbar);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      fetchCartList(token);
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
          <Snackbar />
          <CartAdd />
          <CartButton />
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

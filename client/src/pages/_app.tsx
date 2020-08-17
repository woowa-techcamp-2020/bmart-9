import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { CombineProviderApp } from '../utils/createContext';
import { CounterProvider } from '../context/CounterContext';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {CombineProviderApp(CounterProvider)(
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      )}
    </>
  );
};

export default App;

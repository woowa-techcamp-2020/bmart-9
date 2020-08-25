import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { useSearch } from '../hooks/useSearch';
import { SearchHistory } from '../components/SearchHistory';
import { HorizontalBar } from '../components/HorizontalBar';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import API from '../api';
import { getToken } from '../utils/cookieParser';

const SearchPage = ({
  searchedHistory,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    isSearched,
    searchedProducts,
    setSearchHistory,
    onLeaveHandler,
  } = useSearch();

  useEffect(() => {
    setSearchHistory(searchedHistory);
    return () => {
      onLeaveHandler();
    };
  }, []);

  return (
    <>
      <Header />
      {isSearched ? (
        <>
          {searchedProducts.map((product) => (
            <HorizontalBar key={product.id} start={product.name} />
          ))}
        </>
      ) : (
        <SearchHistory searchedHistory={searchedHistory} />
      )}
    </>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const token = getToken(req.headers.cookie);
  const searchedHistory = token ? await API.Search.getAll(token as string) : [];
  return {
    props: {
      searchedHistory,
    },
  };
};

export default SearchPage;

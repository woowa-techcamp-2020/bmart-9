import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { useSearch } from '../hooks/useSearch';
import { SearchHistory } from '../components/SearchHistory';
import { HorizontalBar } from '../components/HorizontalBar';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import API from '../api';
import { getToken } from '../utils/cookieParser';

import { TenCardsContainer } from '../components/TenCardsContainer';

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
        <TenCardsContainer start={"검색결과"} products={searchedProducts}></TenCardsContainer>
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

import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { useSearch } from '../hooks/useSearch';
import { SearchHistory } from '../components/SearchHistory';
import { HorizontalBar } from '../components/HorizontalBar';

const SearchPage = () => {
  const {
    isSearched,
    searchedProducts,
    fetchSearch,
    onLeaveHandler,
  } = useSearch();

  useEffect(() => {
    fetchSearch();
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
        <SearchHistory />
      )}
    </>
  );
};

export default SearchPage;

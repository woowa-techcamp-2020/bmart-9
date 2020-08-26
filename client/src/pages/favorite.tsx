import React, { useEffect } from 'react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import API from '../api';
import { getToken } from '../utils/cookieParser';
import { useUser } from '../hooks/useUser';
import { Header } from '../components/Header';
import { TenCardsContainer } from '../components/TenCardsContainer';

const FavoritePage = ({
  favoriteProducts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { notLogggedInHandler } = useUser();

  useEffect(() => {
    notLogggedInHandler();
  }, []);

  return (
    <>
      <Header title={'찜한 상품'} />
      <TenCardsContainer products={favoriteProducts} />
    </>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const token = getToken(req.headers.cookie);
  const favoriteProducts = token
    ? await API.Favorite.getFavoriteProduct(token as string)
    : [];
  return {
    props: {
      favoriteProducts,
    },
  };
};

export default FavoritePage;

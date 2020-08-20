import React from 'react';
import Link from 'next/link';
import { InferGetServerSidePropsType } from 'next';
import { getBannersImage } from '../api';
import { Carousel } from '../components/Carousel';
import { HorizontalBar } from '../components/HorizontalBar';
import { CategoryContainer } from '../components/CategoryContainer';

const IndexPage = ({
  bannerImages,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <HorizontalBar start='아이콘' center='로고' end='아이콘'/>
      <Carousel bannerImages={bannerImages}/>
      <CategoryContainer/>
    </>
  );
};

export const getServerSideProps = async () => {
  const bannerImages = await getBannersImage();
  return {
    props: {
      bannerImages,
    },
  };
};

export default IndexPage;

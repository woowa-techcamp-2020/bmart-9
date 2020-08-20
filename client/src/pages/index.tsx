import React from 'react';
import Link from 'next/link';
import API from '../api';
import { InferGetStaticPropsType } from 'next';
import { getBannersImage } from '../api';
import { getCategoryIcons } from '../api';
import { Carousel } from '../components/Carousel';
import { HorizontalBar } from '../components/HorizontalBar';
import { CategoryContainer } from '../components/CategoryContainer';

const IndexPage = ({
  bannerImages,
  categoryIcons,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <HorizontalBar start='아이콘' center='로고' end='아이콘'/>
      <Carousel bannerImages={bannerImages}/>
      <CategoryContainer categoryIcons={categoryIcons}/>
    </>
  );
};


export const getStaticProps = async () => {
  const bannerImages = await getBannersImage();
  const categoryIcons = await getCategoryIcons();
  return {
    props: {
      bannerImages,
      categoryIcons,
    },
  };
};

export default IndexPage;

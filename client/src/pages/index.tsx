import React from 'react';
import Link from 'next/link';
import { InferGetStaticPropsType } from 'next';
import { getBannersImage } from '../api';
import { getIconsImage } from '../api';
import { Carousel } from '../components/Carousel';
import { HorizontalBar } from '../components/HorizontalBar';
import { CategoryContainer } from '../components/CategoryContainer';

const IndexPage = ({
  bannerImages,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <HorizontalBar start='아이콘' center='로고' end='아이콘'/>
      <Carousel bannerImages={bannerImages}/>
      <CategoryContainer iconImages={iconImages}/>
    </>
  );
};

export const getStaticProps = async () => {
  const bannerImages = await getBannersImage();
  const iconImages = await getIconsImage();
  return {
    props: {
      bannerImages,
      iconImages,
    },
  };
};

export default IndexPage;

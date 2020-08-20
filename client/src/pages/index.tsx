import React from 'react';
import Link from 'next/link';
import { InferGetServerSidePropsType } from 'next';
import API from '../api';
import { Carousel } from '../components/Carousel';

const IndexPage = ({
  bannerImages,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <img src={bannerImages[0].img} />
      {/* <Carousel images={bannerImages}/> */}
      {/* <CategoryContainer image={categoryIamges}/> */}
    </>
  );
};

export const getServerSideProps = async () => {
  const bannerImages = await API.Image.getBannersImage();
  // const categoryIamges = await getCategoryImage();
  // const res = await fetch('https://.../data');
  // const data: Data = await res.json();
  return {
    props: {
      bannerImages,
      // categoryIamges
    },
  };
};

export default IndexPage;

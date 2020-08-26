import React from 'react';
import API from '../../api';
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { Header } from '../../components/Header';
import { BigCard } from '../../components/BigCard';

const ProductDetailPage = ({
  productInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!productInfo) {
    return null;
  }

  return (
    <>
      <Header title={productInfo.category2} />
      <BigCard product={productInfo} />
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const productInfo = await API.Product.getOne(Number(params!.id));

  return {
    props: { productInfo },
  };
};

export default ProductDetailPage;

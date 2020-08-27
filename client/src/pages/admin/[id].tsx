import React from 'react';
import API from '../../api';
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { Header } from '../../components/Header';
import { OrderMap } from '../../components/OrderMap';

const COMPANY_LATITUDE = 37.516675;
const COMPANY_LONGITUDE = 127.113063;

const OrderDetailPage = ({
  productInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!productInfo) {
    return null;
  }

  return (
    <>
      <Header title={productInfo.category2} />
      <OrderMap latitude={COMPANY_LATITUDE} longitude={COMPANY_LONGITUDE} />
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

export default OrderDetailPage;

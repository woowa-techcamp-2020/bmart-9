import React, { useState } from 'react';
import API from '../../api';
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { Header } from '../../components/Header';
import { OrderMap } from '../../components/OrderMap';
import { MainContainer } from '../../components/MainContainer';
import { HorizontalBar } from '../../components/HorizontalBar';
import { OrderedProducts } from '../../components/OrderedProducts';

const COMPANY_LATITUDE = 37.516675;
const COMPANY_LONGITUDE = 127.113063;

const OrderDetailPage = ({
  orderInfo,
  orderedProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!orderInfo || !orderedProducts) {
    return null;
  }

  const date = new Date(orderInfo.createdAt);
  return (
    <>
      <Header title={'주문정보'} />
      <MainContainer>
        <HorizontalBar
          start={orderInfo.userName + '님의 주문'}
          center={' '}
          end={date.getMonth() + '/' + date.getDate()}
        />
      </MainContainer>
      <OrderMap
        latitude={COMPANY_LATITUDE}
        longitude={COMPANY_LONGITUDE}
        destination={{
          latitude: orderInfo.latitude,
          longitude: orderInfo.longitude,
        }}
      />
      <HorizontalBar start={'상세 주문 내역'} />
      <OrderedProducts orderedProducts={orderedProducts} />
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
  const orderInfo = await API.Order.getOne(Number(params!.id));
  const orderedProducts = await API.Order.getOrderProductByOrderId(
    Number(params!.id)
  );

  return {
    props: { orderInfo, orderedProducts },
  };
};

export default OrderDetailPage;

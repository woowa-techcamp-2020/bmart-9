import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import API, { baseURL } from '../../api';
import { getToken } from '../../utils/cookieParser';
import { Order } from '../../../../shared';
import { OrderItem } from '../../components/OrderItem';
import { MainContainer } from '../../components/MainContainer';

const OrderPage = ({
  orderList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Header title={'주문내역'} />
      <MainContainer>
        {orderList.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </MainContainer>
    </>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const token = getToken(req.headers.cookie);
  const orderList = token ? await API.Order.getAll(token as string) : [];
  return {
    props: {
      orderList,
    },
  };
};

export default OrderPage;

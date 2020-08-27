import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import API, { baseURL } from '../../api';
import { getToken } from '../../utils/cookieParser';
import { Order, SocketMessage } from '../../../../shared';
import { OrderItem } from '../../components/OrderItem';
import { useUser } from '../../hooks/useUser';
import { getSocket } from '../../utils/socket';

const AdminPage = ({
  orderList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { user, notAdminHandler } = useUser();

  useEffect(() => {
    notAdminHandler();
  }, []);

  return (
    <>
      <Header title={'관리자'} />
      {orderList.map((order) => (
        <OrderItem key={order.id} order={order} isAdmin={true} />
      ))}
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const orderList = await API.Order.getAllByAdmin();
  return {
    props: {
      orderList,
    },
  };
};

export default AdminPage;

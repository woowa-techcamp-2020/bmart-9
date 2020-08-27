import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import API, { baseURL } from '../../api';
import { getToken } from '../../utils/cookieParser';
import { Order, SocketMessage } from '../../../../shared';
import { OrderItem } from '../../components/OrderItem';
import { useUser } from '../../hooks/useUser';
import { getSocket } from '../../utils/socket';

const orders: Order[] = [
  {
    id: 55,
    userId: 2,
    userName: 'andy',
    orderId: 70,
    orderName:
      '메디힐 콜라겐 임팩트 에센셜 슈퍼 파워 레인져 블라디보스톡 마스크 EX ENS EKWNQ DNFSP BSDO 1매 외 4개',
    totalPrice: 75000,
    status: 'requested',
    createdAt: new Date().toString(),
  },
  {
    id: 57,
    userId: 2,
    userName: 'andy',
    orderId: 77,
    orderName: '비둘기 고기 50g 외 7개',
    totalPrice: 1234000,
    status: 'dispatched',
    createdAt: new Date().toString(),
  },
  {
    id: 59,
    userId: 2,
    userName: 'andy',
    orderId: 79,
    orderName: '맛있는 개구리반찬 - 저글링용 외 1개',
    totalPrice: 5000,
    status: 'delivered',
    createdAt: new Date().toString(),
  },
];

const AdminPage = ({
  searchedHistory,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { user, notAdminHandler } = useUser();

  useEffect(() => {
    notAdminHandler();
  }, []);

  const onSendMessage = () => {
    if (user) {
      const socket = getSocket(user.id);
      const message: SocketMessage = {
        userId: user.id,
        message: '상품이 발송되었습니다',
        receiverId: 2,
      };
      socket.emit('ADMIN_SEND_MESSAGE', message);
    }
  };
  return (
    <>
      <Header title={'관리자'} />
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} isAdmin={true} />
      ))}
      <button onClick={onSendMessage}>상품발송하기</button>
    </>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const token = getToken(req.headers.cookie);
  // const searchedHistory = token ? await API.Search.getAll(token as string) : [];
  return {
    props: {
      searchedHistory: [],
    },
  };
};

export default AdminPage;

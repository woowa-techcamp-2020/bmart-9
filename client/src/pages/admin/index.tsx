import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import API, { baseURL } from '../../api';
import { getToken } from '../../utils/cookieParser';
import { getSocket } from '../../utils/socket';
import { useUser } from '../../hooks/useUser';
import { SocketMessage } from '../../../../shared';

const AdminPage = ({
  searchedHistory,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [response, setResponse] = useState('');
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
      <div>{response}</div>
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

import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import API, { baseURL } from '../api';
import { getToken } from '../utils/cookieParser';
import socketIOClient from 'socket.io-client';
import { getSocket } from '../utils/getSocket';
import { useUser } from '../hooks/useUser';

const AdminPage = ({
  searchedHistory,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [response, setResponse] = useState('');
  const { notAdminHandler } = useUser();
  useEffect(() => {
    notAdminHandler();
  }, []);

  useEffect(() => {
    // console.log(socket);
    const socket = getSocket();
    socket.on('FromAPI', (data: any) => {
      setResponse(data);
    });
  }, []);

  return (
    <>
      <Header title={'관리자'} />
      <div>{response}</div>
      <button
        onClick={() => {
          const socket = getSocket();
          socket.emit('noti', 'hello');
        }}
      >
        hello
      </button>
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

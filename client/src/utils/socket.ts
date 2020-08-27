import socketIOClient from 'socket.io-client';
import { baseURL } from '../api';
import { NextRouter } from 'next/router';
import { Location } from '../context/MapContext';

export const getSocket = (userId: number) =>
  socketIOClient(baseURL + '3000', {
    query: { userId },
  });

export const onReceiveHandler = (
  userId: number,
  openSnackbar: (
    snackbarClass: 'success' | 'warning' | 'error',
    message: string
  ) => void,
  router: NextRouter,
  moveTo: (destination: Location) => void
) => {
  const socket = getSocket(userId);

  socket.on('RECEIVE_MESSAGE', (message: string) => {
    const [orderId, msgOnly, latitude, longitude] = message.split('/');
    router.push('/order/[id]', `/order/${orderId}`);
    openSnackbar('success', msgOnly);
    setTimeout(
      () =>
        moveTo({ latitude: Number(latitude), longitude: Number(longitude) }),
      1000
    );
    setTimeout(() => {
      openSnackbar('success', '상품이 목적지에 도착헀습니다.');
      router.back();
    }, 11000);
  });

  socket.on('ADMIN_ORDER_REQUESTED', (message: string) => {
    openSnackbar('success', message);
  });
};

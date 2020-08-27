import socketIOClient from 'socket.io-client';
import { baseURL } from '../api';

export const getSocket = (userId: number) =>
  socketIOClient(baseURL + '3000', {
    query: { userId },
  });

export const onReceiveHandler = (
  userId: number,
  openSnackbar: (
    snackbarClass: 'success' | 'warning' | 'error',
    message: string
  ) => void
) => {
  const socket = getSocket(userId);

  socket.on('RECEIVE_MESSAGE', (message: string) => {
    console.log('hll');
    openSnackbar('success', message);
  });

  socket.on('ADMIN_ORDER_REQUESTED', (message: string) => {
    openSnackbar('success', message);
  });
};

import { Express } from 'express';
import socketIo from 'socket.io';
import http from 'http';
import { SocketUser, SocketMessage } from '../../shared';

const ADMIN_ID = 20;

export const connectSocket = (app: Express): http.Server => {
  const socketUser: SocketUser = {};
  const server = http.createServer(app);

  const io = socketIo(server); // < Interesting!
  let interval;

  const setUser = (socket: socketIo.Socket) => {
    const userId = socket.handshake.query.userId;
    socketUser[userId] = socket.id;
  };

  io.on('connection', (socket) => {
    // console.log('New client connected', socket.id);
    setUser(socket);

    socket.on(
      'ADMIN_SEND_MESSAGE',
      ({ userId, message, receiverId }: SocketMessage) => {
        if (userId !== ADMIN_ID) {
          console.error('Only Admin user can send message');
        }

        if (!receiverId && socketUser[receiverId]) {
          console.error('Receiver is not logged in now');
        }

        console.log(message);
        socket.to(socketUser[receiverId]).emit('RECEIVE_MESSAGE', message);
      }
    );

    socket.on('ORDER_REQUESTED', (message: string) => {
      socket.to(socketUser[ADMIN_ID]).emit('ADMIN_ORDER_REQUESTED', message);
    });

    socket.on('SEND_MESSAGE', (data) => {
      socket.broadcast.emit('sayHello', data);
    });

    socket.on('disconnect', () => {});
  });

  return server;
};

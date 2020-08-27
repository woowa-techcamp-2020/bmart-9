import { Express } from 'express';
import socketIo from 'socket.io';
import http from 'http';

export const connectSocket = (app: Express): http.Server => {
  const server = http.createServer(app);

  const io = socketIo(server); // < Interesting!

  let interval;

  io.on('connection', (socket) => {
    console.log('New client connected', socket.id);
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 1000);
    socket.on('noti', (data) => {
      console.log(data);
      socket.broadcast.emit('sayHello', data);
    });
    socket.on('disconnect', () => {
      console.log('Client disconnected');
      clearInterval(interval);
    });
  });

  const getApiAndEmit = (socket) => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit('FromAPI', response);
  };

  return server;
};

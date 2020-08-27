import socketIOClient from 'socket.io-client';
import { baseURL } from '../api';

export const getSocket = () => socketIOClient(baseURL + '3000');

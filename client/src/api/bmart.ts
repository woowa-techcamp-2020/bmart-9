import Axios from 'axios';

export const TOKEN_KEY = 'X-Auth';
export type MethodType = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';

const devURL = 'http://localhost:';

const prodURL = 'http://3.35.51.159:';
const PORT = 3000;

export const baseURL =
  process.env.NODE_MODE === 'production' ? prodURL : devURL;
export const apiUrl = baseURL + PORT + '/api';

export const bmart = Axios.create({
  baseURL: apiUrl,
  headers: { 'Content-Type': 'application/json' },
});

export const bmartAuth = (token: string) =>
  Axios.create({
    baseURL: apiUrl,
    headers: {
      'Content-Type': 'application/json',
      [TOKEN_KEY]: token,
    },
  });

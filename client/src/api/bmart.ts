import Axios from 'axios';

export const TOKEN_KEY = 'X-Auth';
export type MethodType = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';

const devURL = 'http://localhost:3000';
// TODO
const prodURL = 'http://localhost:3000';
export const baseURL =
  (process.env.NODE_MODE === 'production' ? prodURL : devURL) + '/api';

export const bmart = Axios.create({
  baseURL: baseURL,
  headers: { 'Content-Type': 'application/json' },
});

export const bmartAuth = (token: string) =>
  Axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
      [TOKEN_KEY]: token,
    },
  });

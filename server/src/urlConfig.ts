export const PORT = 3000;
export const CLIENT_PORT = 9000;
const devUrl = 'http://localhost:';
// TODO
const prodUrl = `http://3.35.51.159:`;
export const baseUrl =
  process.env.NODE_MODE === 'production' ? prodUrl : devUrl;

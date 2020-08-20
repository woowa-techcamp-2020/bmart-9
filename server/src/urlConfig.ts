export const PORT = 3000;

const devUrl = 'http://localhost:';
// TODO
const prodUrl = `http://${process.env.DB_HOST}:`;
export const baseUrl =
  (process.env.NODE_MODE === 'production' ? prodUrl : devUrl) + PORT;

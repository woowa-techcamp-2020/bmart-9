const devUrl = 'http://localhost:3000';
// TODO
const prodUrl = 'http://localhost:3000';
export const baseUrl =
  process.env.NODE_MODE === 'production' ? prodUrl : devUrl;

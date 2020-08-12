import app from './app';

const PORT = 3000;
const devUrl = 'http://localhost:3000';
// TODO
const prodUrl = 'http://localhost:3000';
const baseUrl = process.env.NODE_MODE === 'production' ? prodUrl : devUrl;

app.listen(PORT, () => console.log(`connected to ${baseUrl}:${PORT}`));

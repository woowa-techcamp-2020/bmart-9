import app from './app';
import { baseUrl } from './urlConfig';
const PORT = 3000;

app.listen(PORT, () => console.log(`connected to ${baseUrl}:${PORT}`));

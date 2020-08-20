import app from './app';
import { baseUrl, PORT } from './urlConfig';

app.listen(PORT, () => console.log(`connected to ${baseUrl}`));

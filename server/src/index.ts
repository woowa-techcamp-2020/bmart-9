import app from './app';
import { baseUrl, PORT } from './urlConfig';
import { User } from '../../shared';
import { connectSocket } from './socket';

declare global {
  namespace Http.Server {
    // tslint:disable-next-line:no-empty-interface
    interface AuthInfo {}
    // tslint:disable-next-line:no-empty-interface
    interface User {}

    interface Request {
      authInfo?: AuthInfo;
      user?: User;
    }
  }
}

// app.listen(PORT, () => console.log(`connected to ${baseUrl}${PORT}`));
connectSocket(app).listen(PORT, () =>
  console.log(`connected to ${baseUrl}${PORT}`)
);

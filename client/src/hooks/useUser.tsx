import { useCreator } from '../utils/createContext';
import { UserContexts } from '../context/UserContext';
import API, { TOKEN_KEY } from '../api';

export const useUser = () => {
  const [user, dispatch] = useCreator(UserContexts);

  const authHandler = () => {
    const win = window.open('http://localhost:3000/api/auth/github') as Window;
    const timer = setInterval(() => {
      try {
        if (win.location.href === 'http://localhost:9000/') {
          clearInterval(timer);
          win.close();

          const token = localStorage.getItem(TOKEN_KEY);
          if (!token) {
            return alert('Fail to login');
          }

          signIn(token);
        }
      } catch (error) {}
    }, 500);
  };

  const signIn = async (token: string) => {
    const user = await API.User.getCurrentUser(token);
    dispatch({ type: 'SET_USER', user: { ...user, token } });
  };

  const signOut = () => {
    localStorage.removeItem(TOKEN_KEY);
    dispatch({ type: 'SET_USER', user: null });
  };

  const isLoggedIn = user ? true : false;

  return { isLoggedIn, user, signIn, signOut, authHandler };
};

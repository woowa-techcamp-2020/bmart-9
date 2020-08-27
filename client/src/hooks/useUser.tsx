import Cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { useCreator } from '../utils/createContext';
import { UserContexts } from '../context/UserContext';
import API, { TOKEN_KEY, baseURL } from '../api';
import { useSnackbar } from './useSnackbar';
import { useFavorite } from './useFavorite';

const ADMIN_ID = 20;

export const useUser = (toggleSideBar?: () => void) => {
  const [user, dispatch] = useCreator(UserContexts);
  const router = useRouter();
  const { openSnackbar } = useSnackbar();
  const { emptyFavorite, fetchFavorite } = useFavorite();

  const isLoggedIn = user && user.token && user.id ? true : false;

  const isAmdin = isLoggedIn && user!.id === ADMIN_ID;

  const authHandler = () => {
    const win = window.open(`${baseURL}3000/api/auth/github`) as Window;
    const timer = setInterval(async () => {
      try {
        if (win.location.href === `${baseURL}9000/`) {
          clearInterval(timer);
          win.close();

          const token = localStorage.getItem(TOKEN_KEY);
          if (!token) {
            return alert('Fail to login');
          }

          Cookie.set(TOKEN_KEY, token);
          await signIn(token);
        }
      } catch (error) {}
    }, 500);
  };

  const signIn = async (token: string) => {
    Cookie.remove(TOKEN_KEY);
    const currentUser = await API.User.getCurrentUser(token);
    Cookie.set(TOKEN_KEY, token);
    dispatch({ type: 'SET_USER', user: { ...currentUser, token } });
    await fetchFavorite(token);
    router.push('/');
    toggleSideBar && toggleSideBar();
  };

  const signOut = () => {
    localStorage.removeItem(TOKEN_KEY);
    Cookie.remove(TOKEN_KEY);
    dispatch({ type: 'SET_USER', user: null });
    emptyFavorite();
    router.push('/');
    toggleSideBar && toggleSideBar();
  };

  const notLogggedInHandler = () => {
    const token = localStorage.getItem(TOKEN_KEY);

    if (token || isLoggedIn) {
      return;
    }

    openSnackbar('warning', '로그인이 필요합니다');
    router.push('/');
  };

  const notAdminHandler = () => {
    const token = localStorage.getItem(TOKEN_KEY);

    if (!token || !isLoggedIn) {
      openSnackbar('warning', '로그인이 필요합니다');
      router.push('/');
      return;
    }

    if (user && user.id !== ADMIN_ID) {
      openSnackbar('warning', '관리자만 접근가능합니다');
      router.push('/');
      return;
    }
  };

  return {
    isAmdin,
    isLoggedIn,
    user,
    signIn,
    signOut,
    authHandler,
    notLogggedInHandler,
    notAdminHandler,
  };
};

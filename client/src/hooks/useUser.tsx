import { useCreator } from '../utils/createContext';
import { UserContexts } from '../context/UserContext';
import { TOKEN_KEY, getCurrentUser } from '../api';

export const useUser = () => {
  const [user, dispatch] = useCreator(UserContexts);

  const signIn = async (token: string) => {
    const user = await getCurrentUser(token);
    dispatch({ type: 'SET_USER', user });
  };

  const signOut = () => {
    localStorage.removeItem(TOKEN_KEY);
    dispatch({ type: 'SET_USER', user: null });
  };

  const isLoggedIn = user ? true : false;

  return { isLoggedIn, user, signIn, signOut };

  // or make custom action creator
  // const doSomething = () => dispatch({type : 'DO_SOMETHING'})

  // return { user, doSomething };
};

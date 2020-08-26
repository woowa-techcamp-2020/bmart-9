import { TOKEN_KEY } from '../api';

export const getToken = (cookie: string | undefined) => {
  if (!cookie || !cookie.includes(TOKEN_KEY)) {
    return '';
  }

  const tokenCookie = cookie.split('; ').find((key) => key.includes(TOKEN_KEY));
  return tokenCookie!.split('=')[1];
};

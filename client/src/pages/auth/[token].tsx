import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../../hooks/useUser';
import { TOKEN_KEY } from '../../api';

const AuthPage = () => {
  const router = useRouter();
  const { token } = router.query;
  const { signIn } = useUser();

  useEffect(() => {
    singInWithToken();
  }, []);

  const singInWithToken = async () => {
    if (token && typeof token === 'string') {
      localStorage.setItem(TOKEN_KEY, token);
      router.push('/');
      // await signIn(token);
    }
  };

  return <p>Logged In</p>;
};

export default AuthPage;

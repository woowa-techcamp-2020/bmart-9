import React from 'react';
import Link from 'next/link';
import * as S from './HeaderStyle';
import { HorizontalBar } from '../HorizontalBar';
import { useRouter } from 'next/router';
import { Hamburger } from '../Hamburger';
import { useUser } from '../../hooks/useUser';
import { SearchBar } from '../SearchBar';

type Props = {};

const Header: React.FC<Props> = ({}: Props) => {
  const { pathname } = useRouter();
  const { isLoggedIn, signOut } = useUser();
  const inputVisiblePath = ['/', '/search'];

  return (
    <S.Container>
      <HorizontalBar
        start={
          isLoggedIn ? (
            <button onClick={signOut}>
              <S.Image src="https://cdn1.iconfinder.com/data/icons/essentials-pack/96/logout_close_sign_out_exit_access-512.png" />
            </button>
          ) : (
            <Link href="/api/auth/github">
              <S.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png" />
            </Link>
          )
        }
        center={
          <Link href="/">
            <S.Image
              height="30px"
              src="https://bmart-9.s3.ap-northeast-2.amazonaws.com/public/bmart-logo.png"
            />
          </Link>
        }
        end={<Hamburger />}
      />
      {inputVisiblePath.includes(pathname) && <SearchBar />}
    </S.Container>
  );
};

export default Header;

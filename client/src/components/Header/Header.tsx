import React, { useState } from 'react';
import Link from 'next/link';
import * as S from './HeaderStyle';
import { HorizontalBar } from '../HorizontalBar';
import { useRouter } from 'next/router';
import { SideMenu } from '../SideMenu';
import { useUser } from '../../hooks/useUser';
import { SearchBar } from '../SearchBar';
import { Images } from '../../images';

type Props = {};

const Header: React.FC<Props> = ({}: Props) => {
  const { pathname } = useRouter();
  const { isLoggedIn, signOut, authHandler } = useUser();
  const inputVisiblePath = ['/', '/search'];
  const [open, setOpen] = useState(false);

  const renderAuthenticationHandler = () => {
    return isLoggedIn ? (
      <button onClick={signOut}>
        <S.Image src={Images.LOG_OUT} />
      </button>
    ) : (
      <button onClick={authHandler}>
        <S.Image src={Images.GITHUB} />
      </button>
    );
  };

  return (
    <S.Container>
      <SideMenu open={open} setOpen={setOpen} />
      <HorizontalBar
        start={renderAuthenticationHandler()}
        center={
          <Link href="/">
            <S.Image height="30px" src={Images.MAIN_LOGO} />
          </Link>
        }
        end={
          <S.Hamburger open={open} onClick={() => setOpen(!open)}>
            |||
          </S.Hamburger>
        }
      />
      {inputVisiblePath.includes(pathname) && <SearchBar />}
    </S.Container>
  );
};

export default Header;

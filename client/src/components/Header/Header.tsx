import React, { useState } from 'react';
import * as S from './HeaderStyle';
import { HorizontalBar } from '../HorizontalBar';
import { useRouter } from 'next/router';
import { SideMenu } from '../SideMenu';
import { useUser } from '../../hooks/useUser';
import Link from 'next/link';


type Props = {};

const Header: React.FC<Props> = ({}: Props) => {
  const { push } = useRouter();
  const { isLoggedIn, signOut } = useUser();
  const [open, setOpen] = useState(false);

  return (
    <S.Container>
			<SideMenu open={open} setOpen={setOpen}/>
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
          <S.Image
            onClick={() => push('/')}
            height="30px"
            src="https://bmart-9.s3.ap-northeast-2.amazonaws.com/public/bmart-logo.png"
          />
        }
        end={<S.Hamburger open={open} onClick={() => setOpen(!open)}>|||</S.Hamburger>}
      />
      <S.InputWrapper onClick={() => push('/search')}>
        🔍
        <S.Input placeholder="B마트 상품을 검색해보세요!" />
      </S.InputWrapper>
    </S.Container>
  );
};

export default Header;

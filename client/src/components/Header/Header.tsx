import React from 'react';
import * as S from './HeaderStyle';
import { HorizontalBar } from '../HorizontalBar';
import { useRouter } from 'next/router';
import { Hamburger } from '../Hamburger';

type Props = {};

const Header: React.FC<Props> = ({}: Props) => {
  const { push } = useRouter();

  return (
    <S.Container>
      <HorizontalBar
        start="아이콘"
        center={
          <img
            onClick={() => push('/')}
            height="30px"
            src="https://bmart-9.s3.ap-northeast-2.amazonaws.com/public/bmart-logo.png"
          />
        }
        end={<Hamburger />}
      />
      <S.InputWrapper onClick={() => push('/search')}>
        🔍
        <S.Input placeholder="B마트 상품을 검색해보세요!" />
      </S.InputWrapper>
    </S.Container>
  );
};

export default Header;

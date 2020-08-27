import React, { useRef } from 'react';
import * as S from './SearchBarStyle';
import { useSearch } from '../../hooks/useSearch';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Props = {};

const SearchBar: React.FC<Props> = ({}: Props) => {
  const { pathname } = useRouter();
  const { searchByKeyword } = useSearch();
  const inputEle = useRef<HTMLInputElement>(null);

  if (pathname === '/') {
    return (
      <Link href="/search">
        <S.InputWrapper>
          🔍
          <S.Input disabled placeholder="B마트 상품을 검색해보세요!" />
        </S.InputWrapper>
      </Link>
    );
  }

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputEle?.current) {
      return;
    }

    await searchByKeyword(inputEle.current.value);
    inputEle.current.value = '';
  };

  return (
    <S.InputWrapper onSubmit={onSubmitHandler}>
      🔍
      <S.Input placeholder="B마트 상품을 검색해보세요!" ref={inputEle} />
    </S.InputWrapper>
  );
};

export default SearchBar;

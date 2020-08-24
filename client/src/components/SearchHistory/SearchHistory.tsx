import React from 'react';
import * as S from './SearchHistoryStyle';
import { useSearch } from '../../hooks/useSearch';
import { HorizontalBar } from '../HorizontalBar';

type Props = {};

const SearchHistory: React.FC<Props> = ({}: Props) => {
  const { history, removeSearch } = useSearch();

  return (
    <>
      <S.Container>
        <HorizontalBar start="최근 검색어" />
        {history.map((search) => (
          <HorizontalBar
            key={search.id}
            start={search.keyword}
            end={<button onClick={() => removeSearch(search.id)}>X</button>}
          />
        ))}

        <S.DeleteButton>전체 삭제</S.DeleteButton>
      </S.Container>
    </>
  );
};

export default SearchHistory;

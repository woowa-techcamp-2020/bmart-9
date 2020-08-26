import React from 'react';
import * as S from './SearchHistoryStyle';
import { useSearch } from '../../hooks/useSearch';
import { HorizontalBar } from '../HorizontalBar';
import { Search } from '../../../../shared';

type Props = {
  searchedHistory: Search[];
};

const SearchHistory: React.FC<Props> = ({ searchedHistory }: Props) => {
  const { history, removeSearch } = useSearch();
  const data = history.length > 0 ? history : searchedHistory;

  const removeAll = async () => {
    if (!data || data.length === 0) {
      return;
    }

    await Promise.all(
      data.map(async (history) => await removeSearch(history.id))
    );
  };

  return (
    <>
      <S.Container>
        <HorizontalBar
          start="최근 검색어"
          end={<S.DeleteButton onClick={removeAll}>전체 삭제</S.DeleteButton>}
        />
        {data.map((search) => (
          <HorizontalBar
            key={search.id}
            start={search.keyword}
            end={<button onClick={() => removeSearch(search.id)}>X</button>}
          />
        ))}
      </S.Container>
    </>
  );
};

export default SearchHistory;

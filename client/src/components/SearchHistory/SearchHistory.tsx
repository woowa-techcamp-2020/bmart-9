import React from 'react';
import * as S from './SearchHistoryStyle';
import { useSearch } from '../../hooks/useSearch';
import { HorizontalBar } from '../HorizontalBar';
import { Search } from '../../../../shared';
import { Card } from '../Card';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  searchedHistory: Search[];
};

const SearchHistory: React.FC<Props> = ({ searchedHistory }: Props) => {
  const { history, removeSearch, searchByKeyword } = useSearch();
  const data = history.length > 0 ? history : searchedHistory;

  const removeAll = async () => {
    if (!data || data.length === 0) {
      return;
    }

    await Promise.all(
      data.map(async (history) => await removeSearch(history.id))
    );
  };

  const onSubmitHandler = async (keyword: string) => {
    await searchByKeyword(keyword);
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
            start={<button onClick={() => onSubmitHandler(search.keyword)}>{search.keyword}</button>}
            end={<button onClick={() => removeSearch(search.id)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>}
          />
        ))}
      </S.Container>
    </>
  );
};

export default SearchHistory;

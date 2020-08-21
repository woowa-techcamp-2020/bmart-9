import React from 'react';
import * as S from './SearchStyle';
import { HorizontalBar } from './../HorizontalBar';

type Props = {};

const Search: React.FC<Props> = ({}: Props) => {
  return (
		<>
			<S.Container>
				<HorizontalBar start='최근 검색어'/>
				<HorizontalBar start='저글링' end='X' />
				<HorizontalBar start='골리앗' end='X' />
				<HorizontalBar start='옵저버' end='X' />
				<S.DeleteButton>전체 삭제</S.DeleteButton>
			</S.Container>
		</>
  );
};

export default Search;

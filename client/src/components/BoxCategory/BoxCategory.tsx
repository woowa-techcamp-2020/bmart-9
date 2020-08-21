import React from 'react';
import * as S from './BoxCategoryStyle';
import { Category } from '../../../../shared';
import { MainContainer } from '../MainContainer';

type Props = {
  categories?: Category[];
};

const BoxCategory: React.FC<Props> = ({ categories }: Props) => {
  return (
    <MainContainer>
      <S.Container>
        {categories &&
          categories.map((cate) => <S.Item key={cate.id}>{cate.name}</S.Item>)}
      </S.Container>
    </MainContainer>
  );
};

export default BoxCategory;

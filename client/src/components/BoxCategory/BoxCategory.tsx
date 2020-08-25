import React from 'react';
import * as S from './BoxCategoryStyle';
import { Category } from '../../../../shared';
import { MainContainer } from '../MainContainer';
import Link from 'next/link';

type Props = {
  categories?: Category[];
  onClickHandlder?: boolean;
};

const BoxCategory: React.FC<Props> = ({
  categories,
  onClickHandlder,
}: Props) => {
  return (
    <MainContainer>
      <S.Container>
        {categories &&
          categories.map((cate) => (
            <Link
              key={cate.id}
              href="/category/[id]"
              as={`/category/${cate.id}`}
            >
              <S.Item>{cate.name}</S.Item>
            </Link>
          ))}
      </S.Container>
    </MainContainer>
  );
};

export default BoxCategory;

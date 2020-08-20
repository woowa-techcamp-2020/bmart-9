import React from 'react';
import * as S from './CategoryContainerStyle';
import { Image } from './../../../../shared';
import { MainContainer } from '../MainContainer';
import { useRouter } from 'next/router';
import { useCategory } from '../../hooks/useCategory';

type CategoryProps = {
  categoryIcons: Image[];
};

const CategoryContainer: React.FC<CategoryProps> = ({
  categoryIcons,
}: CategoryProps) => {
  const { push } = useRouter();
  const { category } = useCategory();

  return (
    <MainContainer>
      <S.Container>
        {categoryIcons.map((item, idx) => (
          <S.Category
            key={item.id}
            src={item.img}
            onClick={() =>
              push(`/category/${category![idx].subCategory![0].id}`)
            }
          />
        ))}
      </S.Container>
    </MainContainer>
  );
};

export default CategoryContainer;

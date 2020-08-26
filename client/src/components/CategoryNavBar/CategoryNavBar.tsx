import React from 'react';
import * as S from './CategoryNavBarStyle';
import { Category } from '../../../../shared/';

type CategoryNavBarProps = {
  categories: Category[];
};

const CategoryNavBar: React.FC<CategoryNavBarProps> = ({
  categories,
}: CategoryNavBarProps) => {
  return (
    <>
      <S.Container>
        {categories.sort((a, b) => a.id - b.id).map((category) => (
          <S.CategoryContainer key={category.id} data-category-id={category.id}>
            {category.name}
          </S.CategoryContainer>
        ))}
      </S.Container>
    </>
  );
};

export default CategoryNavBar;

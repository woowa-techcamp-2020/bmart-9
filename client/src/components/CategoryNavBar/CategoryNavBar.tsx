import React from 'react';
import * as S from './CategoryNavBarStyle';
import { Category } from '../../../../shared/';

type CategoryNavBarProps = {
  categories: Category[];
  categoryTab: any;
  categoryClickHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, cat: any) => void;
};

const CategoryNavBar: React.FC<CategoryNavBarProps> = ({
  categories,
  categoryTab,
  categoryClickHandler,
}: CategoryNavBarProps) => {
  return (
    <>
      <S.Container>
        {categories
          .sort((a, b) => a.id - b.id)
          .map((category) => (
            <S.CategoryContainer
              key={category.id}
              data-category-id={category.id}
              onClick={(e:React.MouseEvent<HTMLDivElement, MouseEvent>) => categoryClickHandler(e, category)}
              select={categoryTab === category && true}
            >
              {category.name}
            </S.CategoryContainer>
          ))}
      </S.Container>
    </>
  );
};

export default CategoryNavBar;

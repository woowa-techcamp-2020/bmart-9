import React, { useState } from 'react';
import * as S from './CategoryNavBarStyle';
import { Category } from '../../../../shared/';
import { HashLink } from 'react-router-hash-link';

type CategoryNavBarProps = {
  categories: Category[];
};

const CategoryNavBar: React.FC<CategoryNavBarProps> = ({
  categories,
}: CategoryNavBarProps) => {

  const [categoryTab, setCategoryTab] = useState();

  const categoryClickHandler = (cat:any) => {
    setCategoryTab(cat);
  };

  return (
    <>
      <S.Container>
        {categories
          .sort((a, b) => a.id - b.id)
          .map((category) => (
            <S.CategoryContainer
              // id={}
              key={category.id}
              data-category-id={category.id}
              onClick={() => categoryClickHandler(category)}
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

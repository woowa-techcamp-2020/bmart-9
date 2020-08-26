import React, { useState } from 'react';
import * as S from './CategoryNavBarStyle';
import { Category } from '../../../../shared/';

type CategoryNavBarProps = {
  categories: Category[];
};

const CategoryNavBar: React.FC<CategoryNavBarProps> = ({
  categories,
}: CategoryNavBarProps) => {

  const [categoryTab, setCategoryTab] = useState(0);
  // const selectCard = (card: Product) => {
  //   setCard(card);
  // };
  const categoryClickHandler = (cat) => {
    setCategoryTab(cat)
  };

  return (
    <>
      <S.Container>
        {categories
          .sort((a, b) => a.id - b.id)
          .map((category) => (
            <S.CategoryContainer
              key={category.id}
              data-category-id={category.id}
              onClick={() => categoryClickHandler(category)}
              select={
                category
                  ? categoryTab === category && true
                  : categoryTab === category[0] && true
              }
            >
              {category.name}
            </S.CategoryContainer>
          ))}
      </S.Container>
    </>
  );
};

export default CategoryNavBar;

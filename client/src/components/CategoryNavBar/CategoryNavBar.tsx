import React, { useState, useEffect } from 'react';
import * as S from './CategoryNavBarStyle';
import { Category } from '../../../../shared/';
import category from '../../api/category';

type CategoryNavBarProps = {
  categories: Category[];
  categoryTab: any;
  categoryClickHandler: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    cat: any
  ) => void;
  setCategoryTab: (catId: number) => void;
};

const CategoryNavBar: React.FC<CategoryNavBarProps> = ({
  categories,
  categoryTab,
  categoryClickHandler,
  setCategoryTab,
}: CategoryNavBarProps) => {

  const categoryElements: HTMLElement[] = [];
  const slideCategory = () => {
    
    categoryElements.forEach(element => {
      if(element && element.dataset.categoryId === categoryTab) {
        element.style.backgroundColor = 'grey';
        element.style.color = 'white';
      } else {
        element.style.backgroundColor = '';
        element.style.color = 'grey';
      }
    })
  };

  useEffect(() => {
    slideCategory();
  }, [categoryTab]);

  return (
    <>
      <S.Container>
        {categories
          .sort((a, b) => a.id - b.id)
          .map((category) => (
            <S.CategoryContainer
              key={category.id}
              ref={(element: any) => categoryElements.push(element)}
              data-category-id={category.id}
              onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                categoryClickHandler(e, category.id)
              }
              select={categoryTab === category.id && true}
            >
              {category.name}
            </S.CategoryContainer>
          ))}
      </S.Container>
    </>
  );
};

export default CategoryNavBar;

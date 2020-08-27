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
  let containerElement: any;

  const slideCategory = () => {
    categoryElements.forEach((element) => {

      if (element && element.dataset.categoryId === categoryTab) {
        element.style.backgroundColor = 'grey';
        element.style.color = 'white';
        console.log(element);
        console.log(element.getClientRects()[0].x)
        if (element.getClientRects()[0].x > 300) {
          containerElement.scrollTo({
            top: 0,
            left: element.offsetLeft - 10,
            behavior: 'smooth'
          })
        } else if (element.getClientRects()[0].x < 0) {
          containerElement.scrollTo({
            top: 0,
            left: element.offsetLeft - 285,
            behavior: 'smooth'
          })
        }

      } else {
        element.style.backgroundColor = '';
        element.style.color = 'grey';
      }
    });
  };

  useEffect(() => {
    slideCategory();
  }, [categoryTab]);

  return (
    <>
      <S.Container ref={(element) => (containerElement = element)}>
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

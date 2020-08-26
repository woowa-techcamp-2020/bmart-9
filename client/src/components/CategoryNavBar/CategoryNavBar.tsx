import React from 'react';
import * as S from './CategoryNavBarStyle';
import { Category } from '../../../../shared/';

type CategoryNavBarProps = {
  categories: Category[];
  categoryTab:any;
  categoryClickHandler: (e:React.MouseEvent<MouseEvent> ,cat:any) => void;
  categoryContainerElements: any[];
};

const CategoryNavBar: React.FC<CategoryNavBarProps> = ({
  categories,
  categoryTab,
  categoryClickHandler,
  categoryContainerElements
}: CategoryNavBarProps) => {

  return (
    <>
      <S.Container>
        {categories
          .sort((a, b) => a.id - b.id)
          .map((category) => (
            <S.CategoryContainer
              ref={element => categoryContainerElements.push(element)}
              key={category.id}
              data-category-id={category.id}
              onClick={(e:any) => categoryClickHandler(e, category)}
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

import React, { useState, useEffect } from 'react';
import API from '../../api';
import * as S from './CategorizedCardContainerStyle';
import { MainContainer } from '../MainContainer';
import { TenCardsContainer } from '../TenCardsContainer';
import { CategoryNavBar } from '../CategoryNavBar';
import { Product } from '../../../../shared';
import { useProduct } from '../../hooks/useProduct';
import { Category } from '../../../../shared';

type CategorizedCardContainerProps = {
  start?: any;
  end?: any;
  products: Product[];
  categories: Category[];
};

const cardContainerElements: any[] = [];
let navBarOffsetTop: any;

const CategorizedCardContainer: React.FC<CategorizedCardContainerProps> = ({
  start,
  end,
  products,
  categories,
}: CategorizedCardContainerProps) => {
  const { getFilteredProductByCategory } = useProduct();
  const [categoryTab, setCategoryTab] = useState();

  const categoryClickHandler = (e: any, cat: any) => {
    setCategoryTab(cat);

    cardContainerElements
      .find(
        (element) => element.dataset.categoryId === e.target.dataset.categoryId
      )
      .scrollIntoView({
        behavior: 'smooth',
      });
  };

  const PRODUCTS_PER_CATEGORY = 6;
  const filteredProducts = categories
    .map((category) => category.id)
    .map((category) =>
      getFilteredProductByCategory(category, false).slice(
        0,
        PRODUCTS_PER_CATEGORY
      )
    )
    .sort((a, b) => a[0] && a[0].category1_id - b[0].category1_id);

  const getCategoryNameByCategoryId = (categoryId: number) =>
    categories.filter((category) => category.id === categoryId)[0].name;

  // console.log(navBarOffsetTop)
  // console.log(window.pageYOffset)

  const [navBarFixed, setNavBarFixed] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset >= navBarOffsetTop - 100) {
        console.log(window.pageYOffset)
        console.log(navBarOffsetTop)

        setNavBarFixed(true);
      } else if(window.pageYOffset < navBarOffsetTop +200){
        
        setNavBarFixed(false)
      }
    };
  });

  return (
    <>
      <MainContainer>
        <S.Container>
          <S.CategoryNavBarWrapper
            ref={(element) => (navBarOffsetTop = element?.offsetTop)}
            navBarFixed={navBarFixed}
          >
            <CategoryNavBar
              categories={categories}
              categoryTab={categoryTab}
              categoryClickHandler={categoryClickHandler}
            />
          </S.CategoryNavBarWrapper>
          {filteredProducts[0][0] &&
            filteredProducts.map((products) => (
              <S.ContainerWrapper
                key={products[0].category1_id}
                data-category-id={products[0].category1_id}
                ref={(element) => cardContainerElements.push(element)}
              >
                <TenCardsContainer
                  start={getCategoryNameByCategoryId(products[0].category1_id)}
                  end={end}
                  products={products}
                />
              </S.ContainerWrapper>
            ))}
        </S.Container>
      </MainContainer>
    </>
  );
};

export default CategorizedCardContainer;

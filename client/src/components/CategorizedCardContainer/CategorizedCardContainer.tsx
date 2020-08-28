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

const CategorizedCardContainer: React.FC<CategorizedCardContainerProps> = ({
  start,
  end,
  products,
  categories,
}: CategorizedCardContainerProps) => {
  const { getFilteredProductByCategory } = useProduct();
  const [categoryTab, setCategoryTab] = useState(0);
  const [navBarFixed, setNavBarFixed] = useState(false);
  const [navBarInitialOffsetTop, setNavBarInitialOffsetTop] = useState(0);

  const cardContainerElements: any[] = [];
  const PRODUCTS_PER_CATEGORY = 6;

  // console.log(categories);
  const filteredProducts = categories
    .filter(({ id }) => id !== 1)
    .map((category) => category.id)
    .map((category) =>
      getFilteredProductByCategory(category, false).slice(
        0,
        PRODUCTS_PER_CATEGORY
      )
    )
    .sort((a, b) => a[0] && a[0].category1_id - b[0].category1_id);

  const categoryClickHandler = (e: any, catId: any) => {
    const selectedElement = cardContainerElements.find(
      (element) => element.dataset.categoryId === e.target.dataset.categoryId
    );

    window.scrollTo({
      top: selectedElement.offsetTop - 155,
      behavior: 'smooth',
    });
  };

  const getCategoryNameByCategoryId = (categoryId: number) =>
    categories.filter((category) => category.id === categoryId)[0].name;

  // const document = typeof document === 'undefined' ? '' : document;

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset >= navBarInitialOffsetTop) {
        setNavBarFixed(true);
        const displayedContainer: any = document
          .elementFromPoint(0, 160)
          ?.closest('#container-wrapper');
        setCategoryTab(displayedContainer?.dataset.categoryId);
      }
      if (window.pageYOffset < navBarInitialOffsetTop) {
        setNavBarFixed(false);
      }
    };
  });

  return (
    <>
      <MainContainer>
        <S.Container navBarFixed={navBarFixed}>
          <S.CategoryNavBarWrapper
            ref={(element: any) => {
              element?.offsetTop > 500 &&
                setNavBarInitialOffsetTop(element?.offsetTop - 97);
            }}
            navBarFixed={navBarFixed}
            navBarInitialOffsetTop={navBarInitialOffsetTop}
          >
            <CategoryNavBar
              categories={categories}
              categoryTab={categoryTab}
              setCategoryTab={setCategoryTab}
              categoryClickHandler={categoryClickHandler}
            />
          </S.CategoryNavBarWrapper>
          {filteredProducts[0][0] &&
            filteredProducts.map((products) => (
              <S.ContainerWrapper
                key={products[0].category1_id}
                data-category-id={products[0].category1_id}
                id="container-wrapper"
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

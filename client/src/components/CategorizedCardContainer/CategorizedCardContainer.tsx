import React from 'react';
import API from '../../api';
import * as S from './CategorizedCardContainerStyle';
import { MainContainer } from '../MainContainer';
import { TenCardsContainer } from '../TenCardsContainer';
import { CategoryNavBar } from '../CategoryNavBar';
import { Product } from '../../../../shared';
import { useProduct } from '../../hooks/useProduct';
import { Category } from '../../../../shared';
import { GRAY_001 } from '../../styles/GlobalStyle';

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
  console.log(categories);
  const getCategoryNameByCategoryId = (categoryId: number) =>
    categories.filter((category) => category.id === categoryId)[0].name;

  return (
    <>
      <MainContainer>
        <S.Container>
          <CategoryNavBar categories={categories} />
          {filteredProducts[0][0] &&
            filteredProducts.map((products) => (
              <TenCardsContainer
                key={products[0].category1_id}
                start={getCategoryNameByCategoryId(products[0].category1_id)}
                end={end}
                products={products}
              />
            ))}
        </S.Container>
      </MainContainer>
    </>
  );
};

export default CategorizedCardContainer;

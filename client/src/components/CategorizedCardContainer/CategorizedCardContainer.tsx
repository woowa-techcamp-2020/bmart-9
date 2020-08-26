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
  // console.log(getFilteredProductByCategory(420186, false));
  const PRODUCTS_PER_CATEGORY = 6;
  const allCategories = categories.map((category) => category.id);
  const filteredProducts = allCategories
    .map((category) =>
      getFilteredProductByCategory(category, false).slice(
        0,
        PRODUCTS_PER_CATEGORY
      )
    )
    .sort((a, b) => a[0] && a[0].category1_id - b[0].category1_id);
		console.log(filteredProducts)
  return (
    <>
      <MainContainer>
        <S.Container>
          <CategoryNavBar categories={categories} />
          {filteredProducts[0][0] &&
            filteredProducts.map((products) => (
              <TenCardsContainer
								key={products[0].category1_id}
                start={start}
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

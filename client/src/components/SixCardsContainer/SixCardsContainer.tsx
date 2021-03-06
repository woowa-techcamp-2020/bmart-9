import React, { useState } from 'react';
import * as S from './SixCardsContainerStyle';
import { MainContainer } from '../MainContainer';
import { HorizontalBar } from '../HorizontalBar';
import { Product } from '../../../../shared';
import { Card } from '../Card';

type SixCardsContainerProps = {
  start?: any;
  end?: any;
  products: Product[];
  fontWeight?: string;
};

const SIX_CARDS_CONTAINER_CARD_VIEWPORT_WIDTH = 30;
const SIX_CARDS_CONTAINER_CARD_FONT_SIZE_PERCENTAGE = 70;

const SixCardsContainer: React.FC<SixCardsContainerProps> = ({
  start,
  end,
  products,
  fontWeight
}: SixCardsContainerProps) => {
  const [pageIndex, setPageIndex] = useState(1);
  const PRODUCT_PER_PAGE = 6;
  const selectedProducts = products.slice(
    (pageIndex - 1) * PRODUCT_PER_PAGE,
    pageIndex * PRODUCT_PER_PAGE
  );

  const displayNextProducts = () => {
    pageIndex === 4
      ? setPageIndex(1)
      : setPageIndex(pageIndex + 1);
  };

  return (
    <>
      <MainContainer>
        {(start || end) && <HorizontalBar start={start} end={end} />}
        <S.Container>
          {selectedProducts &&
            selectedProducts.map((product) => (
              <S.CardWrapper key={product.id}>
                <Card
                  product={product}
                  viewportWidth={SIX_CARDS_CONTAINER_CARD_VIEWPORT_WIDTH}
                  fontSizePercentage={SIX_CARDS_CONTAINER_CARD_FONT_SIZE_PERCENTAGE}
                />
              </S.CardWrapper>
            ))}
        </S.Container>
        <HorizontalBar
          displayNextProducts={displayNextProducts}
          fontWeight={fontWeight}
          center={`↻ 지금 뭐 먹지? 다른 상품 보기 ${pageIndex}/4`}
        />
      </MainContainer>
    </>
  );
};

export default SixCardsContainer;

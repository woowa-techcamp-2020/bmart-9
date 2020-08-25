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
};

const SIXCARDSCONTAINER_CARD_VIEWPORT_WIDTH = 32;

const SixCardsContainer: React.FC<SixCardsContainerProps> = ({
  start,
  end,
  products,
}: SixCardsContainerProps) => {
  const [firstProduct, setFirstProduct] = useState(0);
  const selectedProducts = products.slice(firstProduct, firstProduct + 6);

  const displayNextProducts = () => {
    firstProduct === 18
      ? setFirstProduct(0)
      : setFirstProduct(firstProduct + 6);
  };

  return (
    <>
      <MainContainer>
        {(start || end) && <HorizontalBar start={start} end={end} />}
        <S.Container>
          {selectedProducts &&
            selectedProducts.map((product) => (
              <Card
                key={product.id}
                product={product}
                width={SIXCARDSCONTAINER_CARD_VIEWPORT_WIDTH}
              />
            ))}
        </S.Container>
        <HorizontalBar
          displayNextProducts={displayNextProducts}
          center="↻ 지금 뭐 먹지? 다른 상품 보기"
        />
      </MainContainer>
    </>
  );
};

export default SixCardsContainer;

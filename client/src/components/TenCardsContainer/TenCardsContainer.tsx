import React from 'react';
import * as S from './TenCardsContainerStyle';
import { MainContainer } from '../MainContainer';
import { HorizontalBar } from '../HorizontalBar';
import { Product } from '../../../../shared';
import { Card } from '../Card';

type TenCardsContainerProps = {
  start?: any;
  end?: any;
  products: Product[];
};

const TEN_CARDS_CONTAINER_CARD_VIEWPORT_WIDTH = 48;
const SIX_CARDS_CONTAINER_CARD_FONT_SIZE_PERCENTAGE = 80;

const TenCardsContainer: React.FC<TenCardsContainerProps> = ({
  start,
  end,
  products,
}: TenCardsContainerProps) => {
  return (
    <>
      <MainContainer>
        {(start || end) && <HorizontalBar start={start} end={end} />}
        <S.Container>
          {products &&
            products.map((product) => (
              <S.CardWrapper key={product.id}>
                <Card
                  product={product}
                  viewportWidth={TEN_CARDS_CONTAINER_CARD_VIEWPORT_WIDTH}
                  fontSizePercentage={SIX_CARDS_CONTAINER_CARD_FONT_SIZE_PERCENTAGE}
                />
              </S.CardWrapper>
            ))}
        </S.Container>
      </MainContainer>
    </>
  );
};

export default TenCardsContainer;

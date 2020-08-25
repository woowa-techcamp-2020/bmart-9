import React from 'react';
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

const SIXCARDSCONTAINER_CARD_VIEWPORT_WIDTH = 31;

const SixCardsContainer: React.FC<SixCardsContainerProps> = ({
  start,
  end,
  products,
}: SixCardsContainerProps) => {
  return (
    <>
      <MainContainer>
        {(start || end) && <HorizontalBar start={start} end={end} />}
        <S.Container>
          {products &&
            products.map((product) => (
              <Card
                key={product.id}
                product={product}
                width={SIXCARDSCONTAINER_CARD_VIEWPORT_WIDTH}
              />
            ))}
        </S.Container>
      </MainContainer>
    </>
  );
};

export default SixCardsContainer;

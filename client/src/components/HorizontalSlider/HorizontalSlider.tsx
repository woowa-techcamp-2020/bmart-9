import React from 'react';
import * as S from './HorizontalSliderStyle';
import { Card } from '../Card';
import { Product } from '../../../../shared';
import { HorizontalBar } from '../HorizontalBar';
import { MainContainer } from '../MainContainer';

type HorizontalSliderProps = {
  start?: any;
  end?: any;
  products: Product[];
};

const HORIZONTAL_CARD_VIEWPORT_WIDTH = 40;

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({
  start,
  end,
  products,
}: HorizontalSliderProps) => {
  return (
    <MainContainer>
      {(start || end) && <HorizontalBar start={start} end={end} />}
      <S.Container>
        {products &&
          products.map((product) => (
            <Card
              key={product.id}
              product={product}
              viewportWidth={HORIZONTAL_CARD_VIEWPORT_WIDTH}
            />
          ))}
      </S.Container>
    </MainContainer>
  );
};

export default HorizontalSlider;

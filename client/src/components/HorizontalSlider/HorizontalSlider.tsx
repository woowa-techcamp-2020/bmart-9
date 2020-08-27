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
const HORIZONTAL_CARD_FONT_SIZE_PERCENTAGE = 75;

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
              fontSizePercentage={HORIZONTAL_CARD_FONT_SIZE_PERCENTAGE}
            />
          ))}
      </S.Container>
    </MainContainer>
  );
};

export default HorizontalSlider;

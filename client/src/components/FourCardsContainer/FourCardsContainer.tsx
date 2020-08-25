import React from 'react';
import * as S from './FourCardsContainerStyle';
import { Card } from '../Card';
import { Product } from '../../../../shared';
import { HorizontalBar } from '../HorizontalBar';
import { MainContainer } from '../MainContainer';

type FourCardsContainerProps = {
  start?: any;
  end?: any;
  products: Product[];
};

const FourCardsContainer: React.FC<FourCardsContainerProps> = ({
  start,
  end,
  products,
}: FourCardsContainerProps) => {
  return (
    <>
      <MainContainer>
        {(start || end) && <HorizontalBar start={start} end={end} />}
        <S.Container>
          {products &&
            products.map((product) => <Card key={product.id} {...product} />)}
        </S.Container>
      </MainContainer>
    </>
  );
};

export default FourCardsContainer;

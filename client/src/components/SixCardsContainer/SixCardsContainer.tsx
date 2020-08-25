import React from 'react';
import * as S from './SixCardsContainerStyle';
import { MainContainer } from '../MainContainer';
import { HorizontalBar } from '../HorizontalBar';
import { Card } from '../Card';

type SixCardsContainerProps = {
  start?: any;
  end?: any;
  products: Product[];
};

const SIXCARDCONTAINER_CARD_WIDTH = 200;

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
          {/* {products &&
            products.map((product) => (
              <Card key={product.id} {...product} width={100} />
            ))} */}
        </S.Container>
      </MainContainer>
    </>
  );
};

export default SixCardsContainer;

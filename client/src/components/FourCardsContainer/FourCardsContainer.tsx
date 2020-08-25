import React from 'react';
import * as S from './FourCardsContainerStyle';
import { BigCard } from '../BigCard';
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
  console.log(products[0])
  return (
    <>
      <MainContainer>
        {(start || end) && <HorizontalBar start={start} end={end} />}
        <S.Container>
          {products &&
            products.map((product) => (
              <S.Img
                onClick={() => console.log(1)}
                key={product.id}
                src={product.img}
              />
            ))}
            <BigCard {...products[0]}/>
        </S.Container>
      </MainContainer>
    </>
  );
};

export default FourCardsContainer;

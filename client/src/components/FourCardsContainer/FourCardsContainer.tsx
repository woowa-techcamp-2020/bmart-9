import React, { useState } from 'react';
import * as S from './FourCardsContainerStyle';
import { BigCard } from '../BigCard';
import { Product } from '../../../../shared';
import { HorizontalBar } from '../HorizontalBar';
import { MainContainer } from '../MainContainer';

type FourCardsContainerProps = {
  start?: any;
  end?: any;
  products: Product[];
  fontWeight?:string
};

const FourCardsContainer: React.FC<FourCardsContainerProps> = ({
  start,
  end,
  products,
  fontWeight,
}: FourCardsContainerProps) => {
  const [card, setCard] = useState(products[0]);

  const selectCard = (card: Product) => {
    setCard(card);
  };

  return (
    <>
      <MainContainer>
        {(start || end) && <HorizontalBar fontWeight={fontWeight} start={start} end={end} />}
        <S.Container>
          {products &&
            products.map((product) => (
              <S.Img
                onClick={() => selectCard(product)}
                select={
                  card
                    ? product === card && true
                    : product === products[0] && true
                }
                key={product.id}
                src={product.img}
              />
            ))}
          <BigCard product={card || products[0]} />
        </S.Container>
      </MainContainer>
    </>
  );
};

export default FourCardsContainer;

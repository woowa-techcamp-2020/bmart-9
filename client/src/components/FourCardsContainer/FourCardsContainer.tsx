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
};

const FourCardsContainer: React.FC<FourCardsContainerProps> = ({
  start,
  end,
  products,
}: FourCardsContainerProps) => {
  const [card, setCard] = useState(products[0]);

  const selectCard = (card: Product) => {
    setCard(card);
  };

  return (
    <>
      <MainContainer>
        {(start || end) && <HorizontalBar start={start} end={end} />}
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
          {card ? <BigCard {...card} /> : <BigCard {...products[0]} />}
        </S.Container>
      </MainContainer>
    </>
  );
};

export default FourCardsContainer;

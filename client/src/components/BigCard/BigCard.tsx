import React from 'react';
import * as S from './BigCardStyle';
import { BigCardImg } from '../BigCardImg';
import { BigCardContent } from '../BigCardContent';
import { Product } from '../../../../shared';

const Card: React.FC<Product> = (product: Product) => {
  const { img } = product;

  return (
    <S.Container>
      <BigCardImg imgSrc={img} />
      <BigCardContent {...product} />
    </S.Container>
  );
};

export default Card;

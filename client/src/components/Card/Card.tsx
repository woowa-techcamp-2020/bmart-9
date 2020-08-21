import React from 'react';
import * as S from './CardStyle';
import { CardImg } from './../CardImg';
import { CardContent } from './../CardContent';
import { Product } from '../../../../shared';

const Card: React.FC<Product> = (product: Product) => {
  const { img, price } = product;

  return (
    <S.Container>
      <CardImg imgSrc={img} productPrice={price} />
      <CardContent {...product} />
    </S.Container>
  );
};

export default Card;

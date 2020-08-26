import React from 'react';
import * as S from './CardStyle';
import { CardImg } from './../CardImg';
import { CardContent } from './../CardContent';
import { Product } from '../../../../shared';

type CardProps = {
  viewportWidth: number;
  product: Product;
};

const Card: React.FC<CardProps> = ({ viewportWidth, product }: CardProps) => {
  const { img } = product;

  return (
    <S.Container viewportWidth={viewportWidth}>
      <CardImg imgSrc={img} viewportWidth={viewportWidth}/>
      <CardContent {...product} />
    </S.Container>
  );
};

export default Card;

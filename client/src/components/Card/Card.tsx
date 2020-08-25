import React from 'react';
import * as S from './CardStyle';
import { CardImg } from './../CardImg';
import { CardContent } from './../CardContent';
import { Product } from '../../../../shared';

type CardProps = {
  width: number;
  product: Product;
};

const Card: React.FC<CardProps> = ({ width, product }: CardProps) => {
  const { img } = product;

  return (
    <S.Container width={width}>
      <CardImg imgSrc={img} width={width}/>
      <CardContent {...product} />
    </S.Container>
  );
};

export default Card;

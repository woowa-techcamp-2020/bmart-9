import React from 'react';
import * as S from './CardStyle';
import { CardImg } from './../CardImg';
import { CardContent } from './../CardContent';
import { Product } from '../../../../shared';
import Link from 'next/link';

type CardProps = {
  viewportWidth: number;
  product: Product;
  fontSizePercentage: number;
};

const Card: React.FC<CardProps> = ({ viewportWidth, fontSizePercentage, product }: CardProps) => {
  if (!product) {
    return null;
  }
  const { id } = product;

  return (
    <Link href="/product/[id]" as={`/product/${id}`}>
      <S.Container viewportWidth={viewportWidth}>
        <CardImg viewportWidth={viewportWidth} product={product} />
        <CardContent product ={product} fontSizePercentage={fontSizePercentage}/>
      </S.Container>
    </Link>
  );
};

export default Card;

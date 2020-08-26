import React from 'react';
import * as S from './CardStyle';
import { CardImg } from './../CardImg';
import { CardContent } from './../CardContent';
import { Product } from '../../../../shared';
import Link from 'next/link';

type CardProps = {
  viewportWidth: number;
  product: Product;
};

const Card: React.FC<CardProps> = ({ viewportWidth, product }: CardProps) => {
  if (!product) {
    return null;
  }
  const { img, id } = product;

  return (
    <Link href="/product/[id]" as={`/product/${id}`}>
      <S.Container viewportWidth={viewportWidth}>
        <CardImg imgSrc={img} viewportWidth={viewportWidth} />
        <CardContent {...product} />
      </S.Container>
    </Link>
  );
};

export default Card;

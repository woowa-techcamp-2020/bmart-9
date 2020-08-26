import React from 'react';
import * as S from './CardStyle';
import { CardImg } from './../CardImg';
import { CardContent } from './../CardContent';
import { Product } from '../../../../shared';
import Link from 'next/link';

type ProductProps = {
  product: Product;
};

const Card: React.FC<ProductProps> = ({ product }: ProductProps) => {
  if (!product) {
    return null;
  }
  const { img, id } = product;

  return (
    <Link href="/product/[id]" as={`/product/${id}`}>
      <S.Container>
        <CardImg imgSrc={img} />
        <CardContent {...product} />
      </S.Container>
    </Link>
  );
};

export default Card;

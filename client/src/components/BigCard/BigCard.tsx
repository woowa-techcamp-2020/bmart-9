import React from 'react';
import * as S from './BigCardStyle';
import { BigCardImg } from '../BigCardImg';
import { BigCardContent } from '../BigCardContent';
import { Product } from '../../../../shared';
import Link from 'next/link';

type ProductProps = {
  product: Product;
};

const BigCard: React.FC<ProductProps> = ({ product }: ProductProps) => {
  if (!product) {
    return null;
  }
  const { img, id } = product;

  return (
    <Link key={id} href="/product/[id]" as={`/product/${id}`}>
      <S.Container>
        <BigCardImg imgSrc={img} />
        <BigCardContent {...product} />
      </S.Container>
    </Link>
  );
};

export default BigCard;

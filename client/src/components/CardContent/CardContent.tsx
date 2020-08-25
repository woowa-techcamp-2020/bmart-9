import React from 'react';
import * as S from './CardContentStyle';
import { Product } from '../../../../shared';

// id baseprice discount name price

export const CardContent: React.FC<Product> = ({
  id,
  base_price,
  name,
  discount,
  price,
}: Product) => {

  return (
    <>
      <S.Container>
        <S.ProductName>{name}</S.ProductName>
        <S.ProductDiscount>{discount}</S.ProductDiscount>
        <S.ProductBasePrice>{base_price}</S.ProductBasePrice>
        <S.ProductPrice>{price}</S.ProductPrice>
      </S.Container>
    </>
  );
};

export default CardContent;

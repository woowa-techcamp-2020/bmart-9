import React from 'react';
import * as S from './CardContentStyle';
import { Product } from '../../../../shared';
import numberComma from '../../utils/numberComma';

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
        <S.ProductName>{name.substring(0, 22)}</S.ProductName>
          {discount ? <S.ProductDiscount>{discount}%</S.ProductDiscount> : ''}
          {base_price ? <S.ProductBasePrice>{numberComma(base_price)}원</S.ProductBasePrice> : ''}
          <S.ProductPrice>{numberComma(price)}원</S.ProductPrice>
      </S.Container>
    </>
  );
};

export default CardContent;

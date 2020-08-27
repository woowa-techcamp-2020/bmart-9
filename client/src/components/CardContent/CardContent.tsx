import React from 'react';
import * as S from './CardContentStyle';
import { Product } from '../../../../shared';
import numberComma from '../../utils/numberComma';

type Props = {
  fontSizePercentage: number
  product: Product;
};

export const CardContent: React.FC<Props> = (props:Props) => {
  const { fontSizePercentage, product } = props;
  return (
    <>
      <S.Container>
        <S.ProductName fontSizePercentage={fontSizePercentage}>
          {product.name}
        </S.ProductName>
        {product.discount ? (
          <S.ProductDiscount fontSizePercentage={fontSizePercentage}>
            {product.discount}%
          </S.ProductDiscount>
        ) : (
          ''
        )}
        {product.base_price ? (
          <S.ProductBasePrice fontSizePercentage={fontSizePercentage}>
            {numberComma(product.base_price)}원
          </S.ProductBasePrice>
        ) : (
          ''
        )}
        <S.ProductPrice fontSizePercentage={fontSizePercentage}>
          {numberComma(product.price)}원
        </S.ProductPrice>
      </S.Container>
    </>
  );
};

export default CardContent;

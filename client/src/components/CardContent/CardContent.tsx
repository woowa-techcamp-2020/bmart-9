import React from 'react';
import * as S from './CardContentStyle';
import { Product } from '../../../../shared';

export const CardContent: React.FC<Product> = ({ name }: Product) => {
  return (
    <>
      <S.Container>
        <S.ProductName>{name}</S.ProductName>
      </S.Container>
    </>
  );
};

export default CardContent;

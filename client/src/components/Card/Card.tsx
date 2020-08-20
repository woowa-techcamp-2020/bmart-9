import React from 'react';
import * as S from './CardStyle';
import { CardImg } from './../CardImg';
import { CardContent } from './../CardContent';
import { Product } from '../../../../shared';

// export type CardProps = {
// 	id: number
// 	imgSrc: string
// 	productData: ProductDataProps
// }

// export type ProductDataProps = {
// 	productName: string
// 	productDiscountRate: number
// 	productBasePrice: number
// 	productPrice: number
// }

const Card: React.FC<Product> = (product: Product) => {
  const { image, price } = product;

  return (
    <S.Container>
      <CardImg imgSrc={image} productPrice={price} />
      <CardContent {...product} />
    </S.Container>
  );
};

export default Card;

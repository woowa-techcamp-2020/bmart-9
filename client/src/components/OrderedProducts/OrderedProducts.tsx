import React from 'react';
import * as S from './OrderedProductsStyle';
import { OrderProduct } from '../../../../shared';
import numberComma from '../../utils/numberComma';

type Props = {
  orderedProducts: OrderProduct[];
};

const OrderedItem: React.FC<{ item: OrderProduct }> = ({ item }) => {
  return (
    <S.Item>
      <S.Info>
        <S.Title>{item.name}</S.Title>
        <S.Price>{numberComma(item.price * item.quantity)}원</S.Price>
      </S.Info>
      <S.Image src={item.img} />
    </S.Item>
  );
};

const OrderedProducts: React.FC<Props> = ({ orderedProducts }: Props) => {
  return (
    <S.Container>
      {orderedProducts.map((item) => (
        <OrderedItem key={item.id} item={item} />
      ))}
    </S.Container>
  );
};

export default OrderedProducts;

import React from 'react';
import * as S from './OrderItemStyle';
import { HorizontalBar } from '../HorizontalBar';
import { Order } from '../../../../shared';
import { MainContainer } from '../MainContainer';
import { BoxButton } from '../BoxButton';
import numberComma from '../../utils/numberComma';
import { MAIN_GREEN, MAIN_RED, MAIN_COLOR1 } from '../../styles/GlobalStyle';

type Props = {
  order: Order;
};

const dayMap = ['일', '월', '화', '수', '목', '금', '토'];
const statusMap = {
  requested: '준비 중',
  dispatched: '배달 중',
  delivered: '배달 완료',
};

const colorMap = {
  requested: MAIN_RED,
  dispatched: MAIN_GREEN,
  delivered: MAIN_COLOR1,
};

const BUTTON_WIDTH = '49%';

const OrderItem: React.FC<Props> = ({ order }: Props) => {
  const date = new Date(order.createdAt);
  const dataToString = `${date.getMonth()}/${date.getDate()} (${
    dayMap[date.getDay()]
  }) ${order.userName}의 주문`;

  return (
    <S.Container>
      <S.Warpper>
        <HorizontalBar
          start={<S.Tag color={colorMap[order.status]} />}
          center={dataToString}
        />
        <S.Title>{order.orderName}</S.Title>
        <HorizontalBar end={numberComma(order.totalPrice) + '원'} />
        <S.ButtonContainer>
          <BoxButton title={statusMap[order.status]} width={BUTTON_WIDTH} />
          <BoxButton title={'상세보기'} width={BUTTON_WIDTH} />
        </S.ButtonContainer>
      </S.Warpper>
      <S.Padding />
    </S.Container>
  );
};

export default OrderItem;

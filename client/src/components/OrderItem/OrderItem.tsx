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
  isAdmin?: boolean;
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

const OrderItem: React.FC<Props> = ({ order, isAdmin = false }: Props) => {
  const date = new Date(order.createdAt);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const currDaye = date.getDate();
  let hour: string | number = date.getHours();
  if (hour < 10) hour = `0${hour}`;
  let min: string | number = date.getMinutes();
  if (min < 10) min = `0${min}`;

  const dataToString = `주문일시: ${year}년 ${month}월 ${currDaye}일 ${hour}:${min}`;
  const orderNumber = `주문번호: ${order.id}`;

  const routes = isAdmin ? 'admin' : 'order';

  return (
    <S.Container>
      <S.FirstLine>
        <S.Title>{order.orderName}</S.Title>
        <S.Tag color={colorMap[order.status]} />
      </S.FirstLine>
      <HorizontalBar start={numberComma(order.totalPrice) + '원'} />
      <S.DiscWrapper>
        <S.Disc>{dataToString}</S.Disc>
        <S.Disc>{orderNumber}</S.Disc>
      </S.DiscWrapper>
      <S.ButtonContainer>
        <BoxButton title={statusMap[order.status]} width={BUTTON_WIDTH} />
        <BoxButton
          title={'상세보기'}
          width={BUTTON_WIDTH}
          href={`/${routes}/[id]`}
          as={`/${routes}/${order.id}`}
        />
      </S.ButtonContainer>
    </S.Container>
  );
};

export default OrderItem;

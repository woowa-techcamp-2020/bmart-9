import React, { useState, useEffect } from 'react';
import * as S from '../styles/cartPageStyle';
import { Cart } from '../../../shared';
import { useCart } from '../hooks/useCart';
import { CartItem } from '../components/CartItem';
import { HorizontalBar } from '../components/HorizontalBar';
import comma from '../utils/numberComma';

const CartPage = () => {
  const { cartList, setCartList, createTestCart } = useCart();
  const [allCheck, setAllCheck] = useState(true);
  const [totalCost, setTotalCost] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setCartList();
  }, []);

  useEffect(() => {
    getTotalCost();
  }, [cartList]);

  const getTotalCost = () => {
    let tempCost = 0;
    let tempCount = 0;
    cartList?.map((item: Cart) => {
      tempCost += item.price * item.quantity;
      tempCount += item.quantity;
    });
    setTotalCost(tempCost);
    setTotalCount(tempCount);
  };

  return (
    <>
      <div className="header">
        <HorizontalBar start="<" center="장바구니" end=" "></HorizontalBar>
      </div>
      {cartList && cartList.length > 0 ? (
        <>
          <div className="selectWrapper">
            <HorizontalBar
              start="ㅁ 전체 선택"
              end="선택 비우기"
            ></HorizontalBar>
          </div>
          <div className="cartItemWrapper">
            <HorizontalBar start="일반상품"></HorizontalBar>

            {cartList.map((item: Cart) => {
              return <CartItem key={item.id} {...item}></CartItem>;
            })}
            <HorizontalBar center="+ 더 담으러 가기"></HorizontalBar>
          </div>
          <div className="totalWrapper">
            <HorizontalBar
              center={`주문금액 : ${comma(totalCost)} 원`}
            ></HorizontalBar>
          </div>
          <HorizontalBar
            center={
              <S.Button>
                {' '}
                {`${totalCount}개 ${comma(totalCost)}`}원 배달 주문 하기
              </S.Button>
            }
          ></HorizontalBar>
        </>
      ) : (
        <S.Container>
          <S.Img src="https://i.imgur.com/t0Lantl.png"></S.Img>
          <S.Button onClick={() => createTestCart(3)}>
            테스트 장바구니 추가
          </S.Button>
        </S.Container>
      )}
    </>
  );
};

export default CartPage;

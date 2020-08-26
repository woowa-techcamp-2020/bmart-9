import React, { useState, useEffect } from 'react';
import * as S from '../styles/cartPageStyle';
import { Cart, ClientCart } from '../../../shared';
import { useCart } from '../hooks/useCart';

import { CartItem } from '../components/CartItem';
import { Checkbox } from '../components/Checkbox';
import { HorizontalBar } from '../components/HorizontalBar';
import { Images } from '../images';
import comma from '../utils/numberComma';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';

const TRUE = 1;
const FALSE = 0;

const CartPage = () => {
  const {
    cartList,
    setCartList,
    createTestCart,
    cartCheckedCost,
    cartCheckedCount,
  } = useCart();

  const { updateAllCheck, allCheckValue, deleteAllCheck } = useCart();
  const [allCheck, setAllCheck] = useState<number>(allCheckValue());
  useEffect(() => {
    setCartList();
  }, []);

  useEffect(() => {
    setAllCheck(allCheckValue());
  }, [allCheckValue()])

  const renderOrderButton = () => {
    if (cartCheckedCount() > 0) {
      return <>
        <S.OrderButton>
          <S.OrderButtonCount>{cartCheckedCount()}</S.OrderButtonCount>
          <S.OrderButtonText>
            {` ${comma(cartCheckedCost())}`}원 배달 주문 하기
        </S.OrderButtonText>
        </S.OrderButton>
        <S.BottomConcealer />
      </>
    } else {
      return <>
        <S.EmptyButton>
          <S.OrderButtonText>
            최소주문금액을 채워주세요
      </S.OrderButtonText >
        </S.EmptyButton >
        <S.BottomConcealer />
      </>
    }
  }

  const renderDeleteAllButton = () => {
    if (cartCheckedCount() > 0) {
      return <S.DeleteAllButton
        color="main"
        onClick={() => deleteAllCheck()}>
        선택 비우기</S.DeleteAllButton>
    } else {
      <S.DeleteAllButton color="#ddd" disabled>
        선택 비우기
      </S.DeleteAllButton>
    }
  }

  return (
    <>
      <S.Container>
        <S.Header>
          <Link href="/">
            <S.HeaderButton>
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </S.HeaderButton>
          </Link>
          <S.HeaderContents>장바구니</S.HeaderContents>
        </S.Header>
        {cartList && cartList.length > 0 ? (
          <S.BodyContainer>
            <S.SelectWrapper>
              <S.SelectCheckbox>
                <label htmlFor="cartAllCheckbox">
                  <S.AllCheckBox
                    id="cartAllCheckbox"
                    type="checkbox"
                    checked={allCheck === TRUE}
                    onChange={() =>
                      allCheck === TRUE ? updateAllCheck(FALSE) : updateAllCheck(TRUE)
                    }
                  ></S.AllCheckBox>
                  <S.CheckboxContents>{allCheck === TRUE ? '선택 해제' : '전체 선택'}</S.CheckboxContents>
                </label>
              </S.SelectCheckbox>
              {renderDeleteAllButton()}
            </S.SelectWrapper>
            <S.TitleWrapper>
              <S.Title>일반상품</S.Title>
              {/* <S.TitlePaint /> */}
            </S.TitleWrapper>
            {cartList.map((item: ClientCart) => {
              return <CartItem key={item.id} {...item}></CartItem>;
            })}
            <S.MoreButtonWrapper>
              <Link href="/">
                <S.TextButton>
                  <FontAwesomeIcon icon={faPlus} /> <span>더 담으러 가기</span>
                </S.TextButton>
              </Link>
            </S.MoreButtonWrapper>

            <HorizontalBar
              center={`주문금액 : ${comma(cartCheckedCost())} 원`}
            ></HorizontalBar>
            <S.EmptySpace></S.EmptySpace>
            <HorizontalBar start={renderOrderButton()} />
          </S.BodyContainer>
        ) : (
            <S.EmptyContainer>
              <S.EmptyWrapper>
                <S.Img src={Images.EMPTY_CART}></S.Img>
                <div>장바구니가 텅 비어있어요</div>
              </S.EmptyWrapper>
              <S.OrderButton onClick={() => createTestCart(3)}>
                <S.OrderButtonText>테스트 장바구니 추가</S.OrderButtonText>
              </S.OrderButton>
            </S.EmptyContainer>
          )}
      </S.Container>
    </>
  );
};

export default CartPage;

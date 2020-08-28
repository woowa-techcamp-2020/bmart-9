import React, { useState, useEffect } from 'react';
import * as S from '../styles/cartPageStyle';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

import { ClientCart } from '../../../shared';
import { useCart } from '../hooks/useCart';
import { useUser } from '../hooks/useUser';
import { useOrder } from '../hooks/useOrder';
import { useSnackbar } from '../hooks/useSnackbar';
import { useRouter } from 'next/router';

import API from '../api';
import { getToken } from '../utils/cookieParser';
import comma from '../utils/numberComma';

import { CartItem } from '../components/CartItem';
import { HorizontalBar } from '../components/HorizontalBar';
import { Images } from '../images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { getSocket } from '../utils/socket';

const TRUE = 1;
const FALSE = 0;

const CartPage = ({
  cartListProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    cartList,
    setCartList,
    createTestCart,
    cartCheckedCost,
    cartCheckedCount,
  } = useCart();

  const { createOrder } = useOrder();
  const { openSnackbar } = useSnackbar();
  const { push } = useRouter();
  const { updateAllCheck, allCheckValue, deleteAllCheck } = useCart();
  const [allCheck, setAllCheck] = useState<number>(allCheckValue());

  useEffect(() => {
    setCartList(cartListProps);
  }, []);

  const { user } = useUser();

  useEffect(() => {
    setAllCheck(allCheckValue());
  }, [allCheckValue()]);

  const deleteAllCheckAction = () => {
    deleteAllCheck(user!.token);
    openSnackbar('success', `선택된 상품을 삭제했습니다.`);
  };

  const createOrderAction = () => {
    if (!user) {
      return;
    }
    createOrder(user.token, cartList);
    const socket = getSocket(user.id);
    socket.emit('ORDER_REQUESTED', `${user.name}님이 주문을 요청했습니다.`);
    push('/');
  };

  const renderOrderButton = () => {
    if (cartCheckedCount() > 0) {
      return (
        <>
          <S.OrderButton onClick={() => createOrderAction()}>
            <S.OrderButtonCount>{cartCheckedCount()}</S.OrderButtonCount>
            <S.OrderButtonText>
              {` ${comma(cartCheckedCost())}`}원 배달 주문 하기
            </S.OrderButtonText>
          </S.OrderButton>
          <S.BottomConcealer />
        </>
      );
    } else {
      return (
        <>
          <S.EmptyButton>
            <S.OrderButtonText>최소주문금액을 채워주세요</S.OrderButtonText>
          </S.EmptyButton>
          <S.BottomConcealer />
        </>
      );
    }
  };

  const renderDeleteAllButton = () => {
    if (cartCheckedCount() > 0) {
      return (
        <S.DeleteAllButton color="main" onClick={() => deleteAllCheckAction()}>
          선택 비우기
        </S.DeleteAllButton>
      );
    } else {
      <S.DeleteAllButton color="#ddd" disabled>
        선택 비우기
      </S.DeleteAllButton>;
    }
  };

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
                      allCheck === TRUE
                        ? updateAllCheck(FALSE)
                        : updateAllCheck(TRUE)
                    }
                  ></S.AllCheckBox>
                  <S.CheckboxContents>
                    {allCheck === TRUE ? '선택 해제' : '전체 선택'}
                  </S.CheckboxContents>
                </label>
              </S.SelectCheckbox>
              {renderDeleteAllButton()}
            </S.SelectWrapper>
            <S.TitleWrapper>
              <S.Title>일반상품</S.Title>
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
            <S.OrderButton onClick={() => user && createTestCart(user.token)}>
              <S.OrderButtonText>테스트 장바구니 추가</S.OrderButtonText>
            </S.OrderButton>
          </S.EmptyContainer>
        )}
      </S.Container>
    </>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const token = getToken(req.headers.cookie);
  const cartListProps = token ? await API.Cart.getAll(token as string) : [];
  return {
    props: {
      cartListProps,
    },
  };
};

export default CartPage;

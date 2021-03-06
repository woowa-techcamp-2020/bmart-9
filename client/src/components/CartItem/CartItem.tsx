import React, { useState, useEffect } from 'react';
import * as S from './CartItemStyle';
import comma from '../../utils/numberComma';
import { ClientCart } from '../../../../shared'
import { $str } from "../../utils/localization";
import { useCart } from "../../hooks/useCart";
import { useUser } from "../../hooks/useUser";

import { Checkbox } from '../Checkbox';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";


const CartItem: React.FC<ClientCart> = ({
  id,
  userId,
  quantity: initQuantity,
  check,
  name,
  image,
  discount,
  basePrice,
  price,
  stock,
  createdAt,
  updatedAt,
}: ClientCart) => {

  const [currDisc, setCurrDisc] = useState<number>(0);
  const [tempQuantity, setTempQuantity] = useState<number>(initQuantity);

  const { updateCartQuantity, deleteCart, updateCartCheck } = useCart();
  const { user } = useUser();
  let description: string[] = [
    '',
    '1개 이하로 선택할 수 없습니다.',
    '해당 상품은 한번에 10개까지 구매할 수 있어요.',
  ];

  useEffect(() => {
    if (user !== null) updateCartQuantity(user.token, id, tempQuantity);
  }, [tempQuantity])

  const renderCartPrice = () => {
    if (discount > 0) {
      return <>
        <S.cartPriceFristLine>
          <S.cartDiscount>{discount}%</S.cartDiscount>
          <S.cartPrice> ({comma(price)}원)</S.cartPrice>
        </S.cartPriceFristLine>
        <S.cartPriceSecondLine>
          <S.cartTotalBasePrice>
            {comma(basePrice * tempQuantity)}원
        </S.cartTotalBasePrice>
          <S.cartTotalPrice> {comma(price * tempQuantity)}원</S.cartTotalPrice>
        </S.cartPriceSecondLine>
      </>
    } else {
      return <>
        <S.cartPriceFristLine>
          <S.cartPrice> ({comma(price)}원)</S.cartPrice>
        </S.cartPriceFristLine>
        <S.cartPriceSecondLine>
          <S.cartTotalPrice> {comma(price * tempQuantity)}원</S.cartTotalPrice>
        </S.cartPriceSecondLine>
      </>
    }
  }

  return (
    <S.Container>
      <S.cartHeader>
        <Checkbox checkboxId={id} isCheck={check} contents={name}></Checkbox>
        <S.deleteButton onClick={() => (user && deleteCart(user.token, id))}>삭제</S.deleteButton>
      </S.cartHeader>
      <S.cartBody>
        <S.cartImage src={image}></S.cartImage>
        <S.cartPriceWrapper>
          {renderCartPrice()}
          <S.cartDescription>{description[currDisc]}</S.cartDescription>
          <S.cartQuantityWrapper>
            <S.CartQuantityMinus disabled={tempQuantity <= 1} count={tempQuantity} onClick={() => tempQuantity > 1 && setTempQuantity(tempQuantity - 1)}>
              <FontAwesomeIcon icon={faMinus} />
            </S.CartQuantityMinus>
            <S.CartQuantity>{tempQuantity}</S.CartQuantity>
            <S.CartQuantityPlus disabled={tempQuantity >= 99} count={tempQuantity} onClick={() => tempQuantity < 99 && setTempQuantity(tempQuantity + 1)}>
              <FontAwesomeIcon icon={faPlus} />
            </S.CartQuantityPlus>
          </S.cartQuantityWrapper>
        </S.cartPriceWrapper>
      </S.cartBody>
    </S.Container>
  );

};

export default CartItem;

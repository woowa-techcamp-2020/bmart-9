import React, { useState, useEffect } from 'react';
import * as S from './CartItemStyle';
import comma from '../../utils/numberComma';
import { Cart } from '../../../../shared'
import { $str } from "../../utils/localization";
import { useCart } from "../../hooks/useCart";
import { constants } from 'os';

import { Checkbox } from '../Checkbox';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";


const CartItem: React.FC<Cart> = ({
  id,
  userId,
  quantity: initQuantity,
  isCheck: initCheck,
  name,
  image,
  discount,
  basePrice,
  price,
  stock,
  createdAt,
  updatedAt,
}: Cart) => {


  const [currDisc, setCurrDisc] = useState<number>(0);
  const [tempQuantity, setTempQuantity] = useState<number>(initQuantity);
  const [tempCheck, setTempCheck] = useState<number>(initCheck);

  const { updateCartQuantity, deleteCart, updateCartCheck } = useCart();
  let description: string[] = [
    '',
    '1개 이하로 선택할 수 없습니다.',
    '해당 상품은 한번에 10개까지 구매할 수 있어요.',
  ];

  useEffect(() => {
    updateCartQuantity(id, tempQuantity);
  }, [tempQuantity])

  useEffect(() => {
    updateCartCheck(id, tempCheck);
  }, [tempCheck])

  return (
    <S.Container>
      {/* <S.cartTitle>{name}</S.cartTitle> */}
      <S.cartHeader>
        <Checkbox checkboxId={id} isCheck={initCheck} contents={name}></Checkbox>
        <S.deleteButton onClick={() => deleteCart(id)}>삭제</S.deleteButton>
      </S.cartHeader>
      <S.cartBody>
        <S.cartImage src={image}></S.cartImage>
        <S.cartPriceWrapper>
          {discount > 0 ?
            <>
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
            </> :
            <>
              <S.cartPriceFristLine>
                <S.cartPrice> ({comma(price)}원)</S.cartPrice>
              </S.cartPriceFristLine>
              <S.cartPriceSecondLine>
                <S.cartTotalPrice> {comma(price * tempQuantity)}원</S.cartTotalPrice>
              </S.cartPriceSecondLine>
            </>
          }

          <S.cartDescription>{description[currDisc]}</S.cartDescription>
          <S.cartQuantityWrapper>
            <S.cartQuantityMinus onClick={() => tempQuantity > 1 && setTempQuantity(tempQuantity - 1)}>
              <FontAwesomeIcon icon={faMinus} />
            </S.cartQuantityMinus>
            <S.cartQuantity>{tempQuantity}</S.cartQuantity>
            <S.cartQuantityPlus onClick={() => tempQuantity < 100 && setTempQuantity(tempQuantity + 1)}>
              <FontAwesomeIcon icon={faPlus} />
            </S.cartQuantityPlus>
          </S.cartQuantityWrapper>
        </S.cartPriceWrapper>
      </S.cartBody>
    </S.Container>
  );

};

export default CartItem;

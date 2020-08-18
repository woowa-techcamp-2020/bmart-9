import React, { useState } from 'react';
import * as S from './CartItemStyle';
import comma from '../../utils/numberComma';
import {$str} from "../../utils/localization";
	
type Props = {
  id: number;
  checked: boolean | undefined;
  name: string;
  img: string;
  base_price: number;
  discount: number;
  price: number;
};

const CartItem: React.FC<Props> = ({
  id,
  checked: initChecked,
  name,
  img,
  base_price,
  discount,
  price,
}: Props) => {
  const [check, setChecked] = useState<boolean | undefined>(initChecked);
  const [quantity, setQuantity] = useState<number>(3);
  const [currDisc, setCurrDisc] = useState<number>(0);

  let description: string[] = [
    '',
    '1개 이하로 선택할 수 없습니다.',
    '해당 상품은 한번에 10개까지 구매할 수 있어요.',
  ];

  const increaseQuantity = () => {
    if (quantity >= 100) return;
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  const deleteCartItem = () => {
    console.log('삭제했다');
  };

  const checkboxOnchageHandler = () => {
    setChecked(!check);
  };
  return (
    <S.Container>
      <S.cartTitle>{name}</S.cartTitle>
      <S.cartHeader>
        <S.headerNameWrapper>
          <S.checkboxWrapper htmlFor={'cartCheckbox' + id}>
            <S.headerCheckbox
              id={'cartCheckbox' + id}
              type="checkbox"
              checked={check}
              onChange={checkboxOnchageHandler}
            ></S.headerCheckbox>
            <S.headerCheckboxMark></S.headerCheckboxMark>
          </S.checkboxWrapper>
          <S.headerName>{name}</S.headerName>
        </S.headerNameWrapper>
        <S.deleteButton onClick={() => deleteCartItem()}>삭제</S.deleteButton>
      </S.cartHeader>
      <S.cartBody>
        <S.cartImage src={img}></S.cartImage>
        <S.cartPriceWrapper>
          <div>
            <S.cartDiscount>{discount}%</S.cartDiscount>
            <S.cartPrice> ({comma(price)}원)</S.cartPrice>
          </div>
          <div>
            <S.cartTotalBasePrice>
              {comma(base_price * quantity)}원
            </S.cartTotalBasePrice>
            <S.cartTotalPrice> {comma(price * quantity)}원</S.cartTotalPrice>
          </div>
          <S.cartDescription>{description[currDisc]}</S.cartDescription>
          <S.cartQuantityWrapper>
            <S.cartQuantityMinus onClick={() => decreaseQuantity()}>
              {' '}
              -{' '}
            </S.cartQuantityMinus>
            <S.cartQuantity>{quantity}</S.cartQuantity>
            <S.cartQuantityPlus onClick={() => increaseQuantity()}>
              {' '}
              +{' '}
            </S.cartQuantityPlus>
          </S.cartQuantityWrapper>
        </S.cartPriceWrapper>
      </S.cartBody>
    </S.Container>
  );

};

export default CartItem;

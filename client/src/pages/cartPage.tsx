import React, { useState, useEffect } from 'react';
import { CartItem } from '../components/CartItem';
import { HorizontalBar } from '../components/HorizontalBar';

type Item = {
  id: number;
  checked: boolean;
  name: string;
  img: string;
  base_price: number;
  discount: number;
  price: number;
}



const cartItem: Item[] = [
  {
    id: 1,
    checked: true,
    name: "귀여운 비둘기 300g",
    img: "https://i.imgur.com/KLnzGrk.png",
    base_price: 3000,
    discount: 30,
    price: 2100,
  },
  {
    id: 2,
    checked: false,
    name: "볼빵빵 참새 150g",
    img: "https://i.imgur.com/FrBKe9W.png",
    base_price: 50000,
    discount: 20,
    price: 40000,
  },
  {
    id: 3,
    checked: true,
    name: "아이폰 XS Pro",
    img: "https://i.imgur.com/0vGb1eJ.png",
    base_price: 1200000,
    discount: 10,
    price: 1180000,
  },
];

const CartPage = () => {
  const [allCheck, setAllCheck] = useState(true);

  return (
    <>
      <div className="header">
        <HorizontalBar start="<" center="장바구니" end=" "></HorizontalBar>
      </div>
      <div className="selectWrapper">
        <HorizontalBar start="ㅁ 전체 선택" end="선택 비우기"></HorizontalBar>
      </div>
      <div className="cartItemWrapper">
        <HorizontalBar start="일반상품"></HorizontalBar>

        {cartItem.map((item: Item) => {
          return <CartItem key={item.id} {...item}></CartItem>
        })}
        <HorizontalBar center="+ 더 담으러 가기"></HorizontalBar>
      </div>
      <div className="totalWrapper">
        <HorizontalBar center="주문금액 : 300000원"></HorizontalBar>
      </div>
      <button> 42 400,000원 배달 주문 하기</button>

    </>
  );
};

export default CartPage;

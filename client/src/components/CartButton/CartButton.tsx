import React, { useState, useEffect } from 'react';
import * as S from './CartButtonStyle';
import { useCart } from "../../hooks/useCart";
import { Cart } from '../../../../shared';
import { useRouter } from 'next/router';

type Props = {}

const CartButton: React.FC<Props> = ({ }: Props) => {

	const { cartList, setCartList } = useCart();
	const [totalCount, setTotalCount] = useState(0);
	const { push } = useRouter();

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
		setTotalCount(tempCount);
	};

	return <S.Container>
		<S.Button onClick={() => push(`/cartPage`)}>
			{totalCount}
		</S.Button>
	</S.Container>;
};

export default CartButton;


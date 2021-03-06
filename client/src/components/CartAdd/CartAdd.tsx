import React, { useState } from 'react';
import * as S from './CartAddStyle';
import { Product, CreateCartBody } from '../../../../shared';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useSnackbar } from '../../hooks/useSnackbar';

import { useCart } from "../../hooks/useCart"
import { useCartAdd } from "../../hooks/useCartAdd"
import { useUser } from "../../hooks/useUser"
import comma from '../../utils/numberComma';

const CartAdd: React.FC = () => {
	const [count, setCount] = useState(1);
	const { createCart } = useCart();
	const { isLoggedIn, user, notLogggedInHandler } = useUser();
	const { addState, closeCartAdd } = useCartAdd();
	const { openSnackbar } = useSnackbar();
	const { name, img, price, id } = addState.product;

	const closeToggle = () => {
		closeCartAdd();
		setCount(1);
	}

	const stopPropagation = (event: React.MouseEvent<Element, MouseEvent>) => {
		event.stopPropagation();
	}

	const addAction = () => {
		if (!isLoggedIn) return notLogggedInHandler();

		openSnackbar('success', `${addState.product.name}을 장바구니에 ${count}개 추가했습니다.`)
		if (user !== null) createCart(user.token, addState.product.id, count);
		closeToggle();
	}

	return <S.Container onClick={() => closeToggle()} open={addState.isOpen} >
		<S.AdderWrapper open={addState.isOpen} onClick={stopPropagation}>
			<S.AdderHeader>
				<div></div>
				<S.HeaderName>
					{name}
				</S.HeaderName>
				<S.HeaderButton onClick={() => closeToggle()}>
					닫기
				</S.HeaderButton>
			</S.AdderHeader>
			<S.AdderBody>
				<S.BodyImg src={img} />
				<S.BodyContents>
					<S.ContentsName>
						{name}
					</S.ContentsName>
					<S.ContentsDisc>
						한번에 10개까지만 담을 수 있습니다람쥐
					</S.ContentsDisc>
					<S.ContentsPrice>
						{comma(price)}원
					</S.ContentsPrice>
				</S.BodyContents>
				<S.BodyButtonWrapper>
					<S.ButtonMinus disabled={count <= 1} count={count} onClick={() => count > 1 && setCount(count - 1)}>
						<FontAwesomeIcon icon={faMinus} />
					</S.ButtonMinus>
					<S.ProductQuantity>{count}</S.ProductQuantity>
					<S.ButtonPlus disabled={count >= 99} count={count} onClick={() => count < 99 && setCount(count + 1)}>
						<FontAwesomeIcon icon={faPlus} />
					</S.ButtonPlus>
				</S.BodyButtonWrapper>
			</S.AdderBody>
			<S.AdderFooter>
				<S.AdderButton onClick={() => addAction()}>
					<div></div>
					<S.AdderButtonName>
						{count}개 담기
					</S.AdderButtonName>
					<S.AdderButtonPrice>
						{comma(price * count)}원
					</S.AdderButtonPrice>
				</S.AdderButton>
			</S.AdderFooter>

		</S.AdderWrapper >
	</S.Container >;
};

export default CartAdd;


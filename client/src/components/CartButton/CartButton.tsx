import React, { useEffect } from 'react';
import * as S from './CartButtonStyle';
import { useCart } from "../../hooks/useCart";
import Link from "next/link"
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {}

const CartButton: React.FC<Props> = ({ }: Props) => {
	const { cartCount } = useCart();

	return <S.Container>
		<Link href="/cartPage">
			<S.Button>
				<FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
				<S.CartCount>{cartCount("cartButton")}</S.CartCount>
			</S.Button>
		</Link>
	</S.Container>;
};

export default CartButton;


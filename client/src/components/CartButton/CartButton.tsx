import React, { useEffect } from 'react';
import * as S from './CartButtonStyle';
import { useCart } from "../../hooks/useCart";
import { useUser } from "../../hooks/useUser";
import Link from "next/link"
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {}

const CartButton: React.FC<Props> = ({ }: Props) => {
	const { cartTotalCount } = useCart();
	const { isLoggedIn } = useUser();

	const renderButton = () => {
		if (isLoggedIn) {
			return <S.Container>
				<Link href="/cartPage">
					<S.Button>
						<FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
						<S.CartCount>{cartTotalCount()}</S.CartCount>
					</S.Button>
				</Link>
			</S.Container>
		}
	}

	return (<>{renderButton()}</>);
};

export default CartButton;


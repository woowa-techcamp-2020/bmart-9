import React, { useEffect } from 'react';
import * as S from './CartButtonStyle';
import { useCart } from "../../hooks/useCart";
import { useUser } from "../../hooks/useUser";
import { useRouter } from 'next/router';

import Link from "next/link"
import { Images } from '../../images';
type Props = {}

const CartButton: React.FC<Props> = ({ }: Props) => {
	const { cartTotalCount } = useCart();
	const { isLoggedIn } = useUser();
	const { pathname } = useRouter();

	const renderButton = () => {
		if (isLoggedIn) {
			return <S.Container >
				<Link href="/cartPage">
					<S.Button pathname={pathname}>
						<S.CartCount>{cartTotalCount()}</S.CartCount>
						<S.Img src={Images.CART_ICON_WHITE} />
					</S.Button>
				</Link>
			</S.Container>
		}
	}

	return (<>{renderButton()}</>);
};

export default CartButton;


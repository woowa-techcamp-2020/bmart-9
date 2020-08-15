import React from 'react';
import * as S from './CardImgStyle';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import "framework7-icons"

type Props = {
	imgSrc: string
}

export const CardImg: React.FC<Props> = (props : Props) => {
	const { imgSrc } = props
	return (
		<>
			<S.Container >
				<S.ImgWrapper>
					<S.Img src={imgSrc}/>
				</S.ImgWrapper>
				<S.HeartIcon icon={faHeart}/>
				<S.ShoppingCartIcon icon={faShoppingCart}/>
				<S.IQ>158</S.IQ>
			</S.Container>
		</>
	)
};

export default CardImg;

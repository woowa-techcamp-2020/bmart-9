import React from 'react';
import * as S from './CardImgStyle';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
// import "framework7-icons"

type Props = {
	imgSrc: string
}

export const CardImg: React.FC<Props> = (props : Props) => {
	const { imgSrc } = props
	return (
		<>
			<S.Container >
				<S.Img src={imgSrc}/>
				<S.HeartIcon icon={faHeart} color="red"/>
			</S.Container>
		</>
	)
};

export default CardImg;

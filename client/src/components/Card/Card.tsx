import React from 'react';
import * as S from './CardStyle';
import { CardImg } from './../CardImg'
import { CardContent } from './../CardContent'

export type CardProps = {
	id: number
	imgSrc: string
	productData: ProductDataProps
}

export type ProductDataProps = {
	productName: string
	productDiscountRate: number 
	productBasePrice: number
	productPrice: number
}

const Card: React.FC<CardProps>= ({id, imgSrc, productData}:CardProps) => {

		return(
			<S.Container>
				<CardImg imgSrc={imgSrc}/>
				<CardContent {...productData}/>
			</S.Container>
	)
};

export default Card;


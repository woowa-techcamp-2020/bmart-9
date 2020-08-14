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


	// const data: CardProps = 
	// 	{id: 1, imgSrc: "https://www.virtualtechgurus.com/wp-content/uploads/2016/10/square-img-300x300.png", productData: { productName: "달걀", productDiscountRate:10, productBasePrice: 1000, productPrice:800}}
		// {id: 2, imgSrc: "https://www.virtualtechgurus.com/wp-content/uploads/2016/10/square-img-300x300.png", productName: "달걀", productDiscountRate:10, productBasePrice: 1000, productPrice:800},
		// {id: 3, imgSrc: "https://www.virtualtechgurus.com/wp-content/uploads/2016/10/square-img-300x300.png", productName: "달걀", productDiscountRate:10, productBasePrice: 1000, productPrice:800},
		return(
			<S.Container>
					<CardImg imgSrc={imgSrc}/>
					<CardContent {...productData}/>
			</S.Container>
	)
};

export default Card;


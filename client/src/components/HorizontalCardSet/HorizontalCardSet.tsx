import React from 'react';
import * as S from './HorizontalCardSetStyle';
import { CardProps } from './../Card/Card'
import { Card } from './../Card'

const data = [
	{id: 1, imgSrc: "https://ca.slack-edge.com/T012893BY9K-U016Q97UAMP-39e5966a7de8-512", productData: { productName: "저글링", productDiscountRate:99, productBasePrice: 1000, productPrice:10}},
	{id: 2, imgSrc: "https://ca.slack-edge.com/T012893BY9K-U016HRKSX4L-9feca69a038a-512", productData: { productName: "골리앗", productDiscountRate:99, productBasePrice: 1000, productPrice:10}},
	{id: 3, imgSrc: "https://ca.slack-edge.com/T012893BY9K-U0132TZK4CW-0727e4228261-512	", productData: { productName: "혼욱스", productDiscountRate:50, productBasePrice: 2000, productPrice:1000}},
	{id: 4, imgSrc: "https://ca.slack-edge.com/T012893BY9K-U0139S99U1H-6b5227b5712c-512", productData: { productName: "클옹", productDiscountRate:50, productBasePrice: 2000, productPrice:1000}},
	{id: 5, imgSrc: "https://ca.slack-edge.com/T012893BY9K-U0164U4TD1C-b2f42b1562d2-512", productData: { productName: "코이라멘 마제소바", productDiscountRate:0, productBasePrice: 9000, productPrice:9000}},
	{id: 6, imgSrc: "https://ca.slack-edge.com/T012893BY9K-U016A94LF61-cf2fa8e18f4c-512", productData: { productName: "장해민", productDiscountRate:10, productBasePrice: 1000, productPrice:900}},
	{id: 7, imgSrc: "https://ca.slack-edge.com/T012893BY9K-U016A957Y69-30901f26ad09-512", productData: { productName: "김한", productDiscountRate:0, productBasePrice: 0, productPrice:0}},
]

const HorizontalCardSet: React.FC<CardProps> = (props : CardProps) => {

	return (
	<S.Container length={data.length}>
		{data.map(product => <Card key={product.id} {...product}/>)}
	</S.Container>
	);
};

export default HorizontalCardSet;

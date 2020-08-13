import React from 'react';
import * as S from './CardContentStyle';

type ProductDataProps = {
	productName: string
	productDiscountRate: number
	productBasePrice: number
	productPrice: number
}

export const CardContent: React.FC<ProductDataProps> = ( {productName, productDiscountRate, productBasePrice, productPrice} : ProductDataProps) => {
	// console.log(props)
	// const { productName, productDiscountRate, productBasePrice, productPrice} = props
	return (
		<>
			<S.Container>
				<S.ProductName>{productName}</S.ProductName>
				<S.PriceContainer>
				<S.ProductDiscountRate>{productDiscountRate}% </S.ProductDiscountRate>
				<S.ProductBasePrice>{productBasePrice} </S.ProductBasePrice>
				<S.ProductPrice>{productPrice}원 </S.ProductPrice>
				<S.CartIcon/>
				</S.PriceContainer>
			</S.Container>
		 </>
	)
};

export default CardContent;


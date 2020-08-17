import React from 'react';
import * as S from './CardContentStyle';
import { ProductDataProps } from './../Card/Card'

export const CardContent: React.FC<ProductDataProps> = ( {productName} : ProductDataProps) => {
	return (
		<>
			<S.Container>
				<S.ProductName>{productName}</S.ProductName>
			</S.Container>
		 </>
	)
};

export default CardContent;


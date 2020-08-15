import React from 'react';
import * as S from './HorizontalCardSetStyle';
import { CardProps } from './../Card/Card'
import { Card } from './../Card'

const HorizontalCardSet: React.FC<CardProps> = ( { data }  : CardProps) => {
	return (
	<S.Container>
		{data.map(product => <Card key={product.id} {...product}/>)}
	</S.Container>
	);
};

export default HorizontalCardSet;

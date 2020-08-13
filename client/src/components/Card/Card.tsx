import React from 'react';
import * as S from './CardStyle';
import { CardImg } from './../CardImg'
import { CardContent } from './../CardContent'

type Props = {
	imgSrc: string
}

const Card: React.FC<Props> = ({} : Props) => {

	const data: Props[] = [
		{imgSrc: "https://www.virtualtechgurus.com/wp-content/uploads/2016/10/square-img-300x300.png"}
	]
	
	return(
		<>
			<S.Container>
				<CardImg imgSrc={data[0].imgSrc}/>
				<CardContent/>
			</S.Container>
		</>
	)
};

export default Card;


import React from 'react';
import * as S from './CategoryContainerStyle';
import { Image } from './../../../../shared';

type CategoryProps = {
	iconImages: Image[];
}

const CategoryContainer: React.FC<CategoryProps> = ({ iconImages } : CategoryProps) => {

	return (
		<S.Container>
			<S.Category src={iconImages[0].img}/>
		</S.Container>
	)
};

export default CategoryContainer;


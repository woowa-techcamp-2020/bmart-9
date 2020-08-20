import React from 'react';
import * as S from './CategoryContainerStyle';
import { Image } from './../../../../shared';

type CategoryProps = {
	categoryIcons: Image[];
}

const CategoryContainer: React.FC<CategoryProps> = ({ categoryIcons } : CategoryProps) => {

	return (
		<S.Container>
			{categoryIcons.map((item) => (
        <S.Category key={item.id} src={item.img} name={item.name} />
      ))}
		</S.Container>
	)
};

export default CategoryContainer;


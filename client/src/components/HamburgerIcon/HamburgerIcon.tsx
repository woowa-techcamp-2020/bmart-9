import React from 'react';
import * as S from './HamburgerIconStyle';

type Props = {};

const HamburgerIcon: React.FC<Props> = ({}: Props) => {
  return (
	<S.Container>
		<S.Icon onClick={() => console.log(1)}>|||</S.Icon>
	</S.Container>
	)
};

export default HamburgerIcon;

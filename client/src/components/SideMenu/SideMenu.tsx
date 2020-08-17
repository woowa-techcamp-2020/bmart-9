import React from 'react';
import * as S from './SideMenuStyle';

type Props = {
	open: boolean;
}

const SideMenu: React.FC<Props> = ({ open, setOpen } : Props) => {

	return (
		<S.Container open={open}> 
			<S.Icon open={open} onClick={() => setOpen(!open)}>X</S.Icon>
		</S.Container>
	)
};

export default SideMenu;

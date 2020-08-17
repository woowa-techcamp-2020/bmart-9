import React, { useState } from 'react';
import * as S from './HamburgerStyle';
import { SideMenu } from './../SideMenu';

const HamburgerIcon: React.FC = () => {
	const [open, setOpen] = useState(false);

  return (
    <>
      <S.Container open={open} onClick={() => setOpen(!open)}>
        <S.Icon>|||</S.Icon>
      </S.Container>
			<SideMenu open={open} setOpen={setOpen}/>
    </>
  );
};

export default HamburgerIcon;

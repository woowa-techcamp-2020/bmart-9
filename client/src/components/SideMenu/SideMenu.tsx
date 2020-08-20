import React from 'react';
import * as S from './SideMenuStyle';

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideMenu: React.FC<Props> = ({ open, setOpen }: Props) => {
  return (
    <S.Container open={open}>
      <S.Icon onClick={() => setOpen(!open)}>X</S.Icon>
    </S.Container>
  );
};

export default SideMenu;

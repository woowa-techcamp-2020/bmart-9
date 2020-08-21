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
<br/><br/><br/>
가야 할 때가 언제인가를<br/>
분명히 알고 가는 이의<br/>
뒷모습은 얼마나 아름다운가.<br/>
<br/><br/>
봄 한철<br/>
격정을 인내한<br/>
나의 사랑은 지고 있다.<br/>
<br/><br/>
분분한 낙화...<br/>
결별이 이룩하는 축복에 싸여<br/>
지금은 가야 할 때<br/>
<br/><br/>
무성한 녹음과 그리고<br/>
머지않아 열매 맺는<br/>
가을을 향하여<br/>
나의 청춘은 꽃답게 죽는다.<br/>
<br/><br/>
헤어지자<br/>
섬세한 손길을 흔들며<br/>
하롱하롱 꽃잎이 지는 어느 날<br/>
<br/><br/>
나의 사랑, 나의 결별<br/>
샘터에 물 고이듯 성숙하는<br/>
내 영혼의 슬픈 눈.<br/>
    </S.Container>
  );
};

export default SideMenu;

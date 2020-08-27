import React from 'react';
import * as S from './SideMenuStyle';
import { useUser } from '../../hooks/useUser';
import { Images } from '../../images';
import { HorizontalBar } from '../HorizontalBar';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MainContainer } from '../MainContainer';
import { useRouter } from 'next/router';
import { IconButton } from '../IconButton';
import { useCategory } from '../../hooks/useCategory';
import { BoxCategory } from '../BoxCategory';
import { BoxButton } from '../BoxButton';

type Props = {
  open: boolean;
  toggleOpen: () => void;
};

const BUTTON_WIDTH = '49%';

const SideMenu: React.FC<Props> = ({ open, toggleOpen }: Props) => {
  const { isLoggedIn, user, signOut, authHandler } = useUser(toggleOpen);
  const { push } = useRouter();
  const { category } = useCategory();

  const renderAuthenticationHandler = () => {
    return isLoggedIn ? (
      <>
        <HorizontalBar
          start={`안녕하세요. ${user!.name}님`}
          center=" "

          // end={<IconButton icon={faSignOutAlt} onClickHandler={signOut} />}
        />
        <S.ButtonContainer>
          <BoxButton
            title={'주문 내역  📄  '}
            href="/order"
            width={BUTTON_WIDTH}
          />
          <BoxButton
            title={'찜한 상품  ❤️  '}
            href="/favorite"
            width={BUTTON_WIDTH}
          />
        </S.ButtonContainer>
      </>
    ) : (
      <S.Authentication onClick={authHandler}>
        <S.GoHome>깃헙으로 로그인하기</S.GoHome>
        <S.Image src={Images.GITHUB} />
      </S.Authentication>
    );
  };

  const goToHome = () => {
    push('/');
    toggleOpen();
  };

  const renderCategory = () => {
    return <BoxCategory />;
  };

  return (
    <S.Container open={open}>
      <MainContainer>
        <HorizontalBar
          start={
            <S.GoHome onClick={goToHome}>
              B마트 홈<span>으로 가기 {' >'} </span>
            </S.GoHome>
          }
          end={<IconButton icon={faTimes} onClickHandler={toggleOpen} />}
        />
        <HorizontalBar />
        <HorizontalBar start={renderAuthenticationHandler()} />
      </MainContainer>
      <HorizontalBar start={<S.GoHome>카테고리</S.GoHome>} />
      <BoxCategory categories={category} />
      {renderCategory()}

      {isLoggedIn && <BoxButton title={'로그아웃'} width={'70%'} />}
    </S.Container>
  );
};

export default SideMenu;

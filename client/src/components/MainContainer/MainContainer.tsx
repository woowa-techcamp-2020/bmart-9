import React from 'react';
import * as S from './MainContainerStyle';

type Props = {};

const MainContainer: React.FC<Props> = ({ children }) => {
  return (
    <S.Container>
      <S.Warpper>{children}</S.Warpper>
      <S.Padding />
    </S.Container>
  );
};

export default MainContainer;

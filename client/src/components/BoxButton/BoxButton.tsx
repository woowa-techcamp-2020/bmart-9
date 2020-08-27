import React from 'react';
import * as S from './BoxButtonStyle';

type Props = {
  title: string;
  width: string;
  onClickHandler?: () => void;
};

const BoxButton: React.FC<Props> = ({
  title,
  width,
  onClickHandler,
}: Props) => {
  return (
    <S.Button width={width} onClick={onClickHandler}>
      {title}
    </S.Button>
  );
};

export default BoxButton;

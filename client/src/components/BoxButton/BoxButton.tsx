import React from 'react';
import * as S from './BoxButtonStyle';
import Link from 'next/link';

type Props = {
  title: string;
  width: string;
  onClickHandler?: () => void;
  href?: string;
  as?: string;
};

const BoxButton: React.FC<Props> = ({
  title,
  width,
  onClickHandler,
  href,
  as,
}: Props) => {
  if (href && as) {
    return (
      <Link href={href} as={as}>
        <S.Button width={width}>{title}</S.Button>
      </Link>
    );
  }

  if (href) {
    return (
      <Link href={href}>
        <S.Button width={width}>{title}</S.Button>
      </Link>
    );
  }
  return (
    <S.Button width={width} onClick={onClickHandler}>
      {title}
    </S.Button>
  );
};

export default BoxButton;

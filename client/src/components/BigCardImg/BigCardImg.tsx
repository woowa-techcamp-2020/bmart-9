import React, { useState } from 'react';
import * as S from './BigCardImgStyle';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useFavorite } from '../../hooks/useFavorite';
import { useUser } from '../../hooks/useUser';

type Props = {
  id: number;
  imgSrc: string;
};

export const BigCardImg: React.FC<Props> = ({ id, imgSrc }: Props) => {
  const { isFavorite, onClickFavoriteHandler } = useFavorite();
  const { user, isLoggedIn, notLogggedInHandler } = useUser();

  const toggleLike = async (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.stopPropagation();

    if (!isLoggedIn) {
      return notLogggedInHandler();
    }

    await onClickFavoriteHandler(id, user!.token);
  };

  return (
    <>
      <S.Container>
        <S.ImgWrapper>
          <S.Img src={imgSrc} />
        </S.ImgWrapper>
        <S.HeartIcon
          onClick={toggleLike}
          icon={faHeart}
          like={isFavorite(id) ? 'red' : 'white'}
        />
      </S.Container>
    </>
  );
};

export default BigCardImg;

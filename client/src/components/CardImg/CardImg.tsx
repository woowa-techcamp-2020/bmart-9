import React, { useState } from 'react';
import * as S from './CardImgStyle';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useFavorite } from '../../hooks/useFavorite';
import { useUser } from '../../hooks/useUser';

type Props = {
  id: number;
  imgSrc: string;
  viewportWidth: number;
};

export const CardImg: React.FC<Props> = ({
  id,
  imgSrc,
  viewportWidth,
}: Props) => {
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
          <S.Img src={imgSrc} viewportWidth={viewportWidth} />
        </S.ImgWrapper>
        <S.HeartIcon
          onClick={toggleLike}
          icon={faHeart}
          like={isFavorite(id) ? 'red' : 'white'}
        />
        <S.ShoppingBagIcon icon={faShoppingBag} />
      </S.Container>
    </>
  );
};

export default CardImg;

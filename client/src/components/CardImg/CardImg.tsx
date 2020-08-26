import React, { useState } from 'react';
import * as S from './CardImgStyle';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../../shared';
import { useCartAdd } from '../../hooks/useCartAdd';

// import "framework7-icons"
import { useFavorite } from '../../hooks/useFavorite';
import { useUser } from '../../hooks/useUser';

type Props = {
  id: number;
  imgSrc: string;
  viewportWidth: number
  product: Product;
};

export const CardImg: React.FC<Props> = (props: Props) => {
  const { isFavorite, onClickFavoriteHandler } = useFavorite();
  const { user, isLoggedIn, notLogggedInHandler } = useUser();
  const { id, imgSrc, viewportWidth, product } = props;
  const { openCartAdd } = useCartAdd();
  const [like, setLike] = useState(false);

  const toggleLike = async (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.stopPropagation();

    if (!isLoggedIn) {
      return notLogggedInHandler();
    }

    await onClickFavoriteHandler(id, user!.token);
  };

  const openCartAction = async (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.stopPropagation();
    openCartAdd(product);
  }

  return (
    <>
      <S.Container>
        <S.ImgWrapper>
          <S.Img src={imgSrc} viewportWidth={viewportWidth} />
        </S.ImgWrapper>
        <S.HeartIcon onClick={toggleLike} icon={faHeart} like={like ? 'red' : 'white'} />
        <S.ShoppingBagIcon icon={faShoppingBag} onClick={openCartAction} />
      </S.Container>
    </>
  );
};

export default CardImg;

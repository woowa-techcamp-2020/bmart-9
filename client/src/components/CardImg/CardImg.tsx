import React, { useState } from 'react';
import * as S from './CardImgStyle';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../../shared';
import { useCartAdd } from '../../hooks/useCartAdd';
import { useFavorite } from '../../hooks/useFavorite';
import { useUser } from '../../hooks/useUser';
import { Images } from '../../images';
type Props = {
  viewportWidth: number
  product: Product;
};

export const CardImg: React.FC<Props> = (props: Props) => {
  const { isFavorite, onClickFavoriteHandler } = useFavorite();
  const { user, isLoggedIn, notLogggedInHandler } = useUser();
  const { viewportWidth, product } = props;
  const { openCartAdd } = useCartAdd();
  const [like, setLike] = useState(false);

  const toggleLike = async (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.stopPropagation();

    if (!isLoggedIn) {
      return notLogggedInHandler();
    }

    await onClickFavoriteHandler(product.id, user!.token);
  };

  const openCartAction = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();

    if (!isLoggedIn) {
      return notLogggedInHandler();
    }

    openCartAdd(product);
  }

  return (
    <>
      <S.Container>
        <S.ImgWrapper>
          <S.Img src={product.img} viewportWidth={viewportWidth} />
        </S.ImgWrapper>
        <S.HeartIcon onClick={toggleLike} icon={faHeart} like={isFavorite(product.id) ? 'red' : 'white'} />
        <S.ShoppingIconWrapper onClick={openCartAction}>
          <S.ShoppingBagIcon src={Images.CART_ICON_MINT} />
        </S.ShoppingIconWrapper>
      </S.Container>
    </>
  );
};

export default CardImg;

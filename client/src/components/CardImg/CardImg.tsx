import React, { useState } from 'react';
import * as S from './CardImgStyle';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../../shared';

import { useCartAdd } from '../../hooks/useCartAdd';

// import "framework7-icons"

type Props = {
  imgSrc: string;
  viewportWidth: number
  product: Product;
};

export const CardImg: React.FC<Props> = (props: Props) => {
  const { imgSrc, viewportWidth, product } = props;
  const { openCartAdd } = useCartAdd();
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
  };


  return (
    <>
      <S.Container>
        <S.ImgWrapper>
          <S.Img src={imgSrc} viewportWidth={viewportWidth} />
        </S.ImgWrapper>
        <S.HeartIcon onClick={toggleLike} icon={faHeart} like={like ? 'red' : 'white'} />
        <S.ShoppingBagIcon icon={faShoppingBag} onClick={() => openCartAdd(product)} />
      </S.Container>
    </>
  );
};

export default CardImg;

import React, { useState } from 'react';
import * as S from './CardImgStyle';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import "framework7-icons"

type Props = {
  imgSrc: string;
  productPrice: number;
};

export const CardImg: React.FC<Props> = (props: Props) => {
	const { imgSrc, productPrice } = props;
	
	const [like, setLike] = useState(false);
  
	const toggleLike = () => {
		setLike(!like);
	};

  return (
    <>
      <S.Container>
        <S.ImgWrapper>
          <S.Img src={imgSrc} />
        </S.ImgWrapper>
        <S.HeartIcon onClick={() => toggleLike()} icon={faHeart} like={like ? 'red' : 'white'}/>
        <S.ShoppingCartIcon icon={faShoppingCart} />
        <S.IQ>{productPrice}</S.IQ>
      </S.Container>
    </>
  );
};

export default CardImg;

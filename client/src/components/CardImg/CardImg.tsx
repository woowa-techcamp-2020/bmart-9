import React, { useState } from 'react';
import * as S from './CardImgStyle';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// import "framework7-icons"

type Props = {
  imgSrc: string;
  viewportWidth: number;
};

export const CardImg: React.FC<Props> = ({ imgSrc, viewportWidth }: Props) => {
  const [like, setLike] = useState(false);

  const toggleLike = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.stopPropagation();

    setLike(!like);
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
          like={like ? 'red' : 'white'}
        />
        <S.ShoppingBagIcon icon={faShoppingBag} />
      </S.Container>
    </>
  );
};

export default CardImg;

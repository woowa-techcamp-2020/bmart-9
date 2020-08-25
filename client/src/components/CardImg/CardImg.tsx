import React, { useState } from 'react';
import * as S from './CardImgStyle';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// import "framework7-icons"

type Props = {
  imgSrc: string;
  width: number
};

export const CardImg: React.FC<Props> = (props: Props) => {
	const { imgSrc, width } = props;
	
	const [like, setLike] = useState(false);
  
	const toggleLike = () => {
		setLike(!like);
	};

  return (
    <>
      <S.Container>
        <S.ImgWrapper>
          <S.Img src={imgSrc} width={width}/>
        </S.ImgWrapper>
        <S.HeartIcon onClick={toggleLike} icon={faHeart} like={like ? 'red' : 'white'}/>
        <S.ShoppingBagIcon icon={faShoppingBag} />
      </S.Container>
    </>
  );
};

export default CardImg;

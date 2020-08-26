import React, { useState } from 'react';
import * as S from './BigCardImgStyle';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

type Props = {
  imgSrc: string;
};

export const BigCardImg: React.FC<Props> = (props: Props) => {
  const { imgSrc } = props;

  const [like, setLike] = useState(false);

  const toggleLike = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.stopPropagation();

    setLike(!like);
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
          like={like ? 'red' : 'white'}
        />
      </S.Container>
    </>
  );
};

export default BigCardImg;

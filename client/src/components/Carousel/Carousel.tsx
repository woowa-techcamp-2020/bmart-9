import React from 'react';
import * as S from './CarouselStyle';

export type PromotionImgDataProps = {
  promotionImgData: {
    id: number;
    imgSrc: string;
  }[];
};

const Carousel: React.FC<PromotionImgDataProps> = ({
  promotionImgData,
}: PromotionImgDataProps) => {
  const length: number = promotionImgData.length;

  return (
    <S.Container>
      {promotionImgData.map((img) => (
        <S.Img key={img.id} length={length} src={img.imgSrc} />
      ))}
      <S.Img length={length} src={promotionImgData[0].imgSrc} />
    </S.Container>
  );
};

export default Carousel;

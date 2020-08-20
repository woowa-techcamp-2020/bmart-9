import React from 'react';
import * as S from './CarouselStyle';

export type PromotionImgDataProps = {
  promotionImgData: {
    id: number;
    imgSrc: string;
  }[];
};

const Carousel: React.FC<PromotionImgDataProps> = ({
  bannerImages,
}: PromotionImgDataProps) => {
  const length: number = bannerImages.length;

  return (
    <S.Container>
      {bannerImages.map((item) => (
        <S.Img key={item.id} length={length} src={item.img} />
      ))}
      <S.Img length={length} src={bannerImages[0].img} />
    </S.Container>
  );
};

export default Carousel;

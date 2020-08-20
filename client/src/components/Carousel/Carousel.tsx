import React from 'react';
import * as S from './CarouselStyle';
import { Image } from './../../../../shared';

type ImageProps = {
  bannerImages: Image[];
};

const Carousel: React.FC<ImageProps> = ({ bannerImages }: ImageProps) => {
  const length: number = bannerImages.length;

  return (
    <S.Container>
      {bannerImages.map((item) => (
        <S.Img key={item.id} length={length} src={item.img} name={item.name} />
      ))}
      <S.Img length={length} src={bannerImages[0].img} name={bannerImages[0].name}/>
    </S.Container>
  );
};

export default Carousel;

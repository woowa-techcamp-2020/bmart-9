import React from 'react';
import * as S from './SmallBannersStyle';
import { Carousel } from '../Carousel';
import { Image } from '../../../../shared';
import { Images } from '../../images';
type Props = {};

const SmallBanners: React.FC<Props> = ({}: Props) => {
  const images: Image[] = [
    { id: 13, name: 'small_1', img: Images.SMALL_BANNER1 },
    { id: 14, name: 'small_2', img: Images.SMALL_BANNER2 },
    { id: 15, name: 'small_3', img: Images.SMALL_BANNER3 },
    { id: 16, name: 'small_4', img: Images.SMALL_BANNER4 },
    { id: 17, name: 'small_5', img: Images.SMALL_BANNER5 },
  ];
  return <Carousel isSmall={true} bannerImages={images} />;
};

export default SmallBanners;

import React from 'react';
import API from '../api';
import { InferGetStaticPropsType } from 'next';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';
import { CategoryContainer } from '../components/CategoryContainer';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { FourCardsContainer } from '../components/FourCardsContainer';
import { useProduct } from '../hooks/useProduct';

import { SixCardsContainer } from '../components/SixCardsContainer';
import { CategorizedCardContainer } from '../components/CategorizedCardContainer';
import { SmallBanners } from '../components/SmallBanners';
import { useRouter } from 'next/router';
import { useMap } from '../hooks/useMap';
import { useSnackbar } from '../hooks/useSnackbar';
import { useUser } from '../hooks/useUser';
import { onReceiveHandler } from '../utils/socket';

const IndexPage = ({
  bannerImages,
  categoryIcons,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { products } = useProduct();
  const { user } = useUser();
  const Router = useRouter();
  const { moveTo } = useMap();
  const { openSnackbar } = useSnackbar();

  user && onReceiveHandler(user.id, openSnackbar, Router, moveTo);
  return (
    <>
      <Header />
      <div style={{ height: '100%', overflowY: 'scroll' }}>
        <Carousel bannerImages={bannerImages} />
        <CategoryContainer categoryIcons={categoryIcons} />
        {products && (
          <>
            <HorizontalSlider
              start={'10초만에 당신께 도달할 우리의 훈련된 새!달!원!'}
              products={products.slice(0, 7)}
            />
            <FourCardsContainer
              start={'지금사면 ⚡️ 번쩍할인'}
              end={'더보기 〉'}
              products={products.filter(product=> product.discount).slice(10, 14)}
            />
            <SixCardsContainer
              start={'지금 뭐 먹지?'}
              products={products.slice(44, 68)}
            />
            <HorizontalSlider
              start={'특별 모음전'}
              products={products.slice(10, 20)}
            />
            <HorizontalSlider
              start={'오늘만 하는 세일'}
              products={products.slice(20, 30)}
            />
            <SmallBanners />
            <CategorizedCardContainer
              start={'카테고리 이름'}
              end={'더보기 〉'}
              products={products}
              categories={categories}
            />
          </>
        )}
      </div>
      
    </>
  );
};

export const getStaticProps = async () => {
  const bannerImages = await API.Image.getBannersImage();
  const categoryIcons = await API.Image.getCategoryIcons();
  const categories = await API.Category.getAll();
  return {
    props: {
      bannerImages,
      categoryIcons,
      categories,
    },
  };
};

export default IndexPage;

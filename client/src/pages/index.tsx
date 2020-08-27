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

const IndexPage = ({
  bannerImages,
  categoryIcons,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { products } = useProduct();
  return (
    <>
      <Header />
      <div style={{ height: '100%', overflowY: 'scroll' }}>
        <Carousel bannerImages={bannerImages} />
        <CategoryContainer categoryIcons={categoryIcons} />
        {products && (
          <>
            <HorizontalSlider
              start={'고객님이 좋아할 베스트 아이템'}
              products={products.slice(0, 10)}
            />
            <FourCardsContainer
              start={'지금사면 ⚡️ 번쩍할인'}
              end={'더보기 〉'}
              products={products.slice(40, 44)}
            />
            <SixCardsContainer start={'지금 뭐 먹지?'} products={products.slice(44, 68)}/>
            <HorizontalSlider
              start={'특별 모음전'}
              end={'더보기 〉'}
              products={products.slice(10, 20)}
            />
            <HorizontalSlider
              start={'오늘만 하는 세일'}
              products={products.slice(20, 30)}
            />
            <HorizontalSlider
              start={'날이면 날마다 오는 세일 ㅇㅇ'}
              products={products.slice(30, 40)}
            />
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

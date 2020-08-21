import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import API from '../../api';
import { useCategory } from '../../hooks/useCategory';
import { useProduct } from '../../hooks/useProduct';
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import * as S from '../../styles/categoryDetailStyle';
import { BoxCategory } from '../../components/BoxCategory';
import { HorizontalBar } from '../../components/HorizontalBar';
import { HorizontalSlider } from '../../components/HorizontalSlider';

const CategoryDetailPage = ({
  greet,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { query } = useRouter();
  const { category } = useCategory();
  const currentCategory = category
    ? category.find(({ id }) => query.id === id.toString())
    : null;
  const { products } = useProduct();
  const filteredProducts = products
    ? products!.filter(
        (product) => product.category1_id.toString() === (query.id as string)
      )
    : null;

  if (!currentCategory || !filteredProducts) {
    return <div>loading...</div>;
  }

  return (
    <>
      <HorizontalBar center={currentCategory.name} start={'<'} end={'🔍'} />
      <BoxCategory categories={currentCategory.subCategory} />
      {filteredProducts && (
        <>
          <HorizontalSlider
            start={'고객님이 좋아할 베스트 아이템'}
            products={filteredProducts.slice(0, 10)}
          />
          <HorizontalSlider
            start={'특별 모음전'}
            end={'더보기 >'}
            products={filteredProducts.slice(10, 20)}
          />
          <HorizontalSlider
            start={'오늘만 하는 세일'}
            products={filteredProducts.slice(20, 30)}
          />
        </>
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '420234' } },
      { params: { id: '420376' } },
      { params: { id: '435072' } },
      { params: { id: '435052' } },
      { params: { id: '464913' } },
      { params: { id: '420388' } },
      { params: { id: '420337' } },
      { params: { id: '435052' } },
      { params: { id: '420186' } },
      { params: { id: '464911' } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const products = await API.Product.getByCategory2Id(+(params!.id as string));
  console.log(products);
  return {
    props: { greet: 'hello' },
  };
};

export default CategoryDetailPage;

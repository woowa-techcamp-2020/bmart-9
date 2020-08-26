import React from 'react';
import { useRouter } from 'next/router';
import API from '../../api';
import { useCategory } from '../../hooks/useCategory';
import { useProduct } from '../../hooks/useProduct';
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { BoxCategory } from '../../components/BoxCategory';
import { HorizontalSlider } from '../../components/HorizontalSlider';
import { Header } from '../../components/Header';
import { TenCardsContainer } from '../../components/TenCardsContainer';
import { HorizontalBar } from '../../components/HorizontalBar';

const CategoryDetailPage = ({
  categoryInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { query } = useRouter();
  const { category } = useCategory();
  const { getFilteredProductByCategory } = useProduct();

  const currentCategory =
    categoryInfo || category.find(({ id }) => query.id === id.toString());

  const isSubCategory = categoryInfo ? true : false;
  const filteredProducts = getFilteredProductByCategory(
    +query.id,
    isSubCategory
  );

  if (!currentCategory || !filteredProducts) {
    return <div>loading...</div>;
  }

  const horizonProducts = isSubCategory ? [] : filteredProducts.slice(0, 10);
  const restProducts = isSubCategory
    ? filteredProducts
    : filteredProducts.slice(10);

  return (
    <>
      <Header title={currentCategory.name} />

      <BoxCategory categories={currentCategory.subCategory} />
      {filteredProducts && (
        <>
          {!isSubCategory && (
            <HorizontalSlider
              start={'고객님이 좋아할 베스트 아이템'}
              products={horizonProducts}
            />
          )}
          <HorizontalBar
            center={`훌륭한 품질의 ${currentCategory.name}, Bmart와 함께`}
          />
          <TenCardsContainer products={restProducts} />
        </>
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const categoryInfo = await API.Category.getOneByCategory2Id(
    Number(params!.id)
  );

  const res = Object.keys(categoryInfo).length === 0 ? null : categoryInfo;
  return {
    props: { categoryInfo: res },
  };
};

export default CategoryDetailPage;

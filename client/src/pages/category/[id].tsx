import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import API from '../../api';
import { useCategory } from '../../hooks/useCategory';
import { useProduct } from '../../hooks/useProduct';
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next';

const CategoryDetailPage = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { query } = useRouter();
  console.log(products);

  const { category } = useCategory();
  const { setProductByCategory2_id } = useProduct();

  return <p>hello </p>;
};

export const getStaticPaths = async () => {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{ params: { id: '464911' } }, { params: { id: '2' } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  console.log(params);
  //   console.log(+(params!.id as string));
  const products = await API.Product.getByCategory2Id(+(params!.id as string));
  return {
    props: { products },
  };
};

export default CategoryDetailPage;

import React from 'react';
import API from '../../api';
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { Header } from '../../components/Header';
import * as S from './ProductStyle';

import { ProductDetail } from '../../components/ProductDetail';

import { useFavorite } from '../../hooks/useFavorite';
import { useCartAdd } from '../../hooks/useCartAdd';
import { useUser } from '../../hooks/useUser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import COMMA from '../../utils/numberComma';

const ProductDetailPage = ({
  productInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!productInfo) {
    return null;
  }
  const { openCartAdd } = useCartAdd();
  const { user, isLoggedIn, notLogggedInHandler } = useUser();
  const { isFavorite, onClickFavoriteHandler } = useFavorite();

  const toggleLike = async (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (!isLoggedIn) {
      return notLogggedInHandler();
    }

    await onClickFavoriteHandler(productInfo.id, user!.token);
  };

  const openCartAction = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();


    if (!isLoggedIn) {
      return notLogggedInHandler();
    }

    openCartAdd(productInfo);

  }

  return (
    <>
      {/* <Header title={productInfo.category2} /> */}
      <Header title="상품" />
      <S.Container>
        <S.Img src={productInfo.img} />
        <S.InfoWrapper>
          <S.ProductInfoWrapper>
            <S.Name>
              {productInfo.name}
            </S.Name>
            <S.PriceWrapper>
              {productInfo.discount > 0 &&
                <>
                  <S.Discount>{productInfo.discount}% </S.Discount>
                  <S.BasePrice>{COMMA(productInfo.base_price)}원</S.BasePrice>
                </>
              }
              <S.Price> {COMMA(productInfo.price)}원</S.Price>
            </S.PriceWrapper>
          </S.ProductInfoWrapper>
          <S.LikeIconWrapper like={isFavorite(productInfo.id) ? 'red' : '#ddd'}>
            <FontAwesomeIcon icon={faHeart} onClick={toggleLike} ></FontAwesomeIcon>
          </S.LikeIconWrapper>
        </S.InfoWrapper>

        <ProductDetail />

        <S.EmptySpace></S.EmptySpace>
        <S.OrderButton onClick={(e) => openCartAction(e)}>
          <S.OrderButtonText>
            구매하기
            </S.OrderButtonText>
        </S.OrderButton>
        <S.BottomConcealer />
      </S.Container>
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
  const productInfo = await API.Product.getOne(Number(params!.id));

  return {
    props: { productInfo },
  };
};

export default ProductDetailPage;

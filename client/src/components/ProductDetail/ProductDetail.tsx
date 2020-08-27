import React from 'react';
import * as S from './ProductDetailStyle';

type Props = {};

const ProductDetail: React.FC<Props> = ({}: Props) => {
  return (
    <S.Container>
			<S.TextImg src="https://bmart-9.s3.ap-northeast-2.amazonaws.com/public/product_detail/9A3AF0F2-C75D-4A7A-863A-78A0773D2813_4_5005_c.jpeg"/>
      <S.ImageImg src="https://bmart-9.s3.ap-northeast-2.amazonaws.com/public/image+1.png" />
			<S.TextImg src="https://bmart-9.s3.ap-northeast-2.amazonaws.com/public/product_detail/CC4DAB90-7366-4D12-BCDD-0DADADBA0EB1_1_201_a.jpeg"/>
			<S.TextImg src="https://bmart-9.s3.ap-northeast-2.amazonaws.com/public/product_detail/CDF541D7-98DF-4427-B505-86AB3D1916DF_1_201_a.jpeg"/>
    </S.Container>
  );
};

export default ProductDetail;

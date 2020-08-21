import React from 'react';
import * as S from './CategoryContainerStyle';
import { Image } from './../../../../shared';
import { MainContainer } from '../MainContainer';
import { useRouter } from 'next/router';
import { useCategory } from '../../hooks/useCategory';

type CategoryProps = {
  categoryIcons: Image[];
};

// 420186	과일        10	main-salad
// 420208	채소
// 420234	정육        2	main_home
// 420266	수산/건어물
// 420312	쌀/김치/반찬  9	main-milk
// 420337	밀키트/요리   8	main-mealkit
// 420350	델리/간편식   2	main_home
// 420376	베이커리      3 main_bread
// 420388	어린이식품    7	main-ice
// 429752	선물세트
// 435052	계란/유제품   5	main-egg
// 435072	디저트/음료   4	main_choco
// 435195	테마관
// 464911	가공/건강식품   11	main-yasik
// 464913	생활용품      6	main-hair

const categoryRouting = [
  '420234',
  '420376',
  '435072',
  '435052',
  '464913',
  '420388',
  '420337',
  '435052',
  '420186',
  '464911',
];

const CategoryContainer: React.FC<CategoryProps> = ({
  categoryIcons,
}: CategoryProps) => {
  const { push } = useRouter();

  return (
    <MainContainer>
      <S.Container>
        {categoryIcons.map((item, idx) => (
          <S.Category
            key={item.id}
            src={item.img}
            onClick={() => push(`/category/${categoryRouting[idx]}`)}
          />
        ))}
      </S.Container>
    </MainContainer>
  );
};

export default CategoryContainer;

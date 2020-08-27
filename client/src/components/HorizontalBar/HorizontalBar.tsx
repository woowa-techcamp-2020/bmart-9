import React from 'react';
import * as S from './HorizontalBarStyle';

type Props = {
  start?: any;
  center?: any;
  end?: any;
  displayNextProducts?: () => void;
  fontWeight?: string;
};

const HorizontalBar: React.FC<Props> = ({
  fontWeight,
  start,
  center,
  end,
  displayNextProducts,
}: Props) => {
  return (
    <S.Container
      fontWeight={fontWeight}
      isStart={start ? '1fr' : ''}
      isCenter={center ? '1fr' : ''}
      isEnd={end ? '1fr' : ''}
    >
      {start !== undefined && <S.Start>{start}</S.Start>}
      {center !== undefined && (
        <S.Center onClick={displayNextProducts}>{center}</S.Center>
      )}
      {end !== undefined && <S.End>{end}</S.End>}
    </S.Container>
  );
};

export default HorizontalBar;

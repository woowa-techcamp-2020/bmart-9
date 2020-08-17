import React, { useState } from 'react';
import * as S from './styled';
import { useCounter } from '../../hooks/useCounter';

const Counter: React.FC = () => {
  const { counter, plus, minus } = useCounter();
  console.log('counter rerender');
  return (
    <React.Fragment>
      <S.Button onClick={minus} color={'red'}>
        -
      </S.Button>
      <S.CounterText count={counter}>{counter}</S.CounterText>
      <S.Button onClick={plus} color={'blue'}>
        +
      </S.Button>
    </React.Fragment>
  );
};

export default Counter;

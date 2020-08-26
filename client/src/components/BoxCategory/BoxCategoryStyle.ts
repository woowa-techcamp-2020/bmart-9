import styled from 'styled-components';
import { GRAY_001, GRAY_003 } from '../../styles/GlobalStyle';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  display: flex;
  padding: 0 0 0 20px;
  align-items: center;
  width: 50%;
  height: 50px;
  font-weight: 200;
  border: 0.5px solid ${GRAY_001};

  transition: all 100ms ease;
  &:active {
    background: ${GRAY_003};
    transform: scale(0.98);
  }
`;

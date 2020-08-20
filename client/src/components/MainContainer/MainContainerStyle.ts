import styled from 'styled-components';
import { GRAY_002 } from '../../styles/GlobalStyle';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Warpper = styled.div`
  box-shadow: 0 2px 1.5px -1.5px black;
`;

export const Padding = styled.div`
  height: 3px;
  width: 100%;
  background: ${GRAY_002};
`;

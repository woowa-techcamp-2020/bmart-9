import styled from 'styled-components';
import { GRAY_001, GRAY_002 } from '../../styles/GlobalStyle';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  height: 100%;
  background: white;
  padding-bottom: 4px;
  border-bottom: 0.1px solid ${GRAY_002};
  /* box-shadow: 0 2px 1.5px -1px black; */
`;

export const Image = styled.img`
  height: 30px;
`;

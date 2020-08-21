import styled from 'styled-components';
import { GRAY_001 } from '../../styles/GlobalStyle';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  display: flex;
  /* justify-content: center; */
  padding: 0 0 0 20px;
  align-items: center;
  width: 50%;
  height: 50px;
  font-weight: 200;
  border: 0.5px solid ${GRAY_001};
`;

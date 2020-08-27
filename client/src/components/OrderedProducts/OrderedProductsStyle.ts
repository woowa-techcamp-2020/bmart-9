import styled from 'styled-components';
import { GRAY_002 } from '../../styles/GlobalStyle';

export const Container = styled.div`
  padding: 20px;
`;

export const Item = styled.div`
  border: 1px solid ${GRAY_002};
  border-radius: 4px;
  padding: 10px;

  display: flex;
  margin-bottom: 5px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Title = styled.div`
  padding: 5px;
  font-weight: 700;
`;

export const Price = styled.div`
  margin-top: auto;
`;

export const Image = styled.img`
  width: 65px;
  height: 65px;
  /* padding: 5px */
`;

import styled from 'styled-components';
import { MAIN_RED, GRAY_005 } from './../../styles/GlobalStyle';

export const Container = styled.div`
  background-color: white;
  padding: 0 5px;
`;

export const ProductName = styled.div`
  color: #454545;
  height: 20px;
  text-align: left;
  font-size: 70%;
  white-space: normal;

`;

export const ProductDiscount = styled.div`
  color: ${MAIN_RED};
  font-size: 70%;
  font-weight: bold;
  display: inline-block;
  text-align: start;
`;

export const ProductBasePrice = styled.div`
  color: ${GRAY_005};
  font-size: 70%;
  margin: 0 2px;
  font-weight: bold;
  display: inline-block;
  text-align: start;
  text-decoration: line-through;
`;

export const ProductPrice = styled.div`
  color: #454545;
  font-size: 70%;
  font-weight: bold;
  display: inline-block;
  text-align: start;
`;
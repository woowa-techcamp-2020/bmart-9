import styled from 'styled-components';
import { MAIN_RED, GRAY_005 } from '../../styles/GlobalStyle';

export const Container = styled.div`
  background-color: white;
  padding: 0 5px;
`;

export const ProductName = styled.div`
  color: #454545;
  text-align: left;
  font-size: 100%;
  white-space: normal;
  vertical-align: middle;
  margin-top: 2vw;
  margin-bottom:1vw;
`;

export const ProductDiscount = styled.div`
  color: ${MAIN_RED};
  font-size: 100%;
  font-weight: bold;
  display: inline-block;
  text-align: start;
`;

export const ProductBasePrice = styled.div`
  color: ${GRAY_005};
  font-size: 100%;
  margin: 0 2px;
  font-weight: bold;
  display: inline-block;
  text-align: start;
  text-decoration: line-through;
  margin-left:2vw;
`;

export const ProductPrice = styled.div`
  color: #454545;
  font-size: 100%;
  font-weight: bold;
  display: block;
  text-align: start;
  margin-top: 3px;
`;

import styled from 'styled-components';
import { MAIN_RED, GRAY_005 } from './../../styles/GlobalStyle';

type FontSizePercentageProps = {
  fontSizePercentage: number
}

export const Container = styled.div`
  background-color: white;
  padding: 0 5px;
  margin: 0 1vw;
`;

export const ProductName = styled.div<FontSizePercentageProps>`
  color: #454545;
  text-align: left;
  font-size: ${props => props.fontSizePercentage}%;
  white-space: normal;
  vertical-align: middle;
`;

export const ProductDiscount = styled.div<FontSizePercentageProps>`
  color: ${MAIN_RED};
  font-size: ${props => props.fontSizePercentage}%;
  font-weight: bold;
  display: inline-block;
  text-align: start;
`;

export const ProductBasePrice = styled.div<FontSizePercentageProps>`
  color: ${GRAY_005};
  font-size: ${props => props.fontSizePercentage}%;
  margin: 0 3px;
  font-weight: bold;
  display: inline-block;
  text-align: start;
  text-decoration: line-through;
`;

export const ProductPrice = styled.div<FontSizePercentageProps>`
  color: #454545;
  font-size: ${props => props.fontSizePercentage}%;
  font-weight: bold;
  display: block;
  text-align: start;
  margin-top: 3px;
`;

import styled from 'styled-components';
import { GRAY_001, GRAY_002 } from '../../styles/GlobalStyle';
// import { Hamburger } from '../Hamburger';

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

type openProps = {
  open: boolean;
};

export const Hamburger = styled.div<openProps>`
  display: inline-block;
  transform: rotate(90deg);
  font-weight: bold;
  padding: 3px;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
  text-align: center;
`;

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

export const InputWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 40px;
  margin: 0 auto 0 auto;
  align-items: center;
  background: ${GRAY_001};
  border-radius: 6px;
  padding: 0 10px;
  border: 0.1px solid ${GRAY_002};
`;

export const Image = styled.img`
  height: 30px;
`;

export const Icon = styled.span`
  width: 10%;

  text-align: center;
`;

export const Input = styled.input`
  color: black;
  padding-left: 20px;
  font-size: 14px;
  font-weight: 200;

  background: transparent;
  outline: none;
  width: 100%;
`;

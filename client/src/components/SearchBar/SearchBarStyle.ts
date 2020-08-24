import styled from 'styled-components';
import { GRAY_001, GRAY_002 } from '../../styles/GlobalStyle';

export const InputWrapper = styled.form`
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

import styled from 'styled-components';
import { GRAY_003, GRAY_002 } from '../../styles/GlobalStyle';

type ButtonProps = {
  width: string;
};

export const Button = styled.div<ButtonProps>`
  width: ${({ width }) => width};
  margin: 0 auto;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  border: 1px solid ${GRAY_003};
  border-radius: 5px;

  transition: all 200ms ease;
  &:active {
    background: ${GRAY_002};
  }
`;

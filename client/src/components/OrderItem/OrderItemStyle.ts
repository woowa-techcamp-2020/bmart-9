import styled from 'styled-components';
import { GRAY_002, MAIN_COLOR1 } from '../../styles/GlobalStyle';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

export const Tag = styled.div<{ color: string }>`
  width: 50px;
  height: 10px;
  background: ${({ color }) => color};
`;

export const Warpper = styled.div`
  padding: 10px 0;
  box-shadow: 0 2px 1.5px -1.5px black;
`;

export const Padding = styled.div`
  height: 5px;
  width: 100%;
  background: ${GRAY_002};
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;

  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  display: block;
  align-items: center;
  text-transform: capitalize;

  padding: 0 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 10px;

  justify-content: center;
  align-items: center;
`;

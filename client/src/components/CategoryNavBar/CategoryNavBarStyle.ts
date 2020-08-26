import styled from 'styled-components';
import { GRAY_006, MAIN_COLOR2 } from '../../styles/GlobalStyle';

export const Container = styled.div`
  border-bottom: 0.4vw solid #ececec;
  overflow-x: scroll;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`;

type CategoryContainerProps = {
  select: boolean;
};

export const CategoryContainer = styled.div<CategoryContainerProps>`
  background-color: ${(props) => props.select && GRAY_006};
  color: ${(props) => props.select ? MAIN_COLOR2 : GRAY_006};
  display: inline-block;
  border-radius: 5vw;
  padding: 3vw;
  margin: 2vw 1vw 2vw 2vw;
  font-size: 4vw;
`;

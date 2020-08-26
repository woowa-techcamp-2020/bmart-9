import styled from 'styled-components';
import { GRAY_006, MAIN_COLOR2 } from '../../styles/GlobalStyle';

export const Container = styled.div`
  /* margin: 0 2vw; */
  border-bottom: 0.4vw solid #ECECEC;
  overflow-x: scroll;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryContainer = styled.div`
  background-color: ${GRAY_006};
  color: ${MAIN_COLOR2};
  display: inline-block;
  border-radius: 5vw;
  padding: 3vw;
  margin: 2vw 1vw 2vw 2vw;
  font-size: 3.5vw;
`;
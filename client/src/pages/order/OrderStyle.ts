import styled from 'styled-components';
import { MAIN_COLOR1, MAIN_RED, GRAY_004, GRAY_005 } from '../../styles/GlobalStyle';

const HEADER_HEIGHT = '43px';

export const Container = styled.div`
  overflow-y: scroll;
  height: calc(100vh - ${HEADER_HEIGHT});
  ::-webkit-scrollbar {
    display: none;
  }
  background-color:#eee;
`;

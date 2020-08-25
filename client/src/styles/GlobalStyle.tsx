import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

export const FONT_SIZE_LARGE = '1.2em';
export const FONT_SIZE_MIDEUM = '1.0em';
export const FONT_SIZE_SMALL = '0.9em';
export const MAIN_COLOR1 = 'rgb(42,193,188)';
export const MAIN_COLOR2 = 'green';
export const MAIN_COLOR3 = 'green';
export const MAIN_COLOR4 = 'green';

export const GRAY_001 = '#fafafa';
export const GRAY_002 = '#ececec';
export const GRAY_003 = '#DEDEDE';
export const GRAY_004 = '#D4d4d4';
export const GRAY_005 = '#b5b5b5';

export const MAIN_RED = '#ff5252';
export const MAIN_GREEN = '#4caf50';
export const MAIN_ORANGE = '#fb8c00';

export const TRANS_TIME = '0.1s';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    margin: 0px;
    box-sizing: border-box;
  }
  body{
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

export default GlobalStyle;

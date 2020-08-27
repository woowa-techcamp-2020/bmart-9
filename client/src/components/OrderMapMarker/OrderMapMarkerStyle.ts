import styled from 'styled-components';

export const Pin = styled.img<{ zoom: number }>`
  /* position: fixed; */
  /* bottom: -${({ zoom }) => zoom * 1.5 + 'px'};
  left: 0;
  right: 0; */
  /* margin: 0px auto; */

  width: 40px;
  height: 20px;
  position: fixed;
  top: 10px;
  left: -20px;
`;

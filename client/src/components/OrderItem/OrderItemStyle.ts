import styled from 'styled-components';
import { GRAY_002, MAIN_COLOR1 } from '../../styles/GlobalStyle';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin:10px;
  background-color: #fff;
  border-radius: 10px;
`;

export const Tag = styled.div<{ color: string }>`
  justify-self: center;
  align-self: center;
  width: 50px;
  height: 10px;
  background: ${({ color }) => color};
`;

export const FirstLine = styled.div`
  display:grid;
  grid-template-columns: 5fr 1fr;
  height: 5vh;
  column-gap:10px;
  grid-template-rows: 1fr ;
  margin: 20px;
`;

export const Title = styled.div`
  justify-self: start;
  align-self: center;
  font-weight: bold;
  font-size: 3vh;
  height: 100%;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: capitalize;
`;


export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  padding:10px;

  justify-content: center;
  align-items: center;
`;

export const DiscWrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`

export const Disc = styled.div`
  font-size: 2vh;
  color: rgb(100,100,100);
`
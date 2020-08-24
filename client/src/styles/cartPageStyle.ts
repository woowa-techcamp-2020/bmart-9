import styled from 'styled-components';
import { MAIN_COLOR1 } from './GlobalStyle';

const BUTTON_FULL_WIDTH = '96vw';
const BUTTON_HEIGHT = '6vh';

const HEADER_HEIGHT = '40px';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

// Header
export const Header = styled.div`
  display:grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr auto 1fr;
  border-bottom: 1px solid #ddd;
  height: 40px;
`
export const HeaderButton = styled.div`
margin-left: 15px;
  align-self:center;
  justify-self: start;
  color: #444;
  font-size: large;
  transition: 0.1s;
  &:active{
    font-size: x-large;
  }
`
export const HeaderContents = styled.div`
  align-self:center;
  justify-self: center ;
`


// Title
export const TitleWrapper = styled.div`
  position:relative;
`

export const Title = styled.div`
  margin:15px;
  font-size:calc(2vh);
  font-weight:bold;
`
export const TitlePaint = styled.div`
  position: absolute;
  background-color: rgb(42,193,188);
  left:15px;
  bottom:-5px;
  height: 2.5vh;
  width: 11vh;
  font-weight: bold;
  border-radius: 20px;
`

export const BodyContainer = styled.div`
  background-color: #eee;
  overflow-y: scroll;
  white-space: nowrap;
  height: calc(100vh - ${HEADER_HEIGHT});
  ::-webkit-scrollbar {
    display: none;
  }
`
export const SelectWrapper = styled.div`
  display:grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  padding:10px;
  background-color:white;
`

export const SelectCheckbox = styled.div`
  justify-self:start;
  align-self:center;
`

export const CheckboxContents = styled.span`
    user-select: none;
`;
export const AllCheckBox = styled.input`
    margin: 5px;
`;

type buttonProps = {
  color: string;
}
export const DeleteAllButton = styled.button<buttonProps>`
  justify-self: end;
  align-self: center;
  color: ${(props) => props.color === '#ddd' ? props.color : MAIN_COLOR1};
  transition: 0.1s;
  font-size: calc(2vh);
`

export const EmptyContainer = styled.div`
  display:grid;
  grid: auto auto;
  height: calc(100vh - ${HEADER_HEIGHT} - 44px - 1.5vh);
  width: 100%;
`

export const EmptyWrapper = styled.div`
  justify-self:center;
  align-self:center;
`

export const Img = styled.img`
  width: 150px;
  margin-bottom: 20px;
`

export const OrderButton = styled.button`
  position: fixed;
  justify-self:center;
  align-self:center;
  bottom: 1.5vh;
  left: 50%;
  transform: translateX(-50%);
  width: 96vw;
  height: 6vh;
  z-index: 10;
  outline: none;
  background-color: ${MAIN_COLOR1};
  cursor: pointer;
  transition: 0.1s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.6);
  &:active{
    width: 98vw;
    height: 7vh;
    span{
      font-size: calc(1.5vh + 1.5vw);
    }
    bottom: 1vh;
  }
  border-radius: 5px;
`;

export const EmptyButton = styled.button`
  position: fixed;
  justify-self:center;
  align-self:center;
  bottom: 1.5vh;
  left: 50%;
  transform: translateX(-50%);
  width: 96vw;
  height: 6vh;
  z-index: 10;
  font-size: calc(1.4vh + 1vw);
  font-weight: bold;
  color: white;
  background-color: #ddd;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 7px 0 rgba(0, 0, 0, 0.4);
`
export const EmptySpace = styled.div`
  width:100vw;
  height:6vh;
`

export const BottomConcealer = styled.div`
  position: fixed;
  bottom:0;
  left:50%;
  z-index: 9;
  transform: translateX(-50%);
  width:100vw;
  height:3vh;
  background-color: #eee;
`

export const OrderButtonText = styled.span`
  font-size: calc(1.4vh + 1.4vw);
  transition: 0.1s;
  font-weight: bold;
  color: white;
`
export const OrderButtonCount = styled.span`
  font-size: calc(1.4vh + 1vw);
  transition: 0.1s;
  font-weight: bold;
  background-color: white;
  border-radius: 10px;
  padding: 3px;
  color: ${MAIN_COLOR1};
`

export const TestButton = styled.button`
  align-self: center;
  justify-self: center;
  background-color: green;
  color: white;
  font-weight: bold;
  font-size: large;
  height: ${BUTTON_HEIGHT};
  width: ${BUTTON_FULL_WIDTH};
  border-radius: 20px;
  &:hover {
    border: 1px solid green;
    background-color: white;
    color: green;
    cursor: pointer;
  }
`;

export const MoreButtonWrapper = styled.div`
  text-align:center;
`
export const TextButton = styled.button`
  width: 96vw;
  height: 6vh;
  outline: none;
  background-color: white;
  cursor: pointer;
  transition: 0.1s;
  color: ${MAIN_COLOR1};
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: calc(1.3vh + 1vw);
  &:active{
    font-size: calc(1.5vh + 1vw);
  }
`;
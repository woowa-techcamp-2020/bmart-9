import styled from 'styled-components';
import { MAIN_COLOR1, MAIN_RED, GRAY_004, GRAY_005 } from '../../styles/GlobalStyle';

const HEADER_HEIGHT = '43px';

export const Container = styled.div`
  overflow-y: scroll;
  height: calc(100vh - ${HEADER_HEIGHT});
  ::-webkit-scrollbar {
    display: none;
  }
`;

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

export const Img = styled.img`
  width: 100%;
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

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-template-rows: 1fr ;
  margin: 2vw;
`

export type likeProps = {
  like: string;
};

export const LikeIconWrapper = styled.div <likeProps>`
  color: ${(props) => props.like};
  border: 1px solid ${(props) => props.like};
  border-radius: 50%;
  padding: 10px;
  margin: 10px;
  font-size: 3vh;
  
  justify-self: center;
  align-self: center;
`
export const ProductInfoWrapper = styled.div`
  margin: 10px;
`

export const Name = styled.div`
  font-size: 3vh;
`

export const PriceWrapper = styled.div`
  margin-top: 3vw;
`

export const Discount = styled.span`
  color:${MAIN_RED};
  font-size: 3vh;
  font-weight: bold;
`
export const BasePrice = styled.span`
  font-size: 2vh;
  text-decoration: line-through;
  color: ${GRAY_005};
`

export const Price = styled.span`
  font-size: 3vh;
  font-weight: bold;
`
import styled from 'styled-components';
import { MAIN_COLOR1, FONT_SIZE_LARGE, FONT_SIZE_MIDEUM, FONT_SIZE_SMALL, MAIN_RED, GRAY_003 } from '../../styles/GlobalStyle';


export const Container = styled.div`
    display:grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
    margin:10px;
    background-color: #fff;
    border-radius: 10px;
`;

export const cartTitle = styled.div`
    user-select: none;
    margin:10px;
    font-weight: bold;
    font-size: ${FONT_SIZE_LARGE};
    color: rgb(50,50,50);
`;

// header
export const cartHeader = styled.div`
    display:grid;
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr;
    margin-top:10px;
    margin-left:10px;
    margin-right:10px;
`;

export const deleteButton = styled.button`
    color:${MAIN_RED};
    justify-self:end;
    align-self:center;
    border: 0px;
    margin:5px;
    outline: none;
    background-color: rgb(0,0,0,0);
    &:hover{
        cursor:pointer;
        color:red;
    }
`;

// body
export const cartBody = styled.div`
    display:grid;
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr;
    margin:5px;
`;

export const cartPriceWrapper = styled.div`
    display:grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    margin: 5px;
`;

export const cartImage = styled.img`
    margin:5px;
    padding:5px;
    align-self:center;
    justify-self:center;
    border: 1px solid rgb(200,200,200);
    width: 15vh;
    height: 15vh;
    border-radius:5px;
`;
export const cartDiscount = styled.span`
    color: ${MAIN_RED};
    font-weight: bold;
    font-size: ${FONT_SIZE_MIDEUM};
`;
export const cartPrice = styled.span`
    color:gray;
    font-size: ${FONT_SIZE_MIDEUM};
`;
export const cartTotalBasePrice = styled.span`
    color:gray;
    text-decoration: line-through;
    font-size: ${FONT_SIZE_SMALL};
`;
export const cartTotalPrice = styled.span`
    font-weight: bold;
    font-size: ${FONT_SIZE_MIDEUM};
`;
export const cartDescription = styled.div`
    justify-self: start;
    align-self: center;
`;

// body price wrapper
export const cartPriceFristLine = styled.div`
    justify-self: start;
    align-self: center;
    margin: 5px;
`
export const cartPriceSecondLine = styled.div`
    justify-self: start;
    align-self: center;
    margin: 5px;
    
`

// 수량 버튼 wrapper
export const cartQuantityWrapper = styled.div`
    display:flex;
    justify-self: start;
    align-self: center;
    margin: 5px;
    text-align: center;
`;

type countButtonProps = {
    count: number
}
export const CartQuantityMinus = styled.button<countButtonProps>`
    font-size: 2vh;
    outline: none;
    transition: 0.1s;
    color:${(props) => props.count > 1 ? MAIN_RED : GRAY_003};
`;
export const CartQuantity = styled.span`
    font-size: 2.4vh;
    width: 6vw;
`;
export const CartQuantityPlus = styled.button<countButtonProps>`
    font-size: 2vh;
    outline: none;
    transition: 0.1s;
    color:${(props) => props.count < 99 ? MAIN_COLOR1 : GRAY_003};
`;

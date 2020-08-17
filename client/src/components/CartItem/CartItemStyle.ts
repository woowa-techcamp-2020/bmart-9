import styled from 'styled-components';
import {MAIN_COLOR1,FONT_SIZE_LARGE,FONT_SIZE_MIDEUM,FONT_SIZE_SMALL} from '../../styles/GlobalStyle';




export const Container = styled.div`
    display:grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
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
`;

export const headerNameWrapper = styled.label`
    
    justify-self:start;
    align-self:center;
`;

export const checkboxWrapper = styled.label`

`;

export const headerCheckbox = styled.input`
    margin: 10px;
`;
export const headerCheckboxMark = styled.span`
    
`;


export const headerName = styled.span`
    user-select: none;
`;

export const deleteButton = styled.button`
    color: ${MAIN_COLOR1};
    justify-self:end;
    align-self:center;
    border: 0px;
    margin:10px;
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
`;

export const cartPriceWrapper = styled.div`
    display:grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;

    div{
        justify-self:start;
        align-self:center;
    }
`;

export const cartImage = styled.img`
    margin:10px;
    align-self:center;
    justify-self:center;
    width:90px;
`;
export const cartDiscount = styled.span`
    color:red;
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
export const cartQuantityWrapper = styled.div`
    justify-self: start;
    align-self: center;
`;

export const cartQuantityMinus = styled.button`
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    border-left: 1px solid gray;
    border-right: none;
    background-color: rgb(0,0,0,0);
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    outline: none;
    &:hover{
        color:red;
        cursor: pointer;
    }
`;
export const cartQuantity = styled.span`
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    padding:4px;
    padding-bottom:6px;
`;
export const cartQuantityPlus = styled.button`
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;
    border-left: none;
    background-color: rgb(0,0,0,0);

    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    outline: none;
    background-color: rgb(0,0,0,0);
    &:hover{
        color:red;
        cursor: pointer;
    }
`;

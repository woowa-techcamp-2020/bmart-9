import styled from 'styled-components';


const MAIN_COLOR = "green";


export const Container = styled.div`
    display:grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
    margin:10px;
`;

export const cartTitle = styled.div`
    user-select: none;
    margin:10px;
    font-weight: bold;
    font-size: 1.1em;
    color: rgb(50,50,50);
`;

// header
export const cartHeader = styled.div`
    display:grid;
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr;
`;

export const headerNameWrapper = styled.label`
    margin:10px;
    justify-self:start;
    align-self:center;
`;

export const checkboxWrapper = styled.label`

`;

export const headerCheckbox = styled.input`
    
`;
export const headerCheckboxMark = styled.span`
    
`;


export const headerName = styled.span`
    user-select: none;
`;

export const deleteButton = styled.button`
    outline:none;
    color: ${MAIN_COLOR};
    justify-self:end;
    align-self:center;
    margin:10px;
    &:hover{
        color:red;
        cursor: pointer;
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
`;
export const cartPrice = styled.span`
    color:gray;
    font-size:1em;
`;
export const cartTotalBasePrice = styled.span`
    color:gray;
    text-decoration: line-through;
    font-size:0.9em;
`;
export const cartTotalPrice = styled.span`
    font-weight: bold;
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
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    height: 30px;
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
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    height: 30px;
    &:hover{
        color:red;
        cursor: pointer;
    }
`;

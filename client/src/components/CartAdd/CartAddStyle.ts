import styled, { keyframes } from 'styled-components';
import { MAIN_COLOR1, MAIN_RED, MAIN_GREEN, MAIN_ORANGE, GRAY_003 } from '../../styles/GlobalStyle'

const fadein = keyframes`
    from { transform: bottom: 0; opacity: 0; }
    to {  transform: bottom: 50px; opacity: 1; }
`;

const fadeout = keyframes` 
    from { transform: bottom: 50px; opacity: 1; }
    to { transform: bottom: 0; opacity: 0; }
`

type openProps = {
    open: boolean;
};

export const Container = styled.div<openProps>`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index:${(props) => (props.open ? 15 : -1)};
    transition: 0.3s;
    display: flex;
    opacity: ${(props) => (props.open ? '1' : '0')};
`

export const AdderWrapper = styled.div<openProps>`
    position: fixed;
    bottom:0;
    background-color: white;
    width: 100%;
    transition: 0.3s;
    z-index:20;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    transform: ${(props) => (props.open ? 'translateY(0)' : 'translateY(100%)')};
`

export const AdderHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr;
    border-bottom: 1px solid rgb(200,200,200);
    margin:10px;
`

export const HeaderName = styled.div`
    margin-bottom: 13px;
    margin-top:5px;
    justify-self:center;
    align-content: center;
    font-size: 2.3vh;
`

export const HeaderButton = styled.div`
    margin-bottom: 10px;
    margin-right: 5px;
    color: rgb(150,200,200);
    justify-self: end;
    align-self: center;
`

export const AdderBody = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr 1fr;
    margin:10px;
`
export const BodyImg = styled.img`
    margin-right:10px;
    padding:5px;
    align-self:center;
    justify-self:center;
    border: 1px solid rgb(200,200,200);
    width: 12vh;
    height: 12vh;
    border-radius:5px;
`

export const BodyContents = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
`
export const ContentsName = styled.div`
    font-size: 2vh;
    align-self:center;
    justify-self:start;
`
export const ContentsDisc = styled.div`
    font-size: 1.6vh;
    color: rgb(150,150,150);
    align-self:start;
    justify-self:start;
`
export const ContentsPrice = styled.div`
    font-size: 2vh; 
    align-self:center;
    justify-self:start;
`

export const BodyButtonWrapper = styled.div`
    display:flex;
    justify-self: end;
    align-self: center;
    text-align: center;
`

type countButtonProps = {
    count: number
}
export const ButtonMinus = styled.button<countButtonProps>`
    font-size: 2.5vh;
    outline: none;
    transition: 0.1s;
    
    color:${(props) => props.count > 1 ? MAIN_RED : GRAY_003};
`;

export const ProductQuantity = styled.span`
    font-size: 3vh;
    width: 6vw;
`;

export const ButtonPlus = styled.button<countButtonProps>`
    font-size: 2.5vh;
    outline: none;
    transition: 0.1s;
    color:${(props) => props.count < 99 ? MAIN_COLOR1 : GRAY_003};
`;


export const AdderFooter = styled.div`
    display: grid;
    
`
export const AdderButton = styled.button`
    margin: 10px;
    display: grid;
    grid-template-rows: 1fr ;
    grid-template-columns: 1fr 1fr 1fr;
    justify-self:center;
    align-self:center;
    width: 96vw;
    height: 6vh;
    outline: none;
    background-color: ${MAIN_COLOR1};
    cursor: pointer;
    transition: 0.1s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.3);
    &:active{
        margin: 6px;
        width: 98vw;
        height: 7vh;
        span{
            font-size: calc(1.5vh + 1.5vw);
        }
    }
    border-radius: 5px;
`

export const AdderButtonName = styled.div`
    color: white;
    font-weight: bold;
    font-size: 2.3vh;
    align-self:center;
    justify-self:center;
`
export const AdderButtonPrice = styled.div`
    color: white;
    align-self:center;
    justify-self:end;
`

import styled, { keyframes } from 'styled-components';
import { MAIN_RED, MAIN_GREEN, MAIN_ORANGE } from '../../styles/GlobalStyle'

const fadein = keyframes`
    from { transform: translateX(-50%) scale(0.5); opacity: 0; }
    to {  transform: translateX(-50%) scale(1) ; opacity: 1; }
`;

const fadeout = keyframes` 
    from { opacity: 1; }
    to { opacity: 0; }
`

export const Container = styled.div`
    display: none;
    min-width: 350px;
    min-height: 48px;
    background-color: #333;
    
    text-align: start;
    border-radius: 4px;
    padding: 12px;
    position: fixed;
    z-index: 20;
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(44px + 3vh);
    user-select: none;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 7px 0 rgba(0, 0, 0, 0.4);
    &.error{
        background-color: ${MAIN_RED};
    }

    &.warning{
        background-color: ${MAIN_ORANGE};
    }

    &.success{
        background-color: ${MAIN_GREEN};
    }

    &.active{
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: auto 40px;
        animation: ${fadein} 0.25s, ${fadeout} 0.25s 3s;
    }
`

export const Message = styled.div`
    color: white;
    justify-self: start;
    align-self: center;
`

export const Button = styled.button`
    color: white;
    font-size: 16px;
    justify-self: end;
    align-self: center;
    font-weight: bold;
`

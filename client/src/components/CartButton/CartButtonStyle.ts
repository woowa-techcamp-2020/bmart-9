import styled from 'styled-components';
import { MAIN_COLOR1, TRANS_TIME } from '../../styles/GlobalStyle';
const inputVisiblePath = new Set(['/', '/search']);


export const Container = styled.div`
    
`
type currPathProps = {
    pathname: string
}
export const Button = styled.button<currPathProps>`
    display: ${(props) => inputVisiblePath.has(props.pathname) ? 'block' : 'none'};
    z-index: 10;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.6rem;
    outline: none;
    background-color: rgb(42,193,188);
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 100%;
    transition: ${TRANS_TIME};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.3);

    &:active{
        bottom: 17px;
        right: 17px;
        width: 4rem;
        height: 4rem;
        font-size: 1.8rem;
        div{
            font-size: 0.8rem;
        }
    }
`
export const Img = styled.img`
    width: 100%;
    z-index:12;
`
export const CartCount = styled.div`
    position: absolute;
    top: 6px;
    right: 2px;
    font-size: 0.7rem;
    padding: 2px;
    padding-left:4px;
    padding-right:4px;
    font-weight: bold;
    transition: ${TRANS_TIME};
    border: solid 2px rgb(42,193,188);
    border-radius: 20px;
    color: rgb(42,193,188);
    background-color: white;
`

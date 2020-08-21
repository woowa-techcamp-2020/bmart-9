import styled from 'styled-components';

export const Container = styled.div``
export const Button = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 10;
    font-size: 18px;
    outline: none;
    background-color: rgb(42,193,188);
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 100%;
    transition: 0.2s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.6);
    &:hover{
        background-color: white;
        color: rgb(42,193,188);
        box-shadow: 0 0 8px 2px rgba(42,193,188, 0.2), 0 0 8px 2px rgba(42,193,188, 0.6);
    }
`


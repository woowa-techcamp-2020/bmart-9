import styled from 'styled-components';

type barProps = {
  isStart?: string;
  isCenter?: string;
  isEnd?: string;
};

export const Container = styled.div<barProps>`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  height: 94vh;
  width: 100%;
`;

export const Img = styled.img`
  align-self: center;
  justify-self: center;
  width: 150px;
`;

export const Button = styled.button`
  align-self: center;
  justify-self: center;
  background-color: green;
  color: white;
  font-weight: bold;
  font-size: large;
  height: 40px;
  width: 120%;
  border-radius: 20px;
  &:hover {
    border: 1px solid green;
    background-color: white;
    color: green;
    cursor: pointer;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  height: 50vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Category = styled.img`
  display: inline-block;
  width: 20%;
  height: 50%;

  transition: all 100ms ease;
  &:active {
    transform: scale(1.1);
  }
`;

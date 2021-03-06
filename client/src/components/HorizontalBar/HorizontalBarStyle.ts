import styled from 'styled-components';

type barProps = {
  isStart?: string;
  isCenter?: string;
  isEnd?: string;
  fontWeight?:string;
};

export const Container = styled.div<barProps>`
  padding: 0 10px;
  border: none;
  font-weight:${props => props.fontWeight ? props.fontWeight : 'bold'};
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${(props) => props.isStart} ${(props) =>
      props.isCenter} ${(props) => props.isEnd};
`;

export const Start = styled.div`
  align-self: center;
  justify-self: start;
  margin: 10px;
`;

export const Center = styled.div`
  align-self: center;
  justify-self: center;
  margin: 10px;
`;

export const End = styled.div`
  align-self: center;
  justify-self: end;
  margin: 10px;
`;

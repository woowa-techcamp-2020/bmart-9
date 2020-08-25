import styled from 'styled-components';

type CardContainerProps = {
  width: number;
};

export const Container = styled.div<CardContainerProps>`
  display: inline-block;
  width: ${(props) => `${props.width}vw`};
  vertical-align: top;
`;

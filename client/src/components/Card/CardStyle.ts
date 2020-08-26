import styled from 'styled-components';

type CardContainerProps = {
  viewportWidth: number;
};

export const Container = styled.div<CardContainerProps>`
  display: inline-block;
  width: ${(props) => `${props.viewportWidth}vw`};
  vertical-align: top;
`;

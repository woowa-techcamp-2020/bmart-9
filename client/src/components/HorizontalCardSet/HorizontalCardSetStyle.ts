import styled from 'styled-components';

type ContainerProps = {
  length: number
}

export const Container = styled.div<ContainerProps>`
  overflow-x: scroll;
  white-space: nowrap;
`


import styled from 'styled-components';

type openProps = {
  open: boolean;
}

export const Container = styled.div<openProps>`
  float:right;
  display: inline-block;
`

export const Icon = styled.div`
  display: inline-block;
  transform: rotate(90deg);
  font-weight: bold;
  padding: 3px;
`
import styled from 'styled-components';

type openProps = {
  open: boolean;
};

export const Container = styled.div<openProps>`
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: grey;
  transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
`;

export const Icon = styled.div`
  float:right;
  display: inline-block;
  font-weight: bold;
  padding: 15px;
`
import styled from 'styled-components';
import { GRAY_001, GRAY_003 } from '../../styles/GlobalStyle';

type openProps = {
  open: boolean;
};

export const Container = styled.div<openProps>`
  padding-top: 20px;
  position: fixed;
  z-index: 30;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
`;

export const Icon = styled.div`
  float: right;
  display: inline-block;
  font-weight: bold;
  padding: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 5px;

  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  height: 30px;
`;

export const GoHome = styled.div`
  font-weight: 500;

  span {
    font-weight: 200;
  }
  margin-right: 5px;
`;

export const Authentication = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  border: 1px solid ${GRAY_003};
  border-radius: 5px;
`;

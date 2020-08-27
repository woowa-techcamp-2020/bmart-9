import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MAIN_GREEN, MAIN_COLOR1 } from '../../styles/GlobalStyle';

export const Container = styled.div`
  position: relative;
  background-color: #ffffffff;
  width: 100%;
  height: 100%;
`;

export type ImgProps = {
  viewportWidth: number;
};

export const Img = styled.img<ImgProps>`
  width: 100%;
  height: calc(${(props) => props.viewportWidth}vw - 10px);
  border-radius: 10%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 7px 0 rgba(0, 0, 0, 0.1);
`;

export const ImgWrapper = styled.div`
  padding: 5px;
`;

export type likeProps = {
  like: string;
};

export const HeartIcon = styled(FontAwesomeIcon) <likeProps>`
  color: ${(props) => props.like};
  background-color: #d1d1d1;
  height: 24px;
  border-radius: 50%;
  padding: 5px;
  position: absolute;
  font-size: 25px;
  top: 10px;
  left: 10px;
  opacity: 0.8;

  transition: all 100ms ease;
  &:active {
    transform: scale(1.15);
    opacity: 1;
  }
`;


export const ShoppingIconWrapper = styled.div`
  display:grid;
  justify-items: center;
  align-items: center;
  position: absolute;
  bottom: 8%;
  left: 8%;
  color: ${MAIN_COLOR1};
  background-color: rgba(255,255,255,0.9);
  border-radius: 50%;
  height: 15%;
  width: 15%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 4px 7px 0 rgba(0, 0, 0, 0.1);
`;

export const ShoppingBagIcon = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`

export const IQ = styled.div`
  color: black;
  background-color: #ffffffff;
  line-height: 20px;
  border-radius: 10px;
  font-weight: bold;
  padding: 3px;
  position: absolute;
  font-size: 13px;
  top: 10px;
  right: 10px;
  z-index: 1;
  box-sizing: border-box;
  text-align: right;
  vertical-align: middle;
  opacity: 0.8;
  & ::after {
    content: 'IQ';
    color: grey;
    margin-left: 2px;
  }
`;

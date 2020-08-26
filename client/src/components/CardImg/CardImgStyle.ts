import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  position: relative;
  background-color: #ffffffff;
  width: 100%;
`;

export type ImgProps = {
  viewportWidth: number;
};

export const Img = styled.img<ImgProps>`
  width: 100%;
  height: calc(${(props) => props.viewportWidth}vw - 10px);
`;

export const ImgWrapper = styled.div`
  padding: 5px;
`;

export type likeProps = {
  like: string;
};

export const HeartIcon = styled(FontAwesomeIcon)<likeProps>`
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

export const ShoppingBagIcon = styled(FontAwesomeIcon)`
  color: grey;
  background-color: #ffffffff;
  height: 25px;
  border-radius: 50%;
  padding: 5px;
  position: absolute;
  font-size: 29px;
  bottom: 10px;
  left: 10px;
  opacity: 0.8;
`;

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

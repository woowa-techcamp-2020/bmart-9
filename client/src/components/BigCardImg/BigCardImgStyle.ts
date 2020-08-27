import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  position: relative;
  background-color: #ffffffff;
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  position: absolute;
  top: -10vw;
`;

export const ImgWrapper = styled.div`
  width: 94vw;
  height: 80vw;
  margin: auto 1vw;
  position: relative;
  overflow: hidden;
`;

export type likeProps = {
  like: string;
};

export const HeartIcon = styled(FontAwesomeIcon)<likeProps>`
  color: ${(props) => props.like};
  background-color: #d1d1d1;
  height: 40px;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  font-size: 40px;
  bottom: 4vw;
  right: 4vw;
  opacity: 0.8;

  transition: all 100ms ease;
  &:active {
    transform: scale(1.15);
    opacity: 1;
  }
`;

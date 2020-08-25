import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
  white-space: nowrap;
`;

const calcSlideInterval = (frameLength: number) => {
  let keyframe = '';
  for (let i = 0; i < frameLength; i++) {
    const unitInterval = 100 / ((frameLength - 1) * 2);
    let startPoint = 2 * i * unitInterval;
    let endPoint = startPoint + unitInterval;
    if (i !== frameLength - 1) {
      keyframe += `${startPoint}%, ${endPoint}% {transform: translateX(-${
        i * 100
      }%)}`;
    } else {
      keyframe += `100% {transform: translateX(-${i * 100}%)}`;
    }
  }
  return keyframe;
};

const slide = (length: number) => keyframes`
  ${calcSlideInterval(length + 1)}
`;

type ImgProps = {
  length: number;
  name: string;
};

export const Img = styled.img<ImgProps>`
  display: inline-block;
  width: 100vw;
  height: 30vh;
  animation: ${(props) => slide(props.length)} ${(props) => props.length * 3}s
    cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
`;

import styled, { keyframes } from 'styled-components';
import { Children } from 'react';


export const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
  white-space: nowrap;
`;

type LengthProps = {
  length: number;
}

const calcSlideInterval = (frameLength: number) => {
  let keyframe = '';
  for(let i = 0; i < frameLength; i++) {
    let startPoint = i * (100 / frameLength);
    let endPoint = startPoint + (50 / frameLength);
    keyframe += `${startPoint}%, ${endPoint}% {transform: translateX(-${i*100}%)} `
  }
  keyframe += `100% {transform: translateX(0)}`
  console.log(keyframe)
  return keyframe;
}

const slide = (length: number) => keyframes`
  ${calcSlideInterval(length + 1 )}
 `

export const Img = styled.img<LengthProps>`
  display: inline-block;
  width:100vw;
  height:200px;
  animation: ${props => slide(props.length)} ${props => props.length * 3}s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
  &:last-child {
    animation-fill-mode: backwards;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  height: 123vw;
  margin: 2vw;
`;

type ImgProps = {
  select: boolean;
};

export const Img = styled.img<ImgProps>`
  border: ${(props) => props.select && '2px solid red'};
  display: inline-block;
  width: 23%;
  margin: 1%;
`;

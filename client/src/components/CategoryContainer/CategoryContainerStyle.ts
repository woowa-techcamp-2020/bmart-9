import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 30vh;
  background-color: grey;
`

type ImgProps = {
  name: string;
};

export const Category = styled.img<ImgProps>`
  display: inline-block;
  width: 20vw;
  height: 14vh;
  margin-top: 5px;
`;

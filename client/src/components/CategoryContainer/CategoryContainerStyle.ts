import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

type ImgProps = {
  name: string;
};

export const Category = styled.img<ImgProps>`
  display: inline-block;
  width: 20vw;
  padding: 5px;
`;

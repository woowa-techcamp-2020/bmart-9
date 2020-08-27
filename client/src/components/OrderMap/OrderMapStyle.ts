import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  position: relative;
`;

export const Marker = styled.img<{ zoom: number }>`
  width: ${({ zoom }) => zoom * 4 + 'px'};
  height: ${({ zoom }) => zoom * 4 + 'px'};

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  /* overflow: hidden; */
  object-fit: cover;
`;

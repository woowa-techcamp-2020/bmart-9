import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerWrapper = styled.div``;

type NavBarProps = {
  navBarFixed: boolean;
};

export const CategoryNavBarWrapper = styled.div<NavBarProps>`
  position: ${(props) => props.navBarFixed && 'fixed'};
  /* margin-top:97px; */
  top:97px;
  z-index:1;
`;

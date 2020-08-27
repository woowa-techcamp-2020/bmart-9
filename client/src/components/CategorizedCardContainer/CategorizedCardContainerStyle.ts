import styled from 'styled-components';

export const Container = styled.div<NavBarProps>`
  margin-top: ${(props) => (props.navBarFixed && '50px')};
`;

export const ContainerWrapper = styled.div``;

type NavBarProps = {
  navBarFixed: boolean;
  navBarInitialOffsetTop?: number;
};

export const CategoryNavBarWrapper = styled.div<NavBarProps>`
  position: ${(props) => (props.navBarFixed ? 'fixed' : 'static')};
  top: ${(props) => (props.navBarFixed && '97px')};
  /* top: ${(props) => props.navBarInitialOffsetTop}px; */
  overflow-x:scroll;
  width:100%;
  z-index: 1;
`;

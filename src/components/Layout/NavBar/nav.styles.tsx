import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1280px;
`;

export const NavLink = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #7755e2;
  }

  &:hover {
    color: #7755e2;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const Header = styled.header`
  min-height: 90px;
`;

export const HeaderContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 90px;
`;

export const ImageCol = styled.div`
  /* min-height: 90px; */
`;


export const NavMenu = styled.ul``;
export const MenuItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const MenuItemWrap = styled.nav``;

export const MenuMobIcon = styled.div`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-self: flex-start;
  margin-left: 0;
`;
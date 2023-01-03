import Link from 'next/link';
import React from 'react'
import { FaBars } from "react-icons/fa";
import { LogoShape } from "../../../../public/assets/icons/LogoShape";

import {
  NavLogo,
  MobileIcon,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "../../NavBar/NavBar.styles";
import { Nav, NavBarContainer, NavLink, NavItem } from "./nav.styles";

const NavigationBar = ({ toggle }: any) => {
  return (
    <Nav>
      <NavBarContainer>
        <Link href="/">
          <NavLogo>
            <LogoShape color="#5634bf" width="50" height="50" />
          </NavLogo>
        </Link>
        <MobileIcon onClick={toggle}>
          <FaBars style={{ color: "black" }} />
        </MobileIcon>
        <NavMenu>
          <>
            <NavItem>
              <Link href="/courses">
                <NavLink>Courses</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/articles">
                <NavLink>Articles</NavLink>
              </Link>
            </NavItem>
            {/* <NavItem>
                <NavLink
                  {...props}
                  to="featured"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  exact="true"
                >
                  Featured
                </NavLink>
              </NavItem> */}
            <NavItem>
              <Link href="/books">
                <NavLink>Books</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/forum">
                <NavLink>Forum</NavLink>
              </Link>
            </NavItem>
            {/* <NavItem></NavItem> */}
          </>
        </NavMenu>
        <NavBtn>
          <Link href="/auth/signin">
            <NavLink>Login</NavLink>
          </Link>
          <Link href="/auth/signup">
            <NavBtnLink>Register</NavBtnLink>
          </Link>
        </NavBtn>
      </NavBarContainer>
    </Nav>
  );
};

export default NavigationBar




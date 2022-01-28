import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll"
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavLink,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBarContainer,
  NavItem,
} from "./NavBar.styles";
import { LogoShape } from "../../../public/assets/icons/LogoShape";



export default function NavBar({ toggle, ...props }: any) {
  const [scrcollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else setScrollNav(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  })

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <Nav scrollNav={scrcollNav} {...props}>
      <NavBarContainer>
        <Link href="/">
          <NavLogo onClick={toggleHome}>
            <LogoShape color="#5634bf" width="50" height="50" />
          </NavLogo>
        </Link>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink
              {...props}
              to="courses"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              exact="true"
            >
              Courses
            </NavLink>
          </NavItem>
          <NavItem>
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
          </NavItem>
          <NavItem>
            <NavLink
              {...props}
              to="books"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              exact="true"
            >
              Books
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              {...props}
              to="forum"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              exact="true"
            >
              Forum
            </NavLink>
          </NavItem>
          <NavItem>
            <Link href="/signin">
              <NavLink
                {...props}
                to="/signin"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                exact="true"
              >
                Login
              </NavLink>
            </Link>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <Link href="/signup">
            <NavBtnLink>Register</NavBtnLink>
          </Link>
        </NavBtn>
      </NavBarContainer>
    </Nav>
  );
}

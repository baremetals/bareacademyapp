import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll"
import Link from "next/link";
import {useRouter} from "next/router";
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
  const router = useRouter()
  // console.log(router.pathname)
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
          <FaBars style={{ color: "black" }} />
        </MobileIcon>
        <NavMenu>
          {router.pathname === "/" ? (
            <>
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
              {/* <NavItem>
                <NavLink {...props} to="/blog" exact="true">
                  Blog
                </NavLink>
              </NavItem> */}
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
              <NavItem></NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <Link href="/courses">
                  <NavLink
                    {...props}
                    to="/courses"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    exact="true"
                  >
                    Courses
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/articles">
                  <NavLink {...props} to="/articles" exact="true">
                    Articles
                  </NavLink>
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
                  <NavLink
                    {...props}
                    to="/books"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    exact="true"
                  >
                    Books
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/forum">
                  <NavLink
                    {...props}
                    to="/forum"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    exact="true"
                  >
                    Forum
                  </NavLink>
                </Link>
              </NavItem>
              {/* <NavItem></NavItem> */}
            </>
          )}
        </NavMenu>
        <NavBtn>
          <Link href="/auth/signin">
            <NavLink
              {...props}
              to="/auth/signin"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              exact="true"
            >
              Login
            </NavLink>
          </Link>
          <Link href="/auth/signup">
            <NavBtnLink>Register</NavBtnLink>
          </Link>
        </NavBtn>
      </NavBarContainer>
    </Nav>
  );
}

import React from 'react'
import Link from 'next/link'
import {
  DropDownContainer,
  Icon,
  CloseIcon,
  DropDownWrapper,
  DropDownLinks,
  DropDownMenu,
  DropDownBtnWrapper,
  DropDownBtn
} from "./styles";


const NavDropDown = ({ toggle, isOpen, ...props }: any) => {

  return (
    <DropDownContainer isOpen={isOpen} onClick={toggle} {...props}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropDownWrapper>
        <DropDownMenu>
          <DropDownLinks
            {...props}
            to="courses"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Courses
          </DropDownLinks>

          <DropDownLinks
            {...props}
            to="featured"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Featured
          </DropDownLinks>

          <DropDownLinks
            {...props}
            to="books"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Books
          </DropDownLinks>

          <DropDownLinks
            {...props}
            to="forum"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Forum
          </DropDownLinks>
          <Link href="/auth/signin">
            <DropDownLinks
              {...props}
              to="/auth/signin"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Login
            </DropDownLinks>
          </Link>
        </DropDownMenu>
        <DropDownBtnWrapper>
          <Link href="/auth/signup">
            <DropDownBtn>Register</DropDownBtn>
          </Link>
        </DropDownBtnWrapper>
      </DropDownWrapper>
    </DropDownContainer>
  );
};

export default NavDropDown

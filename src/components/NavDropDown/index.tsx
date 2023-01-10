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
              <Link href="/courses">
                <DropDownLinks
                >
                  Courses
                </DropDownLinks>
              </Link>
              <Link href="/articles">
                <DropDownLinks
                >
                  Articles
                </DropDownLinks>
              </Link>
              <Link href="/books">
                <DropDownLinks
                >
                  Books
                </DropDownLinks>
              </Link>
              <Link href="/forum">
                <DropDownLinks
                >
                  Forum
                </DropDownLinks>
              </Link>

              <Link href="/auth/signin">
                <DropDownLinks
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

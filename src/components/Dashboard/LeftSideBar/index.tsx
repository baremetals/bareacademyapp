import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdHome, MdForum, MdSchool } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiNotification2Fill } from "react-icons/ri";
import { TopBarLogo } from "../TopBar/topbar.styles";
import {
  LeftSideContainer,
  LeftSideBarWrapper,
  LeftSideBarListItem,
  LeftSideBarIcon,
  LeftSideBarListItemText,
  ToggleButton,
  BackOverlay,
} from "./leftside.styles";

import { LogoShape } from "../../../../public/assets/icons/LogoShape"
import { BooksIcon } from "../../../../public/assets/icons/BooksIcon";
import { ChatIcon } from "../../../../public/assets/icons/ChatIcon";



const LeftSideBar = () => {
  const router = useRouter();
  const [menuState, setMenuState] = useState(false);
  {
    menuState && (
      <BackOverlay onClick={() => setMenuState(false)} className="" />
    );
  }
  return (
    <>
      <ToggleButton onClick={() => setMenuState(true)} className="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </ToggleButton>
      {menuState && (
        <BackOverlay onClick={() => setMenuState(false)} className="" />
      )}
      <LeftSideContainer>
        <LeftSideBarWrapper>
          <TopBarLogo>
            <a href={`/user-profile/`}>
              <LogoShape color="#5634bf" width="100" height="100" />
            </a>
          </TopBarLogo>

          <LeftSideBarListItem
            className={router.pathname == "/home" ? "active" : ""}
          >
            <LeftSideBarIcon>
              <Link href="/home">
                <div>
                  <MdHome />
                </div>
              </Link>
            </LeftSideBarIcon>
            <Link href="/home">
              <LeftSideBarListItemText>Dashboard</LeftSideBarListItemText>
            </Link>
          </LeftSideBarListItem>

          <LeftSideBarListItem
            className={router.pathname == "/courses" ? "active" : ""}
          >
            <LeftSideBarIcon>
              <Link href="/courses">
                <div>
                  <MdSchool />
                </div>
              </Link>
            </LeftSideBarIcon>
            <Link href="/courses">
              <LeftSideBarListItemText>Courses</LeftSideBarListItemText>
            </Link>
          </LeftSideBarListItem>
          <LeftSideBarListItem
            className={router.pathname == "/books" ? "active" : ""}
          >
            <LeftSideBarIcon>
              <Link href="/books">
                <div>
                  <BooksIcon />
                </div>
              </Link>
            </LeftSideBarIcon>
            <Link href="/books">
              <LeftSideBarListItemText>Books</LeftSideBarListItemText>
            </Link>
          </LeftSideBarListItem>

          <LeftSideBarListItem
            className={router.pathname == "/messages" ? "active" : ""}
          >
            <LeftSideBarIcon>
              {/* <IconBadge></IconBadge> */}
              <Link href="/messages">
                <div>
                  <ChatIcon />
                </div>
              </Link>
            </LeftSideBarIcon>
            <Link href="/messages">
              <LeftSideBarListItemText>Chat</LeftSideBarListItemText>
            </Link>
          </LeftSideBarListItem>
          <LeftSideBarListItem
            className={router.pathname == "/forum" ? "active" : ""}
          >
            <LeftSideBarIcon>
              <Link href="/forum">
                <div>
                  <MdForum />
                </div>
              </Link>
            </LeftSideBarIcon>
            <Link href="/forum">
              <LeftSideBarListItemText>Forum</LeftSideBarListItemText>
            </Link>
          </LeftSideBarListItem>
          <LeftSideBarListItem
            className={router.pathname == "/notifications" ? "active" : ""}
          >
            <LeftSideBarIcon>
              {/* <IconBadge>2</IconBadge> */}
              <Link href="/notifications">
                <div>
                  <RiNotification2Fill />
                </div>
              </Link>
            </LeftSideBarIcon>
            <Link href="/notifications">
              <LeftSideBarListItemText>Notifications</LeftSideBarListItemText>
            </Link>
          </LeftSideBarListItem>
          <LeftSideBarListItem
            className={router.pathname == "/support" ? "active" : ""}
          >
            <LeftSideBarIcon>
              <Link href="/support">
                <div>
                  <FaRegQuestionCircle />
                </div>
              </Link>
            </LeftSideBarIcon>
            <Link href="/support">
              <LeftSideBarListItemText>Support</LeftSideBarListItemText>
            </Link>
          </LeftSideBarListItem>
        </LeftSideBarWrapper>
      </LeftSideContainer>
    </>
  );
};

export default LeftSideBar;

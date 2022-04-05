import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { useSockets } from "context/socket.context";

// styled components
import {
  TopbarContainer,
  TopLeftWrap,
  TopBarLogoGroup,
  TopCenterWrap,
  SearchBar,
  SearchInput,
  TopRightWrap,
  TopSearchButton,
  Icons,
  ProfileImg,
  ProfileSetting,
  ProfileDropdown,
  ProfileItem,
} from "./topbar.styles";

import { Logo } from "../../../../public/assets/images/Logo";
import { TopSearchIcon } from "../../../../public/assets/icons/TopSearchIcon";

import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

import { BackOverlay } from '../LeftSideBar/leftside.styles';
import AlarmBell from './AlarmBell';
import ChatIcon from './ChatIcon';

const Topbar = () => {
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState(false);
  const { user: user } = useAppSelector(isUser);
  const { socket } = useSockets();

  
  const me = user;
  
  // console.log(me);
  // useEffect(() => {
  //   socket.emit(
  //     "connected",
  //     { id: me?.id, sessionID: me?.username },
  //     (error: any, d: any) => {
  //       socket.auth = { id: me?.id, sessionID: me?.username,};
  //       socket.id = me?.id as string
  //       // console.log("why am i printing on the server", d);
  //       if (error) {
  //         console.log(" Something went wrong please try again later.", error);
  //       }
  //     }
  //   );
  // }, [me])

  const handleLogOut = async () => {
    try {
      const res = await axios.post("/api/auth/logout");
      console.log(res);
      if (res.status === 200 || res?.data?.message) {
        router.push("/auth/signin");
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    socket.emit(
      "load unread messages",
      { id: me?.id },
      (error: any, d: any) => {
        if (error) {
          console.log(" Something went wrong please try again later.", error);
        }
      }
    );
  }, [])

  

  const onSearch = (event: any) => {
    setSearch(event.target.value);
    if (event.keyCode === 13) {
      setToggle(false);
      router.push(`/search-results/${search}`);
      
    }
  };
  const onSetToggle = () => {
    if (window.screen.width <= 991 && !toggle) return setToggle(true);
    setToggle(false);
    router.push(`/search-results/${search}`);
    // console.log(search);
  };
  {
    toggle && <BackOverlay onClick={() => setToggle(false)} className="" />;
  }

  return (
    <TopbarContainer>
      <TopLeftWrap>
        <TopBarLogoGroup>
          <Link href={`/user-profile/`}>
            <div>
              <Logo color="white" width="50" height="50" />
            </div>
          </Link>
        </TopBarLogoGroup>
      </TopLeftWrap>

      <TopCenterWrap>
        <SearchBar className={toggle ? "opened" : ""}>
          <TopSearchButton onClick={() => onSetToggle()}>
            <TopSearchIcon />
          </TopSearchButton>
          <SearchInput
            placeholder="Search for courses, posts or users then hit enter"
            onKeyUp={(event) => onSearch(event)}
          />
        </SearchBar>
        {toggle && (
          <BackOverlay
            onClick={() => setToggle(false)}
            className="searchOverlay"
          />
        )}
      </TopCenterWrap>
      <TopRightWrap>
        <Icons>
          <ChatIcon id={me?.id as string} />
          <AlarmBell id={me?.id as string} />
        </Icons>
        <ProfileSetting>
          <ProfileImg
            onClick={() => setDropdown(!dropdown)}
            alt="user profile image"
            src={me?.img}
          />
          <ProfileDropdown
            className={`${dropdown ? "opened" : ""}`}
            onClick={() => setDropdown(!dropdown)}
          >
            {/* <ProfileItem>
              <Link href={`/user-profile/${me?.slug}`}>Setting</Link>
            </ProfileItem> */}
            <ProfileItem>
              <Link href={`/user-profile/${me?.slug}`}>Profile</Link>
            </ProfileItem>
            <ProfileItem>
              <Link href={`/user-profile/${me?.slug}/edit-profile`}>
                Edit Profile
              </Link>
            </ProfileItem>
            <ProfileItem>
              <Link href="/privacy">Privacy settings</Link>
            </ProfileItem>
            <ProfileItem>
              <Link href="/terms">Terms</Link>
            </ProfileItem>
            <ProfileItem>
              <a onClick={handleLogOut}>Logout</a>
            </ProfileItem>
          </ProfileDropdown>
        </ProfileSetting>
      </TopRightWrap>
    </TopbarContainer>
  );
};

export default Topbar;

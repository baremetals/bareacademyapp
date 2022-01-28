import styled from "styled-components";

import { HiSearch } from "react-icons/hi";

export const TopbarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const TopLeftWrap = styled.div`
  margin-right: 1rem;
  margin-left: 3rem;
  @media (min-width: 992px) {
    display: none;
  }
`;

export const TopBarLogo = styled.div`
  padding: 2.5rem;
  svg {
    display: block;
    width: 5rem;
    height: 5rem;
    margin-left: -1.5rem;
    margin-bottom: -1rem;
  }
`;

export const TopBarLogoGroup = styled.div`
  svg {
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    margin: -0.625rem;
    rect {
      display: none;
    }
    path {
      fill: #7755e2;
    }
  }
`;

export const TopCenterWrap = styled.div`
  flex: auto;
  .searchOverlay {
    @media (min-width: 992px) {
      display: none;
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  position: relative;
  @media (max-width: 991px) {
    &.opened {
      position: absolute;
      top: 1.125rem;
      left: 1.5rem;
      right: 1.5rem;
      z-index: 1000;
      input {
        display: block;
      }

      span {
        svg {
          background-color: #7755e2;
          fill: #fff;
          order: 2;
          padding: 0.875rem;
          border-radius: 1rem;
          margin: 0.25rem;
          height: 3.25rem;
          width: 3.25rem;
          position: absolute;
          top: 0;
          right: 0;
        }
      }
    }
  }
`;

export const TopSearchButton = styled.span`
  margin-left: auto;
  svg {
    cursor: pointer;
    height: 1.375rem;
    width: 1.375rem;
    display: block;
    @media (min-width: 992px) {
      background-color: #7755e2;
      fill: #fff;
      order: 2;
      padding: 0.875rem;
      border-radius: 1rem;
      margin: 0.25rem;
      height: 3.25rem;
      width: 3.25rem;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

export const TopSearchIcon = styled.svg``;

export const SearchIcon = styled(HiSearch)`
  cursor: pointer;
  margin-left: auto;
  @media (min-width: 992px) {
    background-color: #7755e2;
    fill: #fff;
    order: 2;
    padding: 0.75rem;
    border-radius: 1rem;
    margin: 0.25rem;
    height: 3.25rem;
    width: 3.25rem;
    position: absolute;
    top: 0;
    right: 0;
  }
  @media (max-width: 991px) {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export const SearchInput = styled.input`
  background-color: #fff;
  box-shadow: 0px 2px 80px rgba(66, 66, 66, 0.08);
  border-radius: 0.625rem;
  border: none;
  width: 100%;
  height: 3.75rem;
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  &:focus {
    outline: none;
  }
  @media (max-width: 991px) {
    display: none;
  }
`;

export const TopRightWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const TopBarNavLinks = styled.div`
  margin-right: 2rem;
  font-size: 1rem;
  cursor: pointer;
  color: red;
`;

export const NavLinks = styled.span`
  margin-left: 2rem;
  font-size: 1rem;
  cursor: pointer;
  @media (max-width: 991px) {
    margin-left: 1.5rem;
  }
`;

export const Icons = styled.div`
  display: flex;
  svg {
    display: block;
    @media (max-width: 991px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const IconItem = styled.div`
  margin-left: 2rem;
  cursor: pointer;
  position: relative;
  font-size: 1.5rem;
  &:nth-child(1) {
    span {
      background-color: #16addd;
    }
  }
  @media (max-width: 991px) {
    margin-left: 1.5rem;
  }
`;

export const IconBadge = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  background-color: #f511a9;
  border-radius: 50%;
  color: white;
  position: absolute;
  top: -0.625rem;
  right: -0.625rem;
  text-align: center;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.6;
  @media (max-width: 991px) {
    right: -0.25rem;
    width: 1rem;
    height: 1rem;
    font-size: 0.625rem;
  }
`;

export const ProfileImg = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 4rem;
  border: 1px solid #cacaca;
  object-fit: cover;
  cursor: pointer;
  display: block;
  overflow: hidden;
  @media (max-width: 991px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const ProfileSetting = styled.div`
  position: relative;
  margin-left: 2rem;
  @media (max-width: 991px) {
    margin-left: 1rem;
  }
`;

export const ProfileDropdown = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  width: 12rem;
  right: 0;
  background-color: #fff;
  padding: 0.5rem 0;
  list-style: none;
  margin-top: 1.5rem;
  box-shadow: 0px 2px 80px rgb(66 66 66 / 8%);
  border-radius: 0.625rem;
  z-index: 10;
  &.opened {
    display: block;
  }
  @media (max-width: 991px) {
    width: 10rem;
    margin-top: 0.75rem;
  }
`;

export const ProfileItem = styled.li`
  a {
    text-decoration: none;
    font-size: 1.125rem;
    color: #000;
    font-weight: 500;
    display: block;
    padding: 0.625rem 1.5rem;
    &:hover {
      background-color: rgb(237 237 237 / 50%);
    }
    @media (max-width: 991px) {
      font-size: 0.875rem;
      padding: 0.5rem 1.25rem;
    }
  }
`;
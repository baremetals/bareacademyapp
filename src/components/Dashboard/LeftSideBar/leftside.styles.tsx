import styled from "styled-components";

export const LeftSideContainer = styled.div`
  max-width: 17.5rem;
  min-width: 17.5rem;
  min-height: 100vh;
  position: sticky;
  top: 0;
  transition: transform 0.2s ease-in-out;
  z-index: 9999;
  background-color: #fff;
  overflow-y: auto;
  max-height: 100vh;

  @media (max-width: 991px) {
    transform: translateX(-100%);
    background-color: #ededed;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
  }
  &.open {
    transform: none;
  }
`;

export const LeftSideBarWrapper = styled.div`
  padding: 0;
`;

export const BackOverlay = styled.div`
  background-color: rgb(0 0 0 / 30%);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
`;

export const SearchButton = styled.button`
  width: 4rem;
  background-color: #fff;
  border: none;
  z-index: 100;
  height: 3.5rem;
  position: absolute;
  cursor: pointer;
  @media (min-width: 992px) {
    display: none;
  }
  svg {
    margin: 0;
    float: left;
    margin-left: 1.5rem;
  }
`;

export const ToggleButton = styled.button`
  width: 2.25rem;
  background-color: transparent;
  border: none;
  vertical-align: top;
  position: absolute;
  padding: 0.25rem;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 0;
  @media (min-width: 992px) {
    display: none;
  }
  span {
    height: 4px;
    display: block;
    background-color: #7755e2;
    margin: 0.375rem 0;
  }
`;

export const LeftSideBarList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const LeftSideBarListItem = styled.a`
  display: flex;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  padding: 1.125rem 1.75rem;
  font-weight: 500;
  color: #a2a2c2;
  border-left: 5px solid transparent;
  text-decoration: none;
  margin-top: 0.75rem;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: #a2a2c2;
    display: block;
    &.stroke {
      fill: none;
      stroke: #a2a2c2;
    }
  }
  &.active {
    color: #7755e2;
    background-color: rgba(119, 85, 226, 0.1);
    border-left-color: #7755e2;
    svg {
      fill: #7755e2;
      &.stroke {
        fill: none;
        stroke: #7755e2;
      }
    }
  }
  &:hover {
    color: #7755e2;
    border-left-color: #7755e2;
    svg {
      fill: #7755e2;
      &.stroke {
        fill: none;
        stroke: #7755e2;
      }
    }
  }
`;

export const LeftSideBarIcon = styled.div`
  margin-right: 1.25rem;
  display: flex;
  position: relative;
`;


export const LeftSideBarListItemText = styled.span``;

export const IconBadge = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 10rem;
  background-color: #7755e2;
  color: white;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  z-index: 1;
`;

export const Icons = styled.div`
  display: flex;
`;

export const IconItem = styled.div`
  margin-right: 1rem;
  cursor: pointer;
  position: relative;
  font-size: 1.25rem;
  svg {
  }
`;

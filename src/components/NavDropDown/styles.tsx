import styled from "styled-components";
import { FaTimes } from "react-icons/fa"
import {Link} from "react-scroll"

export const DropDownContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  top: ${({ isOpen }: any) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }: any) => (isOpen ? "100%" : "0")};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

    
export const DropDownWrapper = styled.div`
    color: #fff;
`;

export const DropDownMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px)
    }
`;

export const DropDownLinks = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #7755e2;
    transition: 0.2s ease-in-out;
  }
`;

export const DropDownBtnWrapper = styled.div`
    display: flex;
    justify-content: center; 
`;
export const DropDownBtn = styled.button`
  border-radius: 50px;
  background-color: #7755e2;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;